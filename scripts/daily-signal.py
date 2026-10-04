#!/usr/bin/env python3
"""Deterministic End of Abyss monitor. Missing evidence is never zero demand."""
import sys,json,datetime,hashlib,re,urllib.request,urllib.parse,subprocess,os,xml.etree.ElementTree as ET
from pathlib import Path
sys.dont_write_bytecode=True
SITE=Path(__file__).resolve().parents[1];KIT=SITE.parents[1]/'template/gamesite-kit/py';sys.path.insert(0,str(KIT))
from _gapi import call
from bs4 import BeautifulSoup
policy=json.loads((SITE/'data/watch-policy.json').read_text());today=datetime.date.today();age=(today-datetime.date.fromisoformat(policy['launched'])).days
state_file=SITE/'data/watch-state.json';old=json.loads(state_file.read_text()) if state_file.exists() else {}
r={'date':str(today),'site':'endofabyssguide','ageDays':age,'signals':[],'gaps':[],'implementationDefaults':policy['valueFilter'],'platform':'epic','steamHistory':'not-applicable: no Steam appid'}
clean=subprocess.run(['node','scripts/check-clean-tree.mjs'],cwd=SITE,capture_output=True,text=True)
r['clean']=clean.returncode==0
if not r['clean']:r['gaps'].append({'collector':'clean-tree','detail':(clean.stdout+clean.stderr)[-1600:]})
if '--ack' in sys.argv:
 if not r['clean']:print('Refusing acknowledgement with dirty source');sys.exit(1)
 if '--reason' not in sys.argv:print('Use --ack --reason <resolved evidence or published version>');sys.exit(2)
 reason=sys.argv[sys.argv.index('--reason')+1]
 old['pendingSignals']=[];old['lastAcknowledgement']={'date':str(today),'reason':reason}
 state_file.write_text(json.dumps(old,indent=2)+'\n');print('Acknowledged previously handled content signals');sys.exit(0)
url='https://www.section9interactive.com/news'
try:
 opener=urllib.request.build_opener(urllib.request.ProxyHandler({'https':'http://127.0.0.1:7899'}))
 response=opener.open(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=35)
 if response.status!=200:raise ValueError('official HTTP '+str(response.status))
 soup=BeautifulSoup(response.read(),'html.parser')
 for x in soup(['script','style','noscript']):x.decompose()
 text=re.sub(r'\s+',' ',soup.get_text(' ',strip=True)).strip()
 if len(text)<180 or 'End of Abyss' not in text or 'Patch Notes' not in text:raise ValueError('official body missing expected title/content')
 digest=hashlib.sha256(text.encode()).hexdigest();r['official']={'url':url,'sha256':digest,'chars':len(text)}
 if old.get('officialHash') and old['officialHash']!=digest:r['signals'].append({'type':'official-news-change','url':url})
 r['officialInitialBaseline']=not old.get('officialHash')
 (SITE/'_review').mkdir(exist_ok=True);(SITE/'_review/official-news-latest.txt').write_text(text)
except Exception as e:r['gaps'].append({'collector':'official-news','detail':str(e)})
query={'startDate':str(today-datetime.timedelta(days=6)),'endDate':str(today),'dimensions':['query','page'],'dataState':'all','rowLimit':25000}
code,data=call('POST','https://searchconsole.googleapis.com/webmasters/v3/sites/'+urllib.parse.quote(policy['gsc'],safe='')+'/searchAnalytics/query','https://www.googleapis.com/auth/webmasters.readonly',query)
valid=code==200 and isinstance(data,dict)
if not valid:r['gaps'].append({'collector':'gsc','detail':'HTTP '+str(code)})
else:
 rows=data.get('rows',[]);r['gsc']={'dataState':'all','rows':len(rows),'impressions7d':sum(x.get('impressions',0) for x in rows),'clicks7d':sum(x.get('clicks',0) for x in rows),'status':'data' if rows else 'new-site-no-impressions-yet' if age<=3 else 'zero-rows-data-gap'}
 if not rows and age>3:r['gaps'].append({'collector':'gsc','detail':'zero rows after initial new-site window; not zero demand'})
 hits=[x for x in rows if x.get('impressions',0)>=25];r['qualifiedQueries']=hits
 now_key=hashlib.sha256(json.dumps(sorted([x.get('keys',[]) for x in hits]),sort_keys=True).encode()).hexdigest()
 if hits and now_key!=old.get('qualifiedHash'):r['signals'].append({'type':'qualified-gsc-query','count':len(hits)})
ads_source=(SITE/'data/ads.ts').read_text();live=bool(re.search(r"['\"]([0-9a-f]{32})['\"]",ads_source));r['adsLive']=live
low=valid and bool(data.get('rows')) and r['gsc']['impressions7d']<policy['valueFilter']['retainImpressions7d'] and r['gsc']['clicks7d']<policy['valueFilter']['retainClicks7d']
low_ticks=(old.get('lowValueTicks',0)+1) if low and old.get('lastTick')!=str(today) else old.get('lowValueTicks',0) if low else 0
active=age<=policy['valueFilter']['recentDays'] or not live or not low or low_ticks<policy['valueFilter']['lowValueConsecutiveTicks']
r['contentEnabled']=active and r['clean'] and not any(x['collector']=='gsc' for x in r['gaps']);r['valueState']='active' if active else 'dormant';r['lowValueTicks']=low_ticks
if age>=policy['adDecisionDay'] and not live:r['signals'].append({'type':'ad-decision-due','judgeDate':str(datetime.date.fromisoformat(policy['launched'])+datetime.timedelta(days=policy['adDecisionDay'])),'latestInstallDate':str(datetime.date.fromisoformat(policy['launched'])+datetime.timedelta(days=policy['adLatestDay']))})
if age>=2 and not old.get('correction48hDone'):r['signals'].append({'type':'48h-gsc-correction-due'})
# Only item-ID changes open a community review; a fetch gap is not zero interest.
community_ids=[]
try:
 result=subprocess.run(['opencli','reddit','search','"End of Abyss"','--sort','new','--time','week','--limit','20','-f','json'],capture_output=True,text=True,timeout=45)
 if result.returncode:raise ValueError((result.stderr or result.stdout)[-400:])
 payload=json.loads(result.stdout)
 items=payload if isinstance(payload,list) else payload.get('data',payload.get('items',[]))
 if not isinstance(items,list):raise ValueError('Reddit item schema not recognized')
 for item in items:
  link=item.get('url',item.get('permalink',''))
  if '/comments/' in link and 'end of abyss' in item.get('title','').lower():community_ids.append('reddit:'+link)
 r['communityReddit']={'matchedPosts':len(community_ids),'status':'collected'}
except Exception as e:r['gaps'].append({'collector':'reddit','detail':str(e)})
try:
 proc=subprocess.run(['curl','-fsSL','-m','25','-x','http://127.0.0.1:7921','https://www.youtube.com/feeds/videos.xml?channel_id=UCT16M1NqxN-OPc3E1rP8cmQ'],capture_output=True,text=True,timeout=30)
 if proc.returncode:raise ValueError('YouTube feed fetch failed: '+proc.stderr[-200:])
 root=ET.fromstring(proc.stdout);ns={'a':'http://www.w3.org/2005/Atom','yt':'http://www.youtube.com/xml/schemas/2015'}
 ids=[x.findtext('yt:videoId',namespaces=ns) for x in root.findall('a:entry',ns)]
 if not ids:raise ValueError('YouTube feed missing video entries')
 community_ids+=['youtube:'+x for x in ids if x];r['communityYouTube']={'officialVideoIds':ids,'status':'collected; comments examined only for new videos'}
except Exception as e:r['gaps'].append({'collector':'youtube','detail':str(e)})
if old.get('communityBaseline'):
 fresh=sorted(set(community_ids)-set(old.get('communityIds',[])))
 if fresh:r['signals'].append({'type':'community-items-new','ids':fresh,'instruction':'Read exact-game items and comments; require independent corroboration before content changes.'})
r['communityInitialBaseline']=not old.get('communityBaseline')
r['maintenanceDue']=[x for x in r['signals'] if x['type'] in ['ad-decision-due','48h-gsc-correction-due']]
# Retain unacknowledged content leads even when source is dirty or a collector is blocked.
pending={json.dumps(x,sort_keys=True):x for x in old.get('pendingSignals',[])}
for x in r['signals']:
 if x['type'] not in ['ad-decision-due','48h-gsc-correction-due']:pending[json.dumps(x,sort_keys=True)]=x
r['pendingContentSignals']=list(pending.values())
r['needsContentWorker']=r['contentEnabled'] and bool(pending)
(SITE/'data/daily-signal.json').write_text(json.dumps(r,indent=2)+'\n')
new={**old,'lastTick':str(today),'lowValueTicks':low_ticks,'pendingSignals':list(pending.values())}
if r.get('official'):new['officialHash']=r['official']['sha256']
if valid:new['qualifiedHash']=now_key
if community_ids:new['communityIds']=sorted(set(old.get('communityIds',[]))|set(community_ids));new['communityBaseline']=True
state_file.write_text(json.dumps(new,indent=2)+'\n')
print(json.dumps(r,indent=2))
sys.exit(1 if not valid or not r.get('official') else 0)

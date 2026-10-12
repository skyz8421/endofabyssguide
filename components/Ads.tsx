'use client';
import {useEffect,useRef,useState,useSyncExternalStore} from 'react';
import {usePathname} from 'next/navigation';
import {AD_FRAME_ORIGIN,AD_CONSENT_KEY,AD_ROUTES,AD_UNITS,type DisplayUnit} from '@/data/ads';
function subscribe(cb:()=>void){window.addEventListener('storage',cb);window.addEventListener('eoa-consent-changed',cb);window.addEventListener('resize',cb);return ()=>{window.removeEventListener('storage',cb);window.removeEventListener('eoa-consent-changed',cb);window.removeEventListener('resize',cb)}}
function snapshot(){let granted=false;try{granted=localStorage.getItem(AD_CONSENT_KEY)==='granted'}catch{}return `${granted}:${innerWidth}:${innerHeight}`}
function useAds(){const path=usePathname();const state=useSyncExternalStore(subscribe,snapshot,()=> 'false:0:0');const [permission,w,h]=state.split(':');const route=path==='/'?'/':path.replace(/\/+$/,'')+'/';return {allowed:permission==='true'&&AD_ROUTES.includes(route),width:Number(w),height:Number(h),route}}
function AdFrame({unit,anchor=false}:{unit:DisplayUnit;anchor?:boolean}){const {allowed,route}=useAds();const config=AD_UNITS[unit];const frame=useRef<HTMLIFrameElement>(null);const [nativeHeight,setNativeHeight]=useState(480);const native=unit==='native';
 useEffect(()=>{if(!native||!allowed)return;const receive=(e:MessageEvent)=>{if(e.origin!==(['localhost','127.0.0.1','10.0.2.2'].includes(location.hostname)?location.origin:AD_FRAME_ORIGIN)||e.source!==frame.current?.contentWindow)return;const d=e.data;if(d?.type!=='eoa-native-height'||d.key!==config.key||!Number.isFinite(d.height)||d.height<=0||d.height>1200)return;setNativeHeight(Math.ceil(d.height))};window.addEventListener('message',receive);return ()=>window.removeEventListener('message',receive)},[native,allowed,config.key,route]);
 if(!allowed||!/^[0-9a-f]{32}$/.test(config.key))return null;
 return <aside className={`advert ad-${unit}${anchor?' ad-anchor':''}`} aria-label="Advertisement" data-ad-unit={unit}><span>Advertisement</span><iframe key={unit+route} ref={frame} title="Advertisement" src={`${['localhost','127.0.0.1','10.0.2.2'].includes(location.hostname)?'':AD_FRAME_ORIGIN}/ads/${config.document}.html?key=${config.key}`} width={native?'100%':config.width} height={native?nativeHeight:config.height} loading={anchor?'eager':'lazy'} scrolling="no" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox" style={{width:native?'100%':config.width,height:native?nativeHeight:config.height}}/></aside>
}
// Each size/key is mounted once; compact desktop uses 468 as its lead slot.
export function AdBanner(){const {width}=useAds();return width>=1000?<AdFrame unit="leaderboard"/>:width>=768?<AdFrame unit="inline"/>:<AdFrame unit="rectangle"/>}
export function AdMid(){const {width}=useAds();return width>=1000?<AdFrame unit="inline"/>:null}
export function AdRail(){const {width,height}=useAds();return width>=1900?<div className="ad-rail"><AdFrame unit={height>=760?'railTall':'railCompact'}/></div>:null}
export function AdNative(){const {route,width}=useAds();return route==='/'||width<768?null:<div className="ad-native-wrap"><AdFrame unit="native"/></div>}
export function AdSupport(){const {allowed,width}=useAds();useEffect(()=>{document.body.classList.toggle('has-mobile-ad',allowed&&width>=320&&width<768);return ()=>document.body.classList.remove('has-mobile-ad')},[allowed,width]);return <>{width>=320&&width<768&&<AdFrame unit="mobile" anchor/>}<AdRail/></>}

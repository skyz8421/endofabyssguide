'use client';
import {usePathname} from 'next/navigation';import {AD_KEYS,AD_ROUTES} from '@/data/ads';
export function AdBanner(){const path=usePathname();const key=AD_KEYS['300x250'];let consent=false;try{consent=typeof window!=='undefined'&&localStorage.getItem('eoa-consent')==='granted'}catch{}if(!key||!consent||!AD_ROUTES.includes(path.endsWith('/')?path:path+'/'))return null;return <aside className="advert"><span>Advertisement</span><iframe title="Advertisement" src="/ads/300x250.html" width="300" height="250" sandbox="allow-scripts allow-same-origin" loading="lazy"/></aside>}

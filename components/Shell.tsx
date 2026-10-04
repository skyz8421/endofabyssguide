'use client';
import {useState,useEffect,useRef,useSyncExternalStore} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const nav = [
  // Cel's handheld Scanner: its display and power-trace lead introduce door checks.
  {label:'Guides',icon:'M7 5h9l3 3v11H5V8l2-3Z M8 8h7v5H8Z M8 16h1 M12 16h1 M16 16h1 M15 5V2l4 1',links:[
    ['Energy node doors','/energy-node-door-not-opening/'],['Scanner & requirements','/scanner/'],['Save pods & death','/save-pods-and-death/'],['Map & backtracking','/map-and-backtracking/'],['Achievements','/achievements/'],['Patch changes','/updates/'],
  ]},
  // Pulse Gun silhouette: an energy chamber and short muzzle, the starting weapon.
  {label:'Weapons',icon:'M3 8h9l2-2h5v3h3v3h-5l-3 3H9l-2 6H4l2-7H3Z M7 8v4 M11 8v4 M17 9v3',links:[
    ['All six weapon locations','/weapons/'],['Search by weapon or sector','/weapons/#lookup-title'],['Access requirements','/weapons/#access'],
  ]},
  // A floor-specific return log: the route connects two marks beside the written note.
  {label:'Return notes',icon:'M5 3h14v18H5Z M8 6h4 M8 9h3 M8 15h3v3h5 M14 6h2v6h-2Z M7 18h2 M15 17h2v2h-2Z',links:[
    ['Your return notebook','/route-notes/'],['Add a return note','/route-notes/#notes-title'],['Your completion checklist','/achievements/#check-title'],
  ]},
  // Facility shuttle terminal: a supported device is the entry into this world.
  {label:'Platforms',icon:'M5 4h14v11H5Z M8 7h8v5H8Z M9 15v5 M15 15v5 M6 20h12 M10 10h4',links:[
    ['PC, PS5 & Xbox','/platforms/'],['Steam availability','/steam/'],['PC system requirements','/pc-requirements/'],
  ]},
];
const themeSnapshot=()=>document.documentElement.dataset.theme==='light'?'light':'dark';
const serverTheme=()=> 'dark';
function subscribeTheme(callback:()=>void){
  const system=window.matchMedia('(prefers-color-scheme: light)');
  const applySystem=()=>{if(document.documentElement.dataset.themeChoice!=='manual'){document.documentElement.dataset.theme=system.matches?'light':'dark';callback()}};
  const sync=(event:StorageEvent)=>{
    if(event.key!=='eoa-theme'&&event.key!==null)return;
    const selected=event.key==='eoa-theme'?event.newValue:null;
    document.documentElement.dataset.themeChoice=selected==='light'||selected==='dark'?'manual':'system';
    document.documentElement.dataset.theme=selected==='light'||selected==='dark'?selected:(system.matches?'light':'dark');callback();
  };
  window.addEventListener('storage',sync);window.addEventListener('eoa-theme-changed',callback);system.addEventListener('change',applySystem);
  return ()=>{window.removeEventListener('storage',sync);window.removeEventListener('eoa-theme-changed',callback);system.removeEventListener('change',applySystem)};
}
function ThemeToggle(){
  const theme=useSyncExternalStore(subscribeTheme,themeSnapshot,serverTheme);
  const toggle=()=>{const next=theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;document.documentElement.dataset.themeChoice='manual';try{localStorage.setItem('eoa-theme',next)}catch{}window.dispatchEvent(new Event('eoa-theme-changed'))};
  const label=theme==='dark'?'Switch to light theme':'Switch to dark theme';
  return <button className="theme-toggle" aria-label={label} title={label} onClick={toggle}>
    <svg className="theme-sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5"/></svg>
    <svg className="theme-moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.5 14.1A8.7 8.7 0 0 1 9.9 3.5 8.8 8.8 0 1 0 20.5 14.1Z"/></svg>
  </button>;
}
function closeDropdowns(root:HTMLElement|null){root?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown[open]').forEach(details=>details.removeAttribute('open'))}
export function Header(){
  const currentPath=usePathname();const pathname=currentPath==='/'?'/':currentPath.replace(/\/$/,'')+'/'
  const [open,setOpen]=useState(false);const root=useRef<HTMLElement>(null);const menuButton=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const escape=(event:KeyboardEvent)=>{if(event.key!=='Escape')return;const expanded=root.current?.querySelector<HTMLDetailsElement>('.nav-dropdown[open]');if(expanded){expanded.querySelector<HTMLElement>('summary')?.focus();closeDropdowns(root.current)}else if(open){setOpen(false);menuButton.current?.focus()}};
    const outside=(event:PointerEvent)=>{const target=event.target;if(!(target instanceof Node))return;if(!root.current?.contains(target)){closeDropdowns(root.current);setOpen(false)}else if(target instanceof Element&&!target.closest('.nav-dropdown'))closeDropdowns(root.current)};
    document.addEventListener('keydown',escape);document.addEventListener('pointerdown',outside);
    return ()=>{document.removeEventListener('keydown',escape);document.removeEventListener('pointerdown',outside)};
  },[open]);
  const close=()=>{closeDropdowns(root.current);setOpen(false)};
  return <header className="site-header" ref={root}>
    <Link className="brand" href="/" aria-label="End of Abyss guide home" onClick={close}>End of Abyss</Link>
    <button className="menu-button" ref={menuButton} aria-label={open?'Close menu':'Menu'} aria-expanded={open} aria-controls="main-nav" onClick={()=>{if(open)closeDropdowns(root.current);setOpen(!open)}}>{open?'Close':'Menu'}</button>
    <nav id="main-nav" aria-label="Main navigation" className={open?'open':''}>
      {nav.map(item=><details className="nav-dropdown" data-current={item.links.some(([,href])=>!href.includes('#')&&href===pathname)} key={item.label} onToggle={event=>{if(event.currentTarget.open)root.current?.querySelectorAll<HTMLDetailsElement>('.nav-dropdown').forEach(other=>{if(other!==event.currentTarget)other.removeAttribute('open')})}}>
        <summary><span data-nav-item={item.label}><svg data-nav-icon={item.label} aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={item.icon}/></svg>{item.label}</span><svg className="nav-chevron" aria-hidden="true" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m4 6 4 4 4-4"/></svg></summary>
        <div className="nav-panel">{item.links.map(([label,href])=><Link key={href} href={href} aria-current={!href.includes('#')&&href===pathname?'page':undefined} onClick={close}>{label}</Link>)}</div>
      </details>)}
    </nav>
    <ThemeToggle/>
  </header>;
}
export function Footer(){return <footer><p>Independent fan guide. End of Abyss belongs to Section 9 Interactive and Epic Games Publishing.</p><nav aria-label="Site information">{['about','sources','contact','privacy','terms','updates'].map(x=><Link key={x} href={'/'+x+'/'}>{x[0].toUpperCase()+x.slice(1)}</Link>)}<button className="quiet" onClick={()=>window.dispatchEvent(new Event('eoa-open-consent'))}>Privacy choices</button></nav></footer>}

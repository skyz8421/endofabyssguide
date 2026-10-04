import Image from 'next/image';
import Link from 'next/link';
import {metadata} from '@/lib/site';
import {DoorHelper} from '@/components/Tools';
import {Video} from '@/components/Video';
import {AdBanner} from '@/components/Ads';

export const generateMetadata=()=>metadata('End of Abyss Guide: doors, weapons and return routes','Get past energy doors, understand the Scanner and death costs, find all six weapons and keep your own return notes and completion checklist.');

const routes = [
  {slug:'energy-node-door-not-opening',title:'Energy node door will not open',description:'Died between destroying nodes? Check the fix before deleting your save.'},
  {slug:'scanner',title:'Scanner and door requirements',description:'Read the door. Trace its power connection. Find the missing requirement.'},
  {slug:'weapons',title:'Find a missing weapon',description:'All six guns, with sector, floor and the named access tools.'},
  {slug:'save-pods-and-death',title:'Save pods, death and supplies',description:'What revival restores, and which supplies you still need to replace.'},
  {slug:'map-and-backtracking',title:'Map and backtracking',description:'Choose a return route you can finish with the equipment you own.'},
  {slug:'achievements',title:'Completion checklist',description:'Track Logbook, room, shuttle and equipment goals on this device.'},
];

function Arrow(){return <svg aria-hidden="true" viewBox="0 0 32 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12h25M19 4l8 8-8 8"/></svg>}

export default function Home(){return <main className="home">
  <section className="home-hero" aria-labelledby="home-title">
    <picture className="facility-picture"><source srcSet="/art/facility-combat.webp" type="image/webp"/><Image className="facility-scene" src="/assets/plates/scene.png" alt="An armed explorer facing a creature inside the facility" width={3840} height={2160} loading="eager" fetchPriority="high" sizes="100vw"/></picture>
    <div className="intro">
      <h1 id="home-title">End of Abyss</h1>
      <p className="hero-sub">Doors, weapons and return routes.</p>
    </div>
  </section>
  <section className="guide-index" aria-labelledby="guide-title">
    <h2 id="guide-title" className="sr-only">Choose an End of Abyss guide</h2>
    <div className="guide-rows">{routes.map((route,index)=><Link className="guide-entry" href={'/'+route.slug+'/'} key={route.slug}>
      <h3 className="guide-name">{route.title}</h3>
      <span className="guide-description">{route.description}</span>
      <span className="guide-arrow"><Arrow/></span>
      {index===0&&<picture className="preview-picture"><source srcSet="/art/facility-bridge.webp" type="image/webp"/><Image className="guide-preview" src="/assets/plates/preview.png" alt="Explorers crossing a suspended bridge in the blue-lit facility" width={3840} height={2160} sizes="(max-width: 1000px) 1px, 25vw"/></picture>}
    </Link>)}</div>
  </section>
  <div className="home-reading-field">
    <DoorHelper/>
    <section className="notes-promo" aria-labelledby="return-title">
      <svg className="notebook-icon" aria-hidden="true" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7c8-2 14-1 20 3 6-4 12-5 20-3v32c-8-2-14-1-20 3-6-4-12-5-20-3Z M24 10v32 M8 10v25 M40 10v25"/></svg>
      <div><h2 id="return-title">Return notebook</h2>
      <p>Save the room, the scan requirement and your next objective in your return notebook. Your entries stay on this device.</p>
      <Link className="notebook-action" href="/route-notes/">Open return notebook <Arrow/></Link>
      <p className="notes-help">What were you going to do next?</p></div>
    </section>
  </div>
  <div className="home-afterword">
    <section className="creator-diary" aria-labelledby="diary-title">
      <div><h2 id="diary-title">Inside the facility</h2><p>Meet the creators of End of Abyss.</p><p>Check a blocked path. Find your next weapon. Pick up where you left off.</p></div>
      <Video id="WQ3m9rcsbDk"/>
    </section>
    <section className="platform-strip" aria-labelledby="install-title">
      <h2 id="install-title">Before you install</h2>
      <div>
        <Link href="/platforms/">Compare the confirmed platforms <Arrow/></Link>
        <Link href="/steam/">Check Steam availability <Arrow/></Link>
        <Link href="/pc-requirements/">Windows system requirements <Arrow/></Link>
      </div>
    </section>
    <p className="trust-line">For fixes that affect a blocked route, see <Link href="/updates/">patch changes</Link>. Learn <Link href="/about/">how this independent guide is maintained</Link>.</p>
    <AdBanner/>
  </div>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'End of Abyss Guide',url:'https://endofabyss.quest/'})}}/>
</main>}

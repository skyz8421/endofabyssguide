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

export default function Home(){return <main className="home">
  <section className="home-hero" aria-labelledby="home-title">
    <Image className="facility-scene" src="/art/facility-combat.webp" alt="An armed explorer facing a creature inside the facility" width={1600} height={900} priority sizes="(max-width: 1190px) calc(100vw - 40px), 1120px"/>
    <div className="intro">
      <h1 id="home-title">End of Abyss</h1>
      <p className="hero-sub">Doors, weapons and return routes.</p>
      <p>Check a blocked path. Find your next weapon. Pick up where you left off.</p>
    </div>
  </section>
  <section className="guide-index" aria-labelledby="guide-title">
    <h2 id="guide-title" className="sr-only">Choose an End of Abyss guide</h2>
    <div className="guide-rows">{routes.map((route,index)=><Link className={index<3?'guide-entry main-route':'guide-entry'} href={'/'+route.slug+'/'} key={route.slug}>
      <h3 className="guide-name">{route.title}<span aria-hidden="true">↗</span></h3>
      <span className="guide-description">{route.description}</span>
    </Link>)}</div>
  </section>
  <DoorHelper/>
  <div className="home-field-notes">
    <section className="notes-promo" aria-labelledby="return-title">
      <Image src="/art/facility-bridge.webp" alt="Explorers crossing a suspended bridge in the blue-lit facility" width={1000} height={563} sizes="(max-width: 800px) calc(100vw - 40px), 590px"/>
      <h2 id="return-title">What were you going to do next?</h2>
      <p>Save the room, the scan requirement and your next objective in <Link href="/route-notes/">your return notebook</Link>. Your entries stay on this device.</p>
    </section>
    <section className="creator-diary" aria-labelledby="diary-title">
      <h2 id="diary-title">Inside the facility</h2>
      <p>Meet the creators of End of Abyss.</p>
      <Video id="WQ3m9rcsbDk"/>
      <p className="scene-credit">Facility images: Section9 Interactive.</p>
    </section>
  </div>
  <section className="platform-strip" aria-labelledby="install-title">
    <h2 id="install-title">Before you install</h2>
    <div>
      <Link href="/platforms/">Compare the confirmed platforms <span aria-hidden="true">↗</span></Link>
      <Link href="/steam/">Check Steam availability <span aria-hidden="true">↗</span></Link>
      <Link href="/pc-requirements/">Windows system requirements <span aria-hidden="true">↗</span></Link>
    </div>
  </section>
  <p className="trust-line">For fixes that affect a blocked route, see <Link href="/updates/">patch changes</Link>. Learn <Link href="/about/">how this independent guide is maintained</Link>.</p>
  <AdBanner/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'WebSite',name:'End of Abyss Guide',url:'https://endofabyss.quest/'})}}/>
</main>}

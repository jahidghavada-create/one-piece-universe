import {
  Anchor, ArrowDown, ArrowRight, BookOpen, Compass, Crown, Flame,
  Globe2, Map, Menu, Search, Ship, Skull, Sparkles, Swords, Waves,
} from "lucide-react";

const worlds = [
  { number: "01", title: "East Blue", subtitle: "Where the journey begins", detail: "Small seas. Big dreams. The first steps toward the Grand Line.", icon: Waves, tone: "blue" },
  { number: "02", title: "Grand Line", subtitle: "The pirate graveyard", detail: "Unpredictable routes, strange islands and challenges beyond the ordinary.", icon: Compass, tone: "gold" },
  { number: "03", title: "New World", subtitle: "The emperor's territory", detail: "The second half of the Grand Line, where the greatest powers collide.", icon: Crown, tone: "red" },
];

const features = [
  { title: "Character Codex", desc: "Meet pirates, marines, revolutionaries and the people who shape the seas.", icon: Skull, tag: "PEOPLE" },
  { title: "Crew Directory", desc: "Explore crews, their captains, members, ships and alliances.", icon: Ship, tag: "CREWS" },
  { title: "Devil Fruit Archive", desc: "A growing guide to Paramecia, Zoan and Logia abilities.", icon: Flame, tag: "ABILITIES" },
  { title: "Saga & Arc Library", desc: "Follow the journey through sagas, islands and major story events.", icon: BookOpen, tag: "STORY" },
  { title: "World Atlas", desc: "Discover seas, islands, landmarks and important locations.", icon: Map, tag: "PLACES" },
  { title: "Mystery Vault", desc: "Explore the world's history, legends, unanswered questions and theories.", icon: Sparkles, tag: "LORE" },
];

export default function Home() {
  return (
    <main>
      <div className="topline"><span><span className="pulse" /> FAN-MADE KNOWLEDGE ATLAS</span><span className="topline-right">SET SAIL · EXPLORE · DISCOVER</span></div>
      <header className="nav wrap">
        <a className="brand" href="#"><span className="brand-mark"><Anchor size={21}/></span><span>GRAND LINE <b>ATLAS</b></span></a>
        <nav className="nav-links">
          <a href="#explore">Explore</a><a href="#library">Library</a><a href="#about">About</a>
        </nav>
        <a className="nav-cta" href="#explore">Start exploring <ArrowRight size={15}/></a>
        <button className="mobile-menu" aria-label="Menu"><Menu size={22}/></button>
      </header>

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> THE WORLD OF ONE PIECE, CHARTED</div>
          <h1>THE SEA IS<br/>CALLING<span className="period">.</span></h1>
          <p className="hero-lead">One world. Countless stories. An endless adventure.</p>
          <p className="hero-text">Set course through the seas, discover legendary crews, uncover forgotten history and explore the universe of One Piece — all in one fan-made atlas.</p>
          <div className="hero-actions"><a className="primary-btn" href="#explore"><Compass size={17}/> EXPLORE THE ATLAS <ArrowRight size={16}/></a><a className="text-btn" href="#library">Browse the archives <ArrowDown size={15}/></a></div>
          <div className="hero-note"><span className="note-icon"><Globe2 size={16}/></span><span>YOUR COMPASS TO THE GRAND LINE</span><span className="note-dash"/></div>
        </div>
        <div className="hero-art" aria-label="Decorative ocean map illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="map-ring"><div className="map-cross cross-a"/><div className="map-cross cross-b"/><div className="map-center"><Anchor size={43}/><span>GRAND<br/>LINE</span></div></div>
          <div className="coordinate coord-one">N 32° 04' · E 140° 12'</div>
          <div className="coordinate coord-two">THE UNKNOWN AWAITS</div>
          <div className="map-pin pin-one"><span/>EAST BLUE</div><div className="map-pin pin-two"><span/>NEW WORLD</div>
          <div className="art-stamp"><span>海賊</span><small>THE GREAT<br/>ADVENTURE</small></div>
        </div>
        <div className="hero-bottom"><span>VOL. 001 — THE BEGINNING</span><span>SCROLL TO DISCOVER <ArrowDown size={13}/></span></div>
      </section>

      <section className="ticker" aria-label="Atlas topics"><div className="ticker-track"><span>ISLANDS</span><i>✳</i><span>LEGENDS</span><i>✳</i><span>DEVIL FRUITS</span><i>✳</i><span>THE WILL OF D.</span><i>✳</i><span>GREAT PIRATES</span><i>✳</i><span>ANCIENT HISTORY</span><i>✳</i><span>ISLANDS</span><i>✳</i><span>LEGENDS</span><i>✳</i><span>DEVIL FRUITS</span></div></section>

      <section className="section wrap" id="explore">
        <div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> CHOOSE YOUR ROUTE</div><h2>THREE SEAS.<br/><em>INFINITE</em> STORIES.</h2></div><p className="section-intro">Every sea holds a story. Begin your journey in the waters that started it all, then venture toward the world's greatest mysteries.</p></div>
        <div className="world-grid">{worlds.map((world) => { const Icon = world.icon; return <article className={`world-card ${world.tone}`} key={world.number}><div className="world-top"><span>SEA / {world.number}</span><Icon size={23}/></div><div className="world-visual"><div className="sea-sun"/><div className="sea-island island-a"/><div className="sea-island island-b"/><div className="sea-wave wave-a"/><div className="sea-wave wave-b"/></div><div className="world-info"><span className="world-sub">{world.subtitle}</span><h3>{world.title}</h3><p>{world.detail}</p><a href="#library">CHART THIS SEA <ArrowRight size={14}/></a></div></article>; })}</div>
      </section>

      <section className="quote-band"><div className="quote-inner wrap"><span className="quote-mark">“</span><p>THE TREASURE IS OUT THERE.<br/><em>THE ADVENTURE IS YOURS TO EXPLORE.</em></p><span className="quote-caption">— THE GRAND LINE ATLAS</span></div></section>

      <section className="section wrap library-section" id="library">
        <div className="section-head"><div><div className="eyebrow"><span className="eyebrow-line"/> THE KNOWLEDGE ARCHIVES</div><h2>YOUR WORLD.<br/><em>YOUR DISCOVERY.</em></h2></div><p className="section-intro">A growing collection of guides and records for every curious explorer. Pick a subject and dive deeper.</p></div>
        <div className="feature-grid">{features.map((feature) => { const Icon = feature.icon; return <a className="feature-card" href="#about" key={feature.title}><div className="feature-top"><span>{feature.tag}</span><Icon size={22}/></div><h3>{feature.title}</h3><p>{feature.desc}</p><span className="feature-link">OPEN ARCHIVE <ArrowRight size={14}/></span></a>; })}</div>
      </section>

      <section className="join-section" id="about"><div className="join-inner wrap"><div className="join-icon"><Swords size={28}/></div><div><div className="eyebrow"><span className="eyebrow-line"/> THE JOURNEY HAS JUST BEGUN</div><h2>NO MAP CAN SHOW<br/>YOU <em>EVERYTHING.</em></h2><p>This atlas is a fan-made tribute built for curious explorers. More characters, places, timelines and interactive discoveries are on the way.</p></div><a className="primary-btn" href="https://github.com/jahidghavada-create/one-piece-universe" target="_blank" rel="noreferrer">FOLLOW THE BUILD <ArrowRight size={16}/></a></div></section>

      <footer className="footer wrap"><a className="brand" href="#"><span className="brand-mark"><Anchor size={18}/></span><span>GRAND LINE <b>ATLAS</b></span></a><p>AN UNOFFICIAL FAN-MADE PROJECT · NOT AFFILIATED WITH THE ORIGINAL CREATORS OR PUBLISHERS.</p><span>© 2026 GRAND LINE ATLAS</span></footer>
    </main>
  );
}

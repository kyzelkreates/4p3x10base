import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {
  ArrowRight, Brain, Cpu, Database, Layers, Rocket, ShieldCheck,
  Sparkles, Workflow, Zap
} from 'lucide-react';
import './styles.css';
import { futureBases, ecosystemStats, roadmapPhases } from './data/futureBases.js';
import StickyNav from './components/StickyNav.jsx';
import BasePage from './pages/BasePage.jsx';
import DemoLivePage from './pages/DemoLivePage.jsx';
import AgentMapPage from './pages/AgentMapPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import InvestorPage from './pages/InvestorPage.jsx';

const iconMap = {
  command: Cpu, mobile: Zap, companion: Brain, evidence: ShieldCheck,
  academy: Layers, welfare: Workflow, reputation: Sparkles,
  route: Rocket, intelligence: Database, portal: Layers,
};

const accentColors = [
  'var(--gold)', 'var(--green)', 'var(--purple)', 'var(--gold)', 'var(--green)',
  'var(--purple)', 'var(--gold)', 'var(--green)', 'var(--purple)', 'var(--gold)',
];

function BaseCard({ base, index }) {
  const Icon = iconMap[base.icon] || Layers;
  const accent = accentColors[index];
  return (
    <article className="base-card" style={{'--accent': accent}}>
      <div className="base-topline">
        <span className="base-number">Base {base.id}</span>
        <span style={{color: accent}}><Icon size={22} /></span>
      </div>
      <h3 className="base-name">{base.name}</h3>
      <p className="base-summary">{base.summary}</p>
      <div className="mini-section">
        <strong>Can become</strong>
        <ul className="tag-list">
          {base.canBecome.slice(0, 4).map((item) => (
            <li key={item} className="tag">{item}</li>
          ))}
        </ul>
      </div>
      <div className="mini-section">
        <strong>Core modules</strong>
        <ul className="module-list">
          {base.modules.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <Link className="card-link" to={'/base/' + base.id}>
        Full detail page <ArrowRight size={15} />
      </Link>
    </article>
  );
}

function SpecCard({ base }) {
  const Icon = iconMap[base.icon] || Layers;
  return (
    <article className="spec-card" id={'base-' + base.id}>
      <div className="spec-header">
        <span className="spec-badge">Base {base.id}</span>
        <span className="spec-icon"><Icon size={20} /></span>
      </div>
      <h3>{base.name}</h3>
      <p className="spec-desc">{base.longDescription}</p>
      <div className="spec-columns">
        <div className="spec-col">
          <h4>Who needs it</h4>
          <ul>{base.whoNeedsIt.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="spec-col">
          <h4>AI agents</h4>
          <ul>
            {base.aiAgents.map((item) => (
              <li key={item} className="agent-item">
                <span className="agent-dot" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="spec-col">
          <h4>Demo to Live path</h4>
          <p className="spec-path">{base.demoLivePath}</p>
        </div>
      </div>
      <Link className="card-link" to={'/base/' + base.id} style={{marginTop:'18px'}}>
        Open full detail page <ArrowRight size={15} />
      </Link>
    </article>
  );
}

function HomePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-shell">
      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">4P3X Verse&#x2122; Version 3.0</p>
            <h1>10 Future-Ready Base Structures</h1>
            <p className="hero-sub">For the next stage of the 4P3X Verse&#x2122;.</p>
            <p className="hero-text">
              This is not just 10 apps. This is the future-facing expansion of the 4P3X modular
              architecture &#x2014; reusable base systems designed to become hundreds of sector-ready
              AI-powered products.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href="#bases">Explore the 10 bases <ArrowRight size={17} /></a>
              <a className="secondary-btn" href="#investor">Why this matters</a>
            </div>
            <p className="signature">Powered by 4P3X Intelligent AI&#x2122; &#x2014; Created by Kyzel Kreates&#x2122;</p>
          </div>
          <aside className="hero-panel">
            <div className="orb" />
            <div className="hero-panel-content">
              <p className="eyebrow-small">One architecture</p>
              <h2 className="hero-panel-heading">
                One modular architecture. Ten future base systems. Thousands of possible product directions.
              </h2>
              <p className="hero-panel-text">
                The first 5 base structures proved the method works. Version 3.0 reveals the wider future:
                a portfolio of reusable foundations adaptable across every sector.
              </p>
            </div>
          </aside>
        </div>
      </header>

      {/* STATS */}
      <section className="stats-strip">
        {ecosystemStats.map((stat) => (
          <article key={stat.label} className="stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      {/* DISCLAIMER */}
      <div className="disclaimer-banner">
        <span className="disclaimer-icon">&#x2139;</span>
        <p>
          These Version 3.0 bases are <strong>future-ready product foundations and roadmap structures</strong>.
          They are designed to be built out into working demos and then upgraded into real live systems
          by switching demo mode off and connecting a backend.
        </p>
      </div>

      {/* WHAT V3 MEANS */}
      <section className="section-block intro-block">
        <p className="eyebrow">What Version 3.0 means</p>
        <h2>The architecture behind the 4P3X Verse&#x2122; &#x2014; explained.</h2>
        <div className="intro-cols">
          <p>
            4P3X Verse&#x2122; is not a random group of individual apps. It is a disciplined modular
            architecture where every product is built from reusable foundations. The first generation
            proved this works. Version 3.0 defines the next 10 bases that complete the ecosystem.
          </p>
          <p>
            This landing page exists to explain the future expansion clearly to investors, partners,
            employers and technical reviewers &#x2014; showing the scale of what can be built, how it can
            be built, and why the same architecture adapts across hundreds of sectors without starting
            from zero every time.
          </p>
        </div>
        <div className="why-five">
          <div className="why-card">
            <span className="why-num">01&#x2013;05</span>
            <h4>Why the first 5 bases matter</h4>
            <p>
              They prove the reusable modular foundation is viable &#x2014; config files, demo/live switching,
              AI guidance, dashboards, PWAs and evidence capture applied to radically different sectors.
            </p>
          </div>
          <div className="why-card">
            <span className="why-num">06&#x2013;10</span>
            <h4>What the next 5 add</h4>
            <p>
              They extend the architecture into welfare, reputation, route safety, business intelligence
              and multi-sector portals &#x2014; covering the full range of productisable use cases.
            </p>
          </div>
          <div className="why-card">
            <span className="why-num">&#x221E;</span>
            <h4>The product factory principle</h4>
            <p>
              Once the 10 bases are established, the 4P3X Verse&#x2122; becomes a product-generation engine:
              controlled prompts + reusable modules + demo/live toggle = a new sector product fast.
            </p>
          </div>
        </div>
      </section>

      {/* BASE CARDS */}
      <section className="section-block" id="bases">
        <div className="section-heading">
          <p className="eyebrow">The 10 future bases</p>
          <h2>Each base is a reusable product foundation.</h2>
          <p className="section-sub">
            Each card links to a full detail page with modules, AI agents, product directions
            and the demo-to-live upgrade path.
          </p>
        </div>
        <div className="base-grid">
          {futureBases.map((base, i) => <BaseCard key={base.id} base={base} index={i} />)}
        </div>
      </section>

      {/* AI AGENTS MAP */}
      <section className="section-block ai-agents-block" id="ai-agents">
        <div className="section-heading">
          <p className="eyebrow">AI agents per base</p>
          <h2>Every base ships with two purpose-built AI agents.</h2>
          <p className="section-sub">
            Each Version 3.0 base has a pair of agents: one for operational guidance and one for
            risk, quality or oversight.
          </p>
        </div>
        <div className="agents-grid">
          {futureBases.map((base, i) => {
            const Icon = iconMap[base.icon] || Layers;
            const accent = accentColors[i];
            return (
              <article key={base.id} className="agent-card" style={{'--accent': accent}}>
                <div className="agent-card-top">
                  <span style={{color: accent}}><Icon size={17} /></span>
                  <span className="agent-card-base">Base {base.id}</span>
                </div>
                <h4 className="agent-card-name">{base.name}</h4>
                <ul className="agent-card-list">
                  {base.aiAgents.map((a) => (
                    <li key={a} className="agent-card-item">
                      <span className="agent-dot" style={{background: accent}} />
                      {a}
                    </li>
                  ))}
                </ul>
                <Link to={'/base/' + base.id} className="agent-detail-link" style={{color: accent}}>
                  Full spec <ArrowRight size={12} />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* FULL SPECS */}
      <section className="section-block specs-block">
        <div className="section-heading">
          <p className="eyebrow">Full base specs</p>
          <h2>Detailed Version 3.0 base structure notes.</h2>
          <p className="section-sub">
            Technical and strategic reviewers &#x2014; each spec links to a full detail page.
          </p>
        </div>
        <div className="specs-list">
          {futureBases.map((base) => <SpecCard key={'spec-' + base.id} base={base} />)}
        </div>
      </section>

      {/* DEMO / LIVE PATHWAY */}
      <section className="section-block demo-live-block">
        <div className="section-heading">
          <p className="eyebrow">Demo to live backend-ready pathway</p>
          <h2>How each base moves from showcase to real system.</h2>
        </div>
        <div className="demo-live-grid">
          <div className="demo-live-card demo-card">
            <span className="dl-label demo-label">DEMO MODE</span>
            <h4>Safe showcase layer</h4>
            <ul>
              <li>Labelled sample data throughout</li>
              <li>No auth required &#x2014; public &amp; reviewable</li>
              <li>Fully functional UI and workflows</li>
              <li>AI agents run on local knowledge</li>
              <li>Safe for investors and portfolio reviews</li>
            </ul>
          </div>
          <div className="demo-live-arrow">
            <ArrowRight size={30} />
            <span>Backend config switch</span>
          </div>
          <div className="demo-live-card live-card">
            <span className="dl-label live-label">LIVE MODE</span>
            <h4>Production-ready system</h4>
            <ul>
              <li>Real user auth and role-based access</li>
              <li>Live backend records and persistent storage</li>
              <li>AI agents connected to managed APIs</li>
              <li>Secure evidence, reports and exports</li>
              <li>Sector-branded and client-deployed</li>
            </ul>
          </div>
        </div>
        <p className="demo-live-note">
          No secrets are hardcoded in any frontend file. Backend configuration is handled through
          protected environment variables and server-side functions only.
        </p>
      </section>

      {/* ROADMAP */}
      <section className="section-block roadmap-block" id="roadmap">
        <div className="section-heading">
          <p className="eyebrow">Roadmap</p>
          <h2>From concept showcase to reusable product factory.</h2>
          <p className="section-sub">A controlled, phased build path &#x2014; no big-bang rebuilds, no drift.</p>
        </div>
        <div className="roadmap-grid">
          {roadmapPhases.map((phase) => (
            <article className="roadmap-card" key={phase.title}>
              <span className="phase-label">{phase.phase}</span>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INVESTOR */}
      <section className="section-block investor-block" id="investor">
        <p className="eyebrow">Investor / funder / partner explanation</p>
        <h2>Why 4P3X Verse&#x2122; Version 3.0 matters.</h2>
        <div className="investor-cols">
          <div className="investor-text">
            <p>
              Version 3.0 demonstrates the move from individual demos into a reusable architecture
              strategy. The value is not only that multiple apps can be built. The value is that the
              same disciplined base structure can be refactored into many industries with controlled
              prompts, reusable modules, branded content layers, safe AI oversight, demo/live switching
              and backend-ready upgrade paths.
            </p>
            <p>
              This shows rapid learning, systems thinking, product architecture, AI-assisted development
              discipline, and a practical route from prototype to fundable product. It gives investors,
              employers and partners a clear way to understand what has been built, what can be built
              next, and how the 4P3X Verse&#x2122; can expand into many markets without starting from zero.
            </p>
          </div>
          <div className="investor-pillars">
            <div className="pillar"><span className="pillar-icon">&#x1F3D7;</span><h4>Architecture</h4><p>Modular foundations &#x2014; not throwaway prototypes.</p></div>
            <div className="pillar"><span className="pillar-icon">&#x2699;&#xFE0F;</span><h4>Scalability</h4><p>10 bases &#x00D7; multiple sectors = hundreds of product directions.</p></div>
            <div className="pillar"><span className="pillar-icon">&#x1F916;</span><h4>AI-ready</h4><p>Every base ships with purpose-built AI guidance agents.</p></div>
            <div className="pillar"><span className="pillar-icon">&#x1F512;</span><h4>Responsible</h4><p>Demo/live boundary protects real users during showcase phase.</p></div>
          </div>
        </div>
      </section>

      {/* FINAL POSITIONING */}
      <section className="section-block positioning-block">
        <p className="eyebrow">Final positioning statement</p>
        <blockquote className="positioning-quote">
          &#x201C;4P3X Verse&#x2122; Version 3.0 is not the end of the architecture. It is the proof that
          the architecture can scale into any sector, any market, any use case &#x2014; from a single
          reusable base to a network of AI-powered products.&#x201D;
        </blockquote>
        <p className="positioning-sig">&#x2014; Kyzel Kreates&#x2122;, 4P3X Intelligent AI&#x2122;</p>
        <div className="positioning-ctas">
          <a className="primary-btn" href="#bases">Explore the 10 bases <ArrowRight size={17} /></a>
          <a className="secondary-btn" href="#investor">Investor view</a>
        </div>
      </section>

      {/* EXPLORE MORE */}
      <section className="section-block explore-more-block">
        <p className="eyebrow">Explore more</p>
        <h2>Deeper reading on how Version 3.0 works.</h2>
        <div className="explore-more-grid">
          <Link to="/demo-live" className="explore-card">
            <span className="explore-card-icon" style={{color:'var(--green)'}}>&#x21C6;</span>
            <div>
              <h4>Demo / Live explanation</h4>
              <p>How every base moves from safe showcase to production system &#x2014; and the 4P3X API Config Guard&#x2122;.</p>
            </div>
            <ArrowRight size={18} style={{color:'var(--green)',flexShrink:0}} />
          </Link>
          <Link to="/agents" className="explore-card">
            <span className="explore-card-icon" style={{color:'var(--purple)'}}>&#x1F916;</span>
            <div>
              <h4>Full AI Agent Map</h4>
              <p>All {futureBases.reduce((s,b)=>s+b.aiAgents.length,0)} agents across the 10 bases &#x2014; the matrix, roles, and responsible AI principles.</p>
            </div>
            <ArrowRight size={18} style={{color:'var(--purple)',flexShrink:0}} />
          </Link>
          <Link to="/products" className="explore-card">
            <span className="explore-card-icon" style={{color:'var(--gold)'}}>&#x1F4A1;</span>
            <div>
              <h4>50+ Product Directions</h4>
              <p>Interactive explorer showing exactly what each base can become across 8+ sectors.</p>
            </div>
            <ArrowRight size={18} style={{color:'var(--gold)',flexShrink:0}} />
          </Link>
          <Link to="/investor" className="explore-card">
            <span className="explore-card-icon" style={{color:'var(--green)'}}>&#x1F4C8;</span>
            <div>
              <h4>Investor &amp; Partner View</h4>
              <p>The full commercial case &#x2014; architecture value, market sectors, build evidence, and what we&#x27;re looking for.</p>
            </div>
            <ArrowRight size={18} style={{color:'var(--green)',flexShrink:0}} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark footer-brand-mark">4P3X</div>
          <div>
            <strong>4P3X Verse&#x2122; Version 3.0</strong>
            <p>Powered by 4P3X Intelligent AI&#x2122; &#x2014; Created by Kyzel Kreates&#x2122;</p>
          </div>
        </div>
        <nav className="footer-nav">
          <a href="#bases">10 Bases</a>
          <a href="#ai-agents">AI Agents</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#investor">Investor View</a>
          <a href="#top">&#x2191; Back to top</a>
        </nav>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StickyNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/base/:id" element={<BasePage />} />
        <Route path="/demo-live" element={<DemoLivePage />} />
        <Route path="/agents" element={<AgentMapPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/investor" element={<InvestorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, Brain, Cpu, Database, Layers,
  Rocket, ShieldCheck, Sparkles, Workflow, Zap,
  Boxes, Bot, Map, Users
} from 'lucide-react';
import { futureBases } from '../data/futureBases.js';

const iconMap = {
  command: Cpu, mobile: Zap, companion: Brain, evidence: ShieldCheck,
  academy: Layers, welfare: Workflow, reputation: Sparkles,
  route: Rocket, intelligence: Database, portal: Layers,
};

const accentColors = [
  'var(--gold)', 'var(--green)', 'var(--purple)', 'var(--gold)', 'var(--green)',
  'var(--purple)', 'var(--gold)', 'var(--green)', 'var(--purple)', 'var(--gold)',
];

export default function BasePage() {
  const { id } = useParams();
  const baseIndex = futureBases.findIndex((b) => b.id === id);
  const base = futureBases[baseIndex];
  const prevBase = baseIndex > 0 ? futureBases[baseIndex - 1] : null;
  const nextBase = baseIndex < futureBases.length - 1 ? futureBases[baseIndex + 1] : null;
  const accent = accentColors[baseIndex] || 'var(--gold)';
  const Icon = base ? (iconMap[base.icon] || Layers) : Layers;

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!base) {
    return (
      <div className="page-shell not-found">
        <div className="not-found-content">
          <p className="eyebrow">404</p>
          <h2>Base not found</h2>
          <p>That base ID doesn&apos;t exist in Version 3.0.</p>
          <Link to="/" className="primary-btn" style={{marginTop:'24px',display:'inline-flex'}}>
            <ArrowLeft size={16} /> Back to all bases
          </Link>
        </div>
      </div>
    );
  }

  const accentGrad =
    accent === 'var(--green)'
      ? 'linear-gradient(135deg,#43ff9a,#a8ffce)'
      : accent === 'var(--purple)'
      ? 'linear-gradient(135deg,#9b5cff,#c8a0ff)'
      : 'linear-gradient(135deg,var(--gold),var(--gold-light))';
  const accentColor =
    accent === 'var(--green)' ? '#0a1f12' : accent === 'var(--purple)' ? '#12061e' : '#16110a';

  return (
    <div className="page-shell base-detail-page" id="top">

      {/* HERO */}
      <header className="base-detail-hero" style={{'--accent': accent}}>
        <div className="base-detail-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={16} /> All bases</Link>
          <div className="base-detail-hero-grid">
            <div className="base-detail-copy">
              <p className="eyebrow">Base {base.id} of 10</p>
              <div className="base-detail-title-row">
                <span className="base-detail-icon" style={{color: accent}}><Icon size={34} /></span>
                <h1 className="base-detail-h1">{base.name}</h1>
              </div>
              <p className="base-detail-summary">{base.summary}</p>
              <div className="base-detail-ctas">
                <a className="primary-btn" href="#modules" style={{background: accentGrad, color: accentColor}}>
                  Explore modules <ArrowRight size={16} />
                </a>
                <a className="secondary-btn" href="#products">What it can become</a>
              </div>
            </div>
            <aside className="base-detail-panel">
              <div className="base-detail-orb" />
              <div className="base-stat-grid">
                <div className="base-stat"><strong>{base.modules.length}</strong><span>Core modules</span></div>
                <div className="base-stat"><strong>{base.canBecome.length}</strong><span>Product directions</span></div>
                <div className="base-stat"><strong>{base.aiAgents.length}</strong><span>AI agents</span></div>
                <div className="base-stat"><strong>{base.whoNeedsIt.length}+</strong><span>User types</span></div>
              </div>
              <p className="signature">Powered by 4P3X Intelligent AI&#x2122; &#x2014; Created by Kyzel Kreates&#x2122;</p>
            </aside>
          </div>
        </div>
      </header>

      {/* DISCLAIMER */}
      <div className="disclaimer-banner" style={{margin:'0 clamp(16px,5vw,64px) 20px'}}>
        <span className="disclaimer-icon">&#x2139;</span>
        <p>
          This is a <strong>future-ready product foundation and roadmap structure</strong>. It is designed
          to be built into a working demo and then upgraded into a real live system by switching demo mode
          off and connecting a backend.
        </p>
      </div>

      {/* OVERVIEW */}
      <section className="section-block base-section" id="overview">
        <p className="eyebrow">Overview</p>
        <h2>What {base.name} is.</h2>
        <p className="base-long-desc">{base.longDescription}</p>
        <div className="who-needs-it">
          <h4 style={{display:'flex',alignItems:'center',gap:'8px'}}>
            <Users size={15} /> Who needs it
          </h4>
          <div className="who-tags">
            {base.whoNeedsIt.map((item) => (
              <span key={item} className="who-tag">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section-block base-section" id="modules">
        <p className="eyebrow">Core modules</p>
        <h2>What&apos;s inside {base.name}.</h2>
        <div className="modules-grid">
          {base.modules.map((mod, i) => (
            <div key={mod} className="module-tile" style={{'--accent': accent}}>
              <span className="module-num" style={{color: accent}}>{String(i + 1).padStart(2, '0')}</span>
              <div style={{color: accent, marginBottom:'10px'}}><Boxes size={20} /></div>
              <h4 className="module-title">{mod}</h4>
              <p className="module-note">Configurable module — connects to demo or live data.</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI AGENTS */}
      <section className="section-block base-section" id="agents">
        <p className="eyebrow">AI agents</p>
        <h2>The AI agents assigned to this base.</h2>
        <p className="section-sub" style={{marginBottom:'24px'}}>
          These agents run on local knowledge in demo mode. In live mode they connect to managed AI APIs
          via protected backend functions.
        </p>
        <div className="agents-detail-grid">
          {base.aiAgents.map((agent, i) => (
            <div key={agent} className="agent-detail-card" style={{'--accent': accent}}>
              <div className="agent-detail-header">
                <Bot size={20} style={{color: accent}} />
                <span className="agent-detail-num" style={{color: accent}}>Agent {i + 1}</span>
              </div>
              <h3 className="agent-detail-name">{agent}</h3>
              <p className="agent-detail-note">
                {i === 0
                  ? 'Handles operational guidance, task support and workflow assistance within this base.'
                  : 'Handles risk assessment, quality checks, oversight and escalation decisions.'}
              </p>
              <div className="agent-mode-row">
                <span className="agent-mode-tag demo-tag">DEMO: local knowledge</span>
                <span className="agent-mode-tag live-tag">LIVE: managed API</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IT CAN BECOME */}
      <section className="section-block base-section" id="products">
        <p className="eyebrow">What this base can become</p>
        <h2>Product directions for {base.name}.</h2>
        <p className="section-sub" style={{marginBottom:'28px'}}>
          Each direction uses the same modular architecture with a different sector, data model and branding.
        </p>
        <div className="products-grid">
          {base.canBecome.map((product, i) => (
            <div key={product} className="product-tile" style={{'--accent': accent}}>
              <span className="product-num" style={{color: accent}}>{String(i + 1).padStart(2, '0')}</span>
              <h4 className="product-name">{product}</h4>
              <p className="product-note">Built on {base.name} &#x2014; demo first, live when ready.</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO TO LIVE PATH */}
      <section className="section-block base-section" id="demo-path">
        <p className="eyebrow">Demo to live path</p>
        <h2>How this base moves to production.</h2>
        <div className="demo-path-card" style={{'--accent': accent}}>
          <Map size={20} style={{color: accent, marginBottom:'12px'}} />
          <p className="demo-path-text">{base.demoLivePath}</p>
        </div>
        <div className="demo-live-steps">
          <div className="dl-step">
            <span className="dl-step-num" style={{color: accent}}>01</span>
            <h4>Build demo version</h4>
            <p>All modules working with labelled sample data. Safe for portfolio review.</p>
          </div>
          <div className="dl-step-arrow">&#x2192;</div>
          <div className="dl-step">
            <span className="dl-step-num" style={{color: accent}}>02</span>
            <h4>Validate with real users</h4>
            <p>Run user testing, gather feedback, confirm the product direction.</p>
          </div>
          <div className="dl-step-arrow">&#x2192;</div>
          <div className="dl-step">
            <span className="dl-step-num" style={{color: accent}}>03</span>
            <h4>Connect backend</h4>
            <p>Switch demo mode off. Connect auth, database, AI APIs and real data.</p>
          </div>
          <div className="dl-step-arrow">&#x2192;</div>
          <div className="dl-step">
            <span className="dl-step-num" style={{color: accent}}>04</span>
            <h4>Deploy live product</h4>
            <p>Sector-branded, production-ready. Ready for clients and funding.</p>
          </div>
        </div>
      </section>

      {/* PREV / NEXT */}
      <div className="base-nav-row">
        {prevBase ? (
          <Link to={'/base/' + prevBase.id} className="base-nav-btn base-nav-prev">
            <ArrowLeft size={16} />
            <div><span>Previous</span><strong>{prevBase.name}</strong></div>
          </Link>
        ) : <div />}
        <Link to="/" className="back-to-all">View all 10 bases</Link>
        {nextBase ? (
          <Link to={'/base/' + nextBase.id} className="base-nav-btn base-nav-next">
            <div><span>Next</span><strong>{nextBase.name}</strong></div>
            <ArrowRight size={16} />
          </Link>
        ) : <div />}
      </div>

      {/* FOOTER */}
      <footer className="footer" style={{margin:'20px clamp(16px,5vw,64px) 40px'}}>
        <div className="footer-brand">
          <Link to="/" className="brand-mark footer-brand-mark" style={{textDecoration:'none'}}>4P3X</Link>
          <div>
            <strong>4P3X Verse&#x2122; Version 3.0</strong>
            <p>Powered by 4P3X Intelligent AI&#x2122; &#x2014; Created by Kyzel Kreates&#x2122;</p>
          </div>
        </div>
        <nav className="footer-nav">
          <Link to="/">All Bases</Link>
          <a href="#overview">Overview</a>
          <a href="#modules">Modules</a>
          <a href="#agents">AI Agents</a>
          <a href="#top">&#x2191; Top</a>
        </nav>
      </footer>
    </div>
  );
}

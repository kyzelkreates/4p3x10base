import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, TrendingUp, Target, Zap, ShieldCheck,
  Layers, Brain, Rocket, DollarSign, Users, Globe
} from 'lucide-react';
import { futureBases } from '../data/futureBases.js';

const totalProducts = 50;

const whyPoints = [
  {
    icon: Layers,
    color: 'var(--gold)',
    title: 'Reusable architecture, not throwaway code',
    desc: 'Every product is built from a shared modular base. New products cost a fraction of the time and resource of building from zero. The architecture compounds in value with each new base.',
  },
  {
    icon: Brain,
    color: 'var(--purple)',
    title: 'AI-first from the ground up',
    desc: 'Every base ships with two AI agents — one for guidance, one for oversight. Not bolted-on AI. Purpose-built, responsible, configurable agents at the core of every product.',
  },
  {
    icon: ShieldCheck,
    color: 'var(--green)',
    title: 'Responsible by design',
    desc: 'Demo/live separation, API Config Guard™, human-in-the-loop agents, and no secrets in frontend code. Built to a standard that regulated industries, charities and enterprise clients can trust.',
  },
  {
    icon: Target,
    color: 'var(--gold)',
    title: 'Multiple sectors, one codebase',
    desc: 'The same 10 bases can serve transport, education, welfare, compliance, business intelligence, public sector, SaaS, creators, enterprise and more — without starting over.',
  },
  {
    icon: TrendingUp,
    color: 'var(--green)',
    title: 'Clear path from demo to revenue',
    desc: 'Every base has a defined demo-to-live upgrade path. Demo for validation. Live for revenue. The build discipline is already proven across the first generation of 4P3X products.',
  },
  {
    icon: Zap,
    color: 'var(--purple)',
    title: 'Speed to market',
    desc: 'New sector products can be configured and deployed from existing bases — dramatically reducing time to market for each new product direction in the portfolio.',
  },
];

const marketSectors = [
  { label: 'Transport & logistics', base: '01, 02, 08' },
  { label: 'Education & training', base: '05, 03' },
  { label: 'Welfare & community', base: '06, 03, 02' },
  { label: 'Compliance & regulation', base: '04, 09, 01' },
  { label: 'Brand & reputation', base: '07, 09' },
  { label: 'SaaS & tech platforms', base: '10, 09, 01' },
  { label: 'Public sector & charity', base: '06, 04, 10' },
  { label: 'Creator economy', base: '03, 07, 05' },
];

const buildEvidence = [
  { label: 'First generation bases built', value: '5' },
  { label: 'Version 3.0 bases defined', value: '10' },
  { label: 'Product directions mapped', value: String(totalProducts) + '+' },
  { label: 'Architecture runs completed', value: '5+' },
  { label: 'Sectors addressable', value: '8+' },
  { label: 'Build discipline approach', value: 'Proven' },
];

const theAsk = [
  {
    type: 'Investment',
    color: 'var(--gold)',
    icon: DollarSign,
    desc: 'Funding to accelerate the build of the first 3 live products from the Version 3.0 base portfolio, with a clear path to recurring SaaS revenue.',
  },
  {
    type: 'Partnership',
    color: 'var(--green)',
    icon: Users,
    desc: 'Sector partners who need an AI-powered product for their industry — built on proven architecture, ready for demo validation within weeks.',
  },
  {
    type: 'Advisory',
    color: 'var(--purple)',
    icon: Brain,
    desc: 'Advisors with domain expertise in target sectors (transport, welfare, compliance, SaaS) who can help validate and accelerate product-market fit.',
  },
  {
    type: 'Distribution',
    color: 'var(--gold)',
    icon: Globe,
    desc: 'Distribution partners — agencies, networks, organisations — with established routes to the sectors that need what 4P3X Verse™ Version 3.0 can build.',
  },
];

export default function InvestorPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="page-shell base-detail-page" id="top">

      {/* HERO */}
      <header className="base-detail-hero" style={{'--accent':'var(--gold)'}}>
        <div className="base-detail-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={16}/> All bases</Link>
          <div className="dl-page-hero">
            <div>
              <p className="eyebrow">Run 7 — Investor / funder / partner page</p>
              <h1 className="base-detail-h1">Why 4P3X Verse&#x2122; Version 3.0 matters.</h1>
              <p className="base-detail-summary">
                A deep explanation of the 4P3X modular architecture, its market opportunity, the build evidence,
                and the investment, partnership and advisory opportunities it creates.
              </p>
              <div className="base-detail-ctas" style={{marginTop:'28px'}}>
                <a className="primary-btn" href="#why" style={{background:'linear-gradient(135deg,var(--gold),var(--gold-light))',color:'#16110a'}}>
                  The case for 4P3X <ArrowRight size={16}/>
                </a>
                <a className="secondary-btn" href="#the-ask">What we&#x2019;re looking for</a>
              </div>
            </div>
            <aside className="hero-panel" style={{minHeight:'280px'}}>
              <div className="orb"/>
              <div className="hero-panel-content">
                <p className="eyebrow-small">The opportunity</p>
                <h2 className="hero-panel-heading" style={{fontSize:'clamp(1.3rem,2.5vw,2.1rem)'}}>
                  One architecture. {totalProducts}+ product directions. 8+ sectors. Built, validated and ready to scale.
                </h2>
                <p className="hero-panel-text" style={{fontSize:'0.9rem',marginTop:'10px'}}>
                  Not a pitch deck. A working codebase with a proven modular architecture and a clear commercial pathway.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* BUILD EVIDENCE STATS */}
      <section className="stats-strip" style={{margin:'-10px clamp(16px,5vw,64px) 20px'}}>
        {buildEvidence.map((e) => (
          <article key={e.label} className="stat-card">
            <strong style={{color:'var(--gold)'}}>{e.value}</strong>
            <span>{e.label}</span>
          </article>
        ))}
      </section>

      {/* DISCLAIMER */}
      <div className="disclaimer-banner" style={{margin:'0 clamp(16px,5vw,64px) 20px'}}>
        <span className="disclaimer-icon">&#x2139;</span>
        <p>
          Version 3.0 bases are <strong>future-ready product foundations</strong>, not confirmed live commercial products.
          This page presents the architecture, the build evidence, and the product opportunity for investor and partner review.
        </p>
      </div>

      {/* WHY IT MATTERS */}
      <section className="section-block" id="why">
        <p className="eyebrow">Why it matters</p>
        <h2>Six reasons 4P3X Verse&#x2122; Version 3.0 is a serious commercial architecture.</h2>
        <div className="investor-why-grid">
          {whyPoints.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="investor-why-card" style={{'--accent': p.color}}>
                <span style={{color: p.color}}><Icon size={24}/></span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* THE ARCHITECTURE */}
      <section className="section-block" id="architecture">
        <p className="eyebrow">The architecture</p>
        <h2>How the 4P3X modular system compounds in value.</h2>
        <div className="arch-explainer">
          <div className="arch-col">
            <h4>What makes it modular</h4>
            <p>
              Every product in the 4P3X Verse&#x2122; is built from the same foundational elements:
              a config file, a demo/live toggle, a set of reusable modules, an AI agent pair, a dashboard,
              and a backend-ready schema. Any base can be refactored into a new product by changing
              the sector configuration — not rewriting the architecture.
            </p>
            <p style={{marginTop:'14px'}}>
              This is not low-code templating. It is disciplined software architecture: consistent patterns,
              controlled prompts, testable modules, and a clear separation between demo validation
              and live production deployment.
            </p>
          </div>
          <div className="arch-col">
            <h4>What compounds over time</h4>
            <ul className="arch-list">
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> Each new base adds to the total addressable product surface</li>
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> Shared modules reduce build cost for every subsequent product</li>
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> Demo/live discipline means validation is always low-risk</li>
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> AI agents improve as the knowledge base grows</li>
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> The portfolio becomes more valuable than any single product</li>
              <li><span style={{color:'var(--gold)'}}>&#x2713;</span> Sector partners get proven architecture, not experimental builds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARKET SECTORS */}
      <section className="section-block" id="market">
        <p className="eyebrow">Market sectors</p>
        <h2>Which sectors the 4P3X Verse&#x2122; architecture serves.</h2>
        <p className="section-sub" style={{marginBottom:'28px'}}>
          Each sector is served by specific bases. Multiple bases can be combined for complex sector platforms.
        </p>
        <div className="market-grid">
          {marketSectors.map((s, i) => (
            <div key={s.label} className="market-tile" style={{'--accent': ['var(--gold)','var(--green)','var(--purple)'][i%3]}}>
              <h4 className="market-sector-label">{s.label}</h4>
              <p className="market-sector-bases">Served by: Base {s.base}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILD EVIDENCE */}
      <section className="section-block" id="evidence">
        <p className="eyebrow">Build evidence</p>
        <h2>What has already been built and validated.</h2>
        <div className="evidence-grid">
          <div className="evidence-card" style={{borderColor:'rgba(214,179,90,0.35)', background:'rgba(214,179,90,0.06)'}}>
            <h4 style={{color:'var(--gold)'}}>First generation &#x2014; proven bases</h4>
            <p>The original 4P3X Verse&#x2122; proved the modular architecture works across multiple sectors with real product builds, demos and user validation.</p>
            <ul className="evidence-list">
              <li>Multiple sector products built from shared modules</li>
              <li>Demo/live switch validated across products</li>
              <li>AI agent pattern established and working</li>
              <li>Config-driven architecture delivering real flexibility</li>
            </ul>
          </div>
          <div className="evidence-card" style={{borderColor:'rgba(67,255,154,0.35)', background:'rgba(67,255,154,0.05)'}}>
            <h4 style={{color:'var(--green)'}}>Version 3.0 &#x2014; this build</h4>
            <p>Version 3.0 defines 10 future-ready base structures, maps {totalProducts}+ product directions, and delivers this showcase as the investment-ready portfolio explanation.</p>
            <ul className="evidence-list">
              <li>10 bases fully documented and specced</li>
              <li>{totalProducts}+ product directions mapped with sector context</li>
              <li>Full demo/live architecture documented</li>
              <li>AI agent map for all 20 agents built</li>
              <li>This showcase built in controlled runs</li>
            </ul>
          </div>
          <div className="evidence-card" style={{borderColor:'rgba(155,92,255,0.35)', background:'rgba(155,92,255,0.06)'}}>
            <h4 style={{color:'var(--purple)'}}>Next phase &#x2014; live products</h4>
            <p>The next phase converts the 3 highest-priority bases into full live products with real users, real data and commercial deployment pathways.</p>
            <ul className="evidence-list">
              <li>Priority bases: Multi-Sector Portal, Command Base, Mobile PWA</li>
              <li>Demo builds first — then live with funding/partnership</li>
              <li>Clear revenue model per product (SaaS, licence, B2B)</li>
              <li>Architecture already proven — execution is the next stage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* THE ASK */}
      <section className="section-block" id="the-ask">
        <p className="eyebrow">What we&#x2019;re looking for</p>
        <h2>Investment, partnership, advisory and distribution opportunities.</h2>
        <div className="ask-grid">
          {theAsk.map((a) => {
            const Icon = a.icon;
            return (
              <div key={a.type} className="ask-card" style={{'--accent': a.color}}>
                <div className="ask-card-top">
                  <Icon size={22} style={{color: a.color}}/>
                  <span className="ask-type" style={{color: a.color, background: a.color + '18', border: '1px solid ' + a.color + '44'}}>{a.type}</span>
                </div>
                <p>{a.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section-block positioning-block">
        <p className="eyebrow">Final statement</p>
        <blockquote className="positioning-quote">
          &#x201C;4P3X Verse&#x2122; Version 3.0 is not a portfolio of demos. It is a proven modular architecture
          with a mapped commercial pathway across {marketSectors.length}+ sectors,
          {totalProducts}+ product directions and a build discipline that compounds in value
          with every new base, partner and sector it enters.&#x201D;
        </blockquote>
        <p className="positioning-sig">&#x2014; Kyzel Kreates&#x2122;, 4P3X Intelligent AI&#x2122;</p>
        <div className="positioning-ctas">
          <Link to="/" className="primary-btn">View the 10 bases <ArrowRight size={16}/></Link>
          <Link to="/products" className="secondary-btn">{totalProducts}+ product directions</Link>
        </div>
      </section>

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
          <Link to="/products">Products</Link>
          <Link to="/agents">Agent Map</Link>
          <a href="#top">&#x2191; Top</a>
        </nav>
      </footer>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Brain, Cpu, Database, Layers,
  Rocket, ShieldCheck, Sparkles, Workflow, Zap
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

// Extended product examples per base (5 each)
const productExamples = {
  '01': [
    { name: 'Fleet Control Hub', sector: 'Transport', desc: 'A command dashboard for fleet operators managing vehicles, drivers, incidents and live status.' },
    { name: 'Crisis Command OS', sector: 'Emergency Response', desc: 'A mission-control interface for emergency coordinators managing live incidents, resources and alerts.' },
    { name: 'Business Ops Dashboard', sector: 'SME / Startup', desc: 'A single-screen operations view for small business owners tracking tasks, team activity and key metrics.' },
    { name: 'Compliance Control Room', sector: 'Regulated Industry', desc: 'A dashboard for compliance managers monitoring policy adherence, risks, deadlines and evidence status.' },
    { name: 'Project Rescue Dashboard', sector: 'Consulting', desc: 'A rapid-intervention view for project rescuers diagnosing blockers, task health and team alignment.' },
  ],
  '02': [
    { name: 'Driver Check-In PWA', sector: 'Logistics', desc: 'An installable app for drivers to check in, update job status and flag incidents while on the road.' },
    { name: 'Responder Field PWA', sector: 'Welfare / Emergency', desc: 'A mobile-first app for frontline responders to receive assignments, record visits and escalate concerns.' },
    { name: 'Client Portal App', sector: 'Professional Services', desc: 'An installable client-facing app for viewing project updates, submitting requests and tracking delivery.' },
    { name: 'Service User Check-In', sector: 'Social Care', desc: 'A simple mobile check-in app for vulnerable service users to confirm safe status and request support.' },
    { name: 'Field Engineer App', sector: 'Facilities / Utilities', desc: 'A PWA for field engineers to receive jobs, log work, capture evidence and sync when back online.' },
  ],
  '03': [
    { name: 'Burnout Recovery Coach', sector: 'Wellbeing', desc: 'A guided AI companion helping professionals recognise burnout signs, set recovery goals and track progress.' },
    { name: 'Career Direction Coach', sector: 'Employment', desc: 'An AI-guided tool helping users reflect on skills, explore directions and plan next steps with structured prompts.' },
    { name: 'Project Explainer Tool', sector: 'Business / Consulting', desc: 'A companion that explains complex projects, strategies or documents in plain language for non-technical stakeholders.' },
    { name: 'Study Support Companion', sector: 'Education', desc: 'An AI study buddy that guides learners through content, answers questions and tracks their understanding.' },
    { name: 'Neurodiversity Support App', sector: 'Inclusion / Health', desc: 'A calm, structured AI companion for neurodivergent users needing step-by-step task support and reflection.' },
  ],
  '04': [
    { name: 'Compliance OS', sector: 'Regulated Business', desc: 'A full compliance management system for policy tracking, evidence capture, risk scoring and audit readiness.' },
    { name: 'Safeguarding Evidence Tracker', sector: 'Education / Care', desc: 'A secure evidence system for safeguarding professionals to log concerns, track actions and generate reports.' },
    { name: 'Grant Evidence Tool', sector: 'Charity / Public Sector', desc: 'A structured evidence platform for grant-funded projects to capture outcomes, upload proof and generate funder reports.' },
    { name: 'Legal Readiness Dashboard', sector: 'Legal / SME', desc: 'A readiness checker for businesses approaching legal review, due diligence or regulatory inspection.' },
    { name: 'Audit Preparation Assistant', sector: 'Finance / Compliance', desc: 'An AI-assisted audit prep tool that maps policies, identifies gaps and builds evidence packs for auditors.' },
  ],
  '05': [
    { name: 'Dog Training Academy', sector: 'Pet Professional', desc: 'A structured online training platform for dog trainers to deliver courses, track learner progress and issue certificates.' },
    { name: 'Staff Onboarding Platform', sector: 'HR / Employer', desc: 'A guided onboarding system for new employees to complete induction modules, policies and competency checks.' },
    { name: 'Skills Academy', sector: 'Training Provider', desc: 'A multi-course platform for skills training organisations delivering accredited programmes with progress and certification.' },
    { name: 'Compliance Training Hub', sector: 'Regulated Industry', desc: 'A mandatory training platform for teams needing regular compliance, health and safety or policy training.' },
    { name: 'Creator Course Platform', sector: 'Content / Education', desc: 'A course-selling and delivery platform for independent creators building membership content and learning communities.' },
  ],
  '06': [
    { name: 'ResponseLink OS', sector: 'Community Response', desc: 'A full welfare response system for coordinating community responders, visits, escalations and safeguarding records.' },
    { name: 'Charity Outreach System', sector: 'Third Sector', desc: 'A coordination platform for charities managing outreach workers, beneficiary check-ins and impact reporting.' },
    { name: 'Welfare Visit Platform', sector: 'Local Government', desc: 'A council-grade welfare visit recording system with evidence capture, supervisor review and incident escalation.' },
    { name: 'Volunteer Coordination Tool', sector: 'Volunteering / NGO', desc: 'A platform for volunteer coordinators to assign roles, track activity, manage welfare check-ins and report outcomes.' },
    { name: 'Care Support Dashboard', sector: 'Social Care', desc: 'A care team dashboard for monitoring service user wellbeing, logging visits, flagging concerns and managing workloads.' },
  ],
  '07': [
    { name: 'TrustShield OS', sector: 'Brand / PR', desc: 'A reputation monitoring and response system for brands tracking mentions, signals and coordinating crisis communications.' },
    { name: 'Creator Safety Platform', sector: 'Content Creator', desc: 'A personal reputation tool for creators monitoring their online presence, flagging risks and managing public responses.' },
    { name: 'Review Management Dashboard', sector: 'Hospitality / Retail', desc: 'A centralised review monitoring tool for businesses tracking ratings, flagging issues and planning response actions.' },
    { name: 'PR Crisis Coordinator', sector: 'Public Relations', desc: 'A crisis communication platform for PR teams to monitor breaking issues, coordinate responses and log actions.' },
    { name: 'Public Figure Reputation Suite', sector: 'Politics / Entertainment', desc: 'A reputation management system for public figures tracking media signals, online sentiment and managing narrative.' },
  ],
  '08': [
    { name: "Big V's Best Routes", sector: 'Large Vehicle / HGV', desc: 'A vehicle-specific route planner for large vehicle operators checking road suitability, bridge clearances and restrictions.' },
    { name: 'Fleet Navigation Support', sector: 'Logistics / Transport', desc: 'A fleet-level routing support system matching vehicle profiles to appropriate routes and flagging restriction risks.' },
    { name: 'Safe Delivery Route Tool', sector: 'Last Mile Delivery', desc: 'A delivery route planner for drivers navigating access restrictions, weight limits and vehicle-specific hazards.' },
    { name: 'Site Access Planner', sector: 'Construction / Events', desc: 'A site access planning tool for managers checking vehicle entry suitability, access routes and restriction maps.' },
    { name: 'Driver Safety Companion', sector: 'Individual Driver', desc: 'A personal safety companion for drivers planning unfamiliar journeys with vehicle-aware guidance and risk alerts.' },
  ],
  '09': [
    { name: 'Investor Dashboard', sector: 'Startup / Funding', desc: 'A structured investor-facing dashboard presenting product metrics, traction evidence, roadmap and funding readiness.' },
    { name: 'Project Rescue OS', sector: 'Consulting', desc: 'A business intelligence tool for project rescue specialists diagnosing health, risks and recovery recommendations.' },
    { name: 'Grant Readiness Platform', sector: 'Charity / Public Sector', desc: 'A readiness scoring and reporting tool helping organisations prepare evidence packs and metrics for funders.' },
    { name: 'Business Health Tracker', sector: 'SME / Founder', desc: 'A real-time business health monitor tracking KPIs, cash flow indicators, risk signals and growth milestones.' },
    { name: 'Portfolio Analytics Suite', sector: 'Agency / Investor', desc: 'A portfolio-level analytics tool for investors or agencies monitoring multiple products, projects or clients.' },
  ],
  '10': [
    { name: 'Multi-Tenant SaaS Platform', sector: 'SaaS / Tech', desc: 'A full multi-tenant platform with organisation accounts, role-based portals, admin dashboards and client-facing apps.' },
    { name: 'Charity Ecosystem Platform', sector: 'Third Sector', desc: 'A charity-grade platform combining staff portals, volunteer apps, beneficiary check-ins, donor dashboards and reporting.' },
    { name: 'Training Ecosystem', sector: 'Education / L&D', desc: 'A complete training organisation platform with learner portals, admin content, progress dashboards and certificate generation.' },
    { name: 'AI Product Suite', sector: 'AI / Tech', desc: 'A modular AI product suite with multiple user-facing apps, an admin hub, AI agent routing and sector-specific dashboards.' },
    { name: 'Sector Portal Network', sector: 'Public / Enterprise', desc: 'A networked sector portal system connecting multiple stakeholder groups with role-specific access, dashboards and evidence flows.' },
  ],
};

export default function ProductsPage() {
  const [activeBase, setActiveBase] = useState('01');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const base = futureBases.find(b => b.id === activeBase);
  const baseIndex = futureBases.findIndex(b => b.id === activeBase);
  const accent = accentColors[baseIndex] || 'var(--gold)';
  const Icon = iconMap[base?.icon] || Layers;
  const products = productExamples[activeBase] || [];
  const totalProducts = Object.values(productExamples).reduce((s, p) => s + p.length, 0);

  return (
    <div className="page-shell base-detail-page" id="top">

      {/* HERO */}
      <header className="base-detail-hero" style={{'--accent':'var(--gold)'}}>
        <div className="base-detail-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={16}/> All bases</Link>
          <div className="dl-page-hero">
            <div>
              <p className="eyebrow">Run 6 — Product transformation examples</p>
              <h1 className="base-detail-h1">What every base can become.</h1>
              <p className="base-detail-summary">
                Each of the 10 Version 3.0 bases can be refactored into multiple sector-ready products
                using the same modular architecture. This page maps all {totalProducts} product directions
                across the full ecosystem.
              </p>
              <div className="base-detail-ctas" style={{marginTop:'28px'}}>
                <a className="primary-btn" href="#explorer">Explore products <ArrowRight size={16}/></a>
                <a className="secondary-btn" href="#all-grid">Full grid view</a>
              </div>
            </div>
            <aside className="hero-panel" style={{minHeight:'260px'}}>
              <div className="orb"/>
              <div className="hero-panel-content">
                <p className="eyebrow-small">The product factory principle</p>
                <h2 className="hero-panel-heading" style={{fontSize:'clamp(1.3rem,2.5vw,2.2rem)'}}>
                  10 bases &#xD7; 5 product directions = {totalProducts} possible sector products from one architecture.
                </h2>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* DISCLAIMER */}
      <div className="disclaimer-banner" style={{margin:'0 clamp(16px,5vw,64px) 20px'}}>
        <span className="disclaimer-icon">&#x2139;</span>
        <p>
          These are <strong>example product directions only</strong>. They show what each base could become
          with sector-specific data, branding and configuration — not confirmed live products.
        </p>
      </div>

      {/* INTERACTIVE EXPLORER */}
      <section className="section-block" id="explorer">
        <p className="eyebrow">Interactive base explorer</p>
        <h2>Select a base to see its product directions.</h2>
        <div className="prod-explorer">
          {/* Base Selector */}
          <div className="prod-base-tabs">
            {futureBases.map((b, i) => {
              const BIcon = iconMap[b.icon] || Layers;
              const ac = accentColors[i];
              const isActive = b.id === activeBase;
              return (
                <button
                  key={b.id}
                  className={'prod-base-tab' + (isActive ? ' active' : '')}
                  style={isActive ? {'--accent': ac, borderColor: ac, background: ac + '18'} : {}}
                  onClick={() => setActiveBase(b.id)}
                >
                  <span style={{color: isActive ? ac : 'var(--muted)'}}><BIcon size={15}/></span>
                  <span className="prod-tab-label">
                    <span className="prod-tab-num" style={{color: isActive ? ac : 'var(--muted)'}}>Base {b.id}</span>
                    <span className="prod-tab-name">{b.name.replace('4P3X ','').replace('™','')}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Product Display */}
          <div className="prod-display">
            <div className="prod-display-header" style={{'--accent': accent}}>
              <span style={{color: accent}}><Icon size={24}/></span>
              <div>
                <p className="eyebrow" style={{marginBottom:'4px'}}>Base {base?.id} of 10</p>
                <h3 className="prod-display-name">{base?.name}</h3>
                <p className="prod-display-summary">{base?.summary}</p>
              </div>
            </div>
            <div className="prod-display-grid">
              {products.map((p, i) => (
                <div key={p.name} className="prod-display-card" style={{'--accent': accent}}>
                  <span className="prod-display-num" style={{color: accent}}>{String(i+1).padStart(2,'0')}</span>
                  <span className="prod-display-sector">{p.sector}</span>
                  <h4 className="prod-display-title">{p.name}</h4>
                  <p className="prod-display-desc">{p.desc}</p>
                  <div className="prod-display-footer">
                    <span className="dl-label demo-label" style={{fontSize:'0.65rem'}}>DEMO FIRST</span>
                    <span className="dl-label live-label" style={{fontSize:'0.65rem'}}>LIVE READY</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="prod-display-cta">
              <Link to={'/base/' + activeBase} className="card-link" style={{color: accent}}>
                View full base spec <ArrowRight size={14}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FULL GRID — ALL 50 */}
      <section className="section-block" id="all-grid">
        <p className="eyebrow">Full product grid</p>
        <h2>All {totalProducts} product directions across every base.</h2>
        <p className="section-sub" style={{marginBottom:'32px'}}>
          Every row is a potential product. Every product uses the same 4P3X modular architecture.
        </p>
        <div className="all-products-grid">
          {futureBases.map((b, i) => {
            const BIcon = iconMap[b.icon] || Layers;
            const ac = accentColors[i];
            const prods = productExamples[b.id] || [];
            return (
              <div key={b.id} className="all-prods-group" style={{'--accent': ac}}>
                <div className="all-prods-header">
                  <span style={{color: ac}}><BIcon size={16}/></span>
                  <span className="all-prods-base-num" style={{color: ac}}>Base {b.id}</span>
                  <Link to={'/base/' + b.id} className="all-prods-link" style={{color: ac}}>
                    {b.name} <ArrowRight size={11}/>
                  </Link>
                </div>
                {prods.map((p, j) => (
                  <div key={p.name} className="all-prod-row">
                    <span className="all-prod-num" style={{color: ac}}>{j+1}</span>
                    <div>
                      <strong className="all-prod-name">{p.name}</strong>
                      <span className="all-prod-sector">{p.sector}</span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-block">
        <p className="eyebrow">How product transformation works</p>
        <h2>Same base. Different sector. Different product.</h2>
        <div className="transform-steps">
          <div className="transform-step">
            <span className="transform-num" style={{color:'var(--gold)'}}>01</span>
            <h4>Start with the base</h4>
            <p>Choose the base that matches the core function — command, mobile, compliance, learning, welfare, etc.</p>
          </div>
          <div className="transform-arrow">&#x2192;</div>
          <div className="transform-step">
            <span className="transform-num" style={{color:'var(--green)'}}>02</span>
            <h4>Configure for the sector</h4>
            <p>Update the config file with sector-specific labels, data models, user roles, workflows and branding.</p>
          </div>
          <div className="transform-arrow">&#x2192;</div>
          <div className="transform-step">
            <span className="transform-num" style={{color:'var(--purple)'}}>03</span>
            <h4>Build demo version</h4>
            <p>Run all modules with labelled sample data. Validate with target users. Safe to share for review.</p>
          </div>
          <div className="transform-arrow">&#x2192;</div>
          <div className="transform-step">
            <span className="transform-num" style={{color:'var(--gold)'}}>04</span>
            <h4>Upgrade to live product</h4>
            <p>Connect the backend. Switch demo mode off. Deploy the sector-branded live product.</p>
          </div>
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
          <Link to="/agents">Agent Map</Link>
          <Link to="/investor">Investor View</Link>
          <a href="#top">&#x2191; Top</a>
        </nav>
      </footer>
    </div>
  );
}

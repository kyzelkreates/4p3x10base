import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle, Lock, Zap, ToggleLeft, ToggleRight,
  Server, ShieldCheck, Database, Cpu, Brain, Layers, Workflow, Sparkles,
  Rocket, Users
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

const demoFeatures = [
  { icon: CheckCircle, label: 'Labelled sample data', note: 'All records clearly marked as demo — no real user data.' },
  { icon: Users, label: 'No auth required', note: 'Anyone can view. Safe for investor and portfolio review.' },
  { icon: ToggleLeft, label: 'Full UI & workflows', note: 'Every screen, form, and flow works — just on demo records.' },
  { icon: Brain, label: 'AI agents on local knowledge', note: 'Agents respond using built-in prompts, no external API needed.' },
  { icon: ShieldCheck, label: 'No backend secrets', note: 'Zero API keys or service roles in any frontend file.' },
  { icon: Layers, label: 'Config-driven content', note: 'All base content loads from a single SSOT data file.' },
];

const liveFeatures = [
  { icon: Lock, label: 'Real auth & role-based access', note: 'Users sign in. Roles control what each person can see and do.' },
  { icon: Database, label: 'Persistent backend records', note: 'All data saved securely — Supabase, Firebase or custom API.' },
  { icon: Brain, label: 'AI agents on managed APIs', note: 'Agents connect to protected AI API endpoints via backend functions.' },
  { icon: ShieldCheck, label: 'Secure evidence & audit trail', note: 'Every action logged. Reports exportable. Audit-ready.' },
  { icon: Server, label: 'Backend environment config', note: 'All secrets in server-side env vars — never in the browser.' },
  { icon: ToggleRight, label: 'Demo mode switch off', note: 'Single config flag switches the entire product from demo to live.' },
];

const upgradeSteps = [
  {
    num: '01', phase: 'Demo build', color: 'var(--purple)',
    title: 'Build everything in demo mode',
    desc: 'All screens, workflows, AI agents, and exports working with labelled sample data. No backend needed. Safe to share.',
    actions: ['Build all UI modules', 'Wire up demo data from config', 'Test every user flow', 'Share for review'],
  },
  {
    num: '02', phase: 'User validation', color: 'var(--gold)',
    title: 'Validate with real users',
    desc: 'Share the demo with target users, investors or stakeholders. Gather feedback and confirm the product direction before building live infrastructure.',
    actions: ['Share demo link', 'Collect feedback', 'Confirm product direction', 'Adjust scope if needed'],
  },
  {
    num: '03', phase: 'Backend setup', color: 'var(--green)',
    title: 'Connect backend infrastructure',
    desc: 'Set up auth, database, AI API connections and environment variables on a secure backend. No secrets touch the frontend.',
    actions: ['Set up auth provider', 'Create database schema', 'Add backend functions', 'Store secrets in env vars'],
  },
  {
    num: '04', phase: 'Live deployment', color: 'var(--gold)',
    title: 'Switch demo mode off & deploy',
    desc: 'Flip the demo config flag. Point data calls to the live backend. Deploy to production. The same codebase — now a real product.',
    actions: ['Set DEMO_MODE=false', 'Point to live backend', 'Run validation tests', 'Deploy & monitor'],
  },
];

const guardedSecrets = [
  'SUPABASE_SERVICE_ROLE_KEY', 'OPENAI_API_KEY', 'GROQ_API_KEY',
  'STRIPE_SECRET_KEY', 'DATABASE_URL', 'JWT_SECRET',
  'PRIVATE_KEY', 'WEBHOOK_SECRET', 'ADMIN_TOKEN',
];

export default function DemoLivePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-shell base-detail-page" id="top">

      {/* HERO */}
      <header className="base-detail-hero" style={{'--accent': 'var(--green)'}}>
        <div className="base-detail-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={16} /> All bases</Link>
          <div className="dl-page-hero">
            <div>
              <p className="eyebrow">Run 4 — Demo / Live explanation layer</p>
              <h1 className="base-detail-h1">How demo mode and live mode work.</h1>
              <p className="base-detail-summary">
                Every 4P3X Verse&#x2122; Version 3.0 base is built with a demo/live boundary. This page
                explains what that means, how the upgrade path works, and what the 4P3X API Config Guard&#x2122;
                protects in every frontend file.
              </p>
              <div className="base-detail-ctas" style={{marginTop:'28px'}}>
                <a className="primary-btn" href="#upgrade-path" style={{background:'linear-gradient(135deg,#43ff9a,#a8ffce)',color:'#0a1f12'}}>
                  See upgrade path <ArrowRight size={16} />
                </a>
                <a className="secondary-btn" href="#api-guard">API Config Guard&#x2122;</a>
              </div>
            </div>
            <aside className="hero-panel" style={{minHeight:'260px'}}>
              <div className="orb" />
              <div className="hero-panel-content">
                <p className="eyebrow-small">Core principle</p>
                <h2 className="hero-panel-heading" style={{fontSize:'clamp(1.3rem,2.5vw,2.2rem)'}}>
                  Build everything in demo mode first. Switch to live when validated. Never expose secrets in the frontend.
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
          All Version 3.0 bases are <strong>future-ready product foundations</strong>. Demo mode lets them be
          showcased safely. Live mode is the upgrade path when backend infrastructure is ready.
        </p>
      </div>

      {/* DEMO vs LIVE COMPARISON */}
      <section className="section-block" id="comparison">
        <p className="eyebrow">Mode comparison</p>
        <h2>Demo mode vs live mode &#x2014; side by side.</h2>
        <div className="dlp-compare-grid">
          <div className="dlp-mode-col demo-col">
            <div className="dlp-mode-header">
              <ToggleLeft size={22} style={{color:'var(--purple)'}} />
              <span className="dl-label demo-label" style={{marginBottom:0}}>DEMO MODE</span>
            </div>
            <h3 style={{marginBottom:'20px'}}>Safe showcase layer</h3>
            {demoFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="dlp-feature-row">
                  <Icon size={17} style={{color:'var(--purple)',flexShrink:0,marginTop:'2px'}} />
                  <div>
                    <strong>{f.label}</strong>
                    <p>{f.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="dlp-divider" aria-hidden="true">
            <div className="dlp-divider-line" />
            <div className="dlp-divider-badge">
              <ArrowRight size={18} />
              <span>upgrade</span>
            </div>
            <div className="dlp-divider-line" />
          </div>

          <div className="dlp-mode-col live-col">
            <div className="dlp-mode-header">
              <ToggleRight size={22} style={{color:'var(--green)'}} />
              <span className="dl-label live-label" style={{marginBottom:0}}>LIVE MODE</span>
            </div>
            <h3 style={{marginBottom:'20px'}}>Production-ready system</h3>
            {liveFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="dlp-feature-row">
                  <Icon size={17} style={{color:'var(--green)',flexShrink:0,marginTop:'2px'}} />
                  <div>
                    <strong>{f.label}</strong>
                    <p>{f.note}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UPGRADE PATH */}
      <section className="section-block" id="upgrade-path">
        <p className="eyebrow">The upgrade path</p>
        <h2>Four stages from demo to live product.</h2>
        <p className="section-sub" style={{marginBottom:'32px'}}>
          A controlled, validated, low-risk upgrade process. No big-bang rewrite.
          The same codebase at every stage &#x2014; only the backend config changes.
        </p>
        <div className="upgrade-grid">
          {upgradeSteps.map((step, i) => (
            <div key={step.num} className="upgrade-card" style={{'--accent': step.color}}>
              <div className="upgrade-card-top">
                <span className="upgrade-num" style={{color: step.color}}>{step.num}</span>
                <span className="upgrade-phase" style={{background: step.color + '22', color: step.color, border: '1px solid ' + step.color + '44'}}>
                  {step.phase}
                </span>
              </div>
              <h3 className="upgrade-title">{step.title}</h3>
              <p className="upgrade-desc">{step.desc}</p>
              <ul className="upgrade-actions">
                {step.actions.map((a) => (
                  <li key={a}><span style={{color: step.color}}>&#x2713;</span> {a}</li>
                ))}
              </ul>
              {i < upgradeSteps.length - 1 && (
                <div className="upgrade-connector" aria-hidden="true">
                  <ArrowRight size={18} style={{color:'var(--muted)'}} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PER-BASE DEMO/LIVE PATHS */}
      <section className="section-block" id="per-base">
        <p className="eyebrow">Per-base demo to live paths</p>
        <h2>The specific upgrade path for each of the 10 bases.</h2>
        <p className="section-sub" style={{marginBottom:'28px'}}>
          Each base has a tailored demo/live pathway. Click any base to see its full detail page.
        </p>
        <div className="per-base-list">
          {futureBases.map((base, i) => {
            const Icon = iconMap[base.icon] || Layers;
            const accent = accentColors[i];
            return (
              <div key={base.id} className="per-base-row" style={{'--accent': accent}}>
                <div className="per-base-left">
                  <span style={{color: accent}}><Icon size={18} /></span>
                  <div>
                    <span className="per-base-num" style={{color: accent}}>Base {base.id}</span>
                    <strong className="per-base-name">{base.name}</strong>
                  </div>
                </div>
                <p className="per-base-path">{base.demoLivePath}</p>
                <Link to={'/base/' + base.id} className="per-base-link" style={{color: accent}}>
                  Detail <ArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* API CONFIG GUARD */}
      <section className="section-block" id="api-guard">
        <p className="eyebrow">4P3X API Config Guard&#x2122;</p>
        <h2>What is protected in every frontend file.</h2>
        <p className="section-sub" style={{marginBottom:'28px'}}>
          The API Config Guard&#x2122; is a non-negotiable rule in the 4P3X build system. These secrets
          must never appear in any frontend, public, or version-controlled file.
        </p>
        <div className="guard-grid">
          {guardedSecrets.map((secret) => (
            <div key={secret} className="guard-tile">
              <Lock size={14} style={{color:'var(--gold)', flexShrink:0}} />
              <code className="guard-secret">{secret}</code>
            </div>
          ))}
        </div>
        <div className="guard-rule-grid">
          <div className="guard-rule">
            <span className="guard-rule-icon bad">&#x2717;</span>
            <div>
              <h4>Never in frontend files</h4>
              <p>No secret key, token, or backend credential in any file served to the browser — even in comments or .env files committed to version control.</p>
            </div>
          </div>
          <div className="guard-rule">
            <span className="guard-rule-icon good">&#x2713;</span>
            <div>
              <h4>Always in server-side env vars</h4>
              <p>Secrets live in backend environment variables only. Frontend calls a backend function; the backend function handles the API call securely.</p>
            </div>
          </div>
          <div className="guard-rule">
            <span className="guard-rule-icon bad">&#x2717;</span>
            <div>
              <h4>Never guessed or invented</h4>
              <p>If an API key or config value is not explicitly provided, it is not assumed. Backend-only sections are presented as future configuration only.</p>
            </div>
          </div>
          <div className="guard-rule">
            <span className="guard-rule-icon good">&#x2713;</span>
            <div>
              <h4>Demo mode as safe default</h4>
              <p>Until a live backend is explicitly configured, demo mode is always the safe default. No partial-live, no accidental data leaks.</p>
            </div>
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
          <Link to="/agents">AI Agent Map</Link>
          <Link to="/investor">Investor View</Link>
          <a href="#top">&#x2191; Top</a>
        </nav>
      </footer>
    </div>
  );
}

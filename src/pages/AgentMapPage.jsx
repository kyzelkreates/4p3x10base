import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, Bot, Brain, Cpu, Database, Layers,
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

const agentRoles = [
  {
    slot: 'Agent 1',
    title: 'Operations / Guidance Agent',
    desc: 'Handles task support, workflow assistance, user-facing guidance and operational help within the base.',
    color: 'var(--green)',
  },
  {
    slot: 'Agent 2',
    title: 'Risk / Oversight Agent',
    desc: 'Handles risk assessment, quality checks, compliance oversight, escalation decisions and responsible AI review.',
    color: 'var(--purple)',
  },
];

const totalAgents = futureBases.reduce((sum, b) => sum + b.aiAgents.length, 0);

export default function AgentMapPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-shell base-detail-page" id="top">

      {/* HERO */}
      <header className="base-detail-hero" style={{'--accent': 'var(--purple)'}}>
        <div className="base-detail-hero-inner">
          <Link to="/" className="back-link"><ArrowLeft size={16} /> All bases</Link>
          <div className="dl-page-hero">
            <div>
              <p className="eyebrow">Run 5 — AI agent map</p>
              <h1 className="base-detail-h1">The full 4P3X AI agent map.</h1>
              <p className="base-detail-summary">
                Every Version 3.0 base ships with two purpose-built AI agents. This page maps all
                {' '}{totalAgents} agents across the 10 bases &#x2014; what they do, how they run in demo vs live mode,
                and the responsible AI principles they follow.
              </p>
              <div className="base-detail-ctas" style={{marginTop:'28px'}}>
                <a className="primary-btn" href="#agent-map" style={{background:'linear-gradient(135deg,#9b5cff,#c8a0ff)',color:'#12061e'}}>
                  View all {totalAgents} agents <ArrowRight size={16} />
                </a>
                <a className="secondary-btn" href="#agent-principles">Responsible AI principles</a>
              </div>
            </div>
            <aside className="hero-panel" style={{minHeight:'260px'}}>
              <div className="orb" />
              <div className="hero-panel-content">
                <p className="eyebrow-small">Architecture</p>
                <h2 className="hero-panel-heading" style={{fontSize:'clamp(1.3rem,2.5vw,2.2rem)'}}>
                  Two agents per base. One for operations. One for oversight. Every base. Every sector.
                </h2>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* STATS */}
      <section className="stats-strip" style={{margin:'-10px clamp(16px,5vw,64px) 20px'}}>
        <article className="stat-card">
          <strong style={{color:'var(--purple)'}}>{totalAgents}</strong>
          <span>total AI agents</span>
        </article>
        <article className="stat-card">
          <strong style={{color:'var(--green)'}}>10</strong>
          <span>bases covered</span>
        </article>
        <article className="stat-card">
          <strong style={{color:'var(--gold)'}}>2</strong>
          <span>agents per base</span>
        </article>
        <article className="stat-card">
          <strong style={{color:'var(--purple)'}}>0</strong>
          <span>exposed API keys</span>
        </article>
      </section>

      {/* DISCLAIMER */}
      <div className="disclaimer-banner" style={{margin:'0 clamp(16px,5vw,64px) 20px'}}>
        <span className="disclaimer-icon">&#x2139;</span>
        <p>
          All AI agents run on <strong>local knowledge in demo mode</strong>. In live mode they connect
          to managed AI APIs via protected backend functions only &#x2014; no API keys in frontend files.
        </p>
      </div>

      {/* AGENT ROLE EXPLAINER */}
      <section className="section-block" id="agent-roles">
        <p className="eyebrow">Agent structure</p>
        <h2>Two agents. Two roles. Every base.</h2>
        <p className="section-sub" style={{marginBottom:'28px'}}>
          The two-agent pattern is consistent across all 10 bases. It separates operational assistance
          from oversight &#x2014; preventing any single agent from both guiding and judging.
        </p>
        <div className="agent-role-grid">
          {agentRoles.map((role) => (
            <div key={role.slot} className="agent-role-card" style={{'--accent': role.color}}>
              <div className="agent-role-header">
                <Bot size={24} style={{color: role.color}} />
                <span className="agent-role-slot" style={{color: role.color, border: '1px solid ' + role.color + '44', background: role.color + '18'}}>
                  {role.slot}
                </span>
              </div>
              <h3 className="agent-role-title">{role.title}</h3>
              <p className="agent-role-desc">{role.desc}</p>
              <div className="agent-mode-row" style={{marginTop:'18px'}}>
                <span className="agent-mode-tag demo-tag">DEMO: local knowledge</span>
                <span className="agent-mode-tag live-tag">LIVE: managed API</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL AGENT MAP */}
      <section className="section-block" id="agent-map">
        <p className="eyebrow">Full agent map</p>
        <h2>All {totalAgents} agents across the 10 bases.</h2>
        <p className="section-sub" style={{marginBottom:'32px'}}>
          Each base is colour-coded. Click any base name to open its full detail page.
        </p>
        <div className="agent-map-grid">
          {futureBases.map((base, i) => {
            const Icon = iconMap[base.icon] || Layers;
            const accent = accentColors[i];
            return (
              <div key={base.id} className="agent-map-card" style={{'--accent': accent}}>
                <div className="agent-map-card-top">
                  <div className="agent-map-base-info">
                    <span className="agent-map-num" style={{color: accent}}>Base {base.id}</span>
                    <span style={{color: accent}}><Icon size={18} /></span>
                  </div>
                  <Link to={'/base/' + base.id} className="agent-map-link" style={{color: accent}}>
                    {base.name} <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="agent-map-agents">
                  {base.aiAgents.map((agent, j) => (
                    <div key={agent} className="agent-map-row" style={{borderLeftColor: j === 0 ? 'var(--green)' : 'var(--purple)'}}>
                      <div className="agent-map-slot-badge" style={{background: j === 0 ? 'rgba(67,255,154,0.12)' : 'rgba(155,92,255,0.12)', color: j === 0 ? 'var(--green)' : 'var(--purple)', border: '1px solid ' + (j === 0 ? 'rgba(67,255,154,0.25)' : 'rgba(155,92,255,0.25)')}}>
                        A{j + 1}
                      </div>
                      <div>
                        <strong className="agent-map-name">{agent}</strong>
                        <span className="agent-map-type">{j === 0 ? 'Operations' : 'Oversight'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AGENT MATRIX TABLE */}
      <section className="section-block" id="matrix">
        <p className="eyebrow">Agent matrix</p>
        <h2>Quick reference &#x2014; all agents at a glance.</h2>
        <div className="agent-matrix-wrap">
          <table className="agent-matrix">
            <thead>
              <tr>
                <th>Base</th>
                <th style={{color:'var(--green)'}}>Agent 1 (Operations)</th>
                <th style={{color:'var(--purple)'}}>Agent 2 (Oversight)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {futureBases.map((base, i) => {
                const accent = accentColors[i];
                const Icon = iconMap[base.icon] || Layers;
                return (
                  <tr key={base.id}>
                    <td>
                      <div className="matrix-base-cell">
                        <span style={{color: accent}}><Icon size={15} /></span>
                        <div>
                          <span className="matrix-base-num" style={{color: accent}}>Base {base.id}</span>
                          <span className="matrix-base-name">{base.name}</span>
                        </div>
                      </div>
                    </td>
                    <td><span className="matrix-agent agent-ops">{base.aiAgents[0]}</span></td>
                    <td><span className="matrix-agent agent-ovr">{base.aiAgents[1]}</span></td>
                    <td>
                      <Link to={'/base/' + base.id} className="matrix-link" style={{color: accent}}>
                        View <ArrowRight size={11} />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* RESPONSIBLE AI PRINCIPLES */}
      <section className="section-block" id="agent-principles">
        <p className="eyebrow">Responsible AI principles</p>
        <h2>How 4P3X AI agents are designed to behave.</h2>
        <div className="principles-grid">
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--green)'}}>&#x2713;</span>
            <h4>Human-in-the-loop</h4>
            <p>AI agents advise and surface information. Final decisions on sensitive actions are always confirmed by a human.</p>
          </div>
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--gold)'}}>&#x1F512;</span>
            <h4>No secret exposure</h4>
            <p>AI API keys are never in frontend code. Agents in live mode call backend functions that hold keys server-side only.</p>
          </div>
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--purple)'}}>&#x2299;</span>
            <h4>Separation of guidance and oversight</h4>
            <p>Agent 1 guides. Agent 2 checks. No single agent both recommends and approves in the same flow.</p>
          </div>
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--green)'}}>&#x1F4CB;</span>
            <h4>Transparent demo wording</h4>
            <p>In demo mode, agents clearly indicate they are running on sample knowledge &#x2014; never simulating live data as real.</p>
          </div>
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--gold)'}}>&#x26A0;</span>
            <h4>Safety boundaries</h4>
            <p>Agents in welfare, safeguarding and compliance bases have strict escalation rules &#x2014; they direct users to human reviewers for critical decisions.</p>
          </div>
          <div className="principle-card">
            <span className="principle-icon" style={{color:'var(--purple)'}}>&#x1F504;</span>
            <h4>Configurable via backend</h4>
            <p>Agent prompts, knowledge bases and API connections are managed through backend config &#x2014; changeable without redeploying the frontend.</p>
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
          <Link to="/demo-live">Demo/Live</Link>
          <Link to="/investor">Investor View</Link>
          <a href="#top">&#x2191; Top</a>
        </nav>
      </footer>
    </div>
  );
}

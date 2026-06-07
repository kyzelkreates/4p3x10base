import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = path === '/';
  const isBase = path.startsWith('/base/');
  const isDemoLive = path === '/demo-live';
  const isAgents = path === '/agents';
  const isProducts = path === '/products';
  const isInvestor = path === '/investor';

  return (
    <nav className={'sticky-nav' + (scrolled ? ' scrolled' : '')}>
      <Link to="/" className="brand-mark" style={{textDecoration:'none'}}>4P3X</Link>
      <div className="nav-links">
        {isHome && (<>
          <a href="#bases">10 Bases</a>
          <a href="#ai-agents">AI Agents</a>
          <a href="#roadmap">Roadmap</a>
          <Link to="/products" className="nav-pill-link">Products</Link>
          <Link to="/demo-live" className="nav-pill-link">Demo/Live</Link>
          <Link to="/investor" className="nav-pill-link">Investor</Link>
        </>)}
        {isBase && (<>
          <Link to="/">&#x2190; Home</Link>
          <a href="#overview">Overview</a>
          <a href="#modules">Modules</a>
          <a href="#agents">AI Agents</a>
          <a href="#products">Products</a>
          <a href="#demo-path">Demo/Live</a>
        </>)}
        {isDemoLive && (<>
          <Link to="/">&#x2190; Home</Link>
          <a href="#comparison">Comparison</a>
          <a href="#upgrade-path">Upgrade Path</a>
          <a href="#per-base">Per Base</a>
          <a href="#api-guard">API Guard&#x2122;</a>
        </>)}
        {isAgents && (<>
          <Link to="/">&#x2190; Home</Link>
          <a href="#agent-roles">Roles</a>
          <a href="#agent-map">Agent Map</a>
          <a href="#matrix">Matrix</a>
          <a href="#agent-principles">Principles</a>
        </>)}
        {isProducts && (<>
          <Link to="/">&#x2190; Home</Link>
          <a href="#explorer">Explorer</a>
          <a href="#all-grid">Full Grid</a>
          <Link to="/investor" className="nav-pill-link">Investor View</Link>
        </>)}
        {isInvestor && (<>
          <Link to="/">&#x2190; Home</Link>
          <a href="#why">Why V3.0</a>
          <a href="#market">Market</a>
          <a href="#evidence">Evidence</a>
          <a href="#the-ask">The Ask</a>
        </>)}
      </div>
    </nav>
  );
}

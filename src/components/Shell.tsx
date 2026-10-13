import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Activity, AlertTriangle, Bell, ChevronDown, CircleHelp, Command, FileChartColumn, LayoutDashboard, Menu, RadioTower, Settings2, Shield, ShieldCheck, Siren, X } from 'lucide-react';
import { SearchInput } from './Primitives';

const navigation = [
  { label: 'OVERVIEW', items: [{ to: '/', label: 'Security overview', icon: LayoutDashboard }] },
  { label: 'INVESTIGATE', items: [{ to: '/events', label: 'Threat monitor', icon: Activity, count: '128k' }, { to: '/alerts', label: 'Alerts', icon: AlertTriangle, count: '18' }, { to: '/incidents', label: 'Incidents', icon: Siren, count: '7' }] },
  { label: 'INTELLIGENCE', items: [{ to: '/analytics', label: 'Analytics', icon: FileChartColumn }, { to: '/sources', label: 'Data sources', icon: RadioTower }] },
  { label: 'SYSTEM', items: [{ to: '/settings', label: 'Settings', icon: Settings2 }] },
];

const pageNames: Record<string, { title: string; subtitle: string }> = {
  '/': { title: 'Security overview', subtitle: 'A real-time view of your security posture.' },
  '/events': { title: 'Threat monitor', subtitle: 'Search, filter and inspect security telemetry.' },
  '/alerts': { title: 'Alert triage', subtitle: 'Review detections and coordinate analyst response.' },
  '/incidents': { title: 'Incident response', subtitle: 'Track investigations from detection to resolution.' },
  '/analytics': { title: 'Security analytics', subtitle: 'Understand activity patterns and detection performance.' },
  '/sources': { title: 'Data sources', subtitle: 'Monitor connected telemetry sources and ingestion health.' },
  '/settings': { title: 'Settings', subtitle: 'Configure your workspace and detection preferences.' },
};

export function Shell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState('');
  const location = useLocation();
  const page = pageNames[location.pathname] ?? pageNames['/'];
  return <div className="app-shell">
    {mobileOpen && <button className="mobile-scrim" aria-label="Close navigation" onClick={() => setMobileOpen(false)} />}
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-symbol"><Shield size={20} strokeWidth={2.2}/><span/></div><div className="brand-copy"><span>SENTINEL</span><small>SECURITY OPERATIONS</small></div><button className="icon-button sidebar-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={18}/></button></div>
      <button className="workspace-switch"><span className="workspace-avatar">N</span><span className="workspace-copy"><strong>Northstar Systems</strong><small>Enterprise workspace</small></span><ChevronDown size={15}/></button>
      <nav className="main-nav">{navigation.map(group => <div className="nav-group" key={group.label}><div className="nav-label">{group.label}</div>{group.items.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMobileOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}><item.icon size={17} strokeWidth={1.8}/><span>{item.label}</span>{item.count && <small>{item.count}</small>}</NavLink>)}</div>)}</nav>
      <div className="sidebar-bottom"><div className="system-status"><span className="pulse-dot"/><div><strong>All systems operational</strong><small>Last checked just now</small></div></div><button className="help-link"><CircleHelp size={16}/> Help & documentation <span>↗</span></button><div className="user-profile"><div className="user-avatar">TP</div><div className="user-copy"><strong>Thabang P.</strong><small>Security analyst</small></div><button className="icon-button" aria-label="User menu"><ChevronDown size={16}/></button></div></div>
    </aside>
    <main className="main-area"><header className="topbar"><div className="topbar-left"><button className="icon-button mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={20}/></button><div className="breadcrumbs"><span>Workspace</span><span className="crumb-slash">/</span><strong>{page.title}</strong></div></div><div className="topbar-actions"><div className="global-search"><SearchInput value={globalSearch} onChange={setGlobalSearch} placeholder="Search events, alerts..."/><kbd>⌘ K</kbd></div><button className="icon-button notification-button" aria-label="Notifications"><Bell size={18}/><i/></button><span className="topbar-divider"/><div className="environment"><span className="environment-dot"/>DEMO ENVIRONMENT</div></div></header>
      <div className="page-content"><div className="page-header"><div><div className="eyebrow"><span className="eyebrow-line"/> SECURITY OPERATIONS CENTER</div><h1>{page.title}</h1><p>{page.subtitle}</p></div><div className="page-header-right"><span className="updated-label"><span className="pulse-dot"/> Demo telemetry active</span></div></div><Outlet context={{ globalSearch }}/></div>
      <footer className="app-footer"><span><ShieldCheck size={14}/> Sentinel SOC <span className="footer-dot">·</span> Demo telemetry</span><span><Command size={13}/> Built for investigation, not noise</span></footer>
    </main>
  </div>;
}

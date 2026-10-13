import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, ChevronDown, Search, X } from 'lucide-react';
import { clsx } from 'clsx';
import type { Severity } from '../types/security';

export function Panel({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={clsx('panel', className)} {...props}>{children}</section>;
}

export function SectionHeading({ title, description, action }: { title: string; description?: string; action?: ReactNode }) {
  return <div className="section-heading"><div><h2>{title}</h2>{description && <p>{description}</p>}</div>{action}</div>;
}

export function SeverityBadge({ severity }: { severity: Severity }) {
  return <span className={`severity severity-${severity.toLowerCase()}`}><span className="severity-dot" />{severity}</span>;
}

export function StatusBadge({ status }: { status: string }) {
  const value = status.toLowerCase().replaceAll(' ', '-');
  return <span className={`status status-${value}`}><span className="status-dot" />{status}</span>;
}

export function Button({ children, variant = 'secondary', className, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  return <button className={clsx('button', `button-${variant}`, className)} {...props}>{children}</button>;
}

export function SearchInput({ value, onChange, placeholder = 'Search anything...' }: { value: string; onChange: (value: string) => void; placeholder?: string }) {
  return <label className="search-input"><Search size={16}/><input value={value} onChange={event => onChange(event.target.value)} placeholder={placeholder}/>{value && <button aria-label="Clear search" onClick={() => onChange('')}><X size={14}/></button>}</label>;
}

export function Select({ value, onChange, options, label }: { value: string; onChange: (value: string) => void; options: string[]; label?: string }) {
  return <label className="select-wrap">{label && <span className="sr-only">{label}</span>}<select value={value} onChange={event => onChange(event.target.value)}>{options.map(option => <option key={option} value={option}>{option}</option>)}</select><ChevronDown size={14}/></label>;
}

export function MetricCard({ label, value, change, direction = 'up', icon, tone = 'green', footnote }: { label: string; value: string; change?: string; direction?: 'up' | 'down'; icon: ReactNode; tone?: string; footnote: string }) {
  return <Panel className="metric-card"><div className="metric-top"><span className="metric-label">{label}</span><span className={`metric-icon tone-${tone}`}>{icon}</span></div><div className="metric-value">{value}</div><div className="metric-bottom">{change && <span className={direction === 'down' ? 'change-good' : 'change-up'}>{direction === 'down' ? <ArrowDownRight size={14}/> : <ArrowUpRight size={14}/>} {change}</span>}<span className="metric-footnote">{footnote}</span></div></Panel>;
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <div className="empty-state"><div className="empty-mark">⌁</div><strong>{title}</strong><p>{description}</p></div>;
}

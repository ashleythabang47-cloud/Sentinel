export type Severity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Informational';
export type EventOutcome = 'Blocked' | 'Success' | 'Failed' | 'Observed';
export type AlertStatus = 'New' | 'Investigating' | 'Resolved' | 'Suppressed';
export type IncidentStatus = 'Open' | 'Investigating' | 'Contained' | 'Closed';

export interface SecurityEvent {
  id: string;
  timestamp: string;
  sourceIp: string;
  source: string;
  eventType: string;
  actor: string;
  target: string;
  severity: Severity;
  outcome: EventOutcome;
  summary: string;
}

export interface SecurityAlert {
  id: string;
  title: string;
  severity: Severity;
  status: AlertStatus;
  sourceIp: string;
  firstSeen: string;
  eventCount: number;
  rule: string;
  description: string;
  evidence: string[];
  assignee: string;
}

export interface Incident {
  id: string;
  title: string;
  severity: Severity;
  status: IncidentStatus;
  owner: string;
  updatedAt: string;
  alertCount: number;
  summary: string;
}

export interface DashboardSummary {
  eventsToday: number;
  eventsDelta: number;
  activeAlerts: number;
  criticalAlerts: number;
  openIncidents: number;
  meanResponseMinutes: number;
}

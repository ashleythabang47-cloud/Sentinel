import type { DashboardSummary, Incident, SecurityAlert, SecurityEvent } from '../types/security';

export const summary: DashboardSummary = {
  eventsToday: 128492,
  eventsDelta: 12.8,
  activeAlerts: 18,
  criticalAlerts: 3,
  openIncidents: 7,
  meanResponseMinutes: 14,
};

export const eventTrend = [
  { time: '00:00', events: 3400, baseline: 2900 }, { time: '02:00', events: 2700, baseline: 2800 },
  { time: '04:00', events: 1900, baseline: 2300 }, { time: '06:00', events: 3100, baseline: 2800 },
  { time: '08:00', events: 5900, baseline: 4400 }, { time: '10:00', events: 7900, baseline: 6200 },
  { time: '12:00', events: 7100, baseline: 6600 }, { time: '14:00', events: 9800, baseline: 7200 },
  { time: '16:00', events: 8400, baseline: 7000 }, { time: '18:00', events: 6600, baseline: 5900 },
  { time: '20:00', events: 5100, baseline: 4600 }, { time: '22:00', events: 3900, baseline: 3500 },
];

export const severityBreakdown = [
  { name: 'Critical', value: 3, fill: '#fb7185' },
  { name: 'High', value: 8, fill: '#fb923c' },
  { name: 'Medium', value: 24, fill: '#facc15' },
  { name: 'Low', value: 41, fill: '#60a5fa' },
  { name: 'Info', value: 62, fill: '#64748b' },
];

export const initialEvents: SecurityEvent[] = [
  { id: 'EVT-84291', timestamp: '2026-10-12T15:28:43+02:00', sourceIp: '185.220.101.42', source: 'auth-gateway-01', eventType: 'Authentication', actor: 'admin@sentinel.local', target: '/api/auth/login', severity: 'Critical', outcome: 'Blocked', summary: 'Repeated failed sign-ins across privileged account' },
  { id: 'EVT-84290', timestamp: '2026-10-12T15:27:18+02:00', sourceIp: '10.20.4.18', source: 'endpoint-win-042', eventType: 'Process', actor: 'svc-backup', target: 'powershell.exe', severity: 'High', outcome: 'Observed', summary: 'Encoded PowerShell command-line pattern detected' },
  { id: 'EVT-84289', timestamp: '2026-10-12T15:25:06+02:00', sourceIp: '172.16.8.22', source: 'web-edge-02', eventType: 'Web request', actor: 'anonymous', target: '/api/v1/users/../admin', severity: 'High', outcome: 'Blocked', summary: 'Path traversal pattern rejected by request filter' },
  { id: 'EVT-84288', timestamp: '2026-10-12T15:22:51+02:00', sourceIp: '10.20.1.35', source: 'identity-service', eventType: 'Authentication', actor: 'j.mokoena', target: 'sso/session', severity: 'Low', outcome: 'Success', summary: 'Successful sign-in from a recognized device' },
  { id: 'EVT-84287', timestamp: '2026-10-12T15:20:09+02:00', sourceIp: '192.0.2.84', source: 'vpn-concentrator', eventType: 'Network', actor: 'unknown', target: 'vpn-gateway:443', severity: 'Medium', outcome: 'Failed', summary: 'Connection attempts exceeded normal rate' },
  { id: 'EVT-84286', timestamp: '2026-10-12T15:18:34+02:00', sourceIp: '10.20.5.71', source: 'file-server-03', eventType: 'File access', actor: 'finance-ops', target: '/finance/payroll.csv', severity: 'Medium', outcome: 'Success', summary: 'Sensitive file accessed outside usual working pattern' },
  { id: 'EVT-84285', timestamp: '2026-10-12T15:16:12+02:00', sourceIp: '10.20.2.12', source: 'dns-resolver-01', eventType: 'DNS', actor: 'endpoint-112', target: 'updates.example.test', severity: 'Informational', outcome: 'Observed', summary: 'Routine DNS request recorded' },
  { id: 'EVT-84284', timestamp: '2026-10-12T15:14:47+02:00', sourceIp: '203.0.113.19', source: 'auth-gateway-01', eventType: 'Authentication', actor: 'svc-deploy', target: '/api/auth/token', severity: 'High', outcome: 'Failed', summary: 'Authentication token rejected after repeated retries' },
  { id: 'EVT-84283', timestamp: '2026-10-12T15:12:03+02:00', sourceIp: '10.20.7.44', source: 'endpoint-mac-018', eventType: 'Endpoint', actor: 'a.pillay', target: 'launch-agent', severity: 'Low', outcome: 'Success', summary: 'New launch agent registered by a managed endpoint' },
  { id: 'EVT-84282', timestamp: '2026-10-12T15:10:29+02:00', sourceIp: '198.51.100.76', source: 'web-edge-01', eventType: 'Web request', actor: 'anonymous', target: '/.env', severity: 'Medium', outcome: 'Blocked', summary: 'Request for a sensitive configuration path blocked' },
];

export const initialAlerts: SecurityAlert[] = [
  { id: 'ALT-2048', title: 'Possible credential brute-force activity', severity: 'Critical', status: 'New', sourceIp: '185.220.101.42', firstSeen: '2026-10-12T15:20:00+02:00', eventCount: 34, rule: 'AUTH-004 · Repeated authentication failures', description: 'A single source generated repeated authentication failures against a privileged account within a short time window.', evidence: ['34 failed sign-in attempts within 5 minutes', 'Target account: admin@sentinel.local', 'Requests were rate-limited by auth-gateway-01'], assignee: 'Unassigned' },
  { id: 'ALT-2047', title: 'Suspicious encoded PowerShell command', severity: 'High', status: 'Investigating', sourceIp: '10.20.4.18', firstSeen: '2026-10-12T15:17:00+02:00', eventCount: 6, rule: 'ENDPOINT-012 · Encoded command line', description: 'An endpoint process matched a suspicious command-line heuristic. Review the parent process and endpoint context before determining impact.', evidence: ['Encoded command-line flag observed', 'Host: endpoint-win-042', 'Execution context requires analyst validation'], assignee: 'T. Phahlamohlaka' },
  { id: 'ALT-2046', title: 'Web path traversal attempt blocked', severity: 'High', status: 'New', sourceIp: '172.16.8.22', firstSeen: '2026-10-12T15:12:00+02:00', eventCount: 12, rule: 'WEB-008 · Suspicious path pattern', description: 'Requests containing path traversal patterns were rejected at the web edge.', evidence: ['Traversal pattern matched request path', 'Request blocked by web-edge filter', 'No successful access confirmed by this event alone'], assignee: 'Unassigned' },
  { id: 'ALT-2045', title: 'Unusual access to sensitive file', severity: 'Medium', status: 'New', sourceIp: '10.20.5.71', firstSeen: '2026-10-12T14:56:00+02:00', eventCount: 3, rule: 'DATA-003 · Sensitive file access deviation', description: 'Access to a sensitive file occurred outside the established activity pattern. Validate whether the access was expected.', evidence: ['Target: /finance/payroll.csv', 'Actor: finance-ops', 'Baseline deviation requires contextual review'], assignee: 'Unassigned' },
  { id: 'ALT-2044', title: 'VPN connection rate exceeded threshold', severity: 'Medium', status: 'Resolved', sourceIp: '192.0.2.84', firstSeen: '2026-10-12T14:40:00+02:00', eventCount: 19, rule: 'NET-006 · Connection burst', description: 'A short connection burst was detected at the VPN gateway and reviewed by an analyst.', evidence: ['19 connection attempts in 60 seconds', 'No successful session associated with the burst', 'Reviewed and resolved'], assignee: 'S. Ndlovu' },
];

export const initialIncidents: Incident[] = [
  { id: 'INC-1092', title: 'Privileged account authentication attack', severity: 'Critical', status: 'Investigating', owner: 'T. Phahlamohlaka', updatedAt: '2026-10-12T15:29:00+02:00', alertCount: 2, summary: 'Repeated authentication failures are targeting a privileged account. Confirm account state and review related source activity.' },
  { id: 'INC-1091', title: 'Suspicious endpoint process activity', severity: 'High', status: 'Open', owner: 'Unassigned', updatedAt: '2026-10-12T15:21:00+02:00', alertCount: 1, summary: 'Encoded command-line activity was observed on a managed Windows endpoint. Parent process and user context are not yet verified.' },
  { id: 'INC-1090', title: 'Web edge traversal attempts', severity: 'High', status: 'Contained', owner: 'S. Ndlovu', updatedAt: '2026-10-12T14:58:00+02:00', alertCount: 3, summary: 'Suspicious request paths were blocked by the edge filter. No successful access has been confirmed in the reviewed telemetry.' },
  { id: 'INC-1088', title: 'Unusual sensitive file access', severity: 'Medium', status: 'Open', owner: 'Unassigned', updatedAt: '2026-10-12T14:47:00+02:00', alertCount: 1, summary: 'A sensitive finance file was accessed outside its normal activity window. Business justification is pending.' },
];

export const sourceHealth = [
  { name: 'Authentication Gateway', host: 'auth-gateway-01', status: 'Healthy', events: '42.8k', latency: '18 ms' },
  { name: 'Web Edge', host: 'web-edge-01 / 02', status: 'Healthy', events: '36.1k', latency: '24 ms' },
  { name: 'Windows Endpoints', host: '12 registered sources', status: 'Healthy', events: '28.4k', latency: '31 ms' },
  { name: 'VPN Concentrator', host: 'vpn-concentrator', status: 'Delayed', events: '8.2k', latency: '2.4 min' },
];

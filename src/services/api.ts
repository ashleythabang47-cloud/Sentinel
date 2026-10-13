import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
export const api = axios.create({ baseURL, timeout: 15000, headers: { 'Content-Type': 'application/json' } });

export const securityApi = {
  getSummary: () => api.get('/dashboard/summary'),
  getEvents: (params?: Record<string, string | number | undefined>) => api.get('/events', { params }),
  ingestEvents: (events: unknown[]) => api.post('/events/batch', { events }),
  getAlerts: () => api.get('/alerts'),
  updateAlert: (id: string, status: string) => api.patch(`/alerts/${id}`, { status }),
  getIncidents: () => api.get('/incidents'),
};

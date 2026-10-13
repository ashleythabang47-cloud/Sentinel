import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { SecurityProvider } from './app/SecurityContext';
import { Shell } from './components/Shell';
import { Overview } from './features/dashboard/Overview';
import { EventsPage } from './features/events/EventsPage';
import { AlertsPage } from './features/alerts/AlertsPage';
import { IncidentsPage } from './features/incidents/IncidentsPage';
import { AnalyticsPage } from './features/analytics/AnalyticsPage';
import { SettingsPage, SourcesPage } from './features/settings/UtilityPages';

export default function App() {
  return <BrowserRouter><SecurityProvider><Routes><Route element={<Shell/>}><Route index element={<Overview/>}/><Route path="events" element={<EventsPage/>}/><Route path="alerts" element={<AlertsPage/>}/><Route path="incidents" element={<IncidentsPage/>}/><Route path="analytics" element={<AnalyticsPage/>}/><Route path="sources" element={<SourcesPage/>}/><Route path="settings" element={<SettingsPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></SecurityProvider></BrowserRouter>;
}

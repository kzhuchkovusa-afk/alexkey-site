/** Shared by server and client code — must not import site.config.ts (keeps config out of the JS bundle). */
export type ServiceId = 'programs' | 'sales' | 'automation' | 'marketing';
export type CallTopic = ServiceId | 'not-sure';

/** Options of the first booking question — "What do you need help with?" (TZ, /call). */
export const callTopics: { id: CallTopic; label: string }[] = [
  { id: 'programs', label: 'Programs' },
  { id: 'sales', label: 'Sales & retention' },
  { id: 'automation', label: 'Automation' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'not-sure', label: 'Not sure' },
];

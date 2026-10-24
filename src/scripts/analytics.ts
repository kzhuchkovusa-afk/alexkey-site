/**
 * GA4 events from TZ «Функционал → Аналитика»:
 * demo_lesson_click, book_call_click (service), booking_completed, service_view,
 * article_read_75, outbound_programs.
 * Locally events are printed to the console instead of being sent.
 */

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    __AK?: { ga: string | null; debug: boolean };
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function track(name: string, params: Params = {}): void {
  const cfg = window.__AK;
  if (cfg?.debug) console.info('[analytics]', name, params);
  if (cfg?.ga) window.gtag('event', name, params);
}

/** Load gtag.js after the page is interactive, so it never competes with LCP. */
export function loadGa(): void {
  const id = window.__AK?.ga;
  if (!id) return;
  const inject = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(s);
  };
  const idle = (cb: () => void) =>
    'requestIdleCallback' in window ? window.requestIdleCallback(cb, { timeout: 3000 }) : setTimeout(cb, 1500);
  if (document.readyState === 'complete') idle(inject);
  else window.addEventListener('load', () => idle(inject), { once: true });
}

/* ---------- UTM: keep the incoming label so the calendar and the demo form see the entry ---------- */

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
const STORE_KEY = 'ak_utm';
const TTL = 30 * 24 * 60 * 60 * 1000;

export type Utm = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/** Incoming UTM from the current URL (saved for 30 days), or the last saved one. */
export function incomingUtm(): Utm | null {
  const params = new URLSearchParams(location.search);
  const found: Utm = {};
  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v) found[k] = v.slice(0, 100);
  }
  try {
    if (Object.keys(found).length) {
      localStorage.setItem(STORE_KEY, JSON.stringify({ utm: found, ts: Date.now() }));
      return found;
    }
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { utm: Utm; ts: number };
    return Date.now() - saved.ts < TTL ? saved.utm : null;
  } catch {
    return Object.keys(found).length ? found : null;
  }
}

/** "facebook.dm.post5" — the entry, compressed for utm_content on outbound links. */
export function entryLabel(utm: Utm | null): string | null {
  if (!utm?.utm_source) return null;
  return [utm.utm_source, utm.utm_medium, utm.utm_campaign]
    .filter(Boolean)
    .join('.')
    .replace(/[^\w.-]+/g, '-')
    .slice(0, 100);
}

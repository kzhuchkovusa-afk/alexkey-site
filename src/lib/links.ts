import { decisions } from '../site.config';

export { callTopics, type CallTopic, type ServiceId } from './topics';
import type { CallTopic } from './topics';

/**
 * Ссылка на сайт компании с UTM по ТЗ:
 * utm_source=alexkey, utm_medium=site, utm_campaign — страница и кнопка.
 * Входящая метка из Facebook дописывается в utm_content на клиенте (src/scripts/site.ts).
 */
export function companyUrl(pathOrUrl: string, page: string, button: string): string {
  const url = new URL(pathOrUrl, decisions.companySite);
  url.searchParams.set('utm_source', 'alexkey');
  url.searchParams.set('utm_medium', 'site');
  url.searchParams.set('utm_campaign', `${page}-${button}`);
  return url.toString();
}

/** «Get a free demo lesson» → форма GoCoding for Business. */
export const demoUrl = (page: string, button: string): string =>
  companyUrl(decisions.demoFormUrl, page, button);

/** «Book a 15-min call» → /call с уже выбранной услугой и местом клика. */
export function callUrl(page: string, button: string, service?: CallTopic): string {
  const params = new URLSearchParams();
  if (service) params.set('service', service);
  params.set('from', `${page}-${button}`);
  return `/call?${params.toString()}`;
}

import { decisions } from '../site.config';
import { person } from '../copy/shared';
import { val } from './env';

/** schema.org JSON-LD. Person on every page, Service on service pages, Article on articles. */

const org = {
  '@type': 'Organization',
  name: person.org,
  legalName: person.orgLegal,
};

export function personLd(site: URL, imageUrl?: string | null) {
  const sameAs = [val(decisions.social.facebook), val(decisions.social.linkedin)].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': new URL('/#person', site).toString(),
    name: person.name,
    alternateName: person.nativeName,
    jobTitle: person.role,
    worksFor: org,
    url: new URL('/', site).toString(),
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function serviceLd(
  site: URL,
  s: { name: string; description: string; path: string; price?: { amount: string; unit: 'MONTH' } },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: new URL(s.path, site).toString(),
    provider: org,
    brand: { '@type': 'Brand', name: 'GoCoding for Business' },
    areaServed: { '@type': 'Country', name: 'United States' },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Owners and directors of learning centers, afterschool and enrichment programs',
    },
    ...(s.price
      ? {
          offers: {
            '@type': 'Offer',
            priceCurrency: 'USD',
            priceSpecification: {
              '@type': 'UnitPriceSpecification',
              price: s.price.amount.replace(/[^0-9.]/g, ''),
              priceCurrency: 'USD',
              unitCode: 'MON',
              unitText: 'per program per month',
            },
          },
        }
      : {}),
  };
}

export function articleLd(
  site: URL,
  a: { title: string; description: string; path: string; image: string; datePublished?: Date; dateModified?: Date },
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    url: new URL(a.path, site).toString(),
    mainEntityOfPage: new URL(a.path, site).toString(),
    image: a.image,
    ...(a.datePublished ? { datePublished: a.datePublished.toISOString().slice(0, 10) } : {}),
    ...(a.dateModified ? { dateModified: a.dateModified.toISOString().slice(0, 10) } : {}),
    author: { '@id': new URL('/#person', site).toString(), '@type': 'Person', name: person.name, url: new URL('/about', site).toString() },
    publisher: { '@id': new URL('/#person', site).toString(), '@type': 'Person', name: person.name },
    inLanguage: 'en-US',
  };
}

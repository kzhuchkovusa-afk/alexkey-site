import { live, type LiveFlag } from '../site.config';

/**
 * Публичная выкладка — любая сборка на Netlify (прод, deploy preview, branch deploy),
 * кроме стенда под паролем (AK_PROTECTED_STAND=1). Локально можно проверить вид прода
 * через AK_PUBLIC=1.
 */
export const isPublicBuild: boolean =
  process.env.AK_PUBLIC === '1' ||
  (process.env.NETLIFY === 'true' && process.env.AK_PROTECTED_STAND !== '1');

/** Стенд под паролем (AK_PROTECTED_STAND=1): видны [ждёт] и плейсхолдеры, не индексируется, не прод. */
export const isProtectedStand: boolean = process.env.AK_PROTECTED_STAND === '1';

/**
 * Открытое превью без пароля (AK_PUBLIC_PREVIEW=1): как публичная выкладка — без [ждёт] и плейсхолдеров,
 * но не индексируется и не требует закрытых TODO. Для показа сайта до запуска на домене.
 */
export const isPublicPreview: boolean = process.env.AK_PUBLIC_PREVIEW === '1';

/** Продакшен Netlify — единственный контекст, который индексируется поисковиками. */
export const isProduction: boolean = process.env.CONTEXT === 'production' && !isProtectedStand && !isPublicPreview;

/** Плейсхолдеры и пункты [ждёт] видны только вне публичных выкладок. */
export const showPending: boolean = !isPublicBuild;

export const isTodo = (v: unknown): boolean => typeof v === 'string' && v.startsWith('TODO:');

/** Значение из конфига или null, если оно ещё TODO. */
export function val(v: string): string | null {
  return isTodo(v) ? null : v;
}

/** Виден ли пункт [ждёт] в этой сборке. */
export function isOn(flag: LiveFlag): boolean {
  return live[flag] === true || showPending;
}

/** Пункт виден, но ещё не одобрен — для пометки «pending» в локальной сборке. */
export function isPending(flag: LiveFlag): boolean {
  return live[flag] !== true && showPending;
}

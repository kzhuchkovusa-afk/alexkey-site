import { incomingUtm } from './analytics';

/**
 * Netlify forms (book, call): a plain POST that works without JS — the browser checks
 * required / type / pattern. With JS: errors at the field (aria-describedby), focus on the first
 * invalid field, the hidden `source` filled in. Messages come from the markup: data-missing and
 * data-invalid on each input, so no copy or config gets into the client bundle.
 */

/** Hidden `source`: utm_source / utm_campaign from the address (or saved from the entry), else the referrer's host. */
export function entrySource(): string {
  const utm = incomingUtm();
  if (utm?.utm_source) return [utm.utm_source, utm.utm_campaign].filter(Boolean).join(' / ');
  try {
    const r = document.referrer ? new URL(document.referrer) : null;
    if (r && r.host !== location.host) return `referrer: ${r.host}`;
  } catch {
    /* bad referrer */
  }
  return '';
}

type Field = HTMLInputElement;

function messageFor(input: Field): string {
  const v = input.value.trim();
  if (!v) return input.required ? (input.dataset.missing ?? '') : '';
  if (input.type === 'email' && input.validity.typeMismatch) return input.dataset.invalid ?? '';
  if (input.type === 'tel' && v.replace(/\D/g, '').length < 10) return input.dataset.invalid ?? '';
  return '';
}

function show(input: Field, msg: string) {
  const err = document.getElementById(`${input.id}-error`);
  if (!err) return;
  err.textContent = msg;
  err.hidden = !msg;
  if (msg) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', err.id);
  } else {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
  }
}

/** Enhance a form; `onValid` runs right before a valid submit goes out. */
export function enhanceForm(form: HTMLFormElement, onValid?: () => void) {
  const source = form.querySelector<HTMLInputElement>('input[name="source"]');
  if (source) source.value = entrySource();

  const fields = Array.from(form.querySelectorAll<Field>('input[data-missing]'));
  form.noValidate = true;
  let tried = false;
  for (const input of fields) {
    const recheck = () => tried && show(input, messageFor(input));
    input.addEventListener('input', recheck);
    input.addEventListener('blur', recheck);
  }
  form.addEventListener('submit', (e) => {
    tried = true;
    const bad = fields.filter((input) => {
      const msg = messageFor(input);
      show(input, msg);
      return Boolean(msg);
    });
    if (bad.length) {
      e.preventDefault();
      bad[0].focus();
      return;
    }
    onValid?.();
  });
}

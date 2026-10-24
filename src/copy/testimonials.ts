import type { TestimonialData } from '../components/content/Testimonial.astro';

/**
 * Testimonials — real only, verbatim, with the author's written permission (TZ «Правовые рамки»).
 * Authors' names and letters are not in the package until they agree: data stays empty.
 * Template for U.S. partners: before / what we set up / what changed / what you'd tell another owner.
 */
export const testimonials: { coddy: TestimonialData[]; partners: TestimonialData[] } = {
  /** 2–3 CODDY school owners — [ждёт: согласие авторов]. Flag: live.testimonialsCoddy */
  coddy: [],
  /** First U.S. partner centers — flag: live.firstFiveCenters */
  partners: [],
};

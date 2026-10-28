/**
 * /call and /call/booked — callback request instead of a calendar (decision 28.10, task 06):
 * Alex calls or texts within one business day and sets the time, as on profitforafterschool.com.
 */
export const call = {
  form: {
    topicLegend: 'What do you need help with?',
    name: 'Name',
    center: 'Center name',
    phone: 'Phone',
    email: 'Email',
    submit: 'Request my call',
    note: "I'll call or text you within one business day to pick a time.",
    consent:
      'By clicking “Request my call,” you agree that Alex Key and the GoCoding for Business team may contact you by email, phone or text about your request and our services. Message and data rates may apply. Reply STOP to opt out.',
    privacy: 'Privacy Policy',
  },
  booked: {
    title: 'Request received',
    h1: 'Thanks — talk soon.',
    text: "I'll call or text you within one business day to pick a time for our 15-minute call. Before the call, have your schedule and your free rooms in front of you — that's what we'll talk about.",
    book: 'Get the free book',
  },
};

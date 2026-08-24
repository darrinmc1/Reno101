/**
 * Single public price map for Renos101.
 * Waitlist only — checkout is not live. Do not add SKUs here that are not
 * already shown on the homepage bundles section.
 */
export type WaitlistPack = {
  kind: string
  price: string
  unit: string
  tagline: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  flag?: string
  footnote?: string
}

export const WAITLIST_PACKS: WaitlistPack[] = [
  {
    kind: "Live now",
    price: "Free",
    unit: "",
    tagline: "Enough to figure out if you're actually doing this.",
    features: [
      "Free Renovation Starter Pack",
      "Any individual free checklist",
      "Weekly renovation tip email",
      "Full access to the blog",
    ],
    cta: "Get the free Starter Pack",
    ctaHref: "#subscribe",
    highlighted: true,
    flag: "Start here",
  },
  {
    kind: "Project Bundle · soon",
    price: "AU$49",
    unit: " one-off",
    tagline: "Renovating one room? Everything for that job — when checkout lands.",
    features: [
      "Kitchen, Bathroom, Laundry or Outdoor pack",
      "All ebooks, templates, checklists & tools for that project",
      "Printable project tracker PDF",
      "Lifetime access + one year of free updates",
    ],
    cta: "Join the waitlist",
    ctaHref: "#subscribe",
    flag: "Best for one room",
  },
  {
    kind: "All-Access · soon",
    price: "AU$149",
    unit: " / year",
    tagline: "For multi-room renos and chaos managers with receipts.",
    features: [
      "Every stage, every resource, every bundle",
      "New content added every month",
      "Unlimited AI reno-advisor questions",
      "Early access to new stages — cancel renewal anytime",
    ],
    cta: "Join the waitlist",
    ctaHref: "#subscribe",
    footnote: "We'll email when Stripe checkout is live. No charge until then.",
  },
]

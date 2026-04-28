// Single source of truth for Reno101 pricing.
// One-time purchase model — no subscriptions.
//
// Three tier types: whole_house | room_guide | phase_bundle
// Plus add-on packages bought separately.
//
// Discount logic:
//   - Launch window: 25% off, auto-applied for the first 90 days after LAUNCH_DATE
//   - Waitlist promo: 50% off, applied via ?promo=waitlist URL parameter
//   (Both percentages are applied off the regular list price for that tier;
//    actual displayed numbers below match the user-supplied spec exactly,
//    not derived arithmetic — they're the canonical headline prices.)

/** Launch date — adjust this when you cut over from waitlist to public. */
export const LAUNCH_DATE = new Date("2026-05-01T00:00:00Z")

/** Length of the early-bird discount window after launch, in days. */
export const LAUNCH_WINDOW_DAYS = 90

export type Promo = "regular" | "launch" | "waitlist"

export type TierKind = "whole_house" | "room_guide" | "phase_bundle"

export interface Price {
  /** Regular list price (post-launch, no promo) — in AUD cents. */
  regular: number
  /** Auto-applied price during the launch window — in AUD cents. */
  launch: number
  /** Waitlist member price — in AUD cents. */
  waitlist: number
}

export interface PricingTier {
  id: string
  kind: TierKind
  title: string
  /** One-line value prop shown on the card. */
  tagline: string
  /** Longer description shown on detail / hover. */
  blurb: string
  price: Price
  /** Bullet list of what's included. */
  includes: string[]
  /** Optional list of explicit exclusions for the comparison table. */
  excludes?: string[]
  /** Card CTA copy. */
  cta: string
  /** "/#subscribe?source=pricing-..." or — once Stripe is live — "/checkout?product=...". */
  href: string
  /** Highlight the card with extra emphasis (true for the primary tier). */
  primary?: boolean
  /** Optional sub-options (e.g. which rooms / which phases). */
  options?: { id: string; label: string; description?: string }[]
}

export interface AddOn {
  id: string
  title: string
  tagline: string
  /** Price in AUD cents. */
  priceCents: number
  /** Bullet list of what's included. */
  includes: string[]
  /** Optional accent colour key (matches Tailwind). */
  accent?: "violet" | "sky" | "emerald" | "amber" | "rose"
  href: string
}

/** Format AUD cents as "AU$79.99". */
export function formatAUD(cents: number): string {
  return `AU$${(cents / 100).toFixed(2)}`
}

/** Returns the active promo for the current page render, given an optional ?promo= query value. */
export function resolvePromo(promoParam?: string | null, now: Date = new Date()): Promo {
  if (promoParam === "waitlist") return "waitlist"
  const launchEnd = new Date(LAUNCH_DATE)
  launchEnd.setDate(launchEnd.getDate() + LAUNCH_WINDOW_DAYS)
  if (now >= LAUNCH_DATE && now < launchEnd) return "launch"
  return "regular"
}

/** Pick the right price field for a given promo. */
export function priceFor(price: Price, promo: Promo): number {
  switch (promo) {
    case "waitlist":
      return price.waitlist
    case "launch":
      return price.launch
    default:
      return price.regular
  }
}

/* ──────────────────────────── Tiers ──────────────────────────── */

export const WHOLE_HOUSE: PricingTier = {
  id: "whole-house",
  kind: "whole_house",
  title: "Complete Renovation Guide",
  tagline: "Every stage. Every room. Buy once, use forever.",
  blurb:
    "The full Reno101 catalogue — all 16 stages, every ebook, every template, every checklist, every calculator, every room. Monthly content updates included for life.",
  price: { regular: 7999, launch: 5999, waitlist: 3999 },
  includes: [
    "All 16 renovation stages (Ideas → Party)",
    "14+ ebooks (PDF)",
    "20+ templates (Excel & Word)",
    "All checklists (PDF)",
    "Cost calculators & planning tools",
    "All rooms — kitchen, bathroom, bedroom, lounge, laundry, garage",
    "Landscaping & external works",
    "Email delivery + Google Drive access",
    "Monthly content updates for life",
  ],
  cta: "Get the Complete Guide",
  href: "/#subscribe?source=pricing-whole-house",
  primary: true,
}

export const ROOM_GUIDES: PricingTier = {
  id: "room-guide",
  kind: "room_guide",
  title: "Single Room Guide",
  tagline: "Just the room you're actually doing.",
  blurb:
    "Stage-by-stage guide for one specific room or area, plus the templates, checklists and calculators you need for it. Upgrade to the Complete Guide later for the difference.",
  price: { regular: 3999, launch: 2999, waitlist: 1499 },
  includes: [
    "Complete stage-by-stage guide for one room",
    "Room-specific templates (cost, scope, layout)",
    "Room-specific checklists",
    "Cost calculator scoped to that room",
    "Lifetime access — buy once",
  ],
  excludes: ["Other rooms", "Whole-house calculators", "All-room templates"],
  cta: "Buy a Room Guide",
  href: "/#subscribe?source=pricing-room-guide",
  options: [
    { id: "kitchen", label: "Kitchen Renovation Guide", description: "Cabinets, appliances, splashbacks, the lot." },
    { id: "bathroom", label: "Bathroom Renovation Guide", description: "Waterproofing, tiling, vanities, fixtures." },
    { id: "bedroom", label: "Bedroom / Master Suite Guide", description: "Robes, lighting, ensuite tie-in." },
    { id: "lounge", label: "Lounge / Living Room Guide", description: "Flooring, AV cabling, lighting plan." },
    { id: "laundry", label: "Laundry / Mudroom Guide", description: "Plumbing, drying, hard-wearing finishes." },
    { id: "garage", label: "Garage / Workshop Guide", description: "Floor coatings, power, storage build-outs." },
    { id: "external", label: "Landscaping & External Guide", description: "Excavation, paving, planting, drainage." },
  ],
}

export const PHASE_BUNDLES: PricingTier = {
  id: "phase-bundle",
  kind: "phase_bundle",
  title: "Phase Bundle",
  tagline: "Just the phase you're tackling now.",
  blurb:
    "All the stages in one phase, plus phase-specific templates, checklists and calculators. Good if you're only doing rough-in or only the finish work.",
  price: { regular: 4999, launch: 3999, waitlist: 1999 },
  includes: [
    "All stages in that phase",
    "Phase-specific templates & checklists",
    "Phase-specific cost calculator",
    "Lifetime access — buy once",
  ],
  excludes: ["Other phases", "Whole-house calculators"],
  cta: "Buy a Phase Bundle",
  href: "/#subscribe?source=pricing-phase-bundle",
  options: [
    { id: "phase-1", label: "Phase 1 — Plan & Prep", description: "Ideas + Planning + Demolition." },
    { id: "phase-2", label: "Phase 2 — Structure & Rough-In", description: "Rough-In + Construction + Landscaping." },
    { id: "phase-3", label: "Phase 3 — Finish & Hand-Over", description: "Finishing + Painting + Fit-Off + Punch List." },
  ],
}

export const TIERS: PricingTier[] = [WHOLE_HOUSE, ROOM_GUIDES, PHASE_BUNDLES]

/* ──────────────────────────── Add-ons ──────────────────────────── */

export const ADD_ONS: AddOn[] = [
  {
    id: "advanced-tools",
    title: "Advanced Tools Pack",
    tagline: "Power-user spreadsheets and estimators.",
    priceCents: 1499,
    accent: "violet",
    includes: [
      "Project timeline Gantt chart builder",
      "Auto-fill Gantt chart based on your scope",
      "Advanced cost calculator (material + labour split)",
      "Material quantity calculator",
      "Timeline estimator by room size",
    ],
    href: "/#subscribe?source=pricing-addon-advanced-tools",
  },
  {
    id: "contractor-templates",
    title: "Contractor Templates Pack",
    tagline: "White-label everything for client work.",
    priceCents: 2499,
    accent: "sky",
    includes: [
      "White-label versions of every template",
      "Drop in your own logo and company name",
      "Client proposal templates",
      "Invoice and quote templates",
      "Project schedule template",
    ],
    href: "/#subscribe?source=pricing-addon-contractor-templates",
  },
  {
    id: "budget-mastery",
    title: "Budget Mastery Pack",
    tagline: "The honest cost of every line item.",
    priceCents: 999,
    accent: "emerald",
    includes: [
      "Advanced budget tracker spreadsheet",
      "Hidden costs checklist (30+ items)",
      "Contingency calculator (10–20% buffer)",
      "Cost-per-square-metre breakdown",
    ],
    href: "/#subscribe?source=pricing-addon-budget-mastery",
  },
  {
    id: "specialist-guides",
    title: "Specialist Guides Pack",
    tagline: "Deep dives on the rooms and trades that bite.",
    priceCents: 2999,
    accent: "amber",
    includes: [
      "Kitchen deep-dive (stone selection, appliance specs)",
      "Bathroom deep-dive (tiles, fixtures, ventilation)",
      "Electrical deep-dive (panel upgrades, EV, smart home)",
      "Plumbing deep-dive (pipe sizes, pressure, hot water)",
    ],
    href: "/#subscribe?source=pricing-addon-specialist-guides",
  },
  {
    id: "horror-stories",
    title: "Reno Horror Stories",
    tagline: "Cautionary tales, lightheartedly told.",
    priceCents: 499,
    accent: "rose",
    includes: [
      "Anonymised real reno fails",
      "What went wrong — and why",
      "How to avoid the same fate",
      "Case studies you can read in one sitting",
    ],
    href: "/#subscribe?source=pricing-addon-horror-stories",
  },
]

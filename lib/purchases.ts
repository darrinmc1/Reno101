/**
 * Parked Stripe / Buy flip for Renos101.
 *
 * Waitlist is the live path. Do not delete checkout or Buy components
 * (`lib/pricing.ts`, `PricingCard`, `AddOnPackage`, `/subscription` plans).
 *
 * Flip later (no code delete):
 *   NEXT_PUBLIC_PURCHASES_OPEN=true
 * plus Stripe keys when checkout exists.
 * Defaults stay closed.
 */
export function purchasesOpen(): boolean {
  return process.env.NEXT_PUBLIC_PURCHASES_OPEN === "true"
}

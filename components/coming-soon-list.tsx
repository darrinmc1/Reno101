"use client"

import { FooterNewsletterForm } from "@/components/footer-newsletter-form"

/** Neutral signup shown wherever a paid plan, price, or checkout used to be. */
export function ComingSoonList({
  source = "pricing-coming-soon",
}: {
  source?: string
}) {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">Coming soon</h2>
      <p className="mt-2 text-sm text-slate-600">Join the list.</p>
      <FooterNewsletterForm source={source} />
    </div>
  )
}

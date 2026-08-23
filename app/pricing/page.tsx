import Link from "next/link"
import { Check, X, Zap, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const TIERS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with the essentials. No credit card required.",
    icon: Zap,
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    badge: null,
    cta: "Get Started Free",
    ctaHref: "/sign-up",
    ctaVariant: "outline" as const,
    highlight: false,
    features: [
      { label: "Access to blog guides & articles", included: true },
      { label: "Basic renovation glossary", included: true },
      { label: "3 project stage guides", included: true },
      { label: "Community FAQ access", included: true },
      { label: "AI renovation assistant", included: false },
      { label: "Material cost tracker", included: false },
      { label: "Downloadable checklists & templates", included: false },
      { label: "Priority email support", included: false },
      { label: "Advanced design tools", included: false },
    ],
  },
  {
    name: "Basic",
    price: "$9",
    period: "per month",
    description: "Everything you need to plan and execute your renovation confidently.",
    icon: Shield,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "Most Popular",
    cta: "Start Basic Plan",
    ctaHref: "/sign-up",
    ctaVariant: "default" as const,
    highlight: true,
    features: [
      { label: "Access to blog guides & articles", included: true },
      { label: "Basic renovation glossary", included: true },
      { label: "All project stage guides", included: true },
      { label: "Community FAQ access", included: true },
      { label: "AI renovation assistant", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Downloadable checklists & templates", included: true },
      { label: "Priority email support", included: false },
      { label: "Advanced design tools", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$24",
    period: "per month",
    description: "The full toolkit for serious renovators who want zero surprises.",
    icon: Crown,
    iconBg: "bg-amber-500",
    iconColor: "text-white",
    badge: "Best Value",
    cta: "Go Premium",
    ctaHref: "/sign-up",
    ctaVariant: "default" as const,
    highlight: false,
    features: [
      { label: "Access to blog guides & articles", included: true },
      { label: "Full renovation glossary + search", included: true },
      { label: "All project stage guides", included: true },
      { label: "Community FAQ access", included: true },
      { label: "AI renovation assistant (unlimited)", included: true },
      { label: "Material cost tracker", included: true },
      { label: "Downloadable checklists & templates", included: true },
      { label: "Priority email support", included: true },
      { label: "Advanced design tools", included: true },
    ],
  },
]

const COMPARISON_FEATURES = [
  "Blog guides & articles",
  "Renovation glossary",
  "Project stage guides",
  "Community FAQ",
  "AI renovation assistant",
  "Material cost tracker",
  "Checklists & templates",
  "Priority email support",
  "Advanced design tools",
]

const TIER_FEATURE_MAP: Record<string, boolean[]> = {
  "Blog guides & articles":    [true,  true,  true],
  "Renovation glossary":       [true,  true,  true],
  "Project stage guides":      [false, true,  true],
  "Community FAQ":             [true,  true,  true],
  "AI renovation assistant":   [false, true,  true],
  "Material cost tracker":     [false, true,  true],
  "Checklists & templates":    [false, true,  true],
  "Priority email support":    [false, false, true],
  "Advanced design tools":     [false, false, true],
}

export default function PricingPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Simple, honest pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          No hidden fees. No &ldquo;call us for a quote&rdquo; nonsense. Pick the plan that matches where you are in your renovation journey.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {TIERS.map((tier) => {
          const Icon = tier.icon
          return (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-sm flex flex-col ${
                tier.highlight ? "border-amber-400 ring-2 ring-amber-400 shadow-md" : "border-slate-200"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold text-white shadow">
                    {tier.badge}
                  </span>
                </div>
              )}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${tier.iconBg}`}>
                <Icon className={`h-6 w-6 ${tier.iconColor}`} />
              </div>
              <h2 className="mt-4 text-xl font-bold text-slate-900">{tier.name}</h2>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="mb-1 text-sm text-slate-500">/{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{tier.description}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature.label} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    ) : (
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included ? "text-slate-700" : "text-slate-400"
                      }`}
                    >
                      {feature.label}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link href={tier.ctaHref}>
                  <Button
                    variant={tier.ctaVariant}
                    className={`w-full rounded-xl ${
                      tier.highlight
                        ? "bg-amber-500 text-white hover:bg-amber-600 border-amber-500"
                        : tier.name === "Premium"
                        ? "bg-slate-900 text-white hover:bg-slate-800"
                        : ""
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Feature Comparison Table */}
      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold text-slate-900">Full feature comparison</h2>
        <p className="mt-2 text-center text-slate-600">See exactly what&rsquo;s included in each plan at a glance.</p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-left font-semibold text-slate-700">Feature</th>
                {TIERS.map((tier) => (
                  <th key={tier.name} className="px-6 py-4 text-center font-semibold text-slate-700">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                        tier.highlight
                          ? "bg-amber-100 text-amber-700"
                          : tier.name === "Premium"
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tier.name}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((feature, idx) => (
                <tr
                  key={feature}
                  className={`border-b border-slate-100 ${
                    idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-slate-700">{feature}</td>
                  {TIER_FEATURE_MAP[feature].map((included, i) => (
                    <td key={i} className="px-6 py-4 text-center">
                      {included ? (
                        <Check className="mx-auto h-5 w-5 text-amber-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-slate-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ / Reassurance strip */}
      <div className="mt-16 rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-xl font-bold text-slate-900">Still not sure which plan is right for you?</h2>
        <p className="mt-2 text-slate-600">
          Start free — no credit card needed. Upgrade any time when you&rsquo;re ready to unlock more tools.
          Every paid plan comes with a 7-day money-back guarantee, no questions asked.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/sign-up">
            <Button className="rounded-xl bg-amber-500 px-8 text-white hover:bg-amber-600">
              Start for Free
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl px-8">
              Talk to Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Bot, Check, CheckSquare, FileText, HelpCircle, Minus, Package, Shield, Sparkles, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { PriceDisclaimer } from "@/components/price-disclaimer"

type Billing = "annual" | "monthly"

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("annual")
  const allAccessPrice = billing === "annual" ? "AU$149" : "AU$19"
  const allAccessUnit = billing === "annual" ? "/ year" : "/ month"
  const allAccessNote =
    billing === "annual"
      ? "Works out to about AU$12.42/month. Save AU$79 vs monthly."
      : "No annual commitment — cancel after the month that breaks you."

  return (
    <main className="flex-1">
      {/* ============ HERO ============ */}
      <section className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Simple pricing for <span className="text-primary">complicated renovation feelings</span>.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Free for scoping. One room's worth for one room. All the rooms for a year if you're clearly in over your head and honest about it.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-sm">
            <BillingPill label="Annual" active={billing === "annual"} onClick={() => setBilling("annual")} saveBadge="Save $79" />
            <BillingPill label="Monthly" active={billing === "monthly"} onClick={() => setBilling("monthly")} />
          </div>
        </div>

        {/* Main 3 tiers */}
        <div id="bundles" className="mt-10 grid gap-6 lg:grid-cols-3">
          <PricingCard
            kind="Free forever"
            price="Free"
            unit=""
            tagline="Enough to figure out if you're actually doing this, or just thinking about it on a Sunday."
            features={[
              "Free Renovation Starter Pack",
              "Any individual free checklist",
              "Weekly renovation tip email",
              "Full access to the blog",
            ]}
            notIncluded={["No paid ebooks", "No AI research questions", "No project bundles"]}
            cta="Get the starter pack"
            ctaHref="/#subscribe"
          />

          <PricingCard
            kind="Project Bundle"
            price="AU$49"
            unit=" one-off"
            tagline="One room, one payment, lifetime access. The option that makes sense if you're just doing the kitchen."
            features={[
              "Pick one: Kitchen, Bathroom, Laundry or Outdoor",
              "All ebooks, templates, checklists & tools for that project",
              "Printable project tracker PDF",
              "1 year of free updates to the pack",
              "Lifetime access to the files",
            ]}
            cta="Notify me at launch"
            ctaHref="/#subscribe"
            highlighted
            flag="Best for one room"
          />

          <PricingCard
            kind="All-Access"
            price={allAccessPrice}
            unit={allAccessUnit}
            tagline="For multi-room renos, serial renovators, and chaos managers with receipts."
            features={[
              "Every stage, every resource, every bundle",
              "New content added every month",
              "Unlimited AI reno-advisor questions (instant answers)",
              "Early access to new stages and resources",
              "Cancel renewal anytime",
            ]}
            cta="Notify me at launch"
            ctaHref="/#subscribe"
            footnote={allAccessNote}
          />
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Prices in AUD. Stripe integration targeted July 2026 — the free Starter Pack is live now.
        </p>
      </section>

      {/* ============ GUARANTEE BANNER ============ */}
      <section className="container px-4 pb-4 md:px-6">
        <div className="mx-auto flex max-w-3xl items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-900">
          <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-emerald-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <div className="font-bold">30-day refund. No grout-shaped questions asked.</div>
            <p className="text-sm opacity-90">
              If the pack doesn't help you actually move your reno forward, email us within 30 days and we'll refund you. The files are yours to keep anyway.
            </p>
          </div>
        </div>
      </section>

      {/* ============ A LA CARTE ============ */}
      <section id="a-la-carte" className="container px-4 py-16 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            À la carte
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Just need one thing?</h2>
          <p className="mt-3 text-muted-foreground">
            Every template, ebook and checklist is available as a single download. No subscription required. No "unlock 47 features you didn't want" dance.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <CatalogueCard
            icon={<FileText className="h-5 w-5" />}
            tint="bg-sky-600"
            kind="Templates"
            price="AU$4.90 each"
            items={[
              "Renovation Cost Estimates",
              "Renovation Project Scope",
              "Measurement Checklist",
              "Project Timeline",
              "Task Lists",
              "Gantt Chart — all reno tasks",
              "Kitchen Items & Sample Costs",
              "Bathroom Items & Sample Costs",
            ]}
            bundleCta="Or get all 10 templates for AU$49"
          />
          <CatalogueCard
            icon={<BookOpen className="h-5 w-5" />}
            tint="bg-orange-500"
            kind="Ebooks"
            price="AU$9.90 each"
            items={[
              "Where Should I Start?",
              "Best Bang for Your Reno Buck",
              "10 Common Renovation Mistakes",
              "Small Things That Make a Big Difference",
              "10 Ways to Save Money on a Renovation",
              "Request an ebook topic (custom)",
            ]}
            bundleCta="Or get all 10 'Before You Start' ebooks for AU$49"
          />
          <CatalogueCard
            icon={<CheckSquare className="h-5 w-5" />}
            tint="bg-stone-700"
            kind="Checklists"
            price="AU$9.90 each"
            items={[
              "Planning Checklist",
              "10 Things You MUST Check Before a Reno",
              "10 Hidden Renovation Costs",
              "10 Common Renovation Misadventures",
              "Open Home Inspection Checklist",
              "Request a custom checklist",
            ]}
            bundleCta="Or get all 10 checklists for AU$29"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Tips &amp; Tricks series — AU$4.90 per trade (Plastering, Carpentry, Plumbing, Landscaping, Painting). All 200+ tips for AU$49.
          </p>
        </div>
      </section>

      {/* ============ AI RENO ADVISOR ============ */}
      <section id="ai-advisor" className="border-y border-border/70 bg-background/40">
        <div className="container px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-800 hover:bg-indigo-100">
              <Bot className="mr-1 h-3.5 w-3.5 inline" /> Included with All-Access
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Your AI reno advisor, awake at 2am so you don't have to be.</h2>
            <p className="mt-3 text-muted-foreground">
              Trained on the full library of renovation content. Ask anything: &ldquo;is my kitchen layout going to fail council?&rdquo;, &ldquo;what should I ask before signing this quote?&rdquo;, &ldquo;what order do I paint a ceiling, walls, and trim?&rdquo;. Instant, plain-English answers. Not a 24-hour wait. Not a chatbot pretending to understand.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Unlimited questions on All-Access. Free tier gets 3 sample questions to try it out.
            </p>
          </div>
        </div>
      </section>

      {/* ============ FEATURE COMPARISON ============ */}
      <section className="container px-4 py-16 md:px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">What's actually in each plan</h2>
          <p className="mt-3 text-muted-foreground">No asterisks. No "some features may be limited." Just a table.</p>
        </div>

        <div className="mx-auto max-w-5xl overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-secondary/60">
              <tr className="text-left">
                <th className="px-5 py-4 font-semibold">Feature</th>
                <th className="px-5 py-4 text-center font-semibold">Free</th>
                <th className="px-5 py-4 text-center font-semibold">Project Bundle</th>
                <th className="px-5 py-4 text-center font-semibold text-primary">All-Access</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <CompareRow label="Free Starter Pack" a b c />
              <CompareRow label="Weekly tip email" a b c />
              <CompareRow label="Blog + glossary access" a b c />
              <CompareRow label="Individual checklists (AU$9.90 each)" a="AU$9.90" b="Included for bundle" c="Included" />
              <CompareRow label="Individual templates (AU$4.90 each)" a="AU$4.90" b="Included for bundle" c="Included" />
              <CompareRow label="Project bundle (Kitchen / Bathroom / Laundry / Outdoor)" b={{ kind: "custom", value: "Pick 1" }} c="All 4" />
              <CompareRow label="Printable project tracker PDF" b c />
              <CompareRow label="1 year of free updates" b c />
              <CompareRow label="New content every month" c />
              <CompareRow label="AI reno-advisor questions" a="3 samples" b="3 samples" c="Unlimited" />
              <CompareRow label="Early access to new content" c />
              <CompareRow label="Cancel / refund" a="Nothing to cancel" b="30-day refund" c={{ kind: "custom", value: "30-day refund, cancel renewal anytime" }} />
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <Badge variant="secondary" className="mb-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              <HelpCircle className="mr-1 h-3.5 w-3.5 inline" /> FAQ
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Frequently asked, honestly answered</h2>
          </div>

          <Accordion type="single" collapsible className="divide-y divide-border rounded-2xl border border-border bg-card shadow-sm">
            <FaqRow q="Can I upgrade from a Project Bundle to All-Access?">
              Yes. The bundle credit automatically applies toward an All-Access Annual subscription if you upgrade within 90 days — handled by the account system, no back-and-forth required.
            </FaqRow>
            <FaqRow q="What if I cancel the subscription?">
              You keep every file you downloaded during your subscription for personal use — they don't expire or get revoked. New content and AI advisor access stop at the end of the current period. No "lose everything on cancellation" nonsense.
            </FaqRow>
            <FaqRow q="Do you do refunds?">
              Yes. Bundles and annual plans come with a 30-day refund, processed automatically from your account page — no grout-shaped questions asked. Monthly subscriptions: current period only, pro-rated.
            </FaqRow>
            <FaqRow q="What's actually in the Starter Pack?">
              Ideas and Planning stage checklists, a budget tracker template, a quote comparison template, and the 'Before You Start' ebook. Everything that covers the stages most people panic about, delivered the moment you sign up.
            </FaqRow>
            <FaqRow q="Is there a free trial for All-Access?">
              Yes — 7 days full access, no card required. Plenty of time to decide whether this platform is the adult supervision your reno deserves.
            </FaqRow>
            <FaqRow q="How does the AI reno advisor work?">
              Trained on every ebook, template, and checklist in the library plus general renovation knowledge. Ask a specific question in plain English — &lsquo;what order do I paint a ceiling, walls, and trim?&rsquo;, &lsquo;what should I ask before signing this quote?&rsquo; — and you get an instant answer. Unlimited on All-Access, 3 sample questions on Free to try it out. Not a chatbot pretending.
            </FaqRow>
            <FaqRow q="Can I buy just one ebook instead of a whole bundle?">
              Of course. Every ebook is AU$9.90, every template is AU$4.90, every checklist is AU$9.90. Bundles are the same files, collected into project-shaped packs and discounted.
            </FaqRow>
            <FaqRow q="Which country is this for?">
              The advice is general enough for most English-speaking markets — Australia, UK, NZ, Canada, US. Regulatory specifics (council permits, building codes, Certificates of Compliance) vary by country and state/province, so always cross-check the paperwork side with your local authority. Pricing is in AUD; material costs referenced in our guides skew Australian but the principles travel.
            </FaqRow>
            <FaqRow q="I'm renovating a birdhouse. Which plan?">
              Free. If the birdhouse requires a development application, we'd genuinely like to hear about it.
            </FaqRow>
          </Accordion>
        </div>
      </section>

      {/* ============ PRICE DISCLAIMER ============ */}
      <section className="container px-4 pb-12 md:px-6">
        <PriceDisclaimer />
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="container px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/20 p-10 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Still deciding?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Grab the Starter Pack for free. It's the first five checklists most people need — and a polite reminder that you're not the first person to be overwhelmed by a reno.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/#subscribe">
                Get the free Starter Pack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/#stages">Browse the 16 stages</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

/* ============ COMPONENTS ============ */

function BillingPill({ label, active, onClick, saveBadge }: { label: string; active: boolean; onClick: () => void; saveBadge?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
        active ? "bg-primary text-primary-foreground shadow" : "text-foreground hover:bg-secondary"
      }`}
    >
      {label}
      {saveBadge && (
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${active ? "bg-primary-foreground/20" : "bg-emerald-100 text-emerald-700"}`}>
          {saveBadge}
        </span>
      )}
    </button>
  )
}

function PricingCard({
  kind,
  price,
  unit,
  tagline,
  features,
  notIncluded,
  cta,
  ctaHref,
  highlighted = false,
  flag,
  footnote,
}: {
  kind: string
  price: string
  unit: string
  tagline: string
  features: string[]
  notIncluded?: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  flag?: string
  footnote?: string
}) {
  return (
    <Card
      className={`relative flex h-full flex-col rounded-2xl ${
        highlighted
          ? "border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
          : "border-2"
      }`}
    >
      {highlighted && flag && (
        <div className="absolute -top-3 right-4 rounded-full bg-background px-3 py-1 text-xs font-bold text-primary shadow">
          {flag}
        </div>
      )}
      <CardHeader>
        <div className={`text-xs font-semibold uppercase tracking-widest ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>
          {kind}
        </div>
        <CardTitle className="mt-2 flex items-baseline gap-1">
          <span className={`text-4xl font-extrabold ${highlighted ? "" : "text-foreground"}`}>{price}</span>
          <span className={`text-sm ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>{unit}</span>
        </CardTitle>
        <p className={`mt-3 text-sm ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>{tagline}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2.5 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${highlighted ? "text-primary-foreground" : "text-primary"}`} aria-hidden />
              <span>{f}</span>
            </li>
          ))}
          {notIncluded?.map((f) => (
            <li key={f} className={`flex items-start gap-2 ${highlighted ? "opacity-60" : "text-muted-foreground"}`}>
              <Minus className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        {footnote && (
          <p className={`mt-4 text-xs ${highlighted ? "opacity-80" : "text-muted-foreground"}`}>{footnote}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant={highlighted ? "secondary" : "outline"}
          className={`w-full rounded-lg ${highlighted ? "bg-background text-primary hover:bg-background/90" : ""}`}
        >
          <Link href={ctaHref}>{cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function CatalogueCard({
  icon,
  tint,
  kind,
  price,
  items,
  bundleCta,
}: {
  icon: React.ReactNode
  tint: string
  kind: string
  price: string
  items: string[]
  bundleCta?: string
}) {
  return (
    <Card className="flex h-full flex-col rounded-2xl border-2">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-lg text-white ${tint}`}>{icon}</div>
          <div>
            <CardTitle className="text-lg">{kind}</CardTitle>
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{price}</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-1.5 text-sm">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground">
              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {bundleCta && (
        <CardFooter className="flex-col items-start gap-2">
          <div className="flex w-full items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
            <Package className="h-3.5 w-3.5" />
            {bundleCta}
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

type CompareCell = boolean | string | { kind: "custom"; value: string }

function renderCell(v: CompareCell | undefined) {
  if (v === undefined || v === false) {
    return <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-label="Not included" />
  }
  if (v === true) {
    return <Check className="mx-auto h-4 w-4 text-emerald-600" aria-label="Included" />
  }
  const text = typeof v === "string" ? v : v.value
  return <span className="text-xs font-medium text-foreground">{text}</span>
}

function CompareRow({ label, a, b, c }: { label: string; a?: CompareCell; b?: CompareCell; c?: CompareCell }) {
  return (
    <tr>
      <td className="px-5 py-3 font-medium text-foreground">{label}</td>
      <td className="px-5 py-3 text-center">{renderCell(a)}</td>
      <td className="px-5 py-3 text-center">{renderCell(b)}</td>
      <td className="px-5 py-3 text-center bg-primary/5">{renderCell(c)}</td>
    </tr>
  )
}

function FaqRow({ q, children }: { q: string; children: React.ReactNode }) {
  const id = q.slice(0, 20)
  return (
    <AccordionItem value={id} className="border-0 px-5">
      <AccordionTrigger className="text-left font-semibold hover:no-underline">{q}</AccordionTrigger>
      <AccordionContent className="text-muted-foreground">{children}</AccordionContent>
    </AccordionItem>
  )
}

import Link from "next/link"
import { ArrowRight, BookOpen, Check, CheckSquare, Compass, FileText, Hammer, Lightbulb, PartyPopper, Sparkles, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EmailCapture } from "@/components/email-capture"
import FeaturedBlogs from "@/components/featured-blogs"
import { PriceDisclaimer } from "@/components/price-disclaimer"
import HeroSection from "@/components/hero-section"
import { RenoWisdom } from "@/components/reno-wisdom"
import { STAGES, PHASES, PHASE_META, DIFFICULTY_META, getStagesByPhase, getResourceCounts } from "@/lib/stages"
import WhatsNew from "@/components/whats-new"


// The first 5 stages, with a richer color/accent palette for the hero journey visual
const JOURNEY_PREVIEW = STAGES.slice(0, 5)

export default function Home() {
  const resourceCounts = getResourceCounts()
  return (
    <main className="flex-1">
      {/* ============ HERO ============ */}
      <HeroSection />
      <WhatsNew />

      {/* ============ HOW IT WORKS ============ */}
      <section className="border-t border-border/70 bg-background/40">
        <div className="container grid gap-6 px-4 py-12 sm:grid-cols-3 md:px-6">
          <HowCard
            n={1}
            title="Find the stage you're actually up to"
            body="Click into any of the 16 stages. Each one shows the steps, the materials, and a colour telling you whether this is a Sunday job or a licensed-tradie job."
          />
          <HowCard
            n={2}
            title="Grab the resources"
            body="Ebooks, templates, checklists and tools, all tagged to the stage that needs them. No forum crawling. No man named Gary explaining grout."
          />
          <HowCard
            n={3}
            title="Reno without the overwhelm"
            body="Know what's DIY, what needs a pro, and what to ask before the quote arrives looking legally offensive."
          />
        </div>
      </section>

      {/* ============ STAGE DASHBOARD ============ */}
      <section id="stages" className="container px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">The 16 stages of a renovation</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Every card is a full guide with steps, materials, hints &amp; tips, and the resources that actually help. The dot tells you how DIY-friendly the stage is — green is "go for it", red is "let someone with a licence do that".
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {(Object.keys(DIFFICULTY_META) as Array<keyof typeof DIFFICULTY_META>).map((key) => {
              const meta = DIFFICULTY_META[key]
              return (
                <div key={key} className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${meta.dot}`} aria-hidden />
                  <span>{meta.label}</span>
                </div>
              )
            })}
          </div>
        </div>

        {PHASES.map((phase) => {
          const phaseMeta = PHASE_META[phase]
          const phaseStages = getStagesByPhase(phase)
          return (
            <div key={phase} className="mb-10">
              <div className="mb-4 flex items-center gap-3">
                <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-r ${phaseMeta.gradient}`} />
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {phaseStages[0]?.phaseLabel === "Finale" ? "Phase 3" : phaseStages[0]?.phaseLabel} · {phaseMeta.label}
                </span>
                <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-l ${phaseMeta.gradient}`} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {phaseStages.map((stage) => (
                  <StageCard key={stage.slug} stage={stage} />
                ))}
              </div>
            </div>
          )
        })}
      </section>

      {/* ============ RESOURCE LIBRARY ============ */}
      <section id="resources" className="border-y border-border/70 bg-background/40">
        <div className="container px-4 py-16 md:px-6">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Five ways to help, at every stage</h2>
            <p className="mt-3 text-muted-foreground">Browse resources by type, or find them attached to the stage they belong to.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <ResourceCard href="/resources/ebooks"     icon={<BookOpen    className="h-5 w-5" />} label="Ebooks"          count={`${resourceCounts.ebook} ${resourceCounts.ebook === 1 ? "title" : "titles"}`}          blurb="Deep-dive guides. Fewer words than a forum, more words than a tweet."                            tint="from-orange-50 to-background border-orange-200" dot="bg-orange-500" />
            <ResourceCard href="/resources/templates"  icon={<FileText    className="h-5 w-5" />} label="Templates"       count={`${resourceCounts.template} ${resourceCounts.template === 1 ? "template" : "templates"}`}    blurb="Quote comparisons, budgets, scope docs. Pre-filled so you're not staring at a blank cell."        tint="from-sky-50 to-background border-sky-200"        dot="bg-sky-600" />
            <ResourceCard href="/resources/checklists" icon={<CheckSquare className="h-5 w-5" />} label="Checklists"      count={`${resourceCounts.checklist} ${resourceCounts.checklist === 1 ? "checklist" : "checklists"}`} blurb="Print, tick, panic slightly less. One per stage, plus edge cases."                                tint="from-stone-50 to-background border-stone-300"    dot="bg-stone-700" />
            <ResourceCard href="/resources/tools"      icon={<Wrench      className="h-5 w-5" />} label="Tools"           count={`${resourceCounts.tool} ${resourceCounts.tool === 1 ? "tool" : "tools"}`}                   blurb="Cost calculators and material estimators for when 'from $X' is doing the talking."               tint="from-violet-50 to-background border-violet-200"  dot="bg-violet-600" />
            <ResourceCard href="/resources/tips"       icon={<Lightbulb   className="h-5 w-5" />} label="Tips &amp; Tricks" count={`${resourceCounts.tip} ${resourceCounts.tip === 1 ? "tip" : "tips"}`}                       blurb="The stuff tradies say once and then assume you heard. Save time, save money."                    tint="from-teal-50 to-background border-teal-200"      dot="bg-teal-600" />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            <Button asChild className="rounded-xl">
              <Link href="/resources">
                Browse all resources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/tools/reno-advisor">
                <Compass className="mr-2 h-4 w-4" />
                Ask the Reno Advisor
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/tools/material-tracker">
                <Wrench className="mr-2 h-4 w-4" />
                Try the Material Price Tracker
              </Link>
            </Button>
            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/blogs">
                Browse guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ============ BUNDLES / PRICING ============ */}
      <section id="bundles" className="container px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <Badge className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 hover:bg-amber-100">
            Paid packs on the waitlist
          </Badge>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Start free. Paid packs when checkout&apos;s actually live.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            The Starter Pack is yours now — drop your email. Project and all-access packs are priced below so you know what&apos;s coming; we&apos;ll email you when you can buy them for real. No fake checkout.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <PricingCard
            kind="Live now"
            price="Free"
            unit=""
            tagline="Enough to figure out if you're actually doing this."
            features={[
              "Free Renovation Starter Pack",
              "Any individual free checklist",
              "Weekly renovation tip email",
              "Full access to the blog",
            ]}
            cta="Get the free Starter Pack"
            ctaHref="#subscribe"
            highlighted
            flag="Start here"
          />

          <PricingCard
            kind="Project Bundle · soon"
            price="AU$49"
            unit=" one-off"
            tagline="Renovating one room? Everything for that job — when checkout lands."
            features={[
              "Kitchen, Bathroom, Laundry or Outdoor pack",
              "All ebooks, templates, checklists & tools for that project",
              "Printable project tracker PDF",
              "Lifetime access + one year of free updates",
            ]}
            cta="Join the waitlist"
            ctaHref="#subscribe"
            flag="Best for one room"
            footnote="We'll email when Stripe checkout is live. No charge until then."
          />

          <PricingCard
            kind="All-Access · soon"
            price="AU$149"
            unit=" / year"
            tagline="For multi-room renos and chaos managers with receipts."
            features={[
              "Every stage, every resource, every bundle",
              "New content added every month",
              "Reno Advisor — one cited answer from the 16-stage guides",
              "Early access to new stages — cancel renewal anytime",
            ]}
            cta="Join the waitlist"
            ctaHref="#subscribe"
            footnote="We'll email when Stripe checkout is live. No charge until then."
          />
        </div>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Button asChild variant="link" className="text-primary">
            <Link href="#subscribe">
              Get the free Starter Pack
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">
            Prices in AUD. Checkout isn&apos;t live yet — free Starter Pack and waitlist only for now.
          </p>
        </div>

        <div className="mt-10">
          <PriceDisclaimer />
        </div>
      </section>

      {/* ============ FEATURED BLOGS (reused) ============ */}
      <FeaturedBlogs />

      {/* ============ EMAIL CAPTURE ============ */}
      <section id="subscribe" className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <EmailCapture
            variant="hero"
            theme="orange"
            heading="Get the free Renovation Starter Pack"
            subheading="The Ideas and Planning stage checklists, a quote comparison template, and a budget tracker — delivered to your inbox. No spam, no man named Gary."
            source="homepage-starter-pack"
            showName
          />
        </div>
      </section>

      {/* ============ RENO WISDOM QUOTE SECTION ============ */}
      <section className="container px-4 py-8 md:px-6">
        <div className="mx-auto max-w-xl">
          <RenoWisdom className="bg-slate-900" />
        </div>
      </section>

      {/* ============ GLOSSARY TEASER ============ */}
      <section id="glossary" className="container px-4 pb-16 text-center md:px-6">
        <Badge variant="secondary" className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-800 hover:bg-yellow-100">
          Glossary
        </Badge>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">Don't know what an architrave is?</h3>
        <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
          The glossary decodes every bit of tradie jargon you'll run into — from <em>cornice</em> to <em>batten</em> to <em>fit-off</em> — so you can hold a conversation with the builder without nodding politely and Googling it later.
        </p>
        <Button asChild variant="link" className="mt-3 text-primary">
          <Link href="/blogs">
            Browse the glossary
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  )
}

/* ============ LOCAL COMPONENTS ============ */

function JourneyStep({ stage, index }: { stage: (typeof STAGES)[number]; index: number }) {
  const diff = DIFFICULTY_META[stage.difficulty]
  return (
    <li className="relative flex items-center gap-3">
      <div className="relative z-10 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-background shadow-sm ring-2 ring-border">
        <span className="text-sm font-bold text-primary">{String(index).padStart(2, "0")}</span>
      </div>
      <Link
        href={`/stages/${stage.slug}`}
        className="group flex flex-1 items-center justify-between rounded-xl border border-border bg-background/80 p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-lg ${stage.accent}`}>
            <span aria-hidden>{stage.icon}</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">{stage.name}</span>
              <span className={`h-2 w-2 rounded-full ${diff.dot}`} title={diff.label} aria-label={`Difficulty: ${diff.label}`} />
            </div>
            <div className="truncate text-xs text-muted-foreground">{stage.tagline}</div>
          </div>
        </div>
        <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </Link>
    </li>
  )
}

function HowCard({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-primary/10 font-bold text-primary">{n}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  )
}

function StageCard({ stage }: { stage: (typeof STAGES)[number] }) {
  const diff = DIFFICULTY_META[stage.difficulty]
  const isParty = stage.slug === "party"

  return (
    <Link
      href={`/stages/${stage.slug}`}
      className={`group block rounded-xl border p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${isParty
          ? "border-transparent bg-gradient-to-br from-red-500 to-primary text-white"
          : "border-border bg-card hover:border-primary/40"
        }`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className={`grid h-10 w-10 place-items-center rounded-lg text-xl ${isParty ? "bg-white/20" : stage.accent}`}>
          <span aria-hidden>{stage.icon}</span>
        </div>
        {isParty ? (
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">Finale</span>
        ) : (
          <span className={`h-2.5 w-2.5 rounded-full ${diff.dot}`} title={diff.label} aria-label={`Difficulty: ${diff.label}`} />
        )}
      </div>
      <div className={`font-bold ${isParty ? "text-lg" : ""}`}>{stage.name}</div>
      <div className={`mt-1 text-sm ${isParty ? "opacity-90" : "text-muted-foreground"}`}>{stage.tagline}</div>
      <div className={`mt-3 flex items-center justify-between text-xs ${isParty ? "opacity-90" : "text-muted-foreground"}`}>
        <span>{stage.resourceCount} {isParty ? "celebration idea" : stage.resourceCount === 1 ? "resource" : "resources"}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

function ResourceCard({
  icon,
  label,
  count,
  blurb,
  tint,
  dot,
  href,
}: {
  icon: React.ReactNode
  label: string
  count: string
  blurb: string
  tint: string
  dot: string
  href: string
}) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl border bg-gradient-to-br p-6 shadow-sm transition hover:shadow-md ${tint}`}
    >
      <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl text-white shadow-sm ${dot}`}>{icon}</div>
      <div className="font-bold text-foreground">{label}</div>
      <div className="mt-1 text-sm text-muted-foreground">{blurb}</div>
      <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-foreground">
        {count}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

function PricingCard({
  kind,
  price,
  unit,
  tagline,
  features,
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
  cta: string
  ctaHref: string
  highlighted?: boolean
  flag?: string
  footnote?: string
}) {
  return (
    <Card
      className={`relative flex h-full flex-col rounded-2xl ${highlighted
          ? "border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
          : "border-2"
        }`}
    >
      {flag && (
        <div
          className={`absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold shadow ${
            highlighted
              ? "bg-background text-primary"
              : "border border-border bg-background text-muted-foreground"
          }`}
        >
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
              <span className={highlighted ? "" : "text-foreground"}>{f}</span>
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

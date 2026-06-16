import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Infinity as InfinityIcon,
  Mail,
  PackagePlus,
  RefreshCw,
  Sparkles,
  Tag,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { PricingCard } from "@/components/PricingCard"
import { AddOnPackage } from "@/components/AddOnPackage"
import { DiscountBadge, DiscountBanner } from "@/components/DiscountBadge"
import {
  ADD_ONS,
  TIERS,
  WHOLE_HOUSE,
  ROOM_GUIDES,
  PHASE_BUNDLES,
  formatAUD,
  priceFor,
  resolvePromo,
  type Promo,
} from "@/lib/pricing"

export const metadata = {
  title: "Pricing",
  description:
    "Plan your renovation. Buy once, use forever. Complete renovation guides for any project — one-time payment, monthly content updates included.",
}

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ promo?: string; subscribe?: string }>
}) {
  const { promo: promoParam, subscribe } = await searchParams
  const promo: Promo = resolvePromo(promoParam)
  const gated = subscribe === "required"

  return (
    <main className="flex-1">
      {gated && (
        <div className="border-b border-amber-200 bg-amber-50">
          <div className="container px-4 py-3 text-sm text-amber-900 md:px-6">
            <strong>Sorry mate — site's members only.</strong>{" "}
            Pick a plan and you're back through the gate. No hard hat required.
          </div>
        </div>
      )}

      {/* ============ Discount banner (top) ============ */}
      <DiscountBanner promo={promo} />

      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden">
        {/* coloured blobs */}
        <div className="absolute -top-24 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-300/40 via-amber-200/30 to-transparent blur-3xl" aria-hidden />
        <div className="absolute -bottom-32 -right-16 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-violet-300/30 via-sky-200/30 to-transparent blur-3xl" aria-hidden />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-sm backdrop-blur">
              <Tag className="h-3.5 w-3.5 text-amber-500" />
              One-time purchase · No subscriptions
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Plan your renovation.{" "}
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 bg-clip-text text-transparent">
                Buy once, use forever.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Complete guides for any project. Updates included. One-time payment.
            </p>
            {promo !== "regular" && (
              <div className="mt-6 inline-flex">
                <DiscountBadge promo={promo} size="lg" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============ Tier cards ============ */}
      <section id="tiers" className="container px-4 pb-12 md:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight">Get everything you need</h2>
          <p className="mt-2 text-muted-foreground">
            The Complete Renovation Guide covers every step, every room, every decision — from
            Ideas to Punch List. Plus monthly updates with new content. Most renovations cost
            <span className="font-semibold text-foreground"> $50K–$200K</span>. Spending {formatAUD(WHOLE_HOUSE.price.regular)} (or {formatAUD(WHOLE_HOUSE.price.waitlist)} for early adopters)
            on a complete planning guide is the best ROI you'll get.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} promo={promo} />
          ))}
        </div>
      </section>

      {/* ============ Comparison table ============ */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Side-by-side</h2>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Whole-house gets you everything. Single-room and Phase bundles are scoped down so
              you only pay for what you're doing right now.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/40">
                <TableHead className="w-[42%]">You get</TableHead>
                <TableHead className="text-center">Whole House</TableHead>
                <TableHead className="text-center">Single Room</TableHead>
                <TableHead className="text-center">Phase Bundle</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <ComparisonRow label="Full 16-stage guide" w sr="—" pb="—" />
              <ComparisonRow label="All ebooks (14+)" w sr="Room only" pb="Phase only" />
              <ComparisonRow label="All templates & checklists" w sr="Room only" pb="Phase only" />
              <ComparisonRow label="Cost calculators" w="All" sr="Room scoped" pb="Phase scoped" />
              <ComparisonRow label="All rooms (kitchen, bath, bed, etc.)" w sr="Pick one" pb="—" />
              <ComparisonRow label="Landscaping & external" w sr="If picked" pb="If in phase" />
              <ComparisonRow label="Monthly content updates" w sr pb />
              <ComparisonRow label="Email + Google Drive delivery" w sr pb />
              <ComparisonRow label="Lifetime access" w sr pb />
              <TableRow className="border-t-2 border-border bg-secondary/30">
                <TableCell className="font-bold">Price</TableCell>
                <TableCell className="text-center font-extrabold">
                  {formatAUD(priceFor(WHOLE_HOUSE.price, promo))}
                </TableCell>
                <TableCell className="text-center font-extrabold">
                  {formatAUD(priceFor(ROOM_GUIDES.price, promo))}
                </TableCell>
                <TableCell className="text-center font-extrabold">
                  {formatAUD(priceFor(PHASE_BUNDLES.price, promo))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Best for
                </TableCell>
                <TableCell className="text-center text-sm">A whole-house reno</TableCell>
                <TableCell className="text-center text-sm">Just one room (kitchen, bath…)</TableCell>
                <TableCell className="text-center text-sm">One phase only</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* ============ Add-ons ============ */}
      <section id="add-ons" className="border-y border-border/70 bg-secondary/20">
        <div className="container px-4 py-14 md:px-6 md:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <PackagePlus className="h-3.5 w-3.5" />
                Add-on packages
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Bolt on what you need</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">
                Optional packs for power users, contractors, and budget hawks. Add any of these
                on top of a base purchase — bought separately, no subscription.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ADD_ONS.map((addOn) => (
              <AddOnPackage key={addOn.id} addOn={addOn} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ Monthly updates ============ */}
      <section className="container px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-8 rounded-3xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 p-8 md:grid-cols-[1fr_320px] md:p-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <RefreshCw className="h-3.5 w-3.5 text-emerald-600" />
              Updates included for life
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
              Buy once. Updated every month.
            </h2>
            <p className="mt-3 max-w-xl text-foreground/80">
              Renovation pricing and best-practice changes constantly. We add new content every
              month so your guide doesn't go stale the day after you bought it.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <UpdateLine>4–5 new ebook topics per month</UpdateLine>
              <UpdateLine>5+ new templates per month</UpdateLine>
              <UpdateLine>Updated material &amp; appliance pricing</UpdateLine>
              <UpdateLine>New checklists for edge cases</UpdateLine>
              <UpdateLine>Real-reno case studies</UpdateLine>
              <UpdateLine>Notified by email — re-download anytime</UpdateLine>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild className="rounded-xl">
                <Link href="/updates">
                  See the updates log
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-xl">
                <Link href="/#subscribe">
                  <Mail className="mr-2 h-4 w-4" />
                  Get notified at launch
                </Link>
              </Button>
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              Why we don't do subscriptions
            </div>
            <p className="mt-3 text-sm text-foreground/80">
              You shouldn't have to keep paying us to use a guide you already bought. Pay once,
              keep it forever, get every future update free. If you stop using it for two years
              and come back, your downloads are still there.
            </p>
            <Separator className="my-4" />
            <div className="flex items-center gap-2 text-sm font-bold">
              <InfinityIcon className="h-4 w-4 text-primary" />
              Lifetime access
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm font-bold">
              <X className="h-4 w-4 text-destructive" />
              No recurring charges
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm font-bold">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Updates email-delivered
            </div>
          </aside>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="container px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <HelpCircle className="h-3.5 w-3.5" />
              FAQ
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Common questions</h2>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4 shadow-sm">
            {FAQ.map((q) => (
              <AccordionItem key={q.q} value={q.q} className="border-border last:border-0">
                <AccordionTrigger className="text-left text-base font-bold">
                  {q.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-foreground/80">
                  {q.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============ Final CTA ============ */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="rounded-3xl border-2 border-primary/40 bg-primary/5 p-8 text-center md:p-12">
          <Sparkles className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            One payment. Lifetime access. No surprises.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Whether it's a full-house reno or just the kitchen, the right guide pays for itself
            many times over the moment a quote question costs you nothing because you knew to
            ask it.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <Link href={WHOLE_HOUSE.href}>
                {WHOLE_HOUSE.cta} — {formatAUD(priceFor(WHOLE_HOUSE.price, promo))}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="#tiers">Compare options</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

/* -------------------- Comparison row -------------------- */

function ComparisonRow({
  label,
  w,
  sr,
  pb,
}: {
  label: string
  w: boolean | string | undefined
  sr: boolean | string | undefined
  pb: boolean | string | undefined
}) {
  return (
    <TableRow>
      <TableCell className="font-medium">{label}</TableCell>
      <TableCell className="text-center">{cell(w)}</TableCell>
      <TableCell className="text-center">{cell(sr)}</TableCell>
      <TableCell className="text-center">{cell(pb)}</TableCell>
    </TableRow>
  )
}

function cell(v: boolean | string | undefined) {
  if (v === true) return <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-600" />
  if (v === undefined || v === false || v === "—") return <span className="text-muted-foreground">—</span>
  return <span className="text-xs font-semibold text-foreground/70">{v}</span>
}

function UpdateLine({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
      <span className="text-foreground/85">{children}</span>
    </li>
  )
}

/* -------------------- FAQ data -------------------- */

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "Can I really download everything?",
    a: "Yes. PDFs, Excel files, Word templates — all yours to download once and use forever. Print them, email them to your partner, share them with your contractor.",
  },
  {
    q: "What's the difference between Whole House and a Phase Bundle?",
    a: (
      <>
        Whole House covers all 16 stages and every room (kitchen, bathroom, bedroom, etc.).
        A Phase Bundle covers just one phase — for example, Phase 2 (Rough-In + Construction +
        Landscaping). Phase Bundles are cheaper if you're only tackling one part of the reno.
      </>
    ),
  },
  {
    q: "What if I only need a kitchen reno?",
    a: (
      <>
        Buy a <span className="font-semibold">Single Room Guide — Kitchen</span> for {formatAUD(ROOM_GUIDES.price.regular)}, or
        the <span className="font-semibold">Whole House</span> for {formatAUD(WHOLE_HOUSE.price.regular)} if you might tackle
        more rooms later. Whole House includes everything, so you're not paying twice.
      </>
    ),
  },
  {
    q: "Can I upgrade later?",
    a: (
      <>
        Yes. Buy a Single Room Guide today, upgrade to Whole House later for the difference. We
        credit what you've already paid against the higher tier — so you never pay for the same
        thing twice.
      </>
    ),
  },
  {
    q: "What about subscriptions or recurring charges?",
    a: "No subscriptions. No annual fees. No surprise charges. One payment, full access, monthly content updates included for life.",
  },
  {
    q: "How do monthly updates work?",
    a: (
      <>
        We email you when there's new content — usually 4–5 new ebooks, 5+ new templates, and
        any pricing-data refresh. You re-download the latest version of your guide from the same
        link. All previous downloads stay valid; this just gives you the newest copy.
      </>
    ),
  },
  {
    q: "Is this worth it?",
    a: (
      <>
        Most renovations cost <span className="font-semibold">$50K–$200K</span>. A planning guide that saves you even 5% pays for itself
        many times over in the first phone call.
      </>
    ),
  },
]

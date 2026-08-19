import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  CheckSquare,
  FileText,
  Lightbulb,
  Lock,
  Package,
  Sparkles,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { getResourceCounts, type ResourceKind } from "@/lib/stages"

export const metadata = {
  title: "Resources",
  description:
    "Ebooks, templates, checklists, tools and tips for every stage of your renovation. Free with the Starter Pack, included in project bundles, or unlocked with a Premium subscription.",
}

type TypeCard = {
  kind: ResourceKind
  title: string
  blurb: string
  href: string
  icon: React.ReactNode
  cardClass: string
  iconClass: string
  ringClass: string
  ctaClass: string
}

const TYPES: TypeCard[] = [
  {
    kind: "ebook",
    title: "Ebooks",
    blurb: "Deep-dive guides. Fewer words than a forum, more words than a tweet.",
    href: "/resources/ebooks",
    icon: <BookOpen className="h-7 w-7" />,
    cardClass:
      "bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200/70 hover:border-orange-300",
    iconClass: "bg-orange-500 text-white shadow-orange-500/30",
    ringClass: "text-orange-900",
    ctaClass: "text-orange-700 group-hover:text-orange-800",
  },
  {
    kind: "template",
    title: "Templates",
    blurb:
      "Quote comparisons, budgets, scope docs. Pre-filled so you're not staring at a blank cell.",
    href: "/resources/templates",
    icon: <FileText className="h-7 w-7" />,
    cardClass:
      "bg-gradient-to-br from-sky-50 to-blue-50 border-sky-200/70 hover:border-sky-300",
    iconClass: "bg-sky-600 text-white shadow-sky-600/30",
    ringClass: "text-sky-900",
    ctaClass: "text-sky-700 group-hover:text-sky-800",
  },
  {
    kind: "checklist",
    title: "Checklists",
    blurb: "Print, tick, panic slightly less. One per stage, plus the edge cases.",
    href: "/resources/checklists",
    icon: <CheckSquare className="h-7 w-7" />,
    cardClass:
      "bg-gradient-to-br from-stone-50 to-zinc-100 border-stone-300/70 hover:border-stone-400",
    iconClass: "bg-stone-700 text-white shadow-stone-700/30",
    ringClass: "text-stone-900",
    ctaClass: "text-stone-700 group-hover:text-stone-900",
  },
  {
    kind: "tool",
    title: "Tools",
    blurb:
      "Full reno spreadsheet with 300+ steps, planning tools, schedules, timelines, Gantt charts.",
    href: "/resources/tools",
    icon: <Wrench className="h-7 w-7" />,
    cardClass:
      "bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/70 hover:border-violet-300",
    iconClass: "bg-violet-600 text-white shadow-violet-600/30",
    ringClass: "text-violet-900",
    ctaClass: "text-violet-700 group-hover:text-violet-800",
  },
  {
    kind: "tip",
    title: "Tips & Tricks",
    blurb:
      "20-tip collections per trade — the stuff someone else already learned the hard way.",
    href: "/resources/tips",
    icon: <Lightbulb className="h-7 w-7" />,
    cardClass:
      "bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-200/70 hover:border-teal-300",
    iconClass: "bg-teal-600 text-white shadow-teal-600/30",
    ringClass: "text-teal-900",
    ctaClass: "text-teal-700 group-hover:text-teal-800",
  },
]

const ACCESS_LEGEND: { label: string; badge: string; note: string; icon: React.ReactNode }[] = [
  {
    label: "Free",
    badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
    note: "In the Starter Pack — drop your email and they're yours.",
    icon: <Sparkles className="h-3.5 w-3.5" />,
  },
  {
    label: "Bundle",
    badge: "bg-amber-100 text-amber-800 border-amber-200",
    note: "Included in a project bundle (Planning, Painting, Kitchen, etc.).",
    icon: <Package className="h-3.5 w-3.5" />,
  },
  {
    label: "Premium",
    badge: "bg-violet-100 text-violet-800 border-violet-200",
    note: "Unlocked with a monthly or annual subscription.",
    icon: <Lock className="h-3.5 w-3.5" />,
  },
]

export default function ResourcesPage() {
  const counts = getResourceCounts()
  const total = Object.values(counts).reduce((a, b) => a + b, 0)

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-6 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">Resources</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* coloured blobs */}
        <div
          className="absolute -top-32 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-300/40 via-amber-200/30 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -right-20 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-violet-300/30 via-sky-200/30 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="absolute top-10 right-1/3 -z-10 h-[280px] w-[280px] rounded-full bg-gradient-to-br from-teal-200/40 via-emerald-100/30 to-transparent blur-3xl"
          aria-hidden
        />
        {/* dot grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              {total} resources across 5 categories
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Resources for your{" "}
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 bg-clip-text text-transparent">
                renovation
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need at every stage. Ebooks, templates, checklists, tools, and 20-tip cheat-sheets — organised by the order you'll actually need them.
            </p>
          </div>
        </div>
      </section>

      {/* Type cards */}
      <section className="container px-4 pb-8 md:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((t) => (
            <Link
              key={t.kind}
              href={t.href}
              className={`group relative flex flex-col rounded-2xl border-2 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.cardClass}`}
            >
              <div className="mb-5 flex items-start justify-between">
                <div className={`grid h-14 w-14 place-items-center rounded-xl shadow-md ${t.iconClass}`}>
                  {t.icon}
                </div>
                <span className={`rounded-full bg-white/70 px-3 py-1 text-xs font-bold tracking-wide ${t.ringClass}`}>
                  {counts[t.kind]} {counts[t.kind] === 1 ? "item" : "items"}
                </span>
              </div>
              <h2 className={`text-2xl font-extrabold tracking-tight ${t.ringClass}`}>{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{t.blurb}</p>
              <div className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-transform group-hover:translate-x-1 ${t.ctaClass}`}>
                Browse {t.title.toLowerCase()}
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}

          {/* Bundles teaser as 6th tile */}
          <Link
            href="/pricing#bundles"
            className="group relative flex flex-col rounded-2xl border-2 border-dashed border-primary/40 bg-primary/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-primary/10 hover:shadow-lg"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
                <Package className="h-7 w-7" />
              </div>
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-bold tracking-wide text-primary">
                Bundles
              </span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
              Project bundles
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/70">
              Grab everything for a kitchen, bathroom, paint job, or the whole reno in one go — cheaper than buying each piece alone.
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
              See the bundles
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      {/* Access legend */}
      <section className="container px-4 py-12 md:px-6">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight">How access works</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Every resource carries a badge so you know how to unlock it before you click.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {ACCESS_LEGEND.map((a) => (
              <div key={a.label} className="rounded-xl border border-border/70 bg-background/50 p-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${a.badge}`}
                >
                  {a.icon}
                  {a.label}
                </span>
                <p className="mt-3 text-sm text-foreground/80">{a.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-lg">
              <Link href="/#subscribe">
                Get the free Starter Pack
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg">
              <Link href="/pricing">See subscription &amp; bundles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stage CTA */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-6 text-center md:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight">Looking for something specific?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            Resources are also surfaced inside each stage — jump to the part of the reno you're actually doing right now.
          </p>
          <div className="mt-5">
            <Button asChild variant="ghost" className="rounded-lg">
              <Link href="/#stages">
                Browse the 16 stages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

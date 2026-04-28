import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckSquare,
  FileText,
  Lightbulb,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ResourceList } from "@/components/ResourceList"
import { PriceDisclaimer } from "@/components/price-disclaimer"
import {
  RESOURCE_KIND_SLUGS,
  getResourcesByKind,
  kindFromSlug,
  type ResourceKind,
} from "@/lib/stages"

type TypeMeta = {
  title: string
  plural: string
  blurb: string
  longBlurb: string
  /** Background image (Unsplash or local). */
  heroImage: string
  imageCredit?: string
  /** Tailwind gradient classes, applied as the colored overlay over the hero image. */
  overlay: string
  /** Pill / accent text colour for the hero badge. */
  pillBg: string
  pillText: string
  icon: React.ReactNode
}

const TYPE_META: Record<ResourceKind, TypeMeta> = {
  ebook: {
    title: "Ebooks",
    plural: "ebooks",
    blurb: "Deep-dive guides. Fewer words than a forum, more words than a tweet.",
    longBlurb:
      "Self-contained reads on the parts of a reno you wish someone had warned you about. Most are AU$9.90 individually, or bundled into a project pack for less.",
    heroImage:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=2000&q=70",
    imageCredit: "Photo: Patrick Tomasso / Unsplash",
    overlay:
      "bg-gradient-to-br from-orange-600/90 via-orange-500/80 to-amber-500/70",
    pillBg: "bg-white/20 backdrop-blur",
    pillText: "text-white",
    icon: <BookOpen className="h-6 w-6" />,
  },
  template: {
    title: "Templates",
    plural: "templates",
    blurb:
      "Quote comparisons, budgets, scope docs. Pre-filled so you're not staring at a blank cell.",
    longBlurb:
      "Spreadsheets and printables you can drop your own numbers into. Most are AU$4.90 individually, or bundled with related ebooks and checklists.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=70",
    imageCredit: "Photo: Carlos Muza / Unsplash",
    overlay:
      "bg-gradient-to-br from-sky-700/90 via-sky-600/80 to-blue-500/70",
    pillBg: "bg-white/20 backdrop-blur",
    pillText: "text-white",
    icon: <FileText className="h-6 w-6" />,
  },
  checklist: {
    title: "Checklists",
    plural: "checklists",
    blurb: "Print, tick, panic slightly less. One per stage, plus the edge cases.",
    longBlurb:
      "Single-sheet things to take on site, or to a quote, or to your kitchen designer. Most are AU$9.90 individually — Starter Pack ones are free with email signup.",
    heroImage:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=2000&q=70",
    imageCredit: "Photo: Aaron Burden / Unsplash",
    overlay:
      "bg-gradient-to-br from-stone-800/90 via-stone-700/80 to-zinc-600/70",
    pillBg: "bg-white/20 backdrop-blur",
    pillText: "text-white",
    icon: <CheckSquare className="h-6 w-6" />,
  },
  tool: {
    title: "Tools",
    plural: "tools",
    blurb:
      "Cost calculators and material estimators for when 'from $X' is doing the talking.",
    longBlurb:
      "Interactive calculators, estimators and planners. Most are free — paid versions cover the heavier-lift workbooks (full reno spreadsheet, Gantt, schedules).",
    heroImage:
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=2000&q=70",
    imageCredit: "Photo: Theme Photos / Unsplash",
    overlay:
      "bg-gradient-to-br from-violet-700/90 via-violet-600/80 to-purple-500/70",
    pillBg: "bg-white/20 backdrop-blur",
    pillText: "text-white",
    icon: <Wrench className="h-6 w-6" />,
  },
  tip: {
    title: "Tips & Tricks",
    plural: "tips",
    blurb: "The stuff tradies say once and then assume you heard. Save time, save money.",
    longBlurb:
      "Short, actionable advice — usually a single page or a 20-tip cheat-sheet for a specific trade. Most are free; the trade-by-trade collections are AU$4.90.",
    heroImage:
      "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=2000&q=70",
    imageCredit: "Photo: Riccardo Annandale / Unsplash",
    overlay:
      "bg-gradient-to-br from-teal-700/90 via-teal-600/80 to-emerald-500/70",
    pillBg: "bg-white/20 backdrop-blur",
    pillText: "text-white",
    icon: <Lightbulb className="h-6 w-6" />,
  },
}

export function generateStaticParams() {
  return Object.values(RESOURCE_KIND_SLUGS).map((type) => ({ type }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const kind = kindFromSlug(type)
  if (!kind) return { title: "Resource type not found" }
  const meta = TYPE_META[kind]
  return {
    title: meta.title,
    description: meta.longBlurb,
  }
}

export default async function ResourceTypePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const kind = kindFromSlug(type)
  if (!kind) notFound()

  const meta = TYPE_META[kind]
  const resources = getResourcesByKind(kind)
  const freeCount = resources.filter((r) => r.free).length
  const bundleCount = resources.filter((r) => r.bundle).length

  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-6 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/resources" className="hover:text-foreground">Resources</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">{meta.title}</span>
          </nav>
        </div>
      </section>

      {/* Image hero */}
      <section className="relative isolate overflow-hidden">
        {/* background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src={meta.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* coloured overlay */}
        <div className={`absolute inset-0 -z-10 ${meta.overlay}`} aria-hidden />
        {/* subtle pattern overlay for depth */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />

        <div className="container relative px-4 py-16 text-white md:px-6 md:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 shadow-lg backdrop-blur-sm">
                {meta.icon}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge className={`rounded-full border-white/30 ${meta.pillBg} ${meta.pillText} hover:${meta.pillBg}`}>
                  {resources.length} {resources.length === 1 ? meta.plural.slice(0, -1) : meta.plural}
                </Badge>
                {freeCount > 0 && (
                  <Badge className="rounded-full border-emerald-200/40 bg-emerald-500/30 text-white backdrop-blur hover:bg-emerald-500/30">
                    {freeCount} free
                  </Badge>
                )}
                {bundleCount > 0 && (
                  <Badge className="rounded-full border-amber-200/40 bg-amber-400/30 text-white backdrop-blur hover:bg-amber-400/30">
                    {bundleCount} in a bundle
                  </Badge>
                )}
              </div>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
              {meta.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">{meta.blurb}</p>
            <p className="mt-3 max-w-2xl text-sm text-white/80">{meta.longBlurb}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-xl bg-white text-foreground shadow-lg hover:bg-white/90">
                <Link href="#list">
                  Browse the {meta.plural}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-xl border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                <Link href="/resources">All resource types</Link>
              </Button>
            </div>
          </div>
        </div>

        {meta.imageCredit && (
          <div className="absolute bottom-2 right-4 text-[10px] uppercase tracking-widest text-white/50">
            {meta.imageCredit}
          </div>
        )}
      </section>

      {/* List */}
      <section id="list" className="container scroll-mt-20 px-4 py-12 md:px-6">
        {resources.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-10 text-center">
            <h2 className="text-xl font-extrabold tracking-tight">Coming soon</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground">
              We're still writing up the {meta.plural} for this section. Drop your email to get the
              Starter Pack and we'll let you know when they land.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Button asChild className="rounded-lg">
                <Link href="/#subscribe">
                  Get the Starter Pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-lg">
                <Link href="/resources">Browse other resources</Link>
              </Button>
            </div>
          </div>
        ) : (
          <ResourceList resources={resources} />
        )}

        <Separator className="my-10" />

        <PriceDisclaimer compact />
      </section>

      {/* Footer nav */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5">
          <Button asChild variant="ghost" className="rounded-lg">
            <Link href="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              All resource types
            </Link>
          </Button>
          <Button asChild variant="default" className="rounded-lg">
            <Link href="/pricing#bundles">
              See project bundles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

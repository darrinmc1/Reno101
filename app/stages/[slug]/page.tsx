import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CheckSquare,
  FileText,
  Layers,
  Lightbulb,
  Lock,
  Package,
  PartyPopper,
  Sparkles,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  STAGES,
  TOTAL_STAGES,
  DIFFICULTY_META,
  formatPrice,
  getStage,
  getNextStage,
  getPrevStage,
  getHeroGradient,
  getEmailTheme,
  type ResourceKind,
  type Stage,
  type SkillLevel,
  type StageComponent,
  type StageResource,
} from "@/lib/stages"
import { EmailCapture } from "@/components/email-capture"
import { PriceDisclaimer } from "@/components/price-disclaimer"

export function generateStaticParams() {
  return STAGES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stage = getStage(slug)
  if (!stage) return { title: "Stage not found" }
  return {
    title: stage.name,
    description: stage.summary,
  }
}

const SKILL_COLUMNS: SkillLevel[] = ["Basic", "Intermediate", "Advanced", "Mastery"]

const skillDotClass: Record<SkillLevel, string> = {
  Basic: "bg-emerald-500",
  Intermediate: "bg-amber-400",
  Advanced: "bg-orange-500",
  Mastery: "bg-red-500",
}

const skillRing: Record<SkillLevel, string> = {
  Basic: "border-emerald-300 bg-emerald-50 text-emerald-800",
  Intermediate: "border-amber-300 bg-amber-50 text-amber-800",
  Advanced: "border-orange-300 bg-orange-50 text-orange-800",
  Mastery: "border-red-300 bg-red-50 text-red-800",
}

const resourceIcon: Record<ResourceKind, React.ReactNode> = {
  ebook: <BookOpen className="h-4 w-4" />,
  template: <FileText className="h-4 w-4" />,
  checklist: <CheckSquare className="h-4 w-4" />,
  tool: <Wrench className="h-4 w-4" />,
  tip: <Lightbulb className="h-4 w-4" />,
}

const resourceTint: Record<ResourceKind, string> = {
  ebook: "bg-orange-500",
  template: "bg-sky-600",
  checklist: "bg-stone-700",
  tool: "bg-violet-600",
  tip: "bg-teal-600",
}

export default async function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stage = getStage(slug)
  if (!stage) notFound()

  const diff = DIFFICULTY_META[stage.difficulty]
  const prev = getPrevStage(stage.slug)
  const next = getNextStage(stage.slug)
  const hasDetail = stage.steps && stage.steps.length > 0
  const isParty = stage.slug === "party"
  const bundleName = stage.resources?.find((r) => r.bundle)?.bundle
  const progressPct = Math.round((stage.order / TOTAL_STAGES) * 100)
  const heroGradient = getHeroGradient(stage)
  const emailTheme = getEmailTheme(stage)

  return (
    <main className="flex-1">
      {/* ============ Breadcrumb ============ */}
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/#stages" className="hover:text-foreground">Stages</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">{stage.name}</span>
          </nav>
        </div>
      </section>

      {/* ============ HERO ============ */}
      <section className={`relative isolate overflow-hidden bg-gradient-to-br ${heroGradient} text-white`}>
        {/* dot grid */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        {/* radial highlight */}
        <div
          className="absolute -top-20 -right-20 -z-10 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"
          aria-hidden
        />

        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
            {/* Left: title block */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge className="rounded-full border-white/30 bg-white/20 text-white backdrop-blur hover:bg-white/20">
                  {stage.phaseLabel}
                </Badge>
                <Badge className="rounded-full border-white/30 bg-white/20 text-white backdrop-blur hover:bg-white/20">
                  Stage {stage.order} of {TOTAL_STAGES}
                </Badge>
                <Badge className="rounded-full border-white/30 bg-white/20 text-white backdrop-blur hover:bg-white/20">
                  <span className={`mr-1.5 inline-block h-2 w-2 rounded-full ${diff.dot}`} aria-hidden />
                  {diff.label}
                </Badge>
              </div>

              <div className="flex items-start gap-5">
                <div className="grid h-20 w-20 flex-shrink-0 place-items-center rounded-2xl bg-white/15 text-5xl shadow-lg backdrop-blur">
                  <span aria-hidden>{stage.icon}</span>
                </div>
                <div className="min-w-0">
                  <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
                    {stage.name}
                  </h1>
                  <p className="mt-2 text-lg font-medium text-white/90 sm:text-xl">{stage.tagline}</p>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                {stage.summary}
              </p>

              {/* Progress */}
              <div className="mt-8 max-w-md">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-white/80">
                  <span>Renovation progress</span>
                  <span>{progressPct}%</span>
                </div>
                <Progress value={progressPct} className="h-2 bg-white/20 [&>div]:bg-white" />
              </div>
            </div>

            {/* Right: at-a-glance card */}
            <div className="rounded-2xl border border-white/20 bg-white/95 p-6 text-foreground shadow-xl backdrop-blur lg:sticky lg:top-24">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">At a glance</div>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Stage</dt>
                  <dd className="font-semibold">{stage.order} of {TOTAL_STAGES}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Difficulty</dt>
                  <dd className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold ${skillRing[diff.label as SkillLevel]}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${diff.dot}`} aria-hidden />
                    {diff.label}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Subtopics</dt>
                  <dd className="font-semibold">{stage.steps?.length ?? 0}</dd>
                </div>
                {stage.resources && stage.resources.length > 0 && (
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Resources</dt>
                    <dd className="font-semibold">{stage.resources.length} available</dd>
                  </div>
                )}
                {bundleName && (
                  <div className="flex items-center justify-between gap-4">
                    <dt className="text-muted-foreground">Bundle</dt>
                    <dd className="font-semibold text-primary">{bundleName}</dd>
                  </div>
                )}
              </dl>
              <div className="mt-5 border-t border-border/70 pt-4">
                <Button asChild className="w-full rounded-lg">
                  <Link href="#subtopics">
                    Jump to subtopics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="mt-2 w-full rounded-lg">
                  <Link href="#resources">
                    See {stage.name} resources
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Quick-jump strip ============ */}
      <StageQuickJump current={stage.slug} />

      {/* ============ Main detail ============ */}
      {isParty ? (
        <PartySection stage={stage} />
      ) : (
        <section id="subtopics" className="container scroll-mt-24 px-4 py-12 md:px-6">
          {hasDetail ? (
            <>
              <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What happens at this stage
                  </div>
                  <h2 className="mt-1 text-3xl font-extrabold tracking-tight">Subtopics &amp; components</h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    Click any subtopic to expand. Every component carries a skill-level indicator so you know which bits are DIY-friendly and which are best handed to a licensed tradie.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold">
                  {SKILL_COLUMNS.map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${skillDotClass[s]}`} aria-hidden />
                      <span className="text-muted-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion type="multiple" className="space-y-3">
                {stage.steps!.map((step, i) => (
                  <AccordionItem
                    key={step.title}
                    value={`step-${i}`}
                    className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md data-[state=open]:shadow-md"
                  >
                    <AccordionTrigger className="px-5 py-4 text-left hover:no-underline">
                      <div className="flex flex-1 items-center gap-4">
                        <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-secondary text-2xl">
                          <span aria-hidden>{step.emoji ?? "•"}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            <span>Step {i + 1}</span>
                            <span aria-hidden>·</span>
                            <span>{step.components.length} {step.components.length === 1 ? "item" : "items"}</span>
                          </div>
                          <h3 className="mt-0.5 text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="border-t border-border bg-secondary/30 px-5 pb-5 pt-4">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {step.components.map((c) => (
                          <ComponentCard key={c.label} c={c} />
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-10 text-center">
              <div className="mx-auto max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                  In the works
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">We're still writing this stage.</h2>
                <p className="mt-2 text-muted-foreground">
                  The full step-by-step guide for <span className="font-semibold text-foreground">{stage.name}</span> is coming soon. Join the starter pack list and we'll email you when it's live — before the tradies start asking when you'll make a decision.
                </p>
                <div className="mt-6">
                  <Button asChild className="rounded-lg">
                    <Link href="/#subscribe">Tell me when it's ready</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* ============ Email capture (stage-themed) ============ */}
      {!isParty && (
        <section className="container px-4 pb-12 md:px-6">
          <EmailCapture
            variant="inline"
            theme={emailTheme}
            source={`stage-${stage.slug}`}
            heading={`Get tips for ${stage.name}`}
            subheading={`Join the Blueprint Club — ${stage.name.toLowerCase()} tips, templates, and 'we wish someone had told us' notes from people who've been there.`}
          />
        </section>
      )}

      {/* ============ Resources ============ */}
      {stage.resources && stage.resources.length > 0 && (
        <section id="resources" className="border-y border-border/70 bg-background/40">
          <div className="container px-4 py-12 md:px-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Resources for this stage</h2>
                <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                  Pay per item, or get the whole {bundleName ?? "bundle"} in one go. Starter Pack items free with email signup.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {bundleName && (
                  <Button asChild variant="default" className="rounded-xl">
                    <Link href="/pricing#bundles">
                      <Package className="mr-2 h-4 w-4" />
                      Get the {bundleName} — AU$49
                    </Link>
                  </Button>
                )}
                <Button asChild variant="ghost" className="rounded-xl">
                  <Link href="/resources">
                    All resource types
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {stage.resources.map((r) => (
                <ResourceRow key={r.title} r={r} />
              ))}
            </div>

            <Separator className="my-8" />
            <PriceDisclaimer compact />
          </div>
        </section>
      )}

      {/* ============ Prev / Next ============ */}
      <section className="container px-4 py-10 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/stages/${prev.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous stage
              </div>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>{prev.icon}</span>
                <div className="font-bold">{prev.name}</div>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{prev.tagline}</div>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/stages/${next.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 text-right shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                Next stage
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="mt-2 flex items-center justify-end gap-3">
                <div className="font-bold">{next.name}</div>
                <span className="text-2xl" aria-hidden>{next.icon}</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{next.tagline}</div>
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}

/* -------------------- ComponentCard -------------------- */

function ComponentCard({ c }: { c: StageComponent }) {
  return (
    <li className="rounded-xl border border-border bg-background p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground" aria-hidden />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm font-bold leading-tight text-foreground">{c.label}</div>
            <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${skillRing[c.skill]}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${skillDotClass[c.skill]}`} aria-hidden />
              {c.skill}
            </span>
          </div>
          {c.hint && (
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.hint}</p>
          )}
          {c.materials && (
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Materials
              </span>
              {c.materials.split(",").map((m) => (
                <span
                  key={m.trim()}
                  className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[10px] font-semibold text-foreground/80"
                >
                  {m.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

/* -------------------- StageQuickJump -------------------- */

function StageQuickJump({ current }: { current: string }) {
  return (
    <section
      aria-label="Jump to stage"
      className="sticky top-16 z-30 border-y border-border/70 bg-background/85 backdrop-blur"
    >
      <div className="container px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <span className="hidden text-[11px] font-bold uppercase tracking-widest text-muted-foreground md:inline">
            All stages:
          </span>
          <div className="flex flex-1 gap-1.5 overflow-x-auto pb-1 [scrollbar-width:thin]">
            {STAGES.map((s) => {
              const active = s.slug === current
              return (
                <Link
                  key={s.slug}
                  href={`/stages/${s.slug}`}
                  className={`group flex flex-shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold transition ${
                    active
                      ? "border-foreground bg-foreground text-background shadow-sm"
                      : "border-border bg-card text-foreground hover:border-foreground/40"
                  }`}
                  title={`${s.name} — ${s.tagline}`}
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br text-[11px] ${
                      // tiny color dot — derived from hero gradient
                      stageDotGradient(s)
                    } ${active ? "ring-2 ring-background" : ""}`}
                  >
                    <span aria-hidden>{s.icon}</span>
                  </span>
                  <span className="hidden sm:inline">{s.order}.</span>
                  <span className="whitespace-nowrap">{s.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Pick a tiny 2-stop gradient to colour the quick-jump dot, sampled from the stage hero. */
function stageDotGradient(s: Stage): string {
  // hero looks like "from-x via-y to-z" — strip "via-..." for a cleaner 2-stop dot
  if (!s.hero) {
    // phase fallback
    if (s.phase === "plan") return "from-sky-400 to-indigo-500"
    if (s.phase === "structure") return "from-amber-400 to-orange-600"
    return "from-orange-400 to-rose-600"
  }
  const fromMatch = s.hero.match(/from-[a-z]+-\d+/)?.[0]
  const toMatch = s.hero.match(/to-[a-z]+-\d+/)?.[0]
  return `${fromMatch ?? "from-sky-500"} ${toMatch ?? "to-blue-700"}`
}

/* -------------------- ResourceRow (existing pattern) -------------------- */

function ResourceRow({ r }: { r: StageResource }) {
  const priceLabel = formatPrice(r)
  const priceBadgeClass = r.free
    ? "bg-emerald-100 text-emerald-800"
    : "bg-secondary text-foreground"

  return (
    <Link
      href={r.href ?? "/pricing"}
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg text-white ${resourceTint[r.kind]}`}>
        {resourceIcon[r.kind]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold">{r.title}</div>
        <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="uppercase tracking-wider text-muted-foreground">{r.kind}</span>
          {priceLabel && (
            <span className={`rounded px-1.5 py-0.5 font-semibold ${priceBadgeClass}`}>{priceLabel}</span>
          )}
          {r.bundle && !r.free && (
            <span className="rounded bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">in {r.bundle}</span>
          )}
        </div>
      </div>
      {r.locked ? (
        <Lock className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
      ) : (
        <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
      )}
    </Link>
  )
}

/* -------------------- Party section -------------------- */

function PartySection({ stage }: { stage: Stage }) {
  const ideas = [
    { icon: "📨", title: "Send invites", body: "Pick the people who turned up to the working bees, not the ones who turned up with opinions." },
    { icon: "🍕", title: "Feed them properly", body: "Pizza is fine. A backyard BBQ is better. Catering is showing off (and entirely fair)." },
    { icon: "🥂", title: "Make a toast", body: "Thank the tradies by name. They will not be there. They will hear about it from the one who was." },
    { icon: "📸", title: "Photograph the rooms before they get lived-in", body: "The 'finished' look has a half-life. This is your last chance for clean shots." },
    { icon: "🛋️", title: "Tour, don't lecture", body: "Walk people through. Don't list every decision. Save the variations spreadsheet for the conveyancer." },
    { icon: "🎶", title: "Loud enough to enjoy, quiet enough to keep neighbours friendly", body: "You may need their fence repaired one day. Be kind to the speakers." },
  ]

  return (
    <section id="subtopics" className="container scroll-mt-24 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
          <PartyPopper className="h-3.5 w-3.5 text-pink-500" />
          Stage {stage.order} of {TOTAL_STAGES} · Complete
        </div>
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          You{" "}
          <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
            made it.
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The hammer's down. The dust has settled. The skip bins have left for good. All that's left is the bit you've been picturing since you first opened a Pinterest tab.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ideas.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-3xl" aria-hidden>{card.icon}</div>
            <h3 className="mt-3 text-base font-extrabold tracking-tight">{card.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{card.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border-2 border-dashed border-border bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 p-8 text-center">
        <div className="text-5xl">🥂</div>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
          From a hole in the ground to here
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          Every house has its story. We hope yours has fewer regrets than most. If we helped — even a little — drop us a line. We collect happy endings.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-xl">
            <Link href="/#subscribe">
              <Sparkles className="mr-2 h-4 w-4" />
              Tell us how it went
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/stages/ideas">
              <Layers className="mr-2 h-4 w-4" />
              Start a new project
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

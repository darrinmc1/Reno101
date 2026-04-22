import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, CheckSquare, FileText, Lightbulb, Lock, Package, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  STAGES,
  DIFFICULTY_META,
  formatPrice,
  getStage,
  getNextStage,
  getPrevStage,
  type ResourceKind,
  type SkillLevel,
  type StageResource,
} from "@/lib/stages"
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
  tool: "bg-indigo-600",
  tip: "bg-emerald-600",
}

export default async function StagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const stage = getStage(slug)
  if (!stage) notFound()

  const diff = DIFFICULTY_META[stage.difficulty]
  const prev = getPrevStage(stage.slug)
  const next = getNextStage(stage.slug)
  const hasDetail = stage.steps && stage.steps.length > 0
  const bundleName = stage.resources?.find((r) => r.bundle)?.bundle

  return (
    <main className="flex-1">
      {/* ===== Header / Breadcrumb strip ===== */}
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-6 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/#stages" className="hover:text-foreground">Stages</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">{stage.name}</span>
          </nav>
        </div>
      </section>

      {/* ===== Hero ===== */}
      <section className="container px-4 py-10 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                {stage.phaseLabel === "Finale" ? "Finale" : `${stage.phaseLabel} · Stage ${stage.order}`}
              </Badge>
              <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${diff.bg} ${diff.text}`}>
                <span className={`h-2 w-2 rounded-full ${diff.dot}`} aria-hidden />
                {diff.label}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className={`grid h-14 w-14 place-items-center rounded-xl text-2xl ${stage.accent}`}>
                <span aria-hidden>{stage.icon}</span>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{stage.name}</h1>
                <p className="mt-1 text-muted-foreground">{stage.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{stage.summary}</p>
          </div>

          {/* At-a-glance card */}
          <Card className="rounded-2xl border-2 p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">At a glance</div>
            <dl className="mt-3 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Difficulty</dt>
                <dd className="flex items-center gap-2 font-medium">
                  <span className={`h-2.5 w-2.5 rounded-full ${diff.dot}`} aria-hidden />
                  {diff.label}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Stage #</dt>
                <dd className="font-medium">{stage.order} of 16</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Resources</dt>
                <dd className="font-medium">{stage.resourceCount} available</dd>
              </div>
              {bundleName && (
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Bundle</dt>
                  <dd className="font-medium text-primary">{bundleName}</dd>
                </div>
              )}
            </dl>
            <div className="mt-4 border-t border-border/70 pt-4">
              <Button asChild className="w-full rounded-lg">
                <Link href="/#subscribe">
                  Get the free starter pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">Or grab the whole {bundleName ?? "bundle"} — see Resources below.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* ===== Main detail: steps table ===== */}
      <section className="container px-4 pb-12 md:px-6">
        {hasDetail ? (
          <div className="space-y-8">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Steps &amp; components</h2>
                <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                  Every component carries a skill-level indicator so you know which bits are DIY-friendly and which are best handed to a licensed tradie.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {SKILL_COLUMNS.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${skillDotClass[s]}`} aria-hidden />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {stage.steps!.map((step) => (
              <div key={step.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-5 py-4">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-background text-xl">{step.emoji ?? "•"}</div>
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                </div>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[28%]">Components</TableHead>
                        <TableHead className="w-[34%]">Hints &amp; Tips</TableHead>
                        <TableHead className="w-[18%]">Materials</TableHead>
                        <TableHead className="w-[20%] text-center">Skill Level</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {step.components.map((c) => (
                        <TableRow key={c.label}>
                          <TableCell className="font-medium">{c.label}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{c.hint ?? "—"}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">{c.materials ?? "—"}</TableCell>
                          <TableCell>
                            <div className="grid grid-cols-4 gap-1">
                              {SKILL_COLUMNS.map((level) => {
                                const active = c.skill === level
                                return (
                                  <div
                                    key={level}
                                    title={level}
                                    aria-label={`${level}${active ? " (selected)" : ""}`}
                                    className={`grid h-6 place-items-center rounded text-xs font-bold ${
                                      active ? `${skillDotClass[level]} text-white` : "bg-muted text-transparent"
                                    }`}
                                  >
                                    {active ? "✓" : "·"}
                                  </div>
                                )
                              })}
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Card className="rounded-2xl border-2 border-dashed p-10 text-center">
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
          </Card>
        )}
      </section>

      {/* ===== Linked resources ===== */}
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
                  <Link href="/#resources">
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

            <div className="mt-10">
              <PriceDisclaimer compact />
            </div>
          </div>
        </section>
      )}

      {/* ===== Prev / Next nav ===== */}
      <section className="container px-4 py-10 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/stages/${prev.slug}`}
              className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:shadow-md"
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
              className="group rounded-2xl border border-border bg-card p-5 text-right shadow-sm transition hover:shadow-md"
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

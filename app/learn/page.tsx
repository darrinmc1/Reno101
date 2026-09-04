import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  STAGES,
  DIFFICULTY_META,
  PHASE_META,
  getStagesByPhase,
  PHASES,
} from "@/lib/stages"
import { blogPosts } from "@/lib/content"
import { renovationGuides } from "@/lib/guides"

export const metadata = {
  title: "Lessons",
  description:
    "Published Renos101 stage lessons, written guides, and planning articles. Honest counts — nothing invented.",
}

export default function LearnPage() {
  const howToStages = STAGES.filter((s) => s.slug !== "party")
  const writtenHowTo = howToStages.filter((s) => s.steps && s.steps.length > 0)
  const party = STAGES.find((s) => s.slug === "party")

  return (
    <main className="flex-1">
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">Lessons</span>
          </nav>
        </div>
      </section>

      <section className="container px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Intel Academy
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            The published lesson catalogue
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Honest inventory. No invented totals. Each stage page is a lesson with steps and skill
            tags. Written room guides and planning articles sit beside them.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          <CountCard
            label="Stage records"
            value={String(STAGES.length)}
            note={`${writtenHowTo.length} how-to stages with step trees. Party is the finale (order ${party?.order ?? 16}). There is no published stage 15.`}
          />
          <CountCard
            label="Written room guides"
            value={String(renovationGuides.length)}
            note="Bathroom, kitchen, painting, flooring — start-to-finish walkthroughs."
          />
          <CountCard
            label="Planning articles"
            value={String(blogPosts.length)}
            note="Kitchen, bathroom, systems, and planning lessons. Educational reno planning only — not trade licensing advice."
          />
          <CountCard
            label="Numbering"
            value="1–14 + 16"
            note="The journey is numbered to 16 because Party sits at the end. We do not invent a missing middle lesson to make the arithmetic prettier."
          />
        </dl>
      </section>

      <section className="container px-4 pb-16 md:px-6">
        {PHASES.map((phase) => {
          const meta = PHASE_META[phase]
          const stages = getStagesByPhase(phase)
          return (
            <div key={phase} className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-r ${meta.gradient}`} />
                <span className="whitespace-nowrap text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {meta.label}
                </span>
                <div className={`h-1.5 flex-1 rounded-full bg-gradient-to-l ${meta.gradient}`} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {stages.map((stage) => {
                  const diff = DIFFICULTY_META[stage.difficulty]
                  const stepCount = stage.steps?.length ?? 0
                  return (
                    <Link
                      key={stage.slug}
                      href={`/stages/${stage.slug}`}
                      className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl text-2xl ${stage.accent}`}>
                          <span aria-hidden>{stage.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                            <span className="font-semibold">Stage {stage.order}</span>
                            <span aria-hidden>·</span>
                            <span className={`inline-flex items-center gap-1.5 ${diff.text}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${diff.dot}`} aria-hidden />
                              {diff.label}
                            </span>
                            <span aria-hidden>·</span>
                            <span>
                              {stepCount === 0
                                ? "Finale page"
                                : `${stepCount} ${stepCount === 1 ? "subtopic" : "subtopics"}`}
                            </span>
                          </div>
                          <h2 className="mt-1 text-lg font-extrabold tracking-tight">{stage.name}</h2>
                          <p className="mt-1 text-sm text-muted-foreground">{stage.tagline}</p>
                        </div>
                        <ArrowRight className="mt-2 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}

        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-xl">
            <Link href="/guides">
              <BookOpen className="mr-2 h-4 w-4" />
              {renovationGuides.length} written room guides
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/blogs">
              {blogPosts.length} planning articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

function CountCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-3xl font-extrabold tracking-tight">{value}</dd>
      <p className="mt-2 text-sm text-muted-foreground">{note}</p>
    </div>
  )
}

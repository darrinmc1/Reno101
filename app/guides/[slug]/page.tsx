import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Signal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import HumorBreak from "@/components/humor-break"
import { getGuide, renovationGuides } from "@/lib/guides"

export function generateStaticParams() {
  return renovationGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return { title: "Guide not found" }
  return { title: guide.title, description: guide.excerpt }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  return (
    <main className="flex-1">
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/guides" className="hover:text-foreground">
              Room guides
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">{guide.title}</span>
          </nav>
        </div>
      </section>

      <article className="container px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/guides"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            All room guides
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{guide.category}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Signal className="h-3 w-3" />
              {guide.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {guide.duration}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight">{guide.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{guide.excerpt}</p>
          <p className="mt-3 text-sm text-muted-foreground">
            Educational renovation planning only. Waterproofing, structure, gas, and regulated
            electrical still belong to licensed trades and local rules.
          </p>

          <HumorBreak tag={guide.category.toLowerCase()} />

          <ol className="mt-10 space-y-8">
            {guide.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  Step {index + 1} of {guide.steps.length}
                </div>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight">{step.title}</h2>
                <p className="mt-3 leading-relaxed text-foreground/90">{step.description}</p>

                {step.tips.length > 0 && (
                  <div className="mt-5">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800">
                      Do this
                    </h3>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                      {step.tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {step.warnings.length > 0 && (
                  <div className="mt-5">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-amber-800">
                      Do not
                    </h3>
                    <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                      {step.warnings.map((warning) => (
                        <li key={warning}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </article>
    </main>
  )
}

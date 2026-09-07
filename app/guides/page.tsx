import Link from "next/link"
import { ArrowRight, Clock, Signal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { renovationGuides } from "@/lib/guides"

export const metadata = {
  title: "Room guides",
  description: `Start-to-finish written renovation guides. ${renovationGuides.length} published — bathroom, kitchen, painting, and flooring.`,
}

export default function GuidesIndexPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link href="/learn" className="hover:text-foreground">
              Lessons
            </Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">Room guides</span>
          </nav>
        </div>
      </section>

      <section className="container px-4 py-12 md:px-6">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {renovationGuides.length} published
          </Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Start-to-finish room guides
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Four written walkthroughs. Not twelve. Not a video library. Each one is a sequence you
            can actually work from — planning first, then the messy middle, then the punch list.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5">
          {renovationGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>{guide.category}</span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Signal className="h-3 w-3" />
                  {guide.difficulty}
                </span>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {guide.duration}
                </span>
                <span aria-hidden>·</span>
                <span>
                  {guide.steps.length} {guide.steps.length === 1 ? "step" : "steps"}
                </span>
              </div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">{guide.title}</h2>
              <p className="mt-2 text-muted-foreground">{guide.excerpt}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Open the guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

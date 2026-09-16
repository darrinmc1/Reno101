import Link from "next/link"
import { ArrowRight, BookOpen, CheckSquare, FileText, Lightbulb, Wrench } from "lucide-react"
import { getResourceCounts, RESOURCE_KIND_SLUGS, type ResourceKind } from "@/lib/stages"
import { blogPosts } from "@/lib/content"
import { renovationGuides } from "@/lib/guides"

export const metadata = {
  title: "Resources",
  description:
    "Published Renos101 resources with honest counts — ebooks, templates, checklists, tools, tips, plus written guides and articles.",
}

const KIND_META: Record<
  ResourceKind,
  { icon: typeof BookOpen; title: string; description: string; color: string }
> = {
  ebook: {
    icon: BookOpen,
    title: "Ebooks",
    description: "Deep-dive reads attached to a stage. Titles listed on the type page — not a hidden library.",
    color: "bg-amber-100 text-amber-600",
  },
  template: {
    icon: FileText,
    title: "Templates",
    description: "Spreadsheets and printables tagged to Planning and Painting. Files themselves are still rolling out.",
    color: "bg-sky-100 text-sky-700",
  },
  checklist: {
    icon: CheckSquare,
    title: "Checklists",
    description: "Single-sheet checks for a stage. Starter Pack items are the free ones.",
    color: "bg-stone-100 text-stone-700",
  },
  tool: {
    icon: Wrench,
    title: "Tools",
    description: "Named calculators and quizzes. Live ones are on /tools. The rest are Coming Soon — we do not ship a 404.",
    color: "bg-violet-100 text-violet-700",
  },
  tip: {
    icon: Lightbulb,
    title: "Tips",
    description: "Short stage notes. The useful sentence a tradie says once and assumes you heard.",
    color: "bg-teal-100 text-teal-700",
  },
}

export default function ResourcesPage() {
  const counts = getResourceCounts()
  const kinds = Object.keys(KIND_META) as ResourceKind[]
  const listedTotal = kinds.reduce((sum, kind) => sum + counts[kind], 0)

  return (
    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-16">
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,244,226,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Resource Library</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            What is actually published
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Honest counts from the stage catalogue. No &ldquo;70+ free resources.&rdquo; No invented video
            library. If a file is not ready, we say Coming Soon instead of linking to a dead download.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value={String(listedTotal)} label="Listed stage resources" />
          <Stat value={String(renovationGuides.length)} label="Written room guides" />
          <Stat value={String(blogPosts.length)} label="Planning articles" />
          <Stat value="Coming Soon" label="PDF template pack" />
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Browse by type</h2>
          <p className="mt-2 text-slate-600">
            These numbers come from the same stage catalogue the lesson pages render.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {kinds.map((kind) => {
            const meta = KIND_META[kind]
            const Icon = meta.icon
            const count = counts[kind]
            return (
              <Link key={kind} href={`/resources/${RESOURCE_KIND_SLUGS[kind]}`} className="group">
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${meta.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{meta.title}</h3>
                    <span className="ml-2 shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                      {count} {count === 1 ? "item" : "items"}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{meta.description}</p>
                  <p className="mt-4 text-sm font-medium text-amber-600 group-hover:underline">
                    Browse {meta.title} →
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Written lessons that exist today</h2>
          <p className="mt-2 text-slate-600">Real routes. Real word counts. No placeholder hubs.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/learn" className="group">
            <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                Course
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-amber-700">
                Stage lessons
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                14 how-to stages with steps, plus Party. Numbered as a 16-stage journey; stage 15 is
                not published.
              </p>
            </div>
          </Link>
          <Link href="/guides" className="group">
            <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                Guides
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-amber-700">
                {renovationGuides.length} room walkthroughs
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Bathroom, kitchen, painting, flooring — start to punch list.
              </p>
            </div>
          </Link>
          <Link href="/blogs" className="group">
            <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                Articles
              </span>
              <h3 className="mt-3 text-base font-semibold text-slate-900 group-hover:text-amber-700">
                {blogPosts.length} planning articles
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Budgets, layouts, systems, and the mistakes that turn a quote into a sequel.
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Looking for a calculator or a PDF pack?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          The material tracker is live. AI document generators exist as a trial UI. Style quiz, quote
          comparison, and paint coverage calculators are Coming Soon — we will not send you to a 404
          or a checkout that is not live.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/tools"
            className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          >
            See live tools
          </Link>
          <Link
            href="/downloads"
            className="rounded-xl border border-amber-200 bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-50"
          >
            Template pack status
          </Link>
        </div>
      </div>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white/70 p-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-sm text-slate-500">{label}</p>
    </div>
  )
}

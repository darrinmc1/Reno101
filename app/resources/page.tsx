import Link from "next/link"
import { ArrowRight, BookOpen, CheckSquare, FileText, Lightbulb, Wrench } from "lucide-react"
import { blogPosts } from "@/lib/content"
import { pageMetadata } from "@/lib/seo"
import { getResourceCounts, type ResourceKind } from "@/lib/stages"

export const metadata = pageMetadata({
  title: "Resources",
  description:
    "Ebooks, templates, checklists, tools, and tips, each tagged to the renovation stage that actually needs them.",
  path: "/resources",
})

const CARDS: {
  kind: ResourceKind
  href: string
  label: string
  singular: string
  plural: string
  blurb: string
  color: string
  icon: typeof BookOpen
}[] = [
  {
    kind: "ebook",
    href: "/resources/ebooks",
    label: "Ebooks",
    singular: "title",
    plural: "titles",
    blurb: "Deep-dive guides. Fewer words than a forum, more words than a tweet.",
    color: "bg-orange-100 text-orange-600",
    icon: BookOpen,
  },
  {
    kind: "template",
    href: "/resources/templates",
    label: "Templates",
    singular: "template",
    plural: "templates",
    blurb: "Quote comparisons, budgets, scope docs. Pre-filled so you're not staring at a blank cell.",
    color: "bg-sky-100 text-sky-700",
    icon: FileText,
  },
  {
    kind: "checklist",
    href: "/resources/checklists",
    label: "Checklists",
    singular: "checklist",
    plural: "checklists",
    blurb: "Print, tick, panic slightly less. One per stage, plus the edge cases.",
    color: "bg-stone-200 text-stone-700",
    icon: CheckSquare,
  },
  {
    kind: "tool",
    href: "/resources/tools",
    label: "Tools",
    singular: "tool",
    plural: "tools",
    blurb: "Cost calculators and material estimators for when 'from $X' is doing the talking.",
    color: "bg-violet-100 text-violet-700",
    icon: Wrench,
  },
  {
    kind: "tip",
    href: "/resources/tips",
    label: "Tips & tricks",
    singular: "tip",
    plural: "tips",
    blurb: "The stuff tradies say once and then assume you heard. Save time, save money.",
    color: "bg-teal-100 text-teal-700",
    icon: Lightbulb,
  },
]

export default function ResourcesPage() {
  const counts = getResourceCounts()
  const featured = blogPosts.slice(0, 3)

  return (
    <div className="container mx-auto max-w-6xl space-y-16 px-4 py-16">
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,244,226,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm md:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Resource Library</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Everything you need to renovate smarter
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Guides, templates, and tools for homeowners who want a plan, not a hopeful guess that the contractor is feeling generous.
          </p>
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Browse by type</h2>
          <p className="mt-2 text-slate-600">These are the resources already attached to the 16 stages. Counts are the real inventory.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon
            const count = counts[card.kind]
            const noun = count === 1 ? card.singular : card.plural
            return (
              <Link key={card.href} href={card.href} className="group">
                <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-slate-900">{card.label}</h3>
                    <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                      {count} {noun}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{card.blurb}</p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-amber-600 group-hover:underline">
                    Browse {card.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      <div>
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">From the guide library</h2>
          <p className="mt-2 text-slate-600">Published articles on this site. No unpublished reports hiding behind the cards.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((article) => (
            <Link key={article.slug} href={`/blogs/${article.slug}`} className="group">
              <div className="h-full rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-0.5 text-xs font-medium text-amber-700">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">{article.readTime}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-amber-700">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <h2 className="text-2xl font-bold text-slate-900">Can&rsquo;t find what you&rsquo;re looking for?</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-600">
          The blog has the long reads. The tools section is where you run your own numbers, instead of borrowing someone else&rsquo;s.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/blogs"
            className="rounded-xl bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-amber-700"
          >
            Browse all guides
          </Link>
          <Link
            href="/tools"
            className="rounded-xl border border-amber-200 bg-white px-6 py-3 text-sm font-semibold text-amber-700 shadow-sm hover:bg-amber-50"
          >
            Try the tools
          </Link>
        </div>
      </div>
    </div>
  )
}

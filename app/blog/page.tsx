import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

const POSTS = [
  {
    slug: "kitchen-renovation-cost-breakdown",
    title: "Kitchen Renovation Cost Breakdown: What You'll Actually Spend",
    excerpt: "We analyzed 200+ kitchen renovations to give you real numbers — not the lowball estimates that lead to budget shock.",
    category: "Cost Guides",
    readTime: "8 min read",
    date: "Jan 15, 2025",
  },
  {
    slug: "bathroom-tile-mistakes",
    title: "7 Bathroom Tile Mistakes That Are Expensive to Fix",
    excerpt: "Tile is one of the most permanent decisions in a bathroom renovation. Here's what to get right before you grout.",
    category: "Mistakes to Avoid",
    readTime: "6 min read",
    date: "Jan 8, 2025",
  },
  {
    slug: "contractor-red-flags",
    title: "Contractor Red Flags: How to Spot a Bad Hire Before It's Too Late",
    excerpt: "The warning signs are almost always there. Most homeowners just don't know what to look for.",
    category: "Hiring Help",
    readTime: "7 min read",
    date: "Dec 28, 2024",
  },
  {
    slug: "open-concept-worth-it",
    title: "Is Open Concept Still Worth It? An Honest Assessment",
    excerpt: "Open concept layouts dominated the last decade. Here's a clear-eyed look at the real trade-offs in 2025.",
    category: "Design Decisions",
    readTime: "5 min read",
    date: "Dec 20, 2024",
  },
  {
    slug: "permits-what-you-need",
    title: "Renovation Permits: What You Actually Need (And What Happens If You Skip Them)",
    excerpt: "Skipping permits is tempting. Here's why it's almost never worth the risk — and how to navigate the process.",
    category: "Planning",
    readTime: "9 min read",
    date: "Dec 12, 2024",
  },
  {
    slug: "flooring-comparison-guide",
    title: "Hardwood vs. LVP vs. Tile: The Flooring Comparison Guide",
    excerpt: "We break down durability, cost, installation complexity, and resale value so you can choose with confidence.",
    category: "Materials",
    readTime: "10 min read",
    date: "Dec 5, 2024",
  },
]

const CATEGORIES = ["All", "Cost Guides", "Mistakes to Avoid", "Hiring Help", "Design Decisions", "Planning", "Materials"]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wide text-sm">Renovation Guides</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn before you build</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Practical guides, honest cost breakdowns, and hard-won lessons from real renovations.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-slate-200 px-6 py-4 sticky top-0 bg-white z-10">
        <div className="max-w-4xl mx-auto flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === "All"
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {POSTS.map((post) => (
            <article key={post.slug} className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide bg-amber-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-500 transition-colors"
                  >
                    Read guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Single bottom CTA */}
      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Get new guides in your inbox</h2>
          <p className="text-slate-600 mb-6">One email per week. No fluff. Unsubscribe anytime.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
            >
              Sign Up Free
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

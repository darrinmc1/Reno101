import { Hammer, Users, Lightbulb, Sparkles } from "lucide-react"
import Link from "next/link"

const VALUES = [
  { icon: Hammer, title: "Practical over pretty", desc: "We care about what works, not what looks good on Instagram. Your renovation should survive real life — muddy boots, spilled wine, and all." },
  { icon: Users, title: "Built for decision-makers", desc: "Whether you're a first-time renovator or on your fifth project, we meet you where you are with advice that respects your intelligence." },
  { icon: Lightbulb, title: "Honest about trade-offs", desc: "Every choice has a cost. We tell you what you're giving up, not just what you're gaining, so you can make decisions you won't regret." },
  { icon: Sparkles, title: "Always improving", desc: "Renovation knowledge evolves. We update our guides as materials, codes, and best practices change — so you're never working from outdated advice." },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We help homeowners renovate without regret</h1>
          <p className="text-xl text-slate-300 mb-10">
            RenovateIQ was built because too many people spend too much money on renovations that disappoint. We're here to change that.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Start Free Guide
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our story</h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              It started with a kitchen renovation that went sideways. Our founder spent $40,000 on a remodel that looked great in the showroom and fell apart within two years. The contractor was technically competent. The materials were technically fine. But nobody helped make the right decisions upfront.
            </p>
            <p>
              That experience led to years of research, conversations with contractors, designers, and material scientists — and eventually to RenovateIQ. We believe the gap between a renovation you love and one you regret almost always comes down to decisions made before a single nail is driven.
            </p>
            <p>
              Today we help thousands of homeowners plan smarter renovations through practical guides, honest cost breakdowns, and tools that make the complex simple.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What we believe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — single focused action */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to renovate smarter?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join thousands of homeowners who plan better renovations with RenovateIQ.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-10 py-4 rounded-lg text-lg transition-colors"
          >
            Sign Up Free
          </Link>
        </div>
      </section>
    </main>
  )
}

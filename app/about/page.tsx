import { Hammer, Users, Lightbulb, Sparkles } from "lucide-react"

const VALUES = [
  { icon: Hammer, title: "Practical over pretty", desc: "We care about what works, not what looks good on Instagram. Your renovation should survive real life - muddy boots, spilled wine, and all." },
  { icon: Users, title: "Built for decision-makers", desc: "Not architects, not designers - you. The person standing in a hardware store at 8 PM wondering if 'eggshell' and 'ivory' are different enough to matter. (They are. We'll explain.)" },
  { icon: Lightbulb, title: "Honest about costs", desc: "Every guide includes realistic budgets. No 'you can renovate a kitchen for $5,000' energy. We'll tell you what things actually cost, including the things you forgot about." },
  { icon: Sparkles, title: "A little bit funny", desc: "Renovations are stressful enough without reading dry content that reads like an instruction manual for a product nobody bought. We add jokes. You're welcome." },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl space-y-16 px-4 py-16">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-600">Who We Are</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Reno101
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          We exist for people who begin a &ldquo;small weekend update&rdquo; and three hours later are
          comparing grout colors with the intensity of a hostage negotiator.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {VALUES.map((v) => {
          const Icon = v.icon
          return (
            <div key={v.title} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">{v.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="rounded-2xl border bg-amber-50 p-8 text-center md:p-12">
        <p className="text-xl font-medium text-slate-900">Our long-term job is simple:</p>
        <p className="mt-2 text-lg text-slate-600">
          Reduce panic, improve decisions, and keep at least one marriage alive during a kitchen remodel.
        </p>
      </div>

      <div className="space-y-4 text-center text-sm text-slate-400">
        <p>Built for homeowners, DIY optimists, and the brave souls who said &ldquo;How hard can it be?&rdquo; right before removing a load-bearing wall.</p>
      </div>
    </div>
  )
}

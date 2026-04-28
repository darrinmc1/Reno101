import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { formatAUD, type AddOn } from "@/lib/pricing"

const ACCENT: Record<NonNullable<AddOn["accent"]>, { stripe: string; iconBg: string; cta: string; ring: string }> = {
  violet: {
    stripe: "from-violet-400 to-purple-600",
    iconBg: "bg-violet-100 text-violet-700",
    cta: "text-violet-700",
    ring: "hover:border-violet-300/80 hover:shadow-violet-100",
  },
  sky: {
    stripe: "from-sky-400 to-blue-600",
    iconBg: "bg-sky-100 text-sky-700",
    cta: "text-sky-700",
    ring: "hover:border-sky-300/80 hover:shadow-sky-100",
  },
  emerald: {
    stripe: "from-emerald-400 to-teal-600",
    iconBg: "bg-emerald-100 text-emerald-700",
    cta: "text-emerald-700",
    ring: "hover:border-emerald-300/80 hover:shadow-emerald-100",
  },
  amber: {
    stripe: "from-amber-400 to-orange-500",
    iconBg: "bg-amber-100 text-amber-800",
    cta: "text-amber-700",
    ring: "hover:border-amber-300/80 hover:shadow-amber-100",
  },
  rose: {
    stripe: "from-rose-400 to-red-500",
    iconBg: "bg-rose-100 text-rose-700",
    cta: "text-rose-700",
    ring: "hover:border-rose-300/80 hover:shadow-rose-100",
  },
}

export function AddOnPackage({ addOn }: { addOn: AddOn }) {
  const tone = ACCENT[addOn.accent ?? "violet"]
  return (
    <Link
      href={addOn.href}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${tone.ring}`}
    >
      <div className={`h-1.5 w-full bg-gradient-to-r ${tone.stripe}`} aria-hidden />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-extrabold tracking-tight md:text-lg">{addOn.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{addOn.tagline}</p>
          </div>
          <div className={`shrink-0 rounded-full px-3 py-1 text-sm font-extrabold ${tone.iconBg}`}>
            {formatAUD(addOn.priceCents)}
          </div>
        </div>

        <ul className="mt-4 space-y-1.5 text-xs">
          {addOn.includes.map((line) => (
            <li key={line} className="flex items-start gap-1.5">
              <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-emerald-600" />
              <span className="text-foreground/80">{line}</span>
            </li>
          ))}
        </ul>

        <div className={`mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${tone.cta}`}>
          Add to your toolkit
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

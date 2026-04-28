import { Sparkles, Tag } from "lucide-react"
import type { Promo } from "@/lib/pricing"

const PROMO_COPY: Record<Exclude<Promo, "regular">, { label: string; sub: string; bg: string; text: string; border: string; icon: React.ReactNode }> = {
  launch: {
    label: "Early Bird — 25% off",
    sub: "Auto-applied for the first 90 days after launch.",
    bg: "bg-amber-100",
    text: "text-amber-900",
    border: "border-amber-200",
    icon: <Tag className="h-3.5 w-3.5" />,
  },
  waitlist: {
    label: "Waitlist Member — 50% off",
    sub: "Locked-in price. Buy now or any time after — same rate.",
    bg: "bg-violet-100",
    text: "text-violet-900",
    border: "border-violet-200",
    icon: <Sparkles className="h-3.5 w-3.5" />,
  },
}

export function DiscountBadge({
  promo,
  size = "sm",
}: {
  promo: Promo
  size?: "sm" | "lg"
}) {
  if (promo === "regular") return null
  const meta = PROMO_COPY[promo]
  const padding = size === "lg" ? "px-3 py-1 text-xs" : "px-2 py-0.5 text-[11px]"
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-bold uppercase tracking-wider ${padding} ${meta.bg} ${meta.text} ${meta.border}`}
    >
      {meta.icon}
      {meta.label}
    </span>
  )
}

export function DiscountBanner({ promo }: { promo: Promo }) {
  if (promo === "regular") return null
  const meta = PROMO_COPY[promo]
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-y px-4 py-3 text-center text-sm font-semibold ${meta.bg} ${meta.text} ${meta.border}`}>
      <span className="inline-flex items-center gap-1.5">
        {meta.icon}
        {meta.label}
      </span>
      <span className="text-foreground/70 font-medium">— {meta.sub}</span>
    </div>
  )
}

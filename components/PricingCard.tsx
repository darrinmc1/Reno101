import Link from "next/link"
import { ArrowRight, Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DiscountBadge } from "@/components/DiscountBadge"
import {
  formatAUD,
  priceFor,
  type PricingTier,
  type Promo,
} from "@/lib/pricing"

export function PricingCard({
  tier,
  promo,
}: {
  tier: PricingTier
  promo: Promo
}) {
  const current = priceFor(tier.price, promo)
  const regular = tier.price.regular
  const showStrike = current < regular
  const cardTone = tier.primary
    ? "border-2 border-primary bg-gradient-to-br from-primary/5 via-background to-primary/5 shadow-xl"
    : "border border-border bg-card shadow-sm"

  return (
    <article className={`relative flex flex-col rounded-3xl p-6 transition hover:shadow-lg md:p-8 ${cardTone}`}>
      {tier.primary && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="rounded-full bg-primary text-primary-foreground hover:bg-primary">
            <Star className="mr-1 h-3 w-3" />
            Most popular
          </Badge>
        </div>
      )}

      <header>
        <h3 className="text-xl font-extrabold tracking-tight md:text-2xl">{tier.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
      </header>

      <div className="mt-5 flex items-end gap-3">
        <div className="text-4xl font-extrabold tracking-tight md:text-5xl">{formatAUD(current)}</div>
        {showStrike && (
          <div className="pb-1 text-base text-muted-foreground line-through">{formatAUD(regular)}</div>
        )}
      </div>

      {promo !== "regular" && (
        <div className="mt-2">
          <DiscountBadge promo={promo} />
        </div>
      )}

      <p className="mt-3 text-xs text-muted-foreground">
        One payment · GST included · Lifetime access
      </p>

      <Separator className="my-5" />

      <ul className="space-y-2.5 text-sm">
        {tier.includes.map((line) => (
          <li key={line} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" />
            <span className="text-foreground/85">{line}</span>
          </li>
        ))}
      </ul>

      {tier.options && tier.options.length > 0 && (
        <details className="mt-5 rounded-xl border border-border bg-background/60 p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-foreground/80 hover:text-foreground">
            Choose one ({tier.options.length} available)
          </summary>
          <ul className="mt-3 space-y-2">
            {tier.options.map((o) => (
              <li key={o.id} className="rounded-lg border border-border/70 bg-card p-2.5">
                <div className="text-sm font-bold">{o.label}</div>
                {o.description && (
                  <div className="mt-0.5 text-xs text-muted-foreground">{o.description}</div>
                )}
              </li>
            ))}
          </ul>
        </details>
      )}

      <div className="mt-auto pt-6">
        <Button
          asChild
          size="lg"
          className={`w-full rounded-xl ${tier.primary ? "" : "bg-foreground text-background hover:bg-foreground/90"}`}
        >
          <Link href={tier.href}>
            {tier.cta}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  )
}

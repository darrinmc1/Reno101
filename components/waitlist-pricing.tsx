import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PriceDisclaimer } from "@/components/price-disclaimer"
import { WAITLIST_PACKS, type WaitlistPack } from "@/lib/waitlist-packs"

function PackCard({ pack }: { pack: WaitlistPack }) {
  const highlighted = Boolean(pack.highlighted)
  return (
    <Card
      className={`relative flex h-full flex-col rounded-2xl ${
        highlighted
          ? "border-0 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-xl"
          : "border-2"
      }`}
    >
      {pack.flag && (
        <div
          className={`absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold shadow ${
            highlighted
              ? "bg-background text-primary"
              : "border border-border bg-background text-muted-foreground"
          }`}
        >
          {pack.flag}
        </div>
      )}
      <CardHeader>
        <div className={`text-xs font-semibold uppercase tracking-widest ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>
          {pack.kind}
        </div>
        <CardTitle className="mt-2 flex items-baseline gap-1">
          <span className={`text-4xl font-extrabold ${highlighted ? "" : "text-foreground"}`}>{pack.price}</span>
          <span className={`text-sm ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>{pack.unit}</span>
        </CardTitle>
        <p className={`mt-3 text-sm ${highlighted ? "opacity-90" : "text-muted-foreground"}`}>{pack.tagline}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2.5 text-sm">
          {pack.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${highlighted ? "text-primary-foreground" : "text-primary"}`} aria-hidden />
              <span className={highlighted ? "" : "text-foreground"}>{f}</span>
            </li>
          ))}
        </ul>
        {pack.footnote && (
          <p className={`mt-4 text-xs ${highlighted ? "opacity-80" : "text-muted-foreground"}`}>{pack.footnote}</p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant={highlighted ? "secondary" : "outline"}
          className={`w-full rounded-lg ${highlighted ? "bg-background text-primary hover:bg-background/90" : ""}`}
        >
          <Link href={pack.ctaHref}>{pack.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export function WaitlistPricingSection({
  headingAs: Heading = "h2",
}: {
  headingAs?: "h1" | "h2"
}) {
  return (
    <section id="bundles" className="container px-4 py-16 md:px-6">
      <div className="mb-10 text-center">
        <Badge className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 hover:bg-amber-100">
          Paid packs on the waitlist
        </Badge>
        <Heading className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Start free. Paid packs when checkout&apos;s actually live.
        </Heading>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          The Starter Pack is yours now — drop your email. Project and all-access packs are priced below so you know what&apos;s coming; we&apos;ll email you when you can buy them for real. No fake checkout.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {WAITLIST_PACKS.map((pack) => (
          <PackCard key={pack.kind} pack={pack} />
        ))}
      </div>
      <div className="mt-6 flex flex-col items-center gap-2">
        <Button asChild variant="link" className="text-primary">
          <Link href="#subscribe">
            Get the free Starter Pack
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <p className="text-xs text-muted-foreground">
          Prices in AUD. Checkout isn&apos;t live yet — free Starter Pack and waitlist only for now.
        </p>
      </div>

      <div className="mt-10">
        <PriceDisclaimer />
      </div>
    </section>
  )
}

import Link from "next/link"
import { ArrowRight, Check, Hammer, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const availableNow = [
  "16-stage renovation roadmap",
  "Free Starter Pack by email",
  "Checklists, templates and guides",
  "Material Price Tracker and calculators",
  "Stage-by-stage DIY and tradie guidance",
]

const inDevelopment = [
  "Expanded project templates",
  "More downloadable renovation helpers",
  "Additional calculators and planning tools",
  "Paid access only after checkout is live and tested",
]

export function WaitlistPricingSection({
  headingAs: Heading = "h2",
}: {
  headingAs?: "h1" | "h2"
}) {
  return (
    <section id="bundles" className="container px-4 py-16 md:px-6">
      <div className="mb-10 text-center">
        <Badge className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 hover:bg-amber-100">
          Early access
        </Badge>
        <Heading className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Use the renovation tools now. Paid packs can wait.
        </Heading>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Checkout is not live, so Reno101 is not publishing paid pack prices yet. Start with the free roadmap, tools and Starter Pack while we build the deeper project resources.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/60 p-7">
          <Hammer className="h-8 w-8 text-emerald-700" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-emerald-700">Available now</p>
          <h3 className="mt-2 text-2xl font-extrabold text-foreground">Free renovation planning</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            {availableNow.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" /> {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-7 w-full rounded-lg">
            <Link href="#subscribe">Get the free Starter Pack <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/60 p-7">
          <Wrench className="h-8 w-8 text-amber-700" />
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-amber-700">In development</p>
          <h3 className="mt-2 text-2xl font-extrabold text-foreground">Deeper project resources</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            {inDevelopment.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" /> {item}
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-7 w-full rounded-lg">
            <Link href="/resources">Browse current resources <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

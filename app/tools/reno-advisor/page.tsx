import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RenoAdvisorForm } from "@/components/reno-advisor-form"

export const metadata = {
  title: "Reno Advisor",
  description:
    "Paste one renovation question. Get cited advice from the 16-stage guides — not a chatbot, not unlimited AI.",
}

export default function RenoAdvisorPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="mb-6 gap-1">
          <Link href="/tools">
            <ArrowLeft className="h-4 w-4" />
            All Tools
          </Link>
        </Button>

        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          One-job lookup
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Reno Advisor</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Paste a reno question. We search the existing 16-stage guides and written how-tos, then
          quote the matching passages with citations. No generated chat. No fake unlimited AI.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Included with All-Access (AU$149/year) when checkout lands — we&apos;ll email when Stripe is
          live. The lookup works now so the claim is real.
        </p>

        <div className="mt-8">
          <RenoAdvisorForm />
        </div>
      </div>
    </div>
  )
}

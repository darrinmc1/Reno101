import { Receipt } from "lucide-react"

/**
 * PriceDisclaimer — a small, on-brand banner reminding readers that every price
 * on the page (ours and any material/labour costs referenced in our guides) is
 * ballpark. Drop this at the bottom of any page that displays pricing.
 */
export function PriceDisclaimer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <p className="mx-auto max-w-3xl text-center text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">A note on prices:</span>{" "}
        every number you see here — ours, plus any tile, tapware or tradie rates we mention in our guides — is ballpark. Building materials move faster than we can edit ebooks.
        "From AU$X" always means "from more." Nothing quoted here is a real quote. Get one in writing before you commit.
      </p>
    )
  }

  return (
    <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-950">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-amber-200 text-amber-800">
        <Receipt className="h-5 w-5" />
      </div>
      <div className="text-sm leading-relaxed">
        <div className="font-bold">A note on prices, for the record.</div>
        <p className="mt-1 opacity-90">
          Every number you see here — ours, plus any tile, tapware, or tradie rates referenced in our guides — is a
          ballpark figure. Building materials move faster than we can edit ebooks, and "from AU$X" always means "from
          more." None of the costs we quote are a quote. Get one in writing before you spend actual money.
        </p>
      </div>
    </div>
  )
}

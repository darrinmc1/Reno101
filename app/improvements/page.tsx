import Link from "next/link"
import { Construction, ArrowLeft } from "lucide-react"

export default function ImprovementsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b bg-white py-16 text-center">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-orange-100 p-4">
              <Construction className="h-12 w-12 text-orange-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-3">We&apos;re Building Something Better</h1>
          <p className="text-slate-600 max-w-lg mx-auto mb-8 text-lg">
            Checkout isn&apos;t live. Paid packs sit on the waitlist (AU$49 / AU$149).
            We&apos;ll email when Stripe can actually take a payment — no $5/month lock-in, no charge today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

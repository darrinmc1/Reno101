import Link from "next/link"
import { ArrowLeft, ArrowRight, Bell, RefreshCw, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Monthly updates",
  description:
    "What's new in your Reno101 guide each month — ebooks, templates, pricing refreshes, real-reno case studies.",
}

export default function UpdatesPage() {
  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <section className="border-b border-border/70 bg-background/60">
        <div className="container px-4 py-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span aria-hidden>/</span>
            <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
            <span aria-hidden>/</span>
            <span className="font-medium text-foreground">Updates</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="container px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <RefreshCw className="h-3.5 w-3.5 text-emerald-600" />
            Updates included for life
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            What's new in your guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every month we add new ebooks, templates, pricing refreshes and case studies. If you
            already own the guide, every update is free — just re-download from the same link.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-xl">
              <Link href="/#subscribe">
                <Bell className="mr-2 h-4 w-4" />
                Get notified by email
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/pricing">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coming-soon notice */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-border bg-secondary/30 p-8 text-center md:p-12">
          <Sparkles className="mx-auto h-8 w-8 text-amber-500" />
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
            Updates log starts when we launch
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            We're still finalising launch content. As soon as Reno101 ships, this page will fill
            up with monthly entries — what was added, what was rewritten, what's coming next.
          </p>
          <div className="mt-6 grid gap-3 text-left sm:grid-cols-2">
            <PreviewCard month="Launch" items={["Full 16-stage catalogue", "All initial ebooks, templates, checklists", "All room guides", "Cost calculators v1"]} />
            <PreviewCard month="Month 1" items={["Material pricing refresh", "Kitchen appliance pricing guide", "5 new templates", "First reno case studies"]} />
          </div>
          <div className="mt-7">
            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/pricing">
                See pricing options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

function PreviewCard({ month, items }: { month: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{month}</div>
      <ul className="mt-3 space-y-1.5 text-sm">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

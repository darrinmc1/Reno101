import {
  FileText,
  Calculator,
  Users,
  Calendar,
  Wallet,
  Download,
  ArrowRight,
  ClipboardCheck,
  LayoutGrid,
  Scale,
  Shield,
  Phone,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const TEMPLATES = [
  {
    slug: "renovation-brief-template.pdf",
    icon: FileText,
    title: "Renovation Brief",
    description:
      "Get crystal clear on what you want before you talk to anyone. Project name, property details, scope of work, style preferences, priorities, timeline, budget range, and signature.",
    fields: 9,
  },
  {
    slug: "material-estimator-template.pdf",
    icon: Calculator,
    title: "Material Estimator",
    description:
      "Track every material, compare prices, and never buy twice. Multi-row material tracking table with units, quantities, supplier info, and automatic totals.",
    fields: 7,
  },
  {
    slug: "contractor-comparison-template.pdf",
    icon: Users,
    title: "Contractor Comparison",
    description:
      "Compare quotes side-by-side so you pick the right team, not just the cheapest. Licence numbers, quote amounts, scope, timeline, references, and ratings.",
    fields: 8,
  },
  {
    slug: "renovation-timeline-template.pdf",
    icon: Calendar,
    title: "Renovation Timeline",
    description:
      "Map every phase, task, and milestone so nothing falls through the cracks. Multi-phase timeline with start/end dates, contractors, budgets, and status tracking.",
    fields: 8,
  },
  {
    slug: "budget-tracker-template.pdf",
    icon: Wallet,
    title: "Budget Tracker",
    description:
      "Keep your renovation budget on track. Track budgeted vs. actual spending across design, materials, labour, permits, contingency, and miscellaneous categories.",
    fields: 6,
  },
  {
    slug: "permit-checklist-template.pdf",
    icon: ClipboardCheck,
    title: "Permit Checklist",
    description:
      "Track every permit required for your renovation from application to approval. Building, electrical, plumbing, zoning, occupancy -- log jurisdiction, costs, dates, and status.",
    fields: 8,
  },
  {
    slug: "room-by-room-planner.pdf",
    icon: LayoutGrid,
    title: "Room-by-Room Planner",
    description:
      "Plan every room in detail so nothing is left to chance. Room dimensions, purpose, finishes, lighting, fixtures, paint colour, budget, and priority for 8+ rooms.",
    fields: 10,
  },
  {
    slug: "contractor-quote-comparison.pdf",
    icon: Scale,
    title: "Contractor Quote Comparison",
    description:
      "Compare 4 contractor quotes side-by-side -- scope, exclusions, payment schedule, insurance, warranty, and start dates. Includes a pre-hire checklist.",
    fields: 8,
  },
  {
    slug: "warranty-tracker-template.pdf",
    icon: Shield,
    title: "Warranty Tracker",
    description:
      "Never miss a warranty claim. Track appliances, fixtures, and systems with brand, model, install date, warranty period, provider contact, and receipt status.",
    fields: 8,
  },
  {
    slug: "emergency-contact-sheet.pdf",
    icon: Phone,
    title: "Emergency Contact Sheet",
    description:
      "Keep plumber, electrician, roofer, locksmith, HVAC, handyman, architect, and structural engineer contacts close. Emergency-ready with phone, email, and after-hours notes.",
    fields: 6,
  },
]

export const metadata = {
  title: "Downloads",
  description:
    "Download free Renos101 renovation planning templates — renovation brief, material estimator, contractor comparison, timeline, budget tracker, permit checklist, room planner, quote comparison, warranty tracker, and emergency contact sheet.",
}

export default function DownloadsPage() {
  return (
    <main className="flex-1">
      {/* ============ HERO ============ */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute -top-24 -left-24 -z-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-300/40 via-amber-200/30 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -right-16 -z-10 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-violet-300/30 via-sky-200/30 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="container px-4 py-14 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground shadow-sm backdrop-blur">
              <FileText className="h-3.5 w-3.5 text-amber-500" />
              Free downloadable templates
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Renovation{" "}
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-violet-600 bg-clip-text text-transparent">
                Templates
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Ten templates are specified. The PDF files are not on the server yet, so the download
              buttons say Coming Soon instead of 404. Use the stage lessons and written guides in
              the meantime — those are live.
            </p>
          </div>
        </div>
      </section>

      {/* ============ TEMPLATE CARDS ============ */}
      <section className="container px-4 pb-16 md:px-6">
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => {
            const Icon = t.icon
            return (
              <Card key={t.slug} className="flex flex-col transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-3 text-xl">{t.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {t.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      PDF
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {t.fields} fields
                    </Badge>
                    <Badge className="bg-amber-100 text-xs text-amber-800 hover:bg-amber-100">
                      Coming Soon
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled className="w-full rounded-xl">
                    <Download className="mr-2 h-4 w-4" />
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="container px-4 pb-20 md:px-6">
        <div className="rounded-3xl border-2 border-primary/40 bg-primary/5 p-8 text-center md:p-12">
          <Wallet className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Need the full suite?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            When the files land they will match these titles — no surprise SKUs and no checkout
            invented for this page. Until then, the {TEMPLATES.length} cards below are a catalogue,
            not a download library. The stage lessons and room guides are the usable writing.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-xl">
              <Link href="/learn">
                Open the lesson catalogue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl">
              <Link href="/tools">
                See live tools
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

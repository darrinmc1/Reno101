import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  FileText,
  Palette,
  Ruler,
  Sparkles,
  Wrench,
} from "lucide-react"

export const metadata = {
  title: "Tools",
  description:
    "Renovation tools — material price tracker, AI document generators, and more to help you plan your project.",
}

export default function ToolsPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* ============ Hero ============ */}
        <div className="mb-12 rounded-[2rem] border border-primary/15 bg-[linear-gradient(135deg,rgba(255,242,222,0.95),rgba(225,241,232,0.9))] p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/75 px-3 py-1 text-sm text-primary">
            <Wrench className="h-4 w-4" />
            Renovation Tools
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Tools to plan, price, and brief your renovation
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-muted-foreground">
            Compare material prices, look up cited stage-guide advice, and capture a project brief.
          </p>
        </div>

        <section className="mb-16">
          <Card className="border-primary/15 shadow-sm">
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-lg">Reno Advisor</CardTitle>
              <CardDescription>
                One job: paste a renovation question, get quoted passages from the 16-stage guides.
                Not a chatbot. Not unlimited AI.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Cited excerpts with stage links
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  Uses existing guides only — no invented chat
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  All-Access AU$149/year when Stripe is live
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/tools/reno-advisor">
                  Ask one question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* ============ AI Document Generators ============ */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">AI Document Generators</h2>
              <p className="text-sm text-muted-foreground">
                Powered by Gemini Flash AI — generate professional renovation documents in seconds
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Renovation Brief Generator */}
            <Card className="group relative flex flex-col border-primary/10 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Renovation Brief Generator</CardTitle>
                <CardDescription>
                  Create a professional renovation project brief to share with contractors and
                  trades.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Project scope &amp; requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Budget &amp; timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Ready to share with contractors
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tools/renovation-brief">
                    Generate Brief
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Material Estimator */}
            <Card className="group relative flex flex-col border-primary/10 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Ruler className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Material Estimator</CardTitle>
                <CardDescription>
                  Estimate materials, quantities, and costs for your renovation project.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Detailed materials list
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Quantity &amp; cost estimates
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Australian pricing references
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tools/material-estimator">
                    Estimate Materials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Design Brief */}
            <Card className="group relative flex flex-col border-primary/10 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Design Brief</CardTitle>
                <CardDescription>
                  Capture your renovation style, functional needs, and design requirements.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Style &amp; aesthetic preferences
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Functional requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Design brief for architects
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/tools/design-brief">
                    Create Brief
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-6 rounded-xl border border-primary/10 bg-primary/[0.03] p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Need a cited answer, not a generated doc?</span>{" "}
                Use the{" "}
                <Link href="/tools/reno-advisor" className="font-medium text-primary underline underline-offset-2">
                  Reno Advisor
                </Link>
                . Paid packs stay on the waitlist — we&apos;ll email when Stripe is live.
              </div>
            </div>
          </div>
        </section>

        {/* ============ Other Tools ============ */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Other Tools</h2>
              <p className="text-sm text-muted-foreground">
                Browse and compare renovation material prices
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Material Tracker (existing) */}
            <Card className="border-primary/10 shadow-sm transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Material Tracker</CardTitle>
                <CardDescription>
                  Compare material prices across local stores and track your renovation shopping
                  list.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Compare store pricing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Filter by category
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    Sort by price &amp; availability
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/tools/material-tracker">
                    Open Tracker
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

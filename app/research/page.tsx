import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, FileText, Search } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Renovation Research for Questions Too Specific for Casual Googling
        </h1>
        <p className="text-xl text-muted-foreground">
          Ask the messy, local, technical renovation questions that appear right after you remove one innocent-looking
          panel and regret everything.
        </p>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Send The Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Permits, waterproofing, insulation, flooring, layout decisions, or that one weird wall your builder
              keeps squinting at.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Fast Turnaround</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Because some decisions cannot wait while you spend six nights in an online forum called `RenoTruth247`.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Practical Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get a clear answer with useful context, sensible next steps, and fewer mystery phrases than a contractor
              quote.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-16">
        <CardHeader>
          <CardTitle className="text-2xl">How It Works</CardTitle>
          <CardDescription>
            The service is built for real renovation decisions, not generic advice with suspicious confidence.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-white">
                1
              </div>
              <div>
                <h3 className="mb-1 font-medium">Send the real version of the problem</h3>
                <p className="text-muted-foreground">
                  The more detail you provide, the better the answer. "Bathroom help" is a mood. "What waterproofing
                  system makes sense for a second-floor bathroom over timber framing?" is a useful question.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-white">
                2
              </div>
              <div>
                <h3 className="mb-1 font-medium">We dig into the ugly bits</h3>
                <p className="text-muted-foreground">
                  We look at the relevant details, including local considerations, best practices, and the stuff
                  nobody remembers until a permit officer appears.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-white">
                3
              </div>
              <div>
                <h3 className="mb-1 font-medium">We ask follow-ups if needed</h3>
                <p className="text-muted-foreground">
                  If your answer depends on climate, location, structure, or whether the wall is carrying the emotional
                  burden of the whole house, we will ask.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-medium text-white">
                4
              </div>
              <div>
                <h3 className="mb-1 font-medium">You get a response you can actually use</h3>
                <p className="text-muted-foreground">
                  Within 24 hours, you get practical guidance that helps you make the next decision without spinning in
                  circles over tile adhesive forums.
                </p>
              </div>
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="mb-16 rounded-lg bg-gray-50 p-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center text-2xl font-bold">Questions We Were Built For</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                "What permits do I need for a kitchen renovation in my area, and which parts trigger actual paperwork
                instead of confident guessing?"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                "How do I insulate an attic conversion in a humid climate without accidentally growing a science
                project?"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span>"What flooring works in a basement that occasionally gets damp and occasionally gets dramatic?"</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                "How do I size HVAC properly for a home addition instead of just buying the loudest option?"
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              <span>
                "What are realistic bathroom remodel material costs in my location, and which line items are waiting
                to ambush me?"
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Stop Guessing?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Research requests are available on Standard and Premium plans. Use them when the stakes are too high for a
          shrug, a hunch, or your cousin who once tiled a laundry in 2017.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/pricing">
            <Button size="lg">See The Plans</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg">
              Open Account Area
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

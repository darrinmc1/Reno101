import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileSearch, Lightbulb, Search, Star } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-16 text-center text-white mb-12">
        <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20">Research</Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
          Deep Research, On Demand
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
          Get thorough, cited answers to complex questions. Our research service is currently in waitlist — join now to be among the first to access it.
        </p>
        <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
          <Link href="/#waitlist">
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* What we research */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">What We Research</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Search className="h-8 w-8 text-slate-700 mb-2" />
              <CardTitle>Market &amp; Competitive</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Industry landscapes, competitor analysis, market sizing, and trend identification.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileSearch className="h-8 w-8 text-slate-700 mb-2" />
              <CardTitle>Academic &amp; Scientific</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Literature reviews, study summaries, evidence synthesis, and expert consensus.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Lightbulb className="h-8 w-8 text-slate-700 mb-2" />
              <CardTitle>Strategic &amp; Decision</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              Due diligence, investment theses, policy analysis, and scenario planning.
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Pricing — aligned to waitlist map */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-2">Waitlist Pricing</h2>
        <p className="text-center text-slate-500 mb-8">
          Lock in founding-member rates when you join the waitlist. Final pricing confirmed at launch.
        </p>
        <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Standard
                <span className="text-2xl font-bold">AU$49</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-600">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" /> Comprehensive written report</li>
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" /> Cited sources</li>
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" /> One revision round</li>
              </ul>
              <Button asChild className="w-full mt-4" variant="outline">
                <Link href="/#waitlist">Join Waitlist</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-900">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Premium
                <span className="text-2xl font-bold">AU$149</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-600">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-900 shrink-0" /> Everything in Standard</li>
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-900 shrink-0" /> Extended depth &amp; breadth</li>
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-900 shrink-0" /> Priority queue placement</li>
                <li className="flex items-start gap-2"><Star className="h-4 w-4 mt-0.5 text-slate-900 shrink-0" /> Unlimited revisions</li>
              </ul>
              <Button asChild className="w-full mt-4 bg-slate-900 text-white hover:bg-slate-700">
                <Link href="/#waitlist">Join Waitlist</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">
          Turnaround times will be published once our human research queue is live.
        </p>
      </div>
    </div>
  )
}

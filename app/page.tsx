import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    quote: "I was completely overwhelmed by our kitchen reno until I found Reno101. The cost breakdowns alone saved us from a $15,000 mistake with a contractor who was padding his quote.",
    author: "Sarah M.",
    project: "Full Kitchen Renovation, Toronto",
    savings: "Saved ~$12,000",
    rating: 5,
  },
  {
    quote: "The bathroom planning guide walked me through every single decision I didn't know I had to make. Tile layout, ventilation, waterproofing — stuff YouTube videos never cover. Worth every penny.",
    author: "James & Linda K.",
    project: "Master Bathroom Remodel, Vancouver",
    savings: "Avoided 3 costly mistakes",
    rating: 5,
  },
  {
    quote: "As a first-time homeowner I had no idea where to start. Reno101 gave me the confidence to manage my own basement renovation. My contractor actually respected me more because I knew what I was talking about.",
    author: "Marcus T.",
    project: "Basement Finishing, Calgary",
    savings: "Completed on budget",
    rating: 5,
  },
  {
    quote: "I used the contractor vetting checklist and it was a game changer. Found out one of my top candidates had three unresolved complaints. Dodged a huge bullet thanks to Reno101.",
    author: "Priya S.",
    project: "Whole Home Renovation, Ottawa",
    savings: "Avoided bad contractor",
    rating: 5,
  },
]

const CASE_STUDIES = [
  {
    title: "Kitchen Transformation",
    before: "Outdated 1990s layout with poor lighting and no island",
    after: "Open-concept kitchen with quartz counters and custom cabinetry",
    budget: "$45,000",
    duration: "8 weeks",
    highlight: "Stayed $3,200 under budget using Reno101 cost guides",
  },
  {
    title: "Bathroom Overhaul",
    before: "Cramped 5x7 bathroom with original 1970s fixtures",
    after: "Spa-inspired bathroom with walk-in shower and heated floors",
    budget: "$22,000",
    duration: "4 weeks",
    highlight: "Avoided $4,500 in unnecessary upgrades after reading our guides",
  },
  {
    title: "Basement Suite",
    before: "Unfinished basement used for storage",
    after: "Legal secondary suite generating $1,800/month rental income",
    budget: "$68,000",
    duration: "14 weeks",
    highlight: "ROI achieved in under 4 years",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Renovate Smarter.
            <span className="text-amber-400"> Not Harder.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Expert guides, cost breakdowns, and contractor vetting tools for Canadian homeowners tackling their first renovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold text-lg px-8">
              Start Planning Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8">
              Browse Guides
            </Button>
          </div>
          <p className="mt-6 text-slate-400 text-sm">Join 12,000+ homeowners who renovated with confidence</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-amber-50 border-y border-amber-100 py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-800">12,000+</div>
              <div className="text-sm text-slate-600">Homeowners Helped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">$2.4M+</div>
              <div className="text-sm text-slate-600">Saved on Renovations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-800">98%</div>
              <div className="text-sm text-slate-600">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-4">Everything You Need to Renovate with Confidence</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Stop guessing. Start knowing exactly what your renovation should cost, who to hire, and what questions to ask.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Real Cost Breakdowns</h3>
                <p className="text-slate-600">Detailed, up-to-date pricing for every type of renovation in Canadian markets. No more guessing if a quote is fair.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Contractor Vetting Tools</h3>
                <p className="text-slate-600">Step-by-step checklists and red flag guides to help you find trustworthy contractors and avoid costly mistakes.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Planning Guides</h3>
                <p className="text-slate-600">Room-by-room renovation guides that walk you through every decision, timeline, and potential pitfall.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Real Homeowners. Real Results.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Thousands of Canadians have used Reno101 to plan smarter renovations, avoid contractor scams, and stay on budget.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-amber-200 mb-2" />
                  <p className="text-slate-700 mb-4 leading-relaxed italic">{testimonial.quote}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-800">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.project}</div>
                    </div>
                    <div className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                      {testimonial.savings}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Renovation Success Stories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">See how homeowners used Reno101 to transform their spaces — on time and on budget.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-4">
                  <h3 className="text-white font-bold text-lg">{study.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-amber-300 text-sm font-medium">{study.budget}</span>
                    <span className="text-slate-300 text-sm">{study.duration}</span>
                  </div>
                </div>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Before</div>
                      <p className="text-slate-600 text-sm">{study.before}</p>
                    </div>
                    <div className="border-l-4 border-amber-400 pl-3">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">After</div>
                      <p className="text-slate-700 text-sm font-medium">{study.after}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-green-800 text-sm font-medium">{study.highlight}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Renovation?</h2>
          <p className="text-amber-100 text-lg mb-8">Get instant access to cost guides, planning checklists, and contractor vetting tools.</p>
          <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 font-semibold text-lg px-10">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="mt-4 text-amber-200 text-sm">No credit card required. Free guides available instantly.</p>
        </div>
      </section>
    </div>
  )
}

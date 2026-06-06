import Link from "next/link"
import { ArrowRight, HelpCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Where should I start if my project still feels vague?",
    a: "Start with the Ideas and Planning stages. If the brief is fuzzy, the budget and quote process will happily become interpretive art.",
  },
  {
    q: "Do I need to read everything before I begin?",
    a: "No. The better approach is to find your current stage, read that first, then only move forward into the next stage. Renovation already comes with enough overwhelm for free.",
  },
  {
    q: "Can this replace advice from a licensed trade or local authority?",
    a: "No. Use the site to get oriented, ask better questions, and avoid obvious mistakes. For structure, waterproofing, regulated electrical, gas, and permits, local rules and licensed professionals still matter.",
  },
  {
    q: "Is the content only for Australia?",
    a: "The advice leans Australian in pricing and some terminology, but most planning principles travel well across English-speaking markets. Regulatory and permit details do not travel nearly as well, so always cross-check locally.",
  },
  {
    q: "What is the difference between a guide, a stage page, and research help?",
    a: "Guides cover broad topics. Stage pages organize the whole renovation process in sequence. Research help is for specific questions where the answer depends on your location, scope, or technical details.",
  },
  {
    q: "Do I need a bundle or just one download?",
    a: "If you only need one checklist or template, buy the one thing. If you are doing a whole room and expect decisions to keep arriving in pairs, the bundle usually makes more sense.",
  },
]

export default function FaqPage() {
  return (
    <main className="flex-1">
      <section className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            FAQ
          </Badge>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently asked, answered without waffle.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            The fast version of what most people want to know before the project starts mutating.
          </p>
        </div>
      </section>

      <section className="container px-4 pb-16 md:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card shadow-sm">
          <Accordion type="single" collapsible className="divide-y divide-border">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-0 px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="container px-4 pb-20 md:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/20 p-10 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Still have a suspiciously specific question?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            That is usually the moment to move from general reading to actual research help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-xl">
              <Link href="/research/new">
                Ask a research question
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/glossary">Browse the glossary</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

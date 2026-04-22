import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Renovate Smarter, Panic Less, and Avoid Buying the Wrong Tile in Bulk
            </h1>
            <p className="mb-8 max-w-lg text-xl text-muted-foreground">
              Renovation Helper is for homeowners who want clear advice, useful tools, and fewer midnight arguments
              with a spreadsheet titled `final-budget-v7-actual-final`.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/pricing">
                <Button size="lg" className="font-medium">
                  Start Planning
                </Button>
              </Link>
              <Link href="/blogs">
                <Button size="lg" variant="outline" className="font-medium">
                  Read The Guides
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Home renovation project"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 max-w-xs rounded-lg bg-white p-4 shadow-lg">
              <p className="font-medium">
                "I came for renovation advice and stayed because somebody finally explained why my budget kept
                behaving like a fugitive."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">- Sarah T., still suspicious of stone benchtop pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

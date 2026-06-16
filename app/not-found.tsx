import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Compass, Home } from "lucide-react"

export const metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center md:px-6">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Compass className="h-7 w-7" />
      </div>
      <div className="max-w-xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Wrong site, mate.
        </h1>
        <p className="text-muted-foreground">
          This page either doesn't exist or someone's run off with it. Either way — back to the front, grab a coffee, try again.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="rounded-xl">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to the home page
          </Link>
        </Button>
        <Button asChild variant="outline" className="rounded-xl">
          <Link href="/blogs">Browse the guides</Link>
        </Button>
      </div>
    </div>
  )
}

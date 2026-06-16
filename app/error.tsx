"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { TriangleAlert } from "lucide-react"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 py-16 text-center md:px-6">
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber-100 text-amber-700">
        <TriangleAlert className="h-7 w-7" />
      </div>
      <div className="max-w-xl space-y-3">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Something fell off the back of the ute.
        </h1>
        <p className="text-muted-foreground">
          Page didn't load properly. Give it another go — usually that sorts it.
        </p>
      </div>
      <Button onClick={reset} className="rounded-xl">
        Try again
      </Button>
    </div>
  )
}

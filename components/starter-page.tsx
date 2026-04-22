import Link from "next/link"
import { Button } from "@/components/ui/button"

type StarterPageProps = {
  eyebrow: string
  title: string
  description: string
  aside?: string
  bullets?: string[]
  primaryHref: string
  primaryLabel: string
  secondaryHref: string
  secondaryLabel: string
}

export default function StarterPage({
  eyebrow,
  title,
  description,
  aside,
  bullets,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: StarterPageProps) {
  return (
    <div className="container px-4 py-20 md:px-6">
      <div className="mx-auto max-w-3xl rounded-3xl border bg-white p-10 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        {aside ? <p className="mt-4 rounded-2xl bg-muted px-4 py-3 text-sm text-muted-foreground">{aside}</p> : null}
        {bullets?.length ? (
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {bullets.map((bullet) => (
              <li key={bullet} className="rounded-xl border px-4 py-3">
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref}>
            <Button>{primaryLabel}</Button>
          </Link>
          <Link href={secondaryHref}>
            <Button variant="outline">{secondaryLabel}</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

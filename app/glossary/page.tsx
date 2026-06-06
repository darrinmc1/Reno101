import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const terms = [
  {
    term: "Architrave",
    short: "The trim around a door or window.",
    detail: "It hides the join between the frame and the wall and makes the opening look finished instead of vaguely unfinished on purpose.",
  },
  {
    term: "Batten",
    short: "A narrow strip of timber or metal used to support or fix something.",
    detail: "You will hear this in walls, ceilings, cladding, and roofing. It is one of those words tradies say like everyone met it in kindergarten.",
  },
  {
    term: "Cornice",
    short: "The decorative or simple moulding where the wall meets the ceiling.",
    detail: "Sometimes elegant, sometimes plain, always weirdly noticeable once someone points out that yours does not match in the hallway.",
  },
  {
    term: "Easement",
    short: "A legal area on your property that someone else has rights over.",
    detail: "Often it is for drainage, sewer, or utilities. Building over it without checking first is an excellent way to meet paperwork you did not want.",
  },
  {
    term: "Fit-off",
    short: "The final installation of visible fixtures and fittings.",
    detail: "This is when taps, power points, switches, lights, and other finish items get connected after the rough-in work hiding behind the walls is done.",
  },
  {
    term: "Flashing",
    short: "A waterproof material used around roof and wall junctions.",
    detail: "If flashing is wrong, water will find the gap with the focus of a trained investigator.",
  },
  {
    term: "Grout",
    short: "The filler between tiles.",
    detail: "It is not just decoration. It affects durability, maintenance, and how much regret you feel after choosing bright white in a muddy household.",
  },
  {
    term: "Noggin",
    short: "A short horizontal piece between wall studs or ceiling joists.",
    detail: "It stiffens the framing and helps support sheet material. Also a delightful word for something so unglamorous.",
  },
  {
    term: "Rough-in",
    short: "The hidden services stage before walls are closed up.",
    detail: "Plumbing, electrical, gas, HVAC, and similar systems get installed here. This is the stage where mistakes become expensive archaeology later.",
  },
  {
    term: "Scope",
    short: "The exact work included in the project.",
    detail: "Good scope protects budgets and timelines. Bad scope is how a simple refresh grows antlers and becomes a full renovation by accident.",
  },
  {
    term: "Soffit",
    short: "The boxed-in section that drops below a ceiling or roof edge.",
    detail: "Inside, it often hides services. Outside, it is the underside of the roof overhang. Either way, it is usually there because something needed to be covered politely.",
  },
  {
    term: "Subfloor",
    short: "The structural layer beneath your finished floor.",
    detail: "Tile, timber, vinyl, and carpet all depend on this being flat, sound, and suitable. Bad subfloors eventually announce themselves.",
  },
  {
    term: "Variation",
    short: "A change to the agreed work after the contract is underway.",
    detail: "Sometimes necessary, often expensive, and usually the moment everyone discovers the scope document was more important than it looked.",
  },
  {
    term: "Waterproofing",
    short: "The moisture barrier system used in wet areas.",
    detail: "Bathrooms and laundries rely on it. This is not a category for brave improvisation or a mate who is 'pretty handy.'",
  },
]

export default function GlossaryPage() {
  const grouped = terms.reduce<Record<string, typeof terms>>((acc, item) => {
    const key = item.term[0].toUpperCase()
    acc[key] = [...(acc[key] ?? []), item]
    return acc
  }, {})

  const letters = Object.keys(grouped).sort()

  return (
    <main className="flex-1">
      <section className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-yellow-800 hover:bg-yellow-100">
            Glossary
          </Badge>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Renovation terms, translated into normal human language.
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            Use this page when a builder, supplier, or article casually drops a word like everyone should already know it.
            You are not behind. Renovation vocabulary just has a habit of arriving mid-conversation with no introduction.
          </p>
        </div>
      </section>

      <section className="container px-4 pb-16 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              {letter}
            </a>
          ))}
        </div>

        <div className="space-y-10">
          {letters.map((letter) => (
            <section key={letter} id={letter}>
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground">
                  {letter}
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight">Terms starting with {letter}</h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {grouped[letter].map((item) => (
                  <Card key={item.term} className="rounded-2xl border-2">
                    <CardHeader>
                      <CardTitle className="text-xl">{item.term}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="font-medium text-foreground">{item.short}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}

export interface HumorItem {
  setup: string
  punchline?: string
}

export interface HumorTheme {
  container?: string
  border?: string[]
  borderOpacity?: string
  borderSize?: string
  borderLine?: string
  dark?: boolean
  cardBorder: string
  cardBg: string
  eyebrowColor: string
  label?: string
  punchColor: string
  buttonBg: string
  footerNote?: string
  shuffleLabel?: string
}

export const humorTheme: HumorTheme = {
  container: "my-10",
  border: ["🧱", "🔨", "🧱", "🪚", "🧱"],
  borderOpacity: "opacity-30",
  borderSize: "text-xl",
  borderLine: "bg-orange-200",
  cardBorder: "border-orange-200",
  cardBg: "bg-orange-50",
  eyebrowColor: "text-orange-700",
  label: "Site break",
  punchColor: "text-orange-800",
  buttonBg: "bg-orange-600",
  footerNote: "Even tradies stop for lunch",
  shuffleLabel: "Another one",
}

export const humorBank: Record<string, HumorItem[]> = {
  general: [
    {
      setup: "Renovating is like a DIY project.",
      punchline: "If the DIY project takes eight months, costs twice the estimate, and is 'almost done' for six of them.",
    },
    {
      setup: "My renovation budget was 'flexible.'",
      punchline: "Flexible like a rubber band that snaps and hits you in the face.",
    },
    {
      setup: "The demo day was going great.",
      punchline: "Then we found the wall that was load-bearing. It was load-bearing. The house is load-bearing. Everything is load-bearing.",
    },
    {
      setup: "Renovation rule: multiply your timeline by two.",
      punchline: "And your budget by 1.5. And your patience by zero.",
    },
  ],
  budgeting: [
    {
      setup: "I budgeted $20k for the kitchen.",
      punchline: "The kitchen heard the budget and decided it was a suggestion.",
    },
    {
      setup: "My quote said 'allow $500 for contingencies.'",
      punchline: "The contingency was the first week.",
    },
    {
      setup: "The cheapest quote is not the best quote.",
      punchline: "The most expensive quote is also not the best quote. The middle quote is a lie too. The best quote is the one you stick to.",
    },
    {
      setup: "Renovation accounting: materials, labour, and the 'we'll find out' fund.",
    },
  ],
  contractors: [
    {
      setup: "The tradie said 'should be done by Friday.'",
      punchline: "Friday came. Friday went. The tradie said 'next Friday.' The tradie is a poet.",
    },
    {
      setup: "My contractor found 'a few issues.'",
      punchline: "The issues were structural. The 'few' was understatement. The contractor is a master of both trades.",
    },
    {
      setup: "I asked for a written contract.",
      punchline: "The handshake was very detailed. Unfortunately, it wasn't written down.",
    },
    {
      setup: "Good contractors are booked out for months.",
      punchline: "That's how you know they're good. And how you know you're waiting.",
    },
  ],
  kitchen: [
    {
      setup: "The island looked generous on the elevation.",
      punchline: "In the room it is a peninsula for hips and a monument to a clearance you did not measure.",
    },
    {
      setup: "You can choose the tapware after the cabinets are in.",
      punchline: "You can also choose a sequel. Peel Boss picks appliances before anyone owns a tape.",
    },
  ],
  bathroom: [
    {
      setup: "The feature tile was the personality.",
      punchline: "The membrane was the character. Only one of them gets a certificate.",
    },
    {
      setup: "Moving the toilet 200 mm felt like a small request.",
      punchline: "The floor, the waste, and the quote all filed a longer report.",
    },
  ],
  painting: [
    {
      setup: "Two coats should do it.",
      punchline: "The wall heard 'two' and asked for primer, a wash, and the honesty of a third.",
    },
  ],
  flooring: [
    {
      setup: "The floor is the finish people notice.",
      punchline: "The subfloor is the finish people hear. Moisture tests are not a vibe.",
    },
  ],
  planning: [
    {
      setup: "A verbal quote is faster.",
      punchline: "A written quote is a document. Intel Academy does not brief from a handshake.",
    },
  ],
  "diy": [
    {
      setup: "I watched a YouTube video and thought 'I can do that.'",
      punchline: "The video was 12 minutes. The job was 3 weekends. The result was 'character.'",
    },
    {
      setup: "My DIY tiling is 'rustic.'",
      punchline: "Rustic is a very kind word for 'slightly crooked.' I'm leaning into it.",
    },
    {
      setup: "I painted the bedroom.",
      punchline: "The ceiling is now also the accent colour. We call it 'design choice.'",
    },
    {
      setup: "DIY tip: measure twice, cut once.",
      punchline: "And on the third measurement, admit you need help.",
    },
  ],
}

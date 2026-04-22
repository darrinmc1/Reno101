// Single source of truth for all 16 renovation stages.
// Used by the homepage dashboard and every stage detail page.
// All prices in AUD — matches the existing Reno Ready catalogue on site123.

export type Difficulty = "basic" | "intermediate" | "advanced" | "mastery"
export type Phase = "plan" | "structure" | "finish"
export type SkillLevel = "Basic" | "Intermediate" | "Advanced" | "Mastery"

export type ResourceKind = "ebook" | "template" | "checklist" | "tool" | "tip"

export interface StageResource {
  kind: ResourceKind
  title: string
  href?: string
  priceAUD?: number      // individual download price in AUD (matches Reno Ready catalogue)
  bundle?: string        // which Project Bundle includes it (e.g. "Planning Bundle")
  free?: boolean         // true if part of the free Starter Pack or weekly tip email
  locked?: boolean       // reserved for paid gating once Stripe is live (July 2026)
}

export interface StageComponent {
  label: string
  hint?: string
  materials?: string
  skill: SkillLevel
}

export interface StageStep {
  title: string
  emoji?: string
  components: StageComponent[]
}

export interface Stage {
  slug: string
  name: string
  phase: Phase
  phaseLabel: string
  order: number
  difficulty: Difficulty
  icon: string
  accent: string
  tagline: string
  summary: string
  resourceCount: number
  steps?: StageStep[]
  resources?: StageResource[]
}

export const DIFFICULTY_META: Record<Difficulty, { label: string; dot: string; text: string; bg: string }> = {
  basic:        { label: "Basic",        dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50" },
  intermediate: { label: "Intermediate", dot: "bg-amber-400",   text: "text-amber-700",   bg: "bg-amber-50" },
  advanced:     { label: "Advanced",     dot: "bg-orange-500",  text: "text-orange-700",  bg: "bg-orange-50" },
  mastery:      { label: "Mastery",      dot: "bg-red-500",     text: "text-red-700",     bg: "bg-red-50" },
}

export const PHASE_META: Record<Phase, { label: string; gradient: string; tagline: string }> = {
  plan: {
    label: "Plan & Prep",
    gradient: "from-sky-400 via-sky-500 to-emerald-600",
    tagline: "Research, budget, permits, and getting the site safe.",
  },
  structure: {
    label: "Structure & Rough-In",
    gradient: "from-stone-400 via-amber-300 to-amber-500",
    tagline: "The bones of the build — and the bits hidden behind walls.",
  },
  finish: {
    label: "Finish & Hand-Over",
    gradient: "from-orange-300 via-orange-500 to-red-500",
    tagline: "Everything you actually see, plus the party you earned.",
  },
}

export const STAGES: Stage[] = [
  {
    slug: "ideas",
    name: "Ideas",
    phase: "plan",
    phaseLabel: "Phase 1",
    order: 1,
    difficulty: "basic",
    icon: "💡",
    accent: "bg-sky-100 text-sky-700",
    tagline: "Research, mood boards, samples, open homes.",
    summary:
      "Before a single hammer swings, the Ideas stage is where you figure out what you actually want — not what Instagram wants, not what your sister-in-law wants, and not what a single dramatic magazine cover wants. Collect inspiration, pressure-test your taste, and talk to people who've survived a reno recently.",
    resourceCount: 9,
    steps: [
      {
        title: "Research",
        emoji: "🔎",
        components: [
          { label: "Internet sites", hint: "Good starting points: Houzz, Pinterest, Apartment Therapy, The Spruce. Pinterest is free — the life you see on it isn't.", skill: "Basic" },
          { label: "Magazines", hint: "House & Garden, Home Design, Grand Designs, Belle. Everything in them costs roughly 3× what the caption implies.", skill: "Basic" },
          { label: "Books", hint: "Booktopia, Amazon, or your local library. Library is free and the fines keep you accountable.", skill: "Basic" },
          { label: "Ebooks", hint: "See the Resources section below — the Starter Pack is free.", skill: "Basic" },
        ],
      },
      {
        title: "Create Idea Boards",
        emoji: "💡",
        components: [
          { label: "Take lots of photos", hint: "Phone camera is fine. Capture what you like AND what you don't — the 'don't' list is usually more useful.", skill: "Basic" },
          { label: "Magazine cutouts & clippings", hint: "A physical board beats a Pinterest graveyard. Keep it in the room you're renovating so decisions get made where the decisions happen.", skill: "Basic" },
          { label: "Styles", hint: "Name your style early — Coastal, Hamptons, Industrial, Mid-Century — it anchors every later decision and prevents mixing three of them into something that looks haunted.", skill: "Basic" },
          { label: "Fittings, features & colours", hint: "Pick a palette of 3–5 colours max. More than that and the house will look anxious.", skill: "Basic" },
        ],
      },
      {
        title: "Collect Samples",
        emoji: "🎨",
        components: [
          { label: "Tiles", hint: "Most tile shops will loan samples free. Always view them in the actual room's light, not under the fluorescent light that flatters nothing.", materials: "Tile samples", skill: "Basic" },
          { label: "Carpet samples", hint: "Walk on them barefoot. It's the real test. Vacuum-robot compatibility is the other real test.", materials: "Carpet swatches", skill: "Basic" },
          { label: "Paint samples / swatches", hint: "Paint large test patches — at least A3 — on two walls. Colour reads differently on each and also differently at 7am vs 7pm.", materials: "Paint test pots", skill: "Basic" },
        ],
      },
      {
        title: "Speak with friends, relatives, workmates who've renovated",
        emoji: "💬",
        components: [
          { label: "Ask what worked and what didn't", hint: "The 'didn't' list is the gold. Most people love telling it.", skill: "Basic" },
          { label: "What they would do differently", skill: "Basic" },
          { label: "References — contractors & materials", hint: "A referred tradie beats a Google-reviewed one eight times out of ten.", skill: "Basic" },
          { label: "Recommendations", skill: "Basic" },
        ],
      },
      {
        title: "Visit Open Homes",
        emoji: "🏠",
        components: [
          { label: "Take lots of photos", hint: "Of finishes, not floor plans. Finishes are what you're hunting.", skill: "Basic" },
          { label: "Look for ideas", skill: "Basic" },
          { label: "Identify what you like", hint: "And, more importantly, what you actively don't. You will meet 200 different kitchen splashbacks. You will love 4.", skill: "Basic" },
        ],
      },
    ],
    resources: [
      { kind: "ebook",     title: "Renovations — Where should I start?",                priceAUD: 9.90, bundle: "Planning Bundle" },
      { kind: "ebook",     title: "10 Common Renovation Mistakes",                      priceAUD: 9.90, bundle: "Planning Bundle" },
      { kind: "ebook",     title: "Small Things That Make a Big Difference",            priceAUD: 9.90 },
      { kind: "template",  title: "Mood Board Template (printable)",                    priceAUD: 4.90, bundle: "Planning Bundle" },
      { kind: "template",  title: "Sample Tracker — where each swatch came from",       priceAUD: 4.90, bundle: "Planning Bundle" },
      { kind: "checklist", title: "Open Home Inspection Checklist",                     priceAUD: 9.90, bundle: "Planning Bundle" },
      { kind: "checklist", title: "10 Things You MUST Check Before a Renovation",       priceAUD: 9.90, bundle: "Planning Bundle" },
      { kind: "tool",      title: "Style Quiz — what actually suits your home?",        free: true },
      { kind: "tip",       title: "5 signs your Pinterest board is lying to you",       free: true },
    ],
  },
  {
    slug: "planning",
    name: "Planning",
    phase: "plan",
    phaseLabel: "Phase 1",
    order: 2,
    difficulty: "basic",
    icon: "📐",
    accent: "bg-sky-100 text-sky-800",
    tagline: "Costs, contractors, quotes, permits, materials.",
    summary:
      "The unsexy stage where the project is actually won or lost. Going over-time and over-budget is almost inevitable — but how badly is almost entirely decided here. Most of this is paperwork, phone calls, and asking awkward questions before they become expensive ones.",
    resourceCount: 12,
    steps: [
      {
        title: "Identify what you need",
        emoji: "📝",
        components: [
          { label: "Define the end goal", hint: "Write a single sentence describing what 'done' looks like. If you can't, the scope will keep expanding on its own.", skill: "Basic" },
          { label: "Rooms / areas IN scope", skill: "Basic" },
          { label: "Rooms / areas OUT of scope", hint: "Write this down. It's the thing you'll quietly argue with yourself about in month three.", skill: "Basic" },
          { label: "Must-haves vs nice-to-haves", hint: "Separate lists. The nice-to-have list is where the budget goes to die.", skill: "Basic" },
          { label: "Agree priorities with everyone living there", hint: "A 20-minute conversation now prevents a 20-week stand-off later.", skill: "Basic" },
        ],
      },
      {
        title: "Identify cost of materials / products",
        emoji: "🧮",
        components: [
          { label: "Walk the hardware store", hint: "Write down real prices, not the ones you hope exist. Bunnings, Mitre10, or your local equivalent.", skill: "Basic" },
          { label: "Build the budget spreadsheet", hint: "You'll end up with one eventually — start it clean before it becomes `budget_final_v7_actually_final.xlsx`.", materials: "Excel / Google Sheets", skill: "Basic" },
          { label: "Add 15–25% contingency", hint: "Renos always find hidden costs. Budget for them up front so you don't discover them at 2am.", skill: "Basic" },
          { label: "Factor in delivery & waste-removal fees", hint: "Skip bins are surprisingly expensive. So is a tradie waiting for a late delivery.", skill: "Intermediate" },
          { label: "Don't trust 'from $X' prices", hint: "'From' always means 'from more'. Benchmark with a real quote, not the marketing copy.", skill: "Basic" },
        ],
      },
      {
        title: "Get quotes / identifying contractors",
        emoji: "📞",
        components: [
          { label: "Request at least 3 written quotes", hint: "Verbal quotes aren't quotes — they're opinions with no legal weight.", skill: "Basic" },
          { label: "Check licences & insurance", hint: "Plumbing, electrical, gas, structural: all licensed trades in most states. An unlicensed job voids your home insurance.", skill: "Intermediate" },
          { label: "Ask for references — and call them", hint: "Not the glowing testimonial on the website. Real past clients. Ask if they'd hire the tradie again.", skill: "Basic" },
          { label: "Clarify inclusions / exclusions in writing", hint: "Common industry tactic: quote low to secure the job, then charge premium for every 'variation'. The exclusions list is where the bleeding happens.", skill: "Intermediate" },
          { label: "Beware the unusually low quote", hint: "If one quote is 30%+ below the others, someone has misread the scope or is planning to make it up in variations. Ask before accepting.", skill: "Basic" },
        ],
      },
      {
        title: "Finalise works (scope freeze)",
        emoji: "🔒",
        components: [
          { label: "Lock the scope in writing", hint: "Once signed, changes cost real money. This is a feature, not a bug — it protects you from yourself.", skill: "Intermediate" },
          { label: "Agree payment milestones (not hourly)", hint: "Milestone-based payments keep everyone honest. Hourly invites creative time-keeping.", skill: "Intermediate" },
          { label: "Agree the variation protocol", hint: "How will changes be costed and signed off? Put it in writing. 'We'll work it out' is the most expensive sentence in renovation.", skill: "Intermediate" },
          { label: "Set timeline with buffer", hint: "Whatever the tradie says, add 20%. Whatever you say, add 40%.", skill: "Basic" },
          { label: "Sort insurance", hint: "Check your home & contents policy covers renovation works. Some don't if the building is unoccupied during the reno.", skill: "Intermediate" },
        ],
      },
      {
        title: "Obtain permits",
        emoji: "🏛️",
        components: [
          { label: "Check council requirements", hint: "A quick call to your local council saves weeks later. Every council interprets the rules slightly differently.", skill: "Intermediate" },
          { label: "Development Application (DA) if needed", hint: "Required for most structural changes, extensions, and anything visible from the street. 4–12 weeks typical.", skill: "Advanced" },
          { label: "Building permits / construction certificates", skill: "Advanced" },
          { label: "Plumbing & electrical Certificates of Compliance", hint: "Your licensed tradie organises these. Keep copies — the next buyer's conveyancer will ask.", skill: "Intermediate" },
          { label: "Strata / heritage / bushfire approvals", hint: "If any of these apply, start earlier than you think. Heritage approvals in particular are not rapid.", skill: "Advanced" },
        ],
      },
      {
        title: "Order / obtain materials as required",
        emoji: "📦",
        components: [
          { label: "Place orders with lead-time in mind", hint: "Tapware, tiles and custom joinery are the usual culprits. 'In stock' on the website doesn't always mean in stock in your state.", skill: "Basic" },
          { label: "Arrange delivery or pickup", skill: "Basic" },
          { label: "Check deliveries on arrival", hint: "Count boxes, open a sample, photograph any damage. Disputes in week 8 over week-2 deliveries rarely go in your favour.", skill: "Basic" },
          { label: "Secure storage", hint: "Tiles crack. Doors warp. Timber twists. Anything expensive needs to be indoors, flat, and away from water.", skill: "Intermediate" },
          { label: "Keep every receipt and warranty", hint: "A labelled folder (physical or digital) beats hunting through four inboxes when the dishwasher leaks in month two.", materials: "Folder / cloud storage", skill: "Basic" },
        ],
      },
    ],
    resources: [
      { kind: "ebook",     title: "Best Bang for Your Reno Buck",                   priceAUD: 9.90,  bundle: "Planning Bundle" },
      { kind: "ebook",     title: "10 Hidden Renovation Costs",                     priceAUD: 9.90,  bundle: "Planning Bundle" },
      { kind: "ebook",     title: "10 Common Renovation Misadventures",             priceAUD: 9.90,  bundle: "Planning Bundle" },
      { kind: "checklist", title: "Planning Checklist",                             priceAUD: 9.90,  bundle: "Planning Bundle", free: true },
      { kind: "checklist", title: "10 Ways to Save Money on a Renovation",          priceAUD: 9.90,  bundle: "Planning Bundle" },
      { kind: "template",  title: "Renovation Cost Estimates Template",             priceAUD: 4.90,  bundle: "Planning Bundle", free: true },
      { kind: "template",  title: "Renovation Project Scope Template",              priceAUD: 4.90,  bundle: "Planning Bundle" },
      { kind: "template",  title: "Measurement Checklist",                          priceAUD: 4.90,  bundle: "Planning Bundle" },
      { kind: "template",  title: "Project Timeline Template",                      priceAUD: 4.90,  bundle: "Planning Bundle" },
      { kind: "template",  title: "Task Lists Template",                            priceAUD: 4.90,  bundle: "Planning Bundle" },
      { kind: "template",  title: "Gantt Chart — Breakdown of All Reno Tasks",      priceAUD: 4.90,  bundle: "Planning Bundle" },
      { kind: "tool",      title: "Quote Comparison Calculator",                    free: true },
    ],
  },
  {
    slug: "demolition",
    name: "Demolition",
    phase: "plan",
    phaseLabel: "Phase 1",
    order: 3,
    difficulty: "intermediate",
    icon: "🔨",
    accent: "bg-sky-100 text-sky-700",
    tagline: "Make safe, salvage, strip out, clean up.",
    summary: "Before you build, you un-build. Make the site safe, save what's worth saving, then strip it back with more discipline than enthusiasm.",
    resourceCount: 14,
  },
  {
    slug: "landscaping",
    name: "Landscaping",
    phase: "plan",
    phaseLabel: "Phase 1",
    order: 4,
    difficulty: "intermediate",
    icon: "🌳",
    accent: "bg-emerald-100 text-emerald-700",
    tagline: "Trees, excavation, paving, planting, grass.",
    summary: "Outside first — it's much easier to run machinery before the external walls are pretty.",
    resourceCount: 11,
  },
  {
    slug: "external",
    name: "External",
    phase: "plan",
    phaseLabel: "Phase 1",
    order: 5,
    difficulty: "mastery",
    icon: "🏠",
    accent: "bg-emerald-100 text-emerald-800",
    tagline: "Roofing, gutters, drainage, foundations, cladding.",
    summary: "The weather-tight envelope. Mostly a call-a-pro stage — the mistakes here leak for years and find you in bed at 3am.",
    resourceCount: 16,
  },
  {
    slug: "construction",
    name: "Construction",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 6,
    difficulty: "advanced",
    icon: "🏗️",
    accent: "bg-stone-100 text-stone-700",
    tagline: "Flooring, windows, framing, stairs.",
    summary: "Putting the skeleton back together. The part that makes the site look like progress is actually being made.",
    resourceCount: 13,
  },
  {
    slug: "rough-in",
    name: "Rough-In",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 7,
    difficulty: "mastery",
    icon: "🚰",
    accent: "bg-stone-100 text-stone-700",
    tagline: "Plumbing, electrics, gas, HVAC, insulation.",
    summary: "Everything that hides behind the walls. Licensed trades only — doing this yourself voids your insurance and possibly your marriage.",
    resourceCount: 22,
  },
  {
    slug: "plastering",
    name: "Plastering",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 8,
    difficulty: "advanced",
    icon: "🧱",
    accent: "bg-amber-50 text-amber-700",
    tagline: "Sheeting, plaster, cornice, sanding, patching.",
    summary: "Where the walls stop looking like a construction site and start looking like walls. Harder than the internet makes it look.",
    resourceCount: 9,
  },
  {
    slug: "flooring",
    name: "Flooring",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 9,
    difficulty: "intermediate",
    icon: "🪵",
    accent: "bg-amber-100 text-amber-800",
    tagline: "Prep, waterproofing, tile, carpet, timber.",
    summary: "Underfoot choices — the thing you'll literally feel every day. Prep badly and you'll hear about it every time someone walks across the room.",
    resourceCount: 15,
  },
  {
    slug: "finishing-timberwork",
    name: "Finishing Timberwork",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 10,
    difficulty: "intermediate",
    icon: "🚪",
    accent: "bg-amber-100 text-amber-900",
    tagline: "Doors, furniture, skirting, architraves, trim.",
    summary: "The detail work that tells a room it's almost done. The difference between 'renovated' and 'rented-looking' lives here.",
    resourceCount: 12,
  },
  {
    slug: "painting",
    name: "Painting",
    phase: "finish",
    phaseLabel: "Phase 3",
    order: 11,
    difficulty: "basic",
    icon: "🎨",
    accent: "bg-orange-100 text-orange-700",
    tagline: "Prep, ceilings, walls, trims, staining, outside.",
    summary:
      "The most DIY-able finishing stage — if you have the patience for masking tape and the honesty to do three coats when you wanted to do one. 80% of a good paint job happens before the paint goes on the wall.",
    resourceCount: 11,
    steps: [
      {
        title: "Preparation (the bit that actually matters)",
        emoji: "🧽",
        components: [
          { label: "Clear the room / cover furniture", hint: "Anything you can't move, cover with a drop sheet. Paint splatters travel further than you think. Physics is not your friend here.", materials: "Drop sheets, plastic sheeting", skill: "Basic" },
          { label: "Fill holes and cracks", hint: "Polyfilla for walls, wood filler for timber. Overfill slightly — it shrinks as it dries.", materials: "Wall filler, putty knife", skill: "Basic" },
          { label: "Sand surfaces", hint: "180 grit for walls, 240 for trims, 320 between coats on doors. Don't skip grits. A finger-test tells you when it's smooth enough.", materials: "Sandpaper (180, 240, 320)", skill: "Basic" },
          { label: "Wash walls with sugar soap", hint: "Grease, nicotine, kitchen splashback halos — they all stop paint adhering. Sugar soap + warm water, rinse, dry. Boring, essential.", materials: "Sugar soap, bucket, cloth", skill: "Basic" },
          { label: "Apply masking tape", hint: "Press the edge down firmly with a putty knife or credit card. Peel the tape off before paint fully dries or you'll tear the new paint with it. Peel at 45°.", materials: "Painter's tape (blue or green)", skill: "Basic" },
          { label: "Prime where needed", hint: "New plaster, bare timber, stain bleed-through, or going from dark to light all need primer. Skipping primer is the #1 reason a paint job looks patchy.", materials: "Primer / sealer", skill: "Intermediate" },
        ],
      },
      {
        title: "Painting the ceiling (do this first)",
        emoji: "⬜️",
        components: [
          { label: "Cut in the edges with a brush", hint: "A 50mm angled brush, about 50mm band around the perimeter. Don't try to cut in the whole ceiling — just enough to roll into.", materials: "50mm angled brush, ceiling paint", skill: "Intermediate" },
          { label: "Roll the main area", hint: "Use an extension pole. Paint in 1m×1m sections, slightly overlapping. Roll in a W pattern, then fill. Your neck will thank you for the pole.", materials: "Roller + extension pole", skill: "Basic" },
          { label: "Keep a wet edge", hint: "Don't let one section dry before you paint the next — that's where lap-marks come from. Work across the ceiling, not back and forth.", skill: "Intermediate" },
          { label: "Second coat (usually required)", hint: "Flat white on new plaster basically always needs two coats. If you can see it, it needs another coat.", skill: "Basic" },
        ],
      },
      {
        title: "Painting walls",
        emoji: "🧱",
        components: [
          { label: "Cut in corners and edges", hint: "Same technique as the ceiling — 50mm angled brush, about 50mm band. Do one wall at a time so you can roll into wet paint.", materials: "50mm angled brush", skill: "Intermediate" },
          { label: "Roll the main area", hint: "Top-down — starts at the top of the wall, works down. If you drip, you're rolling over it.", materials: "Roller, roller tray", skill: "Basic" },
          { label: "Two coats minimum", hint: "Three if you're going from dark to light, or if the colour is red/yellow/orange (these pigments are translucent). Two minimum even for white on white.", skill: "Basic" },
          { label: "Handle colour changes at corners", hint: "If two walls are different colours, the cut-in line goes in the inside corner. Paint the lighter colour first; cut the darker one in after.", skill: "Intermediate" },
        ],
      },
      {
        title: "Doors & trims (the detail pass)",
        emoji: "🚪",
        components: [
          { label: "Remove or tape the door hardware", hint: "Hinges, handles, strike plates — remove if you can, tape if you can't. Paint over hinges and you'll hear about it every time the door swings.", materials: "Screwdriver, painter's tape", skill: "Basic" },
          { label: "Sand lightly between coats", hint: "320 grit, quick pass, wipe down. Trim paint shows brush marks unless you sand them back.", materials: "320 grit sandpaper", skill: "Basic" },
          { label: "Use a smaller brush for detail", hint: "25–38mm angled brush for trims. Oil-based enamel needs a natural-bristle brush; water-based needs synthetic. Match the brush to the paint.", materials: "25–38mm angled brush", skill: "Basic" },
          { label: "Dry doors flat or on hinges with wedges", hint: "If removed, lay flat on sawhorses — gravity holds the paint level. On hinges, wedge the door half-open so both sides can dry at once.", materials: "Sawhorses or door wedges", skill: "Intermediate" },
          { label: "Two coats, always", hint: "Enamel on trims is unforgiving of thin coats. Two thin beats one thick. Every time.", skill: "Basic" },
        ],
      },
      {
        title: "Painting outside",
        emoji: "🏡",
        components: [
          { label: "Check the weather", hint: "Not below 10°C, not above 30°C, not in direct sun on hot walls, not when rain is forecast in 24 hours. Humidity matters too — over 85% and it won't cure right.", skill: "Basic" },
          { label: "Pressure-wash or scrub", hint: "Exterior walls hold dust, spider webs, and whatever the gutters have been leaking. Wash everything and let it dry 24–48 hours before painting.", materials: "Pressure washer or scrub brush", skill: "Intermediate" },
          { label: "Scrape flaking paint", hint: "Any paint that's not bonded needs to come off. Scraper + wire brush. Feather the edges with sandpaper so the transition disappears.", materials: "Paint scraper, wire brush", skill: "Intermediate" },
          { label: "Prime bare timber and patches", hint: "Always. Exterior timber with no primer peels within a year. Non-negotiable.", materials: "Exterior primer", skill: "Basic" },
          { label: "Apply two coats of exterior paint", hint: "Work in the shade if you can — paint drying too fast in direct sun leaves roller marks. Start at the top, work down.", materials: "Exterior paint", skill: "Basic" },
          { label: "Watch for drips", hint: "Exterior paint drips set like concrete. Catch them within 10 minutes or they're there forever. Check every 2–3m of wall.", skill: "Basic" },
        ],
      },
      {
        title: "Staining timbers",
        emoji: "🩵",
        components: [
          { label: "Sand with the grain", hint: "Never across. 120 grit, then 180, then 240. Cross-sanding shows up as ugly scratches the second stain hits the wood.", materials: "Sandpaper (120, 180, 240)", skill: "Intermediate" },
          { label: "Choose stain: oil-based or water-based", hint: "Oil penetrates deeper and looks richer but dries slow and stinks. Water-based is faster and easier to clean up but colour can look flatter. Test both on an offcut.", materials: "Stain (sample sized)", skill: "Intermediate" },
          { label: "Test on an offcut first", hint: "Stain looks radically different on different timber species. Pine, oak, merbau, tas-oak — all behave differently. Test, then decide.", skill: "Basic" },
          { label: "Apply with cloth or brush", hint: "Cloth gives a more controlled, even finish; brush lets you work it into grain. Apply liberally then wipe back — don't leave pools on the surface.", materials: "Lint-free cloth or brush", skill: "Intermediate" },
          { label: "Wipe excess within 5 minutes", hint: "Stain that sits too long gets sticky and patchy. The excess comes off with a clean cloth, wiping with the grain.", skill: "Intermediate" },
          { label: "Sealing coat (poly or wax)", hint: "Stain colours, it doesn't protect. Without a sealer it'll mark the first time it gets wet. Water-based poly is the easiest; wax is the nicest to the touch.", materials: "Polyurethane or wax", skill: "Intermediate" },
        ],
      },
    ],
    resources: [
      { kind: "ebook",     title: "Painting — the 5-coat truth (why prep beats paint)",    priceAUD: 9.90, bundle: "Painting Bundle" },
      { kind: "tip",       title: "Painting — 20 Tips and Tricks",                          priceAUD: 4.90, bundle: "Painting Bundle" },
      { kind: "template",  title: "Paint Quantity Calculator (rooms + exterior)",           priceAUD: 4.90, bundle: "Painting Bundle" },
      { kind: "template",  title: "Colour Plan Template (rooms, trims, accents)",           priceAUD: 4.90, bundle: "Painting Bundle" },
      { kind: "checklist", title: "Pre-Paint Prep Checklist",                               priceAUD: 9.90, bundle: "Painting Bundle", free: true },
      { kind: "checklist", title: "Paint Finish Selector (matt / low-sheen / semi / gloss)", priceAUD: 9.90, bundle: "Painting Bundle" },
      { kind: "tip",       title: "Choosing between water-based and oil-based enamel",      free: true },
      { kind: "tip",       title: "Why your ceiling looks patchy (and what fixes it)",       free: true },
      { kind: "tool",      title: "Paint Coverage Calculator",                              free: true },
      { kind: "ebook",     title: "Staining Timbers — getting the colour you actually wanted", priceAUD: 9.90 },
      { kind: "checklist", title: "Exterior Paint Weather Window Checklist",                priceAUD: 9.90, bundle: "Painting Bundle" },
    ],
  },
  {
    slug: "cabinets-fixtures",
    name: "Cabinets & Fixtures",
    phase: "finish",
    phaseLabel: "Phase 3",
    order: 12,
    difficulty: "intermediate",
    icon: "🗄️",
    accent: "bg-orange-100 text-orange-800",
    tagline: "Kitchens, vanities, appliances, robes, mirrors.",
    summary: "The big-ticket items that make a room feel finished, and where the budget finally stops pretending.",
    resourceCount: 19,
  },
  {
    slug: "fit-off",
    name: "Fit-Off",
    phase: "finish",
    phaseLabel: "Phase 3",
    order: 13,
    difficulty: "advanced",
    icon: "🔧",
    accent: "bg-orange-100 text-orange-900",
    tagline: "Plumbing, electrical, AC, fixtures, fire alarms.",
    summary: "Final connections. Licensed trades return for sign-off and Certificates of Compliance — keep the paperwork, the next buyer's conveyancer will ask.",
    resourceCount: 14,
  },
  {
    slug: "punch-list",
    name: "Punch List",
    phase: "finish",
    phaseLabel: "Phase 3",
    order: 14,
    difficulty: "basic",
    icon: "📋",
    accent: "bg-red-50 text-red-700",
    tagline: "Clean up and final checks across every trade.",
    summary: "The nitpicking pass — the unglamorous difference between 'nearly finished' and 'actually finished'.",
    resourceCount: 8,
  },
  {
    slug: "party",
    name: "Party!",
    phase: "finish",
    phaseLabel: "Finale",
    order: 15,
    difficulty: "basic",
    icon: "🎉",
    accent: "bg-gradient-to-br from-red-500 to-primary text-white",
    tagline: "You made it. Throw the housewarming you earned.",
    summary: "The most important stage. Invite the people who believed in your project when the site was a hole in the ground. Quietly don't invite the ones who said it would never happen.",
    resourceCount: 1,
  },
]

export const PHASES: Phase[] = ["plan", "structure", "finish"]

export function getStage(slug: string): Stage | undefined {
  return STAGES.find((s) => s.slug === slug)
}

export function getStagesByPhase(phase: Phase): Stage[] {
  return STAGES.filter((s) => s.phase === phase).sort((a, b) => a.order - b.order)
}

export function getNextStage(slug: string): Stage | undefined {
  const idx = STAGES.findIndex((s) => s.slug === slug)
  if (idx === -1 || idx === STAGES.length - 1) return undefined
  return STAGES[idx + 1]
}

export function getPrevStage(slug: string): Stage | undefined {
  const idx = STAGES.findIndex((s) => s.slug === slug)
  if (idx <= 0) return undefined
  return STAGES[idx - 1]
}

/** Formatted price string e.g. "AU$4.90" or "Free" */
export function formatPrice(r: StageResource): string {
  if (r.free) return "Free"
  if (typeof r.priceAUD === "number") return `AU$${r.priceAUD.toFixed(2)}`
  return ""
}

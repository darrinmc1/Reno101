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

export interface StageQuote {
  text: string
  author?: string
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
  /** Optional Tailwind gradient classes for the hero banner — e.g. "from-purple-500 via-purple-600 to-fuchsia-700". Falls back to a phase-based gradient. */
  hero?: string
  /** Optional EmailCapture theme key — "orange" | "emerald" | "blue". Falls back to phase. */
  emailTheme?: "orange" | "emerald" | "blue"
  tagline: string
  summary: string
  /** Optional time-to-complete estimate, e.g. "1-2 weeks". */
  timeEstimate?: string
  /** Optional real-reno quote shown on the stage page. */
  quote?: StageQuote
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
    hero: "from-cyan-500 via-sky-600 to-blue-700",
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
    hero: "from-blue-500 via-indigo-600 to-violet-700",
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
    accent: "bg-purple-100 text-purple-700",
    hero: "from-purple-500 via-violet-600 to-fuchsia-700",
    tagline: "Tear down the old, make room for the new — and dispose of it properly.",
    summary: "Before you build, you un-build. Make the site safe, save what's worth saving, then strip it back with more discipline than enthusiasm. Demolition feels destructive, but it's also where most asbestos, structural and insurance surprises surface.",
    resourceCount: 14,
    steps: [
      {
        title: "Urgent required repairs",
        emoji: "🛠️",
        components: [
          { label: "Make the site weather-tight", hint: "If the roof's coming off later, tarp anything below it before the first storm reminds you why this matters.", materials: "Heavy-duty tarps, roofing nails, sandbags", skill: "Intermediate" },
          { label: "Brace anything structural before stripping", hint: "Walls, ceilings, lintels — anything you'll lean on later. Cheaper than discovering a cracked beam mid-demo.", skill: "Advanced" },
          { label: "Secure doors and windows", hint: "If you're moving out during the reno, board up any opening a person could fit through.", materials: "Plywood sheets, screws", skill: "Basic" },
        ],
      },
      {
        title: "Move or cover what stays",
        emoji: "📦",
        components: [
          { label: "Empty the room completely", hint: "Anything left in the room WILL get covered in plaster dust. Treat it as already lost.", skill: "Basic" },
          { label: "Cover floors that are staying", hint: "Builder's paper or thick plastic sheeting, taped down. Drop sheets are for paint, not demolition.", materials: "Builder's paper, masking tape", skill: "Basic" },
          { label: "Mask off air-con, smoke alarms, fixed appliances", hint: "Demolition dust kills smoke alarm sensors and AC filters. Plastic bags + tape for the day.", materials: "Plastic bags, painter's tape", skill: "Basic" },
          { label: "Photograph everything before strip", hint: "For insurance, dispute resolution with tradies, and your own sanity in month four when you can't remember what was there.", skill: "Basic" },
        ],
      },
      {
        title: "Make plumbing, electrical & gas safe",
        emoji: "⚡",
        components: [
          { label: "Isolate the circuit at the board", hint: "Don't trust the light switch — switch off at the main board AND test with a multimeter before you cut anything.", materials: "Multimeter, voltage tester", skill: "Advanced" },
          { label: "Cap or isolate water lines", hint: "A licensed plumber should cap any line you're not using. DIY caps fail at the worst possible moment.", skill: "Mastery" },
          { label: "Disconnect gas (licensed gas fitter only)", hint: "There is no DIY-and-google way to do this safely. Pay the gas fitter.", skill: "Mastery" },
          { label: "Lock-out / tag-out anything that can be turned back on", hint: "If multiple trades are on site, label every isolated circuit and valve so nobody flips it 'just to check'.", materials: "Lock-out tags, padlocks", skill: "Intermediate" },
        ],
      },
      {
        title: "Strip and clean up",
        emoji: "🧹",
        components: [
          { label: "Save anything reusable", hint: "Vintage door handles, hardwood timbers, quality fixtures — Gumtree pays for skip bins.", skill: "Basic" },
          { label: "Sort waste by type", hint: "Construction waste centres charge less for sorted skips. Asbestos, treated timber and metal go in different bins.", skill: "Basic" },
          { label: "Asbestos awareness", hint: "Anything pre-1990 — vinyl tiles, eaves, wall sheeting, fences — could contain asbestos. Test before you cut.", materials: "Asbestos test kit, P2 mask", skill: "Mastery" },
          { label: "Skip bin order", hint: "Order one size bigger than you think. The 'we'll just stack it' plan never holds.", skill: "Basic" },
          { label: "Sweep, vacuum, repeat", hint: "Demo dust gets into hinges and electrical outlets. A shop-vac with a HEPA filter pays for itself in saved fittings.", materials: "Shop-vac, HEPA filter, broom", skill: "Basic" },
        ],
      },
    ],
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
    hero: "from-green-500 via-emerald-600 to-teal-700",
    tagline: "Trees, excavation, paving, planting, grass.",
    summary: "Outside first — it's much easier to run machinery before the external walls are pretty. Anything that needs an excavator, a stump grinder, or a Bobcat happens now.",
    resourceCount: 11,
    steps: [
      {
        title: "Trees & vegetation",
        emoji: "🌳",
        components: [
          { label: "Check for protected trees", hint: "Most councils have tree preservation orders. Cutting down the wrong tree is a five-figure fine in some councils.", skill: "Intermediate" },
          { label: "Remove what's coming out", hint: "Stump-grinding adds days. Book it the same week as the tree removal.", materials: "Stump grinder hire, chainsaw", skill: "Advanced" },
          { label: "Protect what's staying", hint: "Mark protected zones with bright fencing before machinery arrives. Drivers respect tape, not promises.", materials: "Hi-vis fencing, star pickets", skill: "Basic" },
        ],
      },
      {
        title: "Excavation & earthworks",
        emoji: "⛏️",
        components: [
          { label: "Locate underground services", hint: "Dial Before You Dig (1100). Free, mandatory, and has saved countless excavator buckets from a sewer line.", skill: "Intermediate" },
          { label: "Set finished levels", hint: "Sloping AWAY from the house, always. A 1:50 minimum fall is the rule of thumb.", materials: "Laser level, string lines", skill: "Advanced" },
          { label: "Excavate for paths, slabs, retaining walls", hint: "Get the spoil off-site as you go. It will not get smaller if it sits in the front yard for a fortnight.", skill: "Advanced" },
        ],
      },
      {
        title: "Paving, paths, retaining",
        emoji: "🧱",
        components: [
          { label: "Compacted base", hint: "Whatever the surface, the base does the work. Skimping here is the most common landscaping regret.", materials: "Road base, plate compactor", skill: "Intermediate" },
          { label: "Drainage falls", hint: "Build drainage in from the start. Retrofitting is the most expensive water lesson there is.", skill: "Advanced" },
          { label: "Pavers, concrete, or pebble", skill: "Intermediate" },
          { label: "Retaining walls (over 1m: engineer required)", hint: "Anything over 1m typically needs an engineered design and council approval. Don't ask the landscaper to certify it.", skill: "Mastery" },
        ],
      },
      {
        title: "Planting & grass",
        emoji: "🌱",
        components: [
          { label: "Soil prep", hint: "Cheap soil = expensive plants that die. Topsoil with compost beats raw clay every time.", materials: "Topsoil, compost, mulch", skill: "Basic" },
          { label: "Choose climate-appropriate plants", hint: "Whatever's thriving in your neighbours' gardens is a safer bet than what looked great at the nursery in spring.", skill: "Basic" },
          { label: "Lay turf or seed", hint: "Turf is instant gratification at 5× the price. Seed needs babysitting for six weeks.", materials: "Turf rolls or grass seed", skill: "Basic" },
          { label: "Irrigation, if you want plants to live", hint: "A drip system on a timer pays for itself in plant survival. Manual watering forgets you exist on the third hot day.", materials: "Drip irrigation kit, timer", skill: "Intermediate" },
        ],
      },
    ],
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
    hero: "from-emerald-700 via-green-800 to-emerald-900",
    tagline: "Roofing, gutters, drainage, foundations, cladding.",
    summary: "The weather-tight envelope. Mostly a call-a-pro stage — the mistakes here leak for years and find you in bed at 3am.",
    resourceCount: 16,
    steps: [
      {
        title: "Roofing",
        emoji: "🏠",
        components: [
          { label: "Inspect existing roof", hint: "Cracked tiles, loose flashings, rusted valleys, sagging ridge — note them all before you decide repair vs replace.", skill: "Advanced" },
          { label: "Repair vs full replace", hint: "If more than 15–20% of tiles are damaged, replacement is usually cheaper over 5 years than repeated repairs.", skill: "Advanced" },
          { label: "Re-pointing (tile roofs)", hint: "Flexible re-pointing every 15–20 years. Looks cosmetic, isn't — it's what stops water tracking under the tiles.", materials: "Flexible pointing compound", skill: "Advanced" },
          { label: "Sarking & insulation", hint: "If the roof's off, sark and insulate. The next time it's off is in 30 years.", materials: "Reflective sarking, batts", skill: "Advanced" },
        ],
      },
      {
        title: "Gutters & downpipes",
        emoji: "🌧️",
        components: [
          { label: "Replace, don't patch", hint: "Patched gutters look fine until the first proper storm. A new run with proper falls saves four phone calls a year.", materials: "Colorbond gutter, brackets, downpipes", skill: "Intermediate" },
          { label: "Set the right fall", hint: "Minimum 1:500 toward downpipes. Eyeballing it never works.", materials: "Spirit level, string line", skill: "Intermediate" },
          { label: "Leaf guards if treed", hint: "Cheaper than annual gutter cleans, and the bushfire-rated ones earn insurance discounts.", materials: "Mesh leaf guard", skill: "Basic" },
        ],
      },
      {
        title: "Drainage",
        emoji: "💧",
        components: [
          { label: "Stormwater connections", hint: "Downpipes must connect to legal stormwater — not just spill onto pavers. Councils check this on inspections.", skill: "Advanced" },
          { label: "Subsoil & ag drains where needed", hint: "If the yard pools after rain, you need ag pipe and gravel under the surface, not more topsoil.", materials: "Ag pipe, gravel, geotextile", skill: "Advanced" },
          { label: "Pit and grate access", hint: "Every change of direction needs a cleanable pit. The day a tree root blocks the line, you'll thank past-you.", skill: "Advanced" },
        ],
      },
      {
        title: "Cladding & external walls",
        emoji: "🧱",
        components: [
          { label: "Render, paint, or re-clad", hint: "Brick can be rendered or bagged. Weatherboards can be re-painted or replaced. Don't mix decisions across walls.", skill: "Advanced" },
          { label: "Address rising damp first", hint: "If there's damp at the base of the walls, fix it before any new cladding. Otherwise you're wrapping the problem.", skill: "Mastery" },
          { label: "Window flashings", hint: "Window leaks usually aren't the window — they're the flashing above. Get this right while the wall is open.", skill: "Advanced" },
        ],
      },
    ],
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
    hero: "from-stone-500 via-amber-700 to-stone-800",
    tagline: "Repairs, framing, windows, doors, stairs.",
    summary: "Putting the skeleton back together. The part that makes the site look like progress is finally being made — but it's also where engineering, certifications, and order-lead-times start ruling your week.",
    resourceCount: 13,
    steps: [
      {
        title: "Structural repairs",
        emoji: "🔧",
        components: [
          { label: "Termite damage", hint: "Suspect timber? Get an inspection before you build anything new on top. Treatment + rebuild is the only honest path.", materials: "Termite inspection report", skill: "Mastery" },
          { label: "Rotten or failed framing", hint: "Replace, don't sister. Sistered timber rarely matches the load path the original was designed for.", skill: "Advanced" },
          { label: "Lintels & beams", hint: "Anything spanning over 1.2m carrying load needs an engineer's sign-off, not a tradie's gut feel.", skill: "Mastery" },
        ],
      },
      {
        title: "New framing",
        emoji: "🪚",
        components: [
          { label: "Wall framing", hint: "Stud spacing matters for plaster sheet sizes. 450mm or 600mm centres — pick one and stay with it.", materials: "Pine framing timber, framing nails", skill: "Advanced" },
          { label: "Floor framing", hint: "Joists at correct spacing for the flooring above. Hardwood floor needs different spans to particleboard.", skill: "Advanced" },
          { label: "Roof framing", hint: "Trusses come pre-built and craned on. Cut-and-pitched roofs need a carpenter who knows what they're doing.", skill: "Mastery" },
        ],
      },
      {
        title: "Windows & doors",
        emoji: "🪟",
        components: [
          { label: "Order windows early", hint: "Custom windows are 6–12 week lead times. The carpenter standing around waiting is on your tab.", skill: "Advanced" },
          { label: "Install with correct flashings", hint: "Sill flashing first, then sides, then head. Reverse this order and the window leaks.", materials: "Flashing tape, sill flashing", skill: "Advanced" },
          { label: "Square, level, plumb — check all three", hint: "A door installed out of square will look fine until you try to close it next winter.", materials: "Spirit level, square", skill: "Intermediate" },
        ],
      },
      {
        title: "Stairs (if applicable)",
        emoji: "🪜",
        components: [
          { label: "Compliant rise & run", hint: "Building code dictates max riser height and minimum tread depth. The inspector will measure.", skill: "Mastery" },
          { label: "Handrails", hint: "Required on any flight of more than 4 steps. Height and graspability are both regulated.", skill: "Advanced" },
        ],
      },
    ],
  },
  {
    slug: "rough-in",
    name: "Rough-In",
    phase: "structure",
    phaseLabel: "Phase 2",
    order: 7,
    difficulty: "mastery",
    icon: "🚰",
    accent: "bg-slate-100 text-slate-700",
    hero: "from-slate-600 via-zinc-700 to-stone-800",
    tagline: "Plumbing, electrics, gas, HVAC, drainage, insulation.",
    summary: "Everything that hides behind the walls. Licensed trades only — doing this yourself voids your insurance and possibly your marriage. The decisions made here are the ones you can't easily reverse later.",
    resourceCount: 22,
    steps: [
      {
        title: "Plumbing rough-in",
        emoji: "🚰",
        components: [
          { label: "Hot/cold water lines", hint: "PEX over copper for new work in most cases — faster, fewer joints, less likely to burst in a cold snap.", materials: "PEX pipe, fittings, manifold", skill: "Mastery" },
          { label: "Waste & soil pipes", hint: "Falls are sacred: 1:60 minimum on toilet runs, 1:40 on basin/shower. Getting this wrong creates blockages forever.", materials: "PVC pipe, fittings, glue", skill: "Mastery" },
          { label: "Pressure test before plastering", hint: "Test under full pressure with everything capped. Find leaks now, not after the plasterer's been in.", skill: "Mastery" },
        ],
      },
      {
        title: "Electrical rough-in",
        emoji: "⚡",
        components: [
          { label: "Sub-board & circuits", hint: "Plan circuits per room, not per appliance. Kitchen needs 3–4 circuits minimum (lights, GPOs, oven, fridge).", skill: "Mastery" },
          { label: "Run cables, install boxes", hint: "Mark switch and GPO heights with tape on the studs before pulling cable. Easier to move tape than cable.", materials: "TPS cable, switch boxes, GPOs", skill: "Mastery" },
          { label: "Data & comms cabling", hint: "Cat6 to every room while the walls are open. Wireless coverage is great until it isn't.", materials: "Cat6 cable, RJ45 sockets", skill: "Advanced" },
          { label: "Lighting plan", hint: "Sketch the lighting plan before any cable goes in. Switching arrangements are a nightmare to retrofit.", skill: "Advanced" },
        ],
      },
      {
        title: "Gas lines",
        emoji: "🔥",
        components: [
          { label: "Plan appliance locations", hint: "Cooktop, hot water, ducted heater — all need gas lines and clearances. Confirm before plastering.", skill: "Mastery" },
          { label: "Run gas lines (licensed gas fitter)", hint: "Not negotiable. Gas work without a licence voids insurance and can prosecute.", materials: "Copper gas pipe, fittings", skill: "Mastery" },
          { label: "Pressure test & certificate", hint: "Keep the gas certificate. The conveyancer for the next sale will ask for it.", skill: "Mastery" },
        ],
      },
      {
        title: "HVAC",
        emoji: "❄️",
        components: [
          { label: "Choose system type", hint: "Split, ducted, hydronic — each has a use case. Ducted is best for whole-house if the ceiling has room.", skill: "Advanced" },
          { label: "Install ducting / lines", hint: "Plan duct runs around the structural framing. Trying to bend ducts around joists later costs a wall.", materials: "Insulated duct, refrigerant lines", skill: "Mastery" },
          { label: "Outdoor unit position", hint: "Not under a bedroom window, not where the neighbour will hate you, not where it can't be serviced.", skill: "Intermediate" },
        ],
      },
      {
        title: "Drainage & sewerage",
        emoji: "🚽",
        components: [
          { label: "Connection to mains", hint: "Sewer connection point is dictated by the council and the boundary trap. Get this surveyed.", skill: "Mastery" },
          { label: "Internal stack", hint: "AAVs (air admittance valves) can replace some vent stacks but not all. Check local requirements.", skill: "Mastery" },
          { label: "Stormwater plan", hint: "Stormwater and sewer never mix. They go in different pipes to different places. Inspectors will check.", skill: "Mastery" },
        ],
      },
      {
        title: "Insulation",
        emoji: "🧊",
        components: [
          { label: "Wall insulation (R-value)", hint: "R2.0 minimum in new walls. R2.5 in cooler climates. Acoustic batts in any wall around bathrooms or bedrooms.", materials: "Wall batts, acoustic batts", skill: "Basic" },
          { label: "Ceiling insulation", hint: "R5.0 in cold climates, R4.0 minimum elsewhere. Easy DIY if the ceiling's open.", materials: "Ceiling batts", skill: "Basic" },
          { label: "Underfloor (if suspended)", hint: "Often forgotten. Underfloor insulation is the cheapest cold-floor fix there is.", materials: "Underfloor batts, ties", skill: "Intermediate" },
        ],
      },
    ],
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
    hero: "from-amber-400 via-orange-500 to-amber-600",
    tagline: "Sheeting, plaster, cornice, sanding, patching, prime.",
    summary: "Where the walls stop looking like a construction site and start looking like walls. Harder than the internet makes it look — Level 4 finishing is the difference between 'painted' and 'professional'.",
    resourceCount: 9,
    steps: [
      {
        title: "Fix sheeting",
        emoji: "🧱",
        components: [
          { label: "Standard plasterboard", hint: "10mm for ceilings, 13mm for walls. Wet-area sheets in any bathroom, kitchen splashback or laundry wall.", materials: "Plasterboard, plaster screws", skill: "Advanced" },
          { label: "Stagger joints, screw at correct centres", hint: "Don't line up vertical joints between sheets — stagger them like brickwork. 200mm screw centres on edges, 300mm in the field.", skill: "Intermediate" },
          { label: "Cut openings cleanly", hint: "GPOs, downlights, vents — measure twice, score, snap. A jagged opening = a wider cover plate.", materials: "Stanley knife, square", skill: "Intermediate" },
        ],
      },
      {
        title: "Plaster joints & set",
        emoji: "🥄",
        components: [
          { label: "Tape & first coat", hint: "Paper tape for flat joints, metal tape for external corners. Bed it firmly into the first coat.", materials: "Paper tape, metal corner tape, base coat", skill: "Advanced" },
          { label: "Second & finishing coats", hint: "Three coats minimum on a Level 4 finish, five for Level 5 (the gloss-paint-ready finish). Each must dry fully.", materials: "Topping compound, hawk and trowel", skill: "Mastery" },
          { label: "Cornice (if any)", hint: "Cove cornice is the Aussie default. Nail and glue both. Don't trust just glue, don't trust just nails.", materials: "Cornice, cornice cement, nails", skill: "Advanced" },
        ],
      },
      {
        title: "Caulk & gap-fill",
        emoji: "🔌",
        components: [
          { label: "Caulk cornices, skirtings, architraves", hint: "Acrylic gap-filler, not silicone. Silicone won't paint. This step is the difference between 'painted' and 'finished'.", materials: "Paintable acrylic caulk", skill: "Basic" },
          { label: "Inspect under cross-light", hint: "Take a torch and run it sideways along every wall. What you don't catch now, the paint will showcase forever.", skill: "Intermediate" },
        ],
      },
      {
        title: "Sand back",
        emoji: "🪶",
        components: [
          { label: "Sand all joints flush", hint: "120-grit on a pole sander. Run a torch sideways across the wall after — every shadow is something the paint will magnify.", materials: "Pole sander, 120-grit paper", skill: "Intermediate" },
          { label: "Dust extraction", hint: "Plaster dust is the worst dust. A vacuum-attached sander pays for itself in your lungs.", materials: "Vac-extraction sander", skill: "Basic" },
        ],
      },
      {
        title: "Prime",
        emoji: "🎨",
        components: [
          { label: "Plaster sealer / undercoat", hint: "Bare plaster drinks paint. A dedicated plaster sealer first means top coats go further and look more even.", materials: "Plaster sealer / acrylic undercoat", skill: "Basic" },
        ],
      },
    ],
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
    hero: "from-amber-600 via-orange-700 to-amber-800",
    tagline: "Prep, waterproofing, tile, carpet, timber.",
    summary: "Underfoot choices — the thing you'll literally feel every day. Prep badly and you'll hear about it every time someone walks across the room.",
    resourceCount: 15,
    steps: [
      {
        title: "Preparation",
        emoji: "📏",
        components: [
          { label: "Check substrate is flat", hint: "3mm tolerance over 2m for tile, 5mm for timber. Out-of-flat substrate = uneven floor that will haunt you.", materials: "Long straightedge, self-levelling compound", skill: "Intermediate" },
          { label: "Moisture test concrete slabs", hint: "RH probe or calcium chloride test. Glue-down floors fail catastrophically over wet slabs.", materials: "Moisture meter / RH test kit", skill: "Advanced" },
          { label: "Acoustic underlay", hint: "Strata buildings often require certified acoustic underlay. Check the by-laws before ordering.", materials: "Acoustic underlay", skill: "Basic" },
        ],
      },
      {
        title: "Waterproofing (wet areas)",
        emoji: "💧",
        components: [
          { label: "Bond breaker at junctions", hint: "Floor/wall junctions move. A bond breaker stops the membrane tearing as the building flexes.", materials: "Bond breaker tape", skill: "Advanced" },
          { label: "Two coats of membrane", hint: "Different colours per coat so you can see missed spots. Up the wall 150mm minimum, 1800mm in the shower.", materials: "Waterproof membrane, brushes", skill: "Mastery" },
          { label: "Inspection & certificate", hint: "Required by code in most states. Keep the certificate; it's transferable to the next owner.", skill: "Mastery" },
        ],
      },
      {
        title: "Tiling",
        emoji: "🟫",
        components: [
          { label: "Set out the room", hint: "Find the room's centre, dry-lay a row each way. Aim for cuts > 50mm at the edges. No tiny slivers under the door.", materials: "Chalk line, spacers, rubber mallet", skill: "Advanced" },
          { label: "Notched trowel & even bed", hint: "Right notch size for the tile size. Tap each tile in. Hollow tiles will pop within a year.", materials: "Notched trowel, levelling clips", skill: "Advanced" },
          { label: "Grout & seal", hint: "Wait the full grout cure (24–72 hrs). Seal cement-based grout. Epoxy grout if it's a kitchen splashback or shower floor.", materials: "Grout, grout sealer", skill: "Intermediate" },
        ],
      },
      {
        title: "Timber & laminate",
        emoji: "🪵",
        components: [
          { label: "Acclimatise the boards", hint: "48–72 hours in the room. Skipping this is why floors cup or gap a month later.", skill: "Basic" },
          { label: "Expansion gap at perimeter", hint: "10–12mm around every wall. Skirting covers it. Without the gap, the floor buckles in summer.", skill: "Intermediate" },
          { label: "Stagger joints, click-lock or glue-down", skill: "Intermediate" },
        ],
      },
      {
        title: "Carpet & soft finishes",
        emoji: "🧶",
        components: [
          { label: "Underlay matters", hint: "10–12mm rebond underlay for residential. The carpet will feel and last 2–3× better than with the cheap stuff.", materials: "Underlay, gripper rod", skill: "Basic" },
          { label: "Professional install", hint: "Stretch-fitting carpet without a knee-kicker is a recipe for ripples in 18 months. Pay the installer.", skill: "Advanced" },
        ],
      },
    ],
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
    hero: "from-amber-700 via-orange-800 to-amber-900",
    tagline: "Doors, skirting, architraves, trim.",
    summary: "The detail work that tells a room it's almost done. The difference between 'renovated' and 'rented-looking' lives here — in the mitres, the gap-fill, and the time spent fitting hardware properly.",
    resourceCount: 12,
    steps: [
      {
        title: "Doors",
        emoji: "🚪",
        components: [
          { label: "Hang on plumb jambs", hint: "Plumb the jamb first, hang the door second. Out-of-plumb jamb = door that swings open or closed by itself.", materials: "Spirit level, packers, hinges", skill: "Advanced" },
          { label: "Hardware install", hint: "Mortice locks need careful chiselling. A jig is cheap and saves a ruined door.", materials: "Mortice jig, sharp chisel", skill: "Advanced" },
          { label: "Door stops & buffers", hint: "Always fit door stops. Cheaper than re-painting the wall every time the door slams.", materials: "Door stops", skill: "Basic" },
        ],
      },
      {
        title: "Skirting",
        emoji: "📏",
        components: [
          { label: "Choose profile to match era", hint: "1920s house with a modern square skirting reads off. Profile-match the era of the house, not the year of the reno.", skill: "Basic" },
          { label: "Mitre or scribe internal corners", hint: "Mitres are quick but open over time. Scribed (coped) corners stay tight as the house moves.", materials: "Mitre saw, coping saw", skill: "Intermediate" },
          { label: "Pin nail, glue, fill", hint: "Construction adhesive + brad nails. Fill the holes before the painter does, or pay them to.", materials: "Brad nailer, construction adhesive, filler", skill: "Intermediate" },
        ],
      },
      {
        title: "Architraves",
        emoji: "🪟",
        components: [
          { label: "Match skirting profile", hint: "Architraves and skirting from the same range read as one finish. Mixing brands rarely works.", skill: "Basic" },
          { label: "45° mitres at corners", hint: "Tight mitres need a sharp blade and a stable saw. Cheap saw + tired blade = visible gap.", materials: "Mitre saw with sharp blade", skill: "Intermediate" },
        ],
      },
    ],
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
    hero: "from-orange-500 via-red-500 to-rose-700",
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
    hero: "from-orange-600 via-red-600 to-rose-700",
    tagline: "Kitchens, vanities, appliances, robes, mirrors.",
    summary: "The big-ticket items that make a room feel finished, and where the budget finally stops pretending. Most of this stage is somebody else's lead time becoming your scheduling problem.",
    resourceCount: 19,
    steps: [
      {
        title: "Kitchen cabinetry",
        emoji: "🗄️",
        components: [
          { label: "Install base cabinets first, level them", hint: "Level base cabinets across the run before fixing. The benchtop is unforgiving; tweak the boxes, not the bench.", materials: "Long spirit level, packers, screws", skill: "Advanced" },
          { label: "Wall cabinets at the right height", hint: "450mm above the bench is standard. 600mm if there's a rangehood underneath. Check before you screw.", skill: "Advanced" },
          { label: "Door alignment", hint: "Doors take time. Adjust the hinges in 3 directions until faces line up. Not rushing this is the difference between flatpack and bespoke-looking.", skill: "Intermediate" },
        ],
      },
      {
        title: "Benchtops & splashbacks",
        emoji: "🪨",
        components: [
          { label: "Template, cut, install", hint: "Stone/quartz: the supplier templates and installs. Don't try to template yourself for stone — corner radii and overhangs are unforgiving.", skill: "Mastery" },
          { label: "Sink & tap cutouts", hint: "Cutouts must be made before stone install. Once the bench is on, you're not cutting it in place.", skill: "Mastery" },
          { label: "Splashback (tile or glass)", hint: "Glass splashback is a single panel installed last, after the cabinets. Tile splashback goes in at tiling stage.", materials: "Tiles or glass panel, sealant", skill: "Advanced" },
        ],
      },
      {
        title: "Bathroom vanities",
        emoji: "🚿",
        components: [
          { label: "Wall-hung vs floor-standing", hint: "Wall-hung looks lighter, easier to clean under, but needs blocking in the wall during framing. Decide early.", skill: "Advanced" },
          { label: "Plumbing rough-in alignment", hint: "Confirm the plumber's rough-in matches the vanity drain location BEFORE you order the vanity.", skill: "Advanced" },
        ],
      },
      {
        title: "Mirrors, robes & fittings",
        emoji: "🪞",
        components: [
          { label: "Mirrors: silicone-fixed", hint: "Mirror adhesive, not regular silicone. Wrong silicone causes 'mirror disease' (black spots from edge) within months.", materials: "Mirror adhesive", skill: "Basic" },
          { label: "Robes & wardrobes", hint: "Custom built-ins use ceiling-to-floor space. Modular robes are 30% cheaper but waste the top 200mm.", skill: "Intermediate" },
          { label: "Towel rails, hooks, accessories", hint: "Find the studs, or use proper toggle anchors. Tile-only mounting fails when wet towels keep loading the rail.", materials: "Stud finder, toggle anchors", skill: "Basic" },
        ],
      },
    ],
  },
  {
    slug: "fit-off",
    name: "Fit-Off",
    phase: "finish",
    phaseLabel: "Phase 3",
    order: 13,
    difficulty: "advanced",
    icon: "🔧",
    accent: "bg-rose-100 text-rose-700",
    hero: "from-rose-500 via-red-600 to-orange-700",
    tagline: "Plumbing, electrical, AC, fixtures, fire alarms.",
    summary: "Final connections. Licensed trades return for sign-off and Certificates of Compliance — keep the paperwork, the next buyer's conveyancer will ask.",
    resourceCount: 14,
    steps: [
      {
        title: "Plumbing fit-off",
        emoji: "🚿",
        components: [
          { label: "Tap & mixer install", hint: "Always use new tap washers and supplied seals. Don't reuse old ones — leaks at fit-off are almost always old seals.", skill: "Advanced" },
          { label: "Toilet & cistern", hint: "Cistern bolts hand-tight + a quarter turn. Over-torque cracks the porcelain. The crack appears two weeks later.", skill: "Intermediate" },
          { label: "Shower head & arm", hint: "Teflon tape on the threads, 4–6 wraps clockwise (looking at the open end). Tighten by hand, not by spanner.", materials: "Teflon tape", skill: "Basic" },
          { label: "Pressure test", hint: "Run every fitting under full pressure for 15 minutes. Find drips before the customer (or you) does.", skill: "Intermediate" },
        ],
      },
      {
        title: "Electrical fit-off",
        emoji: "💡",
        components: [
          { label: "Switch, GPO, downlight install", hint: "Done by the electrician at the end. Don't install yourself — at minimum, a fit-off inspection will fail the unlicensed work.", skill: "Mastery" },
          { label: "Test & tag (RCD trip test)", hint: "Every circuit gets push-button tested before sign-off. Required for the Certificate of Compliance.", skill: "Mastery" },
          { label: "Smoke alarms", hint: "Hard-wired and interconnected for new work in most states. Battery-only alarms aren't compliant any more.", materials: "Hard-wired smoke alarms", skill: "Mastery" },
        ],
      },
      {
        title: "Fixtures & accessories",
        emoji: "🔩",
        components: [
          { label: "Door handles, locks, latches", hint: "Match all hardware finishes across the house. Mixed brass and chrome reads like a slow renovation.", skill: "Basic" },
          { label: "Curtain tracks, blind brackets", hint: "Find the studs or use cavity anchors rated for the curtain weight. Curtains are heavier than they look when wet.", skill: "Basic" },
        ],
      },
      {
        title: "AC commissioning",
        emoji: "❄️",
        components: [
          { label: "Refrigerant charge", hint: "Done by the licensed AC technician. DIY refrigerant work is illegal under refrigerant handling laws.", skill: "Mastery" },
          { label: "Run cycle & temperature check", hint: "Run heat and cool cycles. A 5°C delta between intake and supply is the minimum sanity check.", skill: "Intermediate" },
          { label: "Remote / controller install", hint: "Centralised wall controllers go in at fit-off. Make sure the house wifi reaches if it's smart-home enabled.", skill: "Basic" },
        ],
      },
    ],
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
    hero: "from-red-500 via-rose-600 to-pink-700",
    tagline: "Clean up and final checks across every trade.",
    summary: "The nitpicking pass — the unglamorous difference between 'nearly finished' and 'actually finished'. Bring a torch, a pad of sticky notes, and the willingness to be that person.",
    resourceCount: 8,
    steps: [
      {
        title: "Whole-house walk-through",
        emoji: "🚶",
        components: [
          { label: "Bring a torch and a sticky-note pad", hint: "A torch held flat to a wall reveals every paint imperfection. Note them, don't try to remember.", materials: "Torch, sticky notes, painter's tape", skill: "Basic" },
          { label: "Open and close everything", hint: "Every door, drawer, window, and tap. Half the punch list lives in 'this doesn't quite work right'.", skill: "Basic" },
          { label: "Photograph defects", hint: "A photo with a sticky note next to it, sent to the tradie, is a thousand times faster than describing it on the phone.", skill: "Basic" },
        ],
      },
      {
        title: "Trade-by-trade fixes",
        emoji: "🔧",
        components: [
          { label: "Group defects per tradie", hint: "Don't make 6 phone calls — group all the painter's items in one list, all the carpenter's in another.", skill: "Basic" },
          { label: "Set a single return-visit date", hint: "Every tradie back on the same day means you're not living in a series of half-finished returns.", skill: "Intermediate" },
          { label: "Check off as fixed, not as promised", hint: "The 'fixed' column on your sheet only ticks when YOU have inspected it.", skill: "Basic" },
        ],
      },
      {
        title: "Final clean",
        emoji: "🧼",
        components: [
          { label: "Builders' clean (professional)", hint: "Worth paying for. Removes plaster dust, paint specks, sticker residue from windows. DIY rarely matches the result.", skill: "Basic" },
          { label: "Replace HVAC and rangehood filters", hint: "Construction dust kills filters. Fresh ones at handover make the system run quieter and longer.", materials: "AC filter, rangehood filter", skill: "Basic" },
        ],
      },
      {
        title: "Documents & handover",
        emoji: "📁",
        components: [
          { label: "Compliance certificates", hint: "Plumbing, electrical, gas, waterproofing, AC. File them all. The next sale will need every one.", skill: "Basic" },
          { label: "Warranties & receipts", hint: "Keep originals. Photograph each in case the paper version vanishes.", skill: "Basic" },
          { label: "Tradie contact list", hint: "Save every tradie's mobile in a single 'house' contact group. The leaking tap in 2 years will thank you.", skill: "Basic" },
        ],
      },
    ],
  },
  {
    slug: "party",
    name: "Party!",
    phase: "finish",
    phaseLabel: "Finale",
    order: 16,
    difficulty: "basic",
    icon: "🎉",
    accent: "bg-gradient-to-br from-red-500 to-primary text-white",
    hero: "from-fuchsia-500 via-pink-500 to-rose-500",
    tagline: "You made it. Throw the housewarming you earned.",
    summary: "The most important stage. Invite the people who believed in your project when the site was a hole in the ground. Quietly don't invite the ones who said it would never happen.",
    resourceCount: 1,
  },
]

/** Total stages in the renovation journey, including the celebratory Party stage at #16. */
export const TOTAL_STAGES = 16

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

/** Hero gradient classes — uses stage.hero if set, otherwise picks one based on phase. */
export function getHeroGradient(stage: Stage): string {
  if (stage.hero) return stage.hero
  switch (stage.phase) {
    case "plan":
      return "from-sky-500 via-sky-600 to-indigo-700"
    case "structure":
      return "from-amber-500 via-orange-600 to-amber-700"
    case "finish":
      return "from-orange-500 via-red-500 to-rose-700"
  }
}

/** EmailCapture theme key — uses stage.emailTheme if set, otherwise picks one based on phase. */
export function getEmailTheme(stage: Stage): "orange" | "emerald" | "blue" {
  if (stage.emailTheme) return stage.emailTheme
  switch (stage.phase) {
    case "plan":
      return "blue"
    case "structure":
      return "emerald"
    case "finish":
      return "orange"
  }
}

/** Sum of resources of each kind across all stages. Used by the /resources hub. */
export function getResourceCounts(): Record<ResourceKind, number> {
  const counts: Record<ResourceKind, number> = {
    ebook: 0,
    template: 0,
    checklist: 0,
    tool: 0,
    tip: 0,
  }
  for (const stage of STAGES) {
    if (!stage.resources) continue
    for (const r of stage.resources) {
      counts[r.kind] += 1
    }
  }
  return counts
}

/** A StageResource enriched with its parent stage's slug, name, phase and difficulty. */
export interface ResourceWithStage extends StageResource {
  stageSlug: string
  stageName: string
  stagePhase: Phase
  stageDifficulty: Difficulty
  stageOrder: number
}

/** Flatten all resources across every stage, preserving stage context for filtering. */
export function getAllResources(): ResourceWithStage[] {
  const out: ResourceWithStage[] = []
  for (const stage of STAGES) {
    if (!stage.resources) continue
    for (const r of stage.resources) {
      out.push({
        ...r,
        stageSlug: stage.slug,
        stageName: stage.name,
        stagePhase: stage.phase,
        stageDifficulty: stage.difficulty,
        stageOrder: stage.order,
      })
    }
  }
  return out
}

/** All resources of a given kind, in stage order. */
export function getResourcesByKind(kind: ResourceKind): ResourceWithStage[] {
  return getAllResources().filter((r) => r.kind === kind)
}

/** URL slug used at /resources/<slug> for each kind, e.g. "ebooks" → "ebook". */
export const RESOURCE_KIND_SLUGS: Record<ResourceKind, string> = {
  ebook: "ebooks",
  template: "templates",
  checklist: "checklists",
  tool: "tools",
  tip: "tips",
}

/** Reverse of RESOURCE_KIND_SLUGS — resolve a URL slug to a ResourceKind, or undefined. */
export function kindFromSlug(slug: string): ResourceKind | undefined {
  const entry = (Object.entries(RESOURCE_KIND_SLUGS) as [ResourceKind, string][])
    .find(([, s]) => s === slug)
  return entry?.[0]
}

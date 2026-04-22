export type Guide = {
  slug: string
  title: string
  excerpt: string
  category: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: string
  image: string
  steps: {
    title: string
    description: string
    tips: string[]
    warnings: string[]
  }[]
}

export const renovationGuides: Guide[] = [
  {
    slug: "bathroom-renovation-complete",
    title: "Complete Bathroom Renovation: Start to Finish",
    excerpt: "A room-by-room guide to renovating a bathroom without losing your mind or your marriage.",
    category: "Bathroom",
    difficulty: "Advanced",
    duration: "2-3 weeks",
    image: "/placeholder.svg?height=600&width=1200",
    steps: [
      {
        title: "Plan and Design",
        description: "Before touching anything, know what you are doing. This sounds obvious. It is surprising how often it gets skipped.",
        tips: [
          "Measure three times. The tape measure does not judge.",
          "Get plumbing and electrical plans drawn before demo.",
          "Order major items early. Tiles take 6 weeks. Tubs take longer.",
          "Decide on layout changes before demo. Moving plumbing costs money.",
        ],
        warnings: [
          "Demo before planning leads to expensive mid-project pivots.",
          "Do not assume your floor is level. It is probably not level.",
        ],
      },
      {
        title: "Demo the Old Bathroom",
        description: "The cathartic destruction phase. Take photos before you start. You will want them later.",
        tips: [
          "Turn off water at the main. Then turn it off again. Trust no shuts.",
          "Remove fixtures carefully if you are donating. Habitat for Humanity ReStore loves usable toilets.",
          "Rent a proper dumpster. Debris adds up faster than physics should allow.",
          "Wear a mask. Dust is not just annoying. It is also slightly ominous.",
        ],
        warnings: [
          "Do not cut wiring or pipes without confirming they are dead.",
          "Do not assume the wall you are hitting is just drywall. Assume there are wires inside.",
          "Do not use a sledgehammer near plumbing you intend to keep.",
        ],
      },
      {
        title: "Rough-In Plumbing and Electrical",
        description: "The work that goes behind the walls. This is where bathrooms get their systems right or permanently wrong.",
        tips: [
          "Move drain lines before tiling. After tiling is expensive and sad.",
          "Add extra electrical outlets. You will want them. Trust.",
          "Install GFCI outlets near water sources. They save lives and are required by code.",
          "Vent properly. Vents are not optional bathroom decorations.",
        ],
        warnings: [
          "Plumbing requires permits in most jurisdictions. Get them.",
          "Code violations discovered during inspection require fixing. Which means opening walls again.",
          "Do not connect different pipe materials without proper connectors.",
        ],
      },
      {
        title: "Install Insulation and Moisture Barriers",
        description: "The unsexy phase that prevents mold and keeps bathrooms warm in ways that matter.",
        tips: [
          "Use moisture-resistant drywall in shower areas. Green board is a minimum. Cement board is better.",
          "Insulate exterior walls. Bathrooms are cold in ways that feel personal.",
          "Seal around penetrations with caulk designed for wet areas.",
        ],
        warnings: [
          "Never install regular fiberglass insulation directly against tub or shower surrounds.",
          "Moisture barriers go on the warm side of insulation. Get this wrong and the wall becomes a swamp.",
        ],
      },
      {
        title: "Tile Installation",
        description: "The skill phase. Tiling well takes practice. Tiling badly takes one afternoon and a lot of regret.",
        tips: [
          "Start with the shower. It is hardest and you will be tired by the time you get to the visible floor.",
          "Use a laser level. Eye-balling tiles makes crooked people of us all.",
          "Grout release on polished tiles prevents haze. Do not skip it.",
          "Seal grout after curing. One week minimum. Realistically three weeks.",
        ],
        warnings: [
          "Uneven subfloor will telegraph through tiles. Fix the subfloor first.",
          "Thinset under tiles needs to be fully cured before grouting. Rush this and everything moves.",
          "Do not grout expansion joints. They exist for reasons. Seal them instead.",
        ],
      },
      {
        title: "Install Fixtures and Trim",
        description: "The payoff phase. Fixtures go in, and the bathroom starts looking like a bathroom.",
        tips: [
          "Install faucets before the toilet. Easier access.",
          "Use plumber's putty for drains. Teflon tape for threaded connections. Knowing the difference is the difference between leaking and not leaking.",
          "Caulk everywhere tiles meet other surfaces. Silicone in wet areas. Latex where flexibility is needed.",
          "Test everything before declaring victory. Run every fixture. Check for drips under the sink.",
        ],
        warnings: [
          "Over-tightening fittings damages washers and causes leaks. Gentle but firm. Like most things in life.",
          "Do not caulk the floor trim. Water needs somewhere to go if it gets under.",
        ],
      },
    ],
  },
  {
    slug: "kitchen-renovation-checklist",
    title: "Kitchen Renovation Checklist: Every Step",
    excerpt: "A comprehensive checklist for kitchen renovations. Print it. Consult it. Do not trust your memory.",
    category: "Kitchen",
    difficulty: "Advanced",
    duration: "4-8 weeks",
    image: "/placeholder.svg?height=600&width=1200",
    steps: [
      {
        title: "Pre-Planning",
        description: "The investment that determines whether this goes smoothly or becomes a life chapter.",
        tips: [
          "Define your must-haves versus nice-to-haves. Budget forces this conversation.",
          "Get three contractor quotes. One is a lonely data point. Three is a pattern.",
          "Finalize all appliance selections before cabinet measurement. Cabinets are built around appliances.",
          "Establish a realistic budget with 20% contingency. Reality is optimistic by default.",
        ],
        warnings: [
          "Scope creep is the silent budget killer. A small addition here becomes a big number fast.",
          "Do not skip structural assessment. Load-bearing walls are not suggestions.",
        ],
      },
      {
        title: "Design Development",
        description: "The work that looks like procrastination but is actually preventing expensive mistakes.",
        tips: [
          "The work triangle still matters. Sink, stove, refrigerator. Keep it efficient.",
          "Counter height: 36 inches is standard. Adjust for your height.",
          "Outlets: More than you think. Islands need outlets on both sides. Under-cabinet lights need wiring.",
          "Lighting: Plan for ambient, task, and accent. One overhead light is what prisons have.",
        ],
        warnings: [
          "Electrical upgrades often needed. Do not discover this mid-renovation.",
          "HVAC adjustments may be required for appliance changes. A new range hood needs ducting.",
        ],
      },
      {
        title: "Demolition",
        description: "The destruction that feels productive and occasionally is.",
        tips: [
          "Shut off utilities properly. Water, gas, electric. Verify with a second person.",
          "Rent dumpsters sized up from your estimate. Full containers cost as much as slightly too small ones.",
          "Salvage what you can. Cabinets in good shape donate well. Hardware is almost always salvageable.",
        ],
        warnings: [
          "Load-bearing walls require temporary support during removal. These are not optional.",
          "Mold discovered during demo stops the project until remediated. Budget for this possibility.",
        ],
      },
      {
        title: "Rough Trades",
        description: "The phase where systems get installed inside walls before walls close.",
        tips: [
          "Coordinate electrician and plumber schedules. They need to overlap at points.",
          "Run low-voltage wiring while walls are open. Ethernet, speaker wire, USB charging locations.",
          "Install backing for heavy items now. Cabinets need strong backing for mounting.",
        ],
        warnings: [
          "Code inspections are required. Failing an inspection after walls close means opening walls again.",
          "Do not cover uninspected work. The inspection is checking things you cannot see.",
        ],
      },
      {
        title: "Finishing",
        description: "The phase where the kitchen starts existing as a room again.",
        tips: [
          "Paint before flooring goes in. Easier to fix paint mistakes than flooring damage.",
          "Cabinet installation: Check level, shim as needed. Cabinets are built to tolerances that assume imperfect walls.",
          "Countertop template comes after cabinets. Templating requires everything to be in final position.",
          "Sink installation: Undermount sinks need support. The weight of a full sink is not trivial.",
        ],
        warnings: [
          "Countertops take 2-4 weeks after templating. Plan appliance delay accordingly.",
          "Plumbing connections need to be tested before caulking everything shut.",
        ],
      },
      {
        title: "Final Steps",
        description: "The punch list phase. Small items that feel minor but matter for function.",
        tips: [
          "Caulk all seams where tile meets countertop. Water gets everywhere.",
          "Install cabinet hardware last. Fingerprints from installation come out easily at this stage.",
          "Touch up paint after flooring. Scuffs happen.",
          "Final cleaning: Behind appliances, inside cabinets, inside drawers. You will find construction dust in places physics should not allow.",
        ],
        warnings: [
          "Do a full functional test before signing off. Every drawer, every door, every outlet, every fixture.",
          "Keep care instructions for all finishes.石材,木材,金属 all have different needs.",
        ],
      },
    ],
  },
  {
    slug: "painting-room-like-pro",
    title: "How to Paint a Room Like You Actually Know What You Are Doing",
    excerpt: "A guide to painting that goes beyond 'two coats and hope.' Results that do not embarrass you in photos.",
    category: "Painting",
    difficulty: "Beginner",
    duration: "1-2 days",
    image: "/placeholder.svg?height=600&width=1200",
    steps: [
      {
        title: "Preparation",
        description: "The phase that determines whether the painting looks professional or 'my teenager did this.'",
        tips: [
          "Fill all holes with spackle. Let it dry. Sand flat. Repeat. The wall is not ready until it feels smooth.",
          "Use painter's tape on trim. Press edges firmly. Pain goes under tape. It always does.",
          "Remove outlet and switch covers. Tape over the boxes themselves.",
          "Lay drop cloths along walls. Paint prefers floors. It is almost alive in this preference.",
        ],
        warnings: [
          "Do not skip the primer on stained walls. The stain will communicate with your paint.",
          "Do not use cheap tape. Cheap tape peels badly and takes the paint with it.",
        ],
      },
      {
        title: "Cutting In",
        description: "The skill that separates painters from people who own brushes. 'Cutting in' means painting edges that rollers cannot reach.",
        tips: [
          "Load the brush about one-third of the way up the bristles. Tap, do not wipe.",
          "Go slowly around edges. Accuracy matters more than speed.",
          "Maintain a wet edge. Paint dries fast. Wet edge keeps lines soft.",
          "Paint about two inches into the field from the edge. The roller will cover the rest.",
        ],
        warnings: [
          "Do not overload the brush. Drips happen fast and become permanent features.",
          "Do not rush cutting in. This is where crooked lines are born.",
        ],
      },
      {
        title: "Rolling",
        description: "The phase that fills the space and makes the room actually colored.",
        tips: [
          "Use the right nap thickness. Smooth walls: 3/8 inch. Textured walls: 1/2 inch or more.",
          "Load the roller evenly. Roll in a W pattern, then fill in.",
          "Work in sections of about four square feet. Do not roll over areas that are drying.",
          "Second coat only after the first is dry. Usually overnight. Sometimes longer in humid conditions.",
        ],
        warnings: [
          "Do not press hard with the roller. Pressing hard causes lines. Let the roller do the work.",
          "Do not stop mid-wall. Cold starts leave marks. Plan to complete each wall.",
        ],
      },
      {
        title: "Finishing",
        description: "The details that complete the professional look.",
        tips: [
          "Peel tape off at a 45-degree angle. Slow and steady. Painter's tape removal is not a race.",
          "Touch up any missed spots with a small brush. They always exist.",
          "Remove the hardware you taped over. Put it back where it belongs.",
          "Clean brushes immediately. Good brushes cost more than the paint you saved by being cheap.",
        ],
        warnings: [
          "Do not peel tape after paint fully cures. Cured paint peels with the tape.",
          "Do not stack furniture against walls until paint is fully cured. Stickage happens.",
        ],
      },
    ],
  },
  {
    slug: "flooring-install-guide",
    title: "Flooring Installation: What You Need to Know",
    excerpt: "Hardwood, laminate, vinyl, tile. A guide to each major flooring type with installation realities.",
    category: "Flooring",
    difficulty: "Intermediate",
    duration: "1-5 days depending on type",
    image: "/placeholder.svg?height=600&width=1200",
    steps: [
      {
        title: "Choose Your Flooring",
        description: "Each flooring type has personality. Match it to your lifestyle and your patience for instructions.",
        tips: [
          "Hardwood: Beautiful, expensive, requires maintenance. Adds value. Shows scratches.",
          "Laminate: Affordable, durable, water-resistant varieties exist. Does not refinish.",
          "Luxury Vinyl Plank: Waterproof, click together, feels like wood. Best value for most situations.",
          "Tile: Durable, waterproof, cold underfoot. Requires grout maintenance.",
        ],
        warnings: [
          "Hardwood in bathrooms is a commitment. Wood and water have opinions about each other.",
          "Laminate swells if water gets underneath. Do not mop with too much water. Do not trust the word 'waterproof' too far.",
        ],
      },
      {
        title: "Prepare the Subfloor",
        description: "The floor rests on the subfloor. The subfloor matters. This is not optional respect.",
        tips: [
          "Clean thoroughly. No debris. No moisture. No protrusions.",
          "Check for level. Gaps over 3/16 inch in ten feet need filling.",
          "Repair any squeaks. Squeaks do not fix themselves. They just get louder.",
          "Acclimate hardwood before installing. Usually 3-5 days in the room. Follow manufacturer specs.",
        ],
        warnings: [
          "Do not install over wet concrete. Moisture meters exist for a reason. Use them.",
          "Do not ignore building codes for subfloor thickness. They exist for structural reasons.",
        ],
      },
      {
        title: "Installation",
        description: "The actual work. Different floors install differently. Know your floor before you start.",
        tips: [
          "Hardwood: Nail or staple. Leave expansion gaps. Stagger joints. Follow manufacturer patterns.",
          "Laminate: Click together. Underlayment underneath. Expansion gaps around edges.",
          "Luxury Vinyl Plank: Click or glue depending on product. Peel and stick exists but has opinions.",
          "Tile: Thinset mortar. Level throughout. Spacers for consistent grout lines.",
        ],
        warnings: [
          "Do not nail or screw through floating floors. Expansion must move somewhere.",
          "Do not skip underlayment when required. The floor will sound hollow and wear faster.",
          "Do not rush tile layout. Dry-fit first. A bad layout is permanent and daily visible.",
        ],
      },
      {
        title: "Finishing",
        description: "The details that complete the installation and make it look intentional.",
        tips: [
          "Transition strips where flooring meets other types. They exist to make the meeting intentional.",
          "Baseboards cover expansion gaps. Install them. They also cover amateur edges.",
          "Seal grout lines on tile. Unsealed grout stains. This is not a future project.",
          "Clean and inspect the floor. Look for damage, gaps, and debris. Fix before furniture returns.",
        ],
        warnings: [
          "Do not put heavy furniture on new flooring without protection. Felt pads under everything heavy.",
          "Do not seal hardwood before manufacturer-recommended curing time. Usually 1-2 weeks.",
        ],
      },
    ],
  },
]

export function getGuide(slug: string) {
  return renovationGuides.find((guide) => guide.slug === slug)
}

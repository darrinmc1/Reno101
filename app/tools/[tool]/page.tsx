// app/tools/[tool]/page.tsx — Dynamic tool page for AI document generators

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, Ruler, Palette, ArrowLeft } from "lucide-react"
import { RenoWizard } from "@/components/tools/reno-wizard"
import type { ToolConfig } from "@/components/tools/reno-wizard"

/* ------------------------------------------------------------------ */
/*  Tool definitions                                                   */
/* ------------------------------------------------------------------ */

const tools: Record<string, ToolConfig> = {
  "renovation-brief": {
    id: "renovation-brief",
    title: "Renovation Brief Generator",
    description:
      "Generate a professional renovation project brief to share with contractors. Includes scope, timeline, budget, and key requirements.",
    icon: <FileText className="h-8 w-8 text-primary" />,
    questions: [
      {
        id: "project_type",
        label: "What type of renovation project is this?",
        placeholder: "e.g., Kitchen renovation, bathroom remodel, whole-house renovation",
        type: "text",
        required: true,
      },
      {
        id: "property_details",
        label: "Tell us about your property",
        placeholder: "Property type, age, approximate size in m², number of rooms",
        type: "textarea",
        required: true,
      },
      {
        id: "scope",
        label: "Describe the scope of work",
        placeholder:
          "What work needs to be done? Include demo work, structural changes, electrical, plumbing, finishing etc.",
        type: "textarea",
        required: true,
      },
      {
        id: "budget_range",
        label: "What's your approximate budget range?",
        placeholder: "e.g., $30,000 - $50,000 AUD",
        type: "text",
        required: false,
      },
      {
        id: "timeline",
        label: "What's your preferred timeline?",
        placeholder: "e.g., Start in 2 months, completed in 6-8 weeks",
        type: "text",
        required: true,
      },
      {
        id: "special_requirements",
        label: "Any special requirements or considerations?",
        placeholder:
          "Heritage restrictions, strata approvals, accessibility needs, specific materials you want used",
        type: "textarea",
        required: false,
      },
    ],
  },
  "material-estimator": {
    id: "material-estimator",
    title: "Material Estimator",
    description:
      "Get a detailed estimate of materials needed for your renovation, including approximate quantities and cost ranges.",
    icon: <Ruler className="h-8 w-8 text-primary" />,
    questions: [
      {
        id: "project_type",
        label: "What renovation area are you estimating?",
        placeholder: "e.g., Kitchen, bathroom, flooring throughout, new deck",
        type: "text",
        required: true,
      },
      {
        id: "room_dimensions",
        label: "Room dimensions / area",
        placeholder: "e.g., 4m x 5m kitchen, or 'entire ground floor approximately 80m²'",
        type: "text",
        required: true,
      },
      {
        id: "finish_quality",
        label: "What finish quality are you targeting?",
        placeholder: "e.g., Budget / Standard / Premium (describe what you want)",
        type: "text",
        required: true,
      },
      {
        id: "specific_materials",
        label: "Any specific materials or brands you're considering?",
        placeholder:
          "e.g., Engineered stone benchtops, oak flooring, matte black tapware, specific tile sizes",
        type: "textarea",
        required: false,
      },
      {
        id: "labor_notes",
        label: "Any labour considerations?",
        placeholder: "e.g., DIY some work? Using a specific tradesperson? Any access constraints?",
        type: "textarea",
        required: false,
      },
    ],
  },
  "design-brief": {
    id: "design-brief",
    title: "Design Brief",
    description:
      "Create a comprehensive design brief that captures your renovation style, functional needs, and design requirements.",
    icon: <Palette className="h-8 w-8 text-primary" />,
    questions: [
      {
        id: "project_overview",
        label: "Describe your renovation project",
        placeholder: "What rooms are you renovating and why? What's the current style?",
        type: "textarea",
        required: true,
      },
      {
        id: "style_preferences",
        label: "What style / aesthetic are you going for?",
        placeholder:
          "e.g., Modern minimalist, Hamptons, industrial, Scandinavian, mid-century, eclectic",
        type: "text",
        required: true,
      },
      {
        id: "colour_palette",
        label: "Do you have a colour palette in mind?",
        placeholder:
          "e.g., Neutral tones with navy accents, warm earth tones, black and white with timber",
        type: "textarea",
        required: false,
      },
      {
        id: "functional_needs",
        label: "What are your functional needs?",
        placeholder:
          "e.g., More storage, open-plan living, home office space, better natural light, accessibility",
        type: "textarea",
        required: true,
      },
      {
        id: "must_haves",
        label: "List your must-have features",
        placeholder:
          "e.g., Walk-in pantry, double vanity, heated floors, butler's sink, induction cooktop",
        type: "textarea",
        required: false,
      },
      {
        id: "inspiration",
        label: "Any inspiration or reference projects?",
        placeholder:
          "Pinterest boards, magazine clippings, specific projects or buildings you admire",
        type: "textarea",
        required: false,
      },
    ],
  },
}

/* ------------------------------------------------------------------ */
/*  Metadata generation                                                */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tool: string }>
}) {
  const { tool: slug } = await params
  const config = tools[slug]

  if (!config) {
    return { title: "Tool Not Found" }
  }

  return {
    title: config.title,
    description: config.description,
  }
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function ToolPage({
  params,
}: {
  params: Promise<{ tool: string }>
}) {
  const { tool: slug } = await params
  const config = tools[slug]

  if (!config) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb / back link */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-1">
            <Link href="/tools">
              <ArrowLeft className="h-4 w-4" />
              All Tools
            </Link>
          </Button>
        </div>

        <RenoWizard tool={config} />
      </div>
    </div>
  )
}

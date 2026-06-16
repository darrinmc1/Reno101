import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Grid3X3, Image, Layout, Palette } from "lucide-react"
import Link from "next/link"

export default function DesignToolsPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Renovation Design Tools</h1>
        <p className="text-xl text-muted-foreground">
          Keep this section as a stable landing page while you design real room styling, mood board, and planning
          tools.
        </p>
      </div>

      <Tabs defaultValue="roomstyler" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="roomstyler">Room Styler</TabsTrigger>
          <TabsTrigger value="moodboards">Mood Boards</TabsTrigger>
          <TabsTrigger value="colorpicker">Color Picker</TabsTrigger>
          <TabsTrigger value="floorplanner">Floor Planner</TabsTrigger>
        </TabsList>
        <TabsContent value="roomstyler" className="pt-6">
          <ToolPanel
            title="Room Styler"
            description="Use this placeholder to scope image uploads, room segmentation, styling presets, and saved concepts."
            points={[
              "Upload photos of your current space",
              "Try different wall colors and finishes",
              "Experiment with flooring options",
              "Visualize furniture and fixtures",
            ]}
            ctaLabel="Plan Room Styler"
          />
        </TabsContent>
        <TabsContent value="moodboards" className="pt-6">
          <ToolPanel
            title="Mood Boards"
            description="Use this section to define asset uploads, collections, annotations, and shareable project boards."
            points={[
              "Upload your own inspiration images",
              "Create colour palettes for your project",
              "Add material and texture samples",
              "Share your mood boards with contractors",
            ]}
            ctaLabel="Plan Mood Boards"
          />
        </TabsContent>
        <TabsContent value="colorpicker" className="pt-6">
          <ToolPanel
            title="Color Picker"
            description="Keep this route in place while you decide how to store palettes, sample rooms, and brand integrations."
            points={[
              "Browse curated colour collections",
              "Generate complementary colour schemes",
              "See colours applied to sample rooms",
              "Save and share favourite combinations",
            ]}
            ctaLabel="Plan Color Picker"
          />
        </TabsContent>
        <TabsContent value="floorplanner" className="pt-6">
          <ToolPanel
            title="Floor Planner"
            description="Use the placeholder to map measurements, drag-and-drop layout editing, and export requirements."
            points={[
              "Create precise floor plans with measurements",
              "Drag and drop furniture and fixtures",
              "Switch between 2D and 3D views",
              "Export and share your designs with contractors",
            ]}
            ctaLabel="Plan Floor Planner"
          />
        </TabsContent>
      </Tabs>

      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Premium Design Features</CardTitle>
            <CardDescription>Good candidates for a paid plan boundary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FeatureRow icon={<Image className="h-4 w-4 text-primary" />} text="AI-powered design suggestions" />
            <FeatureRow icon={<Layout className="h-4 w-4 text-primary" />} text="Unlimited project saves" />
            <FeatureRow icon={<Palette className="h-4 w-4 text-primary" />} text="High-resolution exports" />
          </CardContent>
          <CardFooter>
            <Link href="/pricing">
              <Button variant="outline" className="w-full">
                View Plans
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Design Services</CardTitle>
            <CardDescription>Use this to later connect professional consultations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FeatureRow icon={<Layout className="h-4 w-4 text-primary" />} text="One-on-one consultations" />
            <FeatureRow icon={<Image className="h-4 w-4 text-primary" />} text="Custom design proposals" />
            <FeatureRow icon={<Palette className="h-4 w-4 text-primary" />} text="Professional renderings" />
          </CardContent>
          <CardFooter>
            <Link href="/contact">
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Design Tutorials</CardTitle>
            <CardDescription>Use this slot for future product education</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FeatureRow icon={<Layout className="h-4 w-4 text-primary" />} text="Step-by-step video guides" />
            <FeatureRow icon={<Image className="h-4 w-4 text-primary" />} text="Design principles explained" />
            <FeatureRow icon={<Palette className="h-4 w-4 text-primary" />} text="Tool-specific tutorials" />
          </CardContent>
          <CardFooter>
            <Link href="/blogs">
              <Button variant="outline" className="w-full">
                Read Guides
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Design Your Dream Space?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          This section is now safe to extend. Add real tool routes one at a time instead of exposing unfinished pages
          in navigation.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/pricing">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/research">
            <Button variant="outline" size="lg">
              Plan Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ToolPanel({
  title,
  description,
  points,
  ctaLabel,
}: {
  title: string
  description: string
  points: string[]
  ctaLabel: string
}) {
  const icons = [
    <Layout key="layout" className="h-4 w-4 text-primary" />,
    <Palette key="palette" className="h-4 w-4 text-primary" />,
    <Grid3X3 key="grid" className="h-4 w-4 text-primary" />,
    <Image key="image" className="h-4 w-4 text-primary" />,
  ]

  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <ul className="mb-6 space-y-2">
          {points.map((point, index) => (
            <li key={point} className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-primary/10 p-1">{icons[index]}</div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <Link href="/research">
          <Button>
            {ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src="/placeholder.svg?height=400&width=600" alt={`${title} example`} className="h-auto w-full" />
      </div>
    </div>
  )
}

function FeatureRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="mt-0.5 rounded-full bg-primary/10 p-1">{icon}</div>
      <span>{text}</span>
    </div>
  )
}

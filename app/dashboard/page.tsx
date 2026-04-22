import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Clock, FileText, Search } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container px-4 py-10 md:px-6">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Your command center for saved ideas, research requests, and the gentle illusion that everything is under
            control.
          </p>
        </div>
        <div className="flex gap-2">
          <Link href="/research/new">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Ask A New Question
            </Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-10">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="saved">Saved Items</TabsTrigger>
          <TabsTrigger value="research">Research Requests</TabsTrigger>
          <TabsTrigger value="projects">My Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6 pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Subscription</CardTitle>
                <CardDescription>Standard Plan, respectable and alert</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">10 / 10</div>
                <p className="text-sm text-muted-foreground">Guides remaining this week before you become unstoppable</p>
              </CardContent>
              <CardFooter>
                <Link href="/subscription">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Manage Plan <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Research Requests</CardTitle>
                <CardDescription>For questions too specific for casual optimism</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1 / 2</div>
                <p className="text-sm text-muted-foreground">Requests used this month, one wisely spent</p>
              </CardContent>
              <CardFooter>
                <Link href="/research/new">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Ask Another <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Saved Items</CardTitle>
                <CardDescription>Your pile of useful things</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-muted-foreground">Saved guides and resources you absolutely meant to revisit</p>
              </CardContent>
              <CardFooter>
                <Link href="/blogs">
                  <Button variant="ghost" size="sm" className="gap-1">
                    View All <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              icon={<BookOpen className="h-5 w-5" />}
              title="Kitchen Guide Read-Through"
              description="You revisited this article 2 days ago, probably after pricing cabinetry"
              link="/blogs/kitchen-renovation-mistakes"
            />
            <ActivityItem
              icon={<Search className="h-5 w-5" />}
              title="Research Request: Basement Waterproofing"
              description="Completed on April 2, 2025, before mildew could draft a lease"
              link="/research"
            />
            <ActivityItem
              icon={<FileText className="h-5 w-5" />}
              title="Material Tracking Reference"
              description="Saved last week for the next time tapware pricing starts acting supernatural"
              link="/tools/material-tracker"
            />
          </div>

          <h2 className="mb-4 mt-8 text-xl font-bold">Recommended For You</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <RecommendedCard
              title="Choosing Flooring That Survives Real Life"
              category="Flooring"
              image="/placeholder.svg?height=200&width=300"
              link="/blogs/flooring-selection-guide"
            />
            <RecommendedCard
              title="When Confidence Is Not a Qualification"
              category="DIY"
              image="/placeholder.svg?height=200&width=300"
              link="/blogs/diy-vs-professional"
            />
            <RecommendedCard
              title="Eco-Friendly Renovations That Still Feel Human"
              category="Sustainability"
              image="/placeholder.svg?height=200&width=300"
              link="/blogs/eco-friendly-renovations"
            />
          </div>
        </TabsContent>

        <TabsContent value="saved" className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Saved Items Will Live Here</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  This is where bookmarked guides, tool states, and reference material will eventually gather in one
                  organized place instead of existing across seventeen browser tabs like startled pigeons.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">
                  Preview
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Kitchen renovation guide"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-1 text-sm font-medium text-primary">Kitchen</div>
                <CardTitle className="text-lg">Modern Kitchen Renovation Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Saved because nobody wants to freestyle a kitchen layout and accidentally put the fridge in exile.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Open
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  Remove
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Bathroom remodeling checklist"
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-1 text-sm font-medium text-primary">Bathroom</div>
                <CardTitle className="text-lg">Bathroom Remodeling Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kept handy because bathrooms are small rooms with enormous capacity for expensive surprises.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  Open
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500">
                  Remove
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="research" className="pt-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Basement Waterproofing Options</CardTitle>
                    <CardDescription>Submitted on April 1, 2025</CardDescription>
                  </div>
                  <div className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">Completed</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Your question: "What are the best waterproofing options for a basement that occasionally gets water
                  seepage during heavy rains?"
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Completed on April 2, 2025, before mildew could draft a lease</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/research">
                  <Button variant="outline">View Research</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Deck Building Permits</CardTitle>
                    <CardDescription>Submitted on April 3, 2025</CardDescription>
                  </div>
                  <div className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">In Progress</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground">
                  Your question: "What permits do I need to build a deck in Portland, Oregon, and what's the typical
                  approval timeline?"
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Expected completion: April 4, 2025, pending the usual dance with local rules</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" disabled>
                  Research In Progress
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Kitchen Renovation</CardTitle>
                <CardDescription>Started on March 15, 2025, with hope and one very brave mood board</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-primary" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Recent Tasks</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <span>Finalize cabinet selection without starting a civil war</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <span>Schedule plumber consultation and ask the expensive questions early</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                        <span>Order countertops once everyone agrees what "warm white" means</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/design-tools">
                  <Button variant="outline">Open Workspace</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bathroom Remodel</CardTitle>
                <CardDescription>Started on April 1, 2025, which felt funny at the time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex justify-between text-sm">
                      <span>Progress</span>
                      <span>15%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-primary" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Recent Tasks</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full border border-green-500">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <span>Create design mood board that does not rely entirely on expensive brass</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                        <span>Research tile options without falling in love with the imported ones</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full border border-gray-300"></div>
                        <span>Get contractor quotes and emotionally prepare for line-item three</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/tools/material-tracker">
                  <Button variant="outline">Open Workspace</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ActivityItem({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}) {
  return (
    <Link href={link} className="block">
      <div className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-gray-50">
        <div className="mt-0.5 rounded-full bg-primary/10 p-2">{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}

function RecommendedCard({
  title,
  category,
  image,
  link,
}: {
  title: string
  category: string
  image: string
  link: string
}) {
  return (
    <Link href={link} className="group">
      <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-md">
        <div className="aspect-video overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
        <CardHeader className="pb-2">
          <div className="mb-1 text-sm font-medium text-primary">{category}</div>
          <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}

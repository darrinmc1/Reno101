import { blogPosts } from "@/lib/content"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FeaturedBlogs() {
  const blogs = blogPosts.slice(0, 3)

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,247,235,0.94),rgba(226,240,231,0.92))] p-8 shadow-sm">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Featured Reading</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Guides Worth Reading Before You Touch the Wall</h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Practical renovation advice with a little personality, so the content feels less like homework and more
                like competent backup.
              </p>
            </div>
            <Link href="/blogs">
              <Button variant="outline" className="rounded-full bg-white/75">
                Browse All Guides <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
                <Card className="h-full overflow-hidden rounded-[1.5rem] border-white/70 bg-white/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="mb-2 inline-flex w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/80">
                      {blog.category}
                    </div>
                    <CardTitle className="line-clamp-2 text-xl">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-3 text-muted-foreground">{blog.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="inline-flex items-center gap-1 font-medium text-primary">
                      Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

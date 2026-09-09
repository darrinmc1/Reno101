import { blogPosts } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"

export default function BlogsPage() {
  const categories = Array.from(new Set(blogPosts.map((blog) => blog.category)))

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="rounded-[2rem] border border-white/50 bg-[linear-gradient(135deg,rgba(255,244,226,0.95),rgba(224,240,230,0.9))] p-8 shadow-sm">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Guide Library</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Renovation Guides & Blogs</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Good renovation advice, smarter planning, and fewer moments where a blog post leaves you more confused than
            the original problem.
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search guides by topic or keyword..."
              className="rounded-2xl border-white/70 bg-white/85 pl-10"
              disabled
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-sm text-muted-foreground shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group">
            <Card className="h-full overflow-hidden rounded-[1.5rem] border-white/60 bg-white/80 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{blog.category}</span>
                  <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 text-lg leading-snug">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="line-clamp-3 text-sm text-muted-foreground">{blog.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-2">
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                  Read the full guide <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

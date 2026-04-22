import { blogPosts, getBlogPost } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Bookmark, Clock, Share2, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== post.slug).slice(0, 3)

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/blogs" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blogs
        </Link>
      </div>

      <article className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-primary">{post.category}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="mb-6 text-xl text-muted-foreground">{post.excerpt}</p>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={post.authorImage} alt={post.author} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="font-medium">{post.author}</div>
                <div className="text-sm text-muted-foreground">{post.authorTitle}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" aria-label="Save article">
                <Bookmark className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Share article">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mb-10 overflow-hidden rounded-lg">
          <img src={post.image} alt={post.title} className="h-auto w-full" />
        </div>

        <div className="prose prose-lg mb-12 max-w-none">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mb-12 flex items-center justify-between border-y py-6">
          <div className="text-sm text-muted-foreground">
            Tags: <span className="text-primary">{post.category}, Renovation Planning, Starter Content</span>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <ThumbsUp className="h-4 w-4" />
            Helpful
          </Button>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blogs/${relatedPost.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="line-clamp-2 text-lg">{relatedPost.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-8">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold">Build Out This Content System</h2>
            <p className="text-muted-foreground">
              The route now resolves real starter data. The next step is moving posts into a proper editor or CMS.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link href="/blogs">
              <Button variant="outline">More Articles</Button>
            </Link>
            <Link href="/research">
              <Button>Plan Content Workflow</Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

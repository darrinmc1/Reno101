import { blogPosts, getBlogPost } from "@/lib/content"
import HumorBreak from "@/components/humor-break"
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
          Back to All Guides
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
          <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="icon" aria-label="Save this article for later">
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Share this article">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mb-10 overflow-hidden rounded-lg">
          <img src={post.image} alt={post.title} className="h-auto w-full" />
        </div>

        <div className="prose prose-lg mb-12 max-w-none">
          {post.content.map((paragraph, i) => (
            <div key={paragraph}>
              <p>{paragraph}</p>
              {i === 1 && <HumorBreak tag="general" />}
            </div>
          ))}
        </div>

        <div className="

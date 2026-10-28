import { useParams, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import { blogPosts } from '@/content/blog/registry'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  const postModules = import.meta.glob('../content/blog/*.mdx')
  const modulePath = `../content/blog/${slug}.mdx`

  let PostContent: React.ComponentType | null = null
  if (postModules[modulePath]) {
    PostContent = lazy(postModules[modulePath] as any)
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <PageTransition>
      <SEO title={post.title} description={post.excerpt} type="article" />
      <article className="min-h-screen pt-32 pb-20">
        <div className="section-container max-w-3xl">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            <span>Back to All Articles</span>
          </Link>

          {/* Header */}
          <header className="mb-10 pb-8 border-b border-border">
            <div className="flex items-center gap-3 text-xs text-text-muted font-mono mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-text-primary mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="tech-badge">
                  <Tag size={11} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* MDX Body */}
          {PostContent ? (
            <Suspense
              fallback={
                <div className="space-y-4 py-8 animate-pulse">
                  <div className="h-4 bg-surface-2 rounded w-3/4" />
                  <div className="h-4 bg-surface-2 rounded w-full" />
                  <div className="h-4 bg-surface-2 rounded w-5/6" />
                </div>
              }
            >
              <div className="prose-portfolio">
                <PostContent />
              </div>
            </Suspense>
          ) : (
            <div className="glass-card p-6 text-sm text-text-secondary">
              <p className="mb-2">Article content is being drafted.</p>
              <p className="text-xs text-text-muted">Slug: {slug}</p>
            </div>
          )}
        </div>
      </article>
    </PageTransition>
  )
}

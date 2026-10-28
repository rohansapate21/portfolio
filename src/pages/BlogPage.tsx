import { Link } from 'react-router-dom'
import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { blogPosts } from '@/content/blog/registry'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const featuredPost = blogPosts.find((p) => p.featured)
  const regularPosts = blogPosts.filter((p) => p !== featuredPost)

  return (
    <PageTransition>
      <SEO
        title="Technical Blog"
        description="Articles and deep dives on software architecture, machine learning, and developer productivity."
      />

      <div className="pt-32 pb-20">
        <div className="section-container">
          <SectionHeader
            label="Writings"
            title={
              <>
                Thoughts, Tutorials & <span className="gradient-text">Learnings</span>
              </>
            }
            subtitle="Deep-dives into systems engineering, machine learning pipelines, and technical problem-solving."
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Featured Post */}
            {featuredPost && (
              <FadeIn className="glass-card p-6 sm:p-8 border-primary/30">
                <div className="flex items-center gap-3 text-xs text-text-muted mb-3 font-mono">
                  <span className="text-primary font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {featuredPost.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <Link to={`/blog/${featuredPost.slug}`}>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-primary hover:text-primary transition-colors mb-3">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="text-xs font-semibold text-primary hover:text-primary-light inline-flex items-center gap-1.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            )}

            {/* Regular Post List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularPosts.map((post, idx) => (
                <FadeIn key={post.slug} delay={idx * 0.1} className="glass-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-text-muted mb-2 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-base font-bold text-text-primary hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tech-badge text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-xs font-semibold text-primary inline-flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { projectsData } from '@/content/data'
import { ArrowUpRight, Star, Code2 } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="Featured Work"
          title={
            <>
              Engineering <span className="gradient-text">Real-World Solutions</span>
            </>
          }
          subtitle="Explore some of the production web applications and machine learning prototypes I've engineered."
        />

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project, idx) => (
            <FadeIn
              key={project.id}
              delay={idx * 0.1}
              className={`glass-card overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-primary/40 ${
                project.featured ? 'ring-1 ring-primary/30 shadow-glow-sm' : ''
              }`}
            >
              <div>
                {/* Thumbnail Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-surface-2 border-b border-slate-200/80 dark:border-border/60">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.parentElement?.querySelector('.project-fallback')
                        if (fallback) (fallback as HTMLElement).style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div
                    className={`project-fallback w-full h-full ${
                      project.thumbnail ? 'hidden' : 'flex'
                    } flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-surface-2 to-surface-3/50 p-4 text-center`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-surface-2 shadow-sm flex items-center justify-center mb-2 border border-border/50">
                      <Code2 size={24} className="text-primary" />
                    </div>
                    <span className="text-[11px] font-mono text-text-muted">{project.category}</span>
                  </div>

                  {/* Badges Over Thumbnail */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                    {project.featured ? (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 dark:text-accent-orange bg-amber-50/95 dark:bg-surface-2/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-300/80 dark:border-accent-orange/30 shadow-sm">
                        <Star size={11} className="fill-current" />
                        <span>Featured</span>
                      </span>
                    ) : (
                      <span />
                    )}

                    <span className="text-[10px] font-mono font-medium text-slate-700 dark:text-text-primary bg-white/95 dark:bg-surface-2/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-slate-200 dark:border-border/60 shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-xs text-slate-500 dark:text-text-muted font-mono mb-2 font-medium">
                    {project.timeline}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        <SkillIcon name={tech} size={12} />
                        <span>{tech}</span>
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="tech-badge text-[11px] font-semibold text-slate-600 dark:text-text-muted">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-border">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-xs font-bold text-primary hover:text-primary-light inline-flex items-center gap-1 group/btn"
                  >
                    <span>{project.featured ? 'View Case Study' : 'Details'}</span>
                    <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 dark:text-text-muted hover:text-slate-900 dark:hover:text-text-primary hover:bg-slate-100 dark:hover:bg-surface-2 transition-all"
                    aria-label="View Source Code"
                  >
                    <SiGithub size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View more on GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rohansapate21"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <SiGithub size={16} />
            <span>More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

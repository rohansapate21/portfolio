import { useParams, Link } from 'react-router-dom'
import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import { projectsData } from '@/content/data'
import { ArrowLeft, ExternalLink, CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react'
import { SiGithub } from 'react-icons/si'

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = projectsData.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link to="/#projects" className="btn-primary">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <PageTransition>
      <SEO title={project.title} description={project.shortDesc} />
      <div className="pt-32 pb-20">
        <div className="section-container max-w-4xl">
          {/* Back link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>

          {/* Hero */}
          <div className="glass-card overflow-hidden mb-10">
            {project.thumbnail && (
              <div className="w-full h-64 sm:h-80 overflow-hidden bg-slate-100 dark:bg-surface-2 border-b border-border/60">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.display = 'none'
                    }
                  }}
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs font-mono text-text-muted">
                <span>{project.category}</span>
                <span>{project.timeline}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4 font-display">
                {project.title}
              </h1>

              <p className="text-base text-text-secondary leading-relaxed mb-6">
                {project.longDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs"
                >
                  <SiGithub size={15} />
                  <span>View Source Code</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-xs"
                  >
                    <ExternalLink size={15} />
                    <span>Live Preview</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Problem, Solution, Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card p-6 border-l-2 border-accent-orange">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent-orange mb-2">
                Problem
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="glass-card p-6 border-l-2 border-primary">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                Solution
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>
            <div className="glass-card p-6 border-l-2 border-accent-green">
              <h3 className="text-xs font-bold uppercase tracking-wider text-accent-green mb-2">
                Impact
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {project.impact}
              </p>
            </div>
          </div>

          {/* Highlights & Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
                <CheckCircle size={16} className="text-accent-green" />
                <span>Key Highlights</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-text-secondary">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
                <AlertTriangle size={16} className="text-accent-orange" />
                <span>Engineering Challenges</span>
              </h3>
              <ul className="space-y-2.5 text-xs text-text-secondary">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent-orange mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

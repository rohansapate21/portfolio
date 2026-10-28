import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { experienceData, ExperienceType } from '@/content/data'
import { Briefcase, Trophy, School, GitBranch } from 'lucide-react'

const typeIconMap = {
  freelance: Briefcase,
  hackathon: Trophy,
  college: School,
  opensource: GitBranch,
}

const typeColorMap: Record<ExperienceType, string> = {
  freelance: 'bg-primary border-primary/30 text-primary',
  hackathon: 'bg-accent-orange border-accent-orange/30 text-accent-orange',
  college: 'bg-accent-green border-accent-green/30 text-accent-green',
  opensource: 'bg-accent-purple border-accent-purple/30 text-accent-purple',
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="Journey"
          title={
            <>
              Experience & <span className="gradient-text">Milestones</span>
            </>
          }
          subtitle="A timeline of freelance client deliverables, hackathon competitions, and engineering work."
        />

        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l border-border space-y-8">
          {experienceData.map((item, idx) => {
            const Icon = typeIconMap[item.type] || Briefcase
            const dotColorClass = typeColorMap[item.type]

            return (
              <FadeIn key={item.id} delay={idx * 0.1} className="relative group">
                {/* Timeline node */}
                <span
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-surface-2 ${dotColorClass}`}
                >
                  <span className="w-2 h-2 rounded-full bg-current" />
                </span>

                {/* Content Card */}
                <div className="glass-card p-6 transition-all group-hover:border-primary/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-text-primary">
                        {item.role}
                      </h3>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-surface-2 text-text-muted border border-border">
                        {item.type}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-secondary">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-text-muted mb-3">
                    {item.organisation} · {item.location}
                  </p>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="tech-badge text-[11px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

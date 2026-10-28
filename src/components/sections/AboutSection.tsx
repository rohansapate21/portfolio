import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { aboutData } from '@/content/data'
import { MapPin, GraduationCap, Sparkles, BookOpen, User, Layers, Brain, Database, Cpu, GitBranch } from 'lucide-react'

const specIconMap: Record<string, { icon: any; color: string; bg: string }> = {
  'Full Stack Development': {
    icon: Layers,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50/90 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20',
  },
  'AI/ML Engineering': {
    icon: Brain,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50/90 dark:bg-purple-500/10 border-purple-200 dark:border-purple-500/20',
  },
  'Data Processing': {
    icon: Database,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50/90 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20',
  },
  'System Design': {
    icon: Cpu,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50/90 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20',
  },
  'Open Source': {
    icon: GitBranch,
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50/90 dark:bg-teal-500/10 border-teal-200 dark:border-teal-500/20',
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="About Me"
          title={
            <>
              Driven by <span className="gradient-text">Curiosity</span> & Innovation
            </>
          }
          subtitle="A glimpse into my background, focus areas, and what keeps me building every day."
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar / Bio Card */}
          <FadeIn className="md:col-span-1 glass-card p-6 flex flex-col items-center text-center justify-center">
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-1 mb-5 shadow-glow-sm">
              <div className="w-full h-full bg-white dark:bg-surface rounded-[14px] flex items-center justify-center overflow-hidden relative">
                {aboutData.avatar ? (
                  <img
                    src={aboutData.avatar}
                    alt="Rohan Sapate"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback')
                      if (fallback) (fallback as HTMLElement).style.display = 'flex'
                    }}
                  />
                ) : null}
                <span
                  className={`text-3xl font-bold font-display text-primary avatar-fallback ${
                    aboutData.avatar ? 'hidden' : 'flex'
                  }`}
                >
                  RS
                </span>
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-text-primary mb-1">Rohan Sapate</h3>
            <p className="text-xs text-blue-600 dark:text-secondary font-mono mb-4 font-semibold"></p>
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-text-muted bg-slate-100 dark:bg-surface-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-border font-medium">
              <MapPin size={14} className="text-primary shrink-0" />
              <span>{aboutData.location}</span>
            </div>
          </FadeIn>

          {/* Headline & Career Objective */}
          <FadeIn delay={0.1} className="md:col-span-2 glass-card p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                <User size={14} />
                <span>Biography</span>
              </div>
              <p className="text-slate-700 dark:text-text-secondary text-sm leading-relaxed mb-4">
                {aboutData.bio}
              </p>
              <blockquote className="border-l-3 border-primary pl-4 py-1 italic text-xs text-slate-700 dark:text-text-muted bg-primary/5 dark:bg-primary/5 rounded-r">
                "{aboutData.careerObjective}"
              </blockquote>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-border">
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-text-primary mb-2 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-primary" />
                  <span>Currently Learning</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-text-secondary">
                  {aboutData.currentlyLearning.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-text-primary mb-2 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-primary" />
                  <span>Specializations</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {aboutData.specializations.map((spec, idx) => {
                    const meta = specIconMap[spec] || {
                      icon: Sparkles,
                      color: 'text-primary',
                      bg: 'bg-primary/10 border-primary/20',
                    }
                    const Icon = meta.icon
                    return (
                      <span
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${meta.bg} text-slate-800 dark:text-text-primary shadow-xs transition-transform hover:scale-105`}
                      >
                        <Icon size={12} className={meta.color} />
                        <span>{spec}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Education Timeline */}
          <FadeIn delay={0.2} className="md:col-span-3 glass-card p-6">
            <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap size={16} />
              <span>Education</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-primary/50 pl-4 py-1 relative">
                  <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-mono text-blue-600 dark:text-secondary font-semibold">{edu.duration}</span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-text-primary mt-1">{edu.degree}</h4>
                  <p className="text-xs text-slate-700 dark:text-text-secondary mt-0.5">{edu.institution}</p>
                  <span className="inline-block mt-2 text-[11px] font-semibold bg-slate-100 dark:bg-surface-2 text-slate-700 dark:text-text-muted px-2.5 py-0.5 rounded border border-slate-200 dark:border-border">
                    Grade: {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

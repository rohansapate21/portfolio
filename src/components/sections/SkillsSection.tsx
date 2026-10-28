import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { SkillIcon } from '@/components/ui/SkillIcon'
import { skillsDataV2, SkillTier } from '@/content/data'

function TierDots({ tier }: { tier: SkillTier }) {
  const filledMap = { expert: 3, proficient: 2, learning: 1 }
  const filled = filledMap[tier]

  return (
    <div className="flex gap-1 items-center shrink-0" title={`Proficiency: ${tier}`}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i <= filled
              ? 'bg-primary shadow-xs'
              : 'bg-slate-300 dark:bg-surface-3 border border-slate-400/40 dark:border-transparent'
          }`}
        />
      ))}
    </div>
  )
}

export default function SkillsSection() {
  const categories = Object.keys(skillsDataV2)
  const [activeCategory, setActiveCategory] = useState(categories[0])

  const currentCategoryData = skillsDataV2[activeCategory]

  return (
    <section id="skills" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="Skills & Tools"
          title={
            <>
              Technical <span className="gradient-text">Proficiencies</span>
            </>
          }
          subtitle="A categorized overview of the technologies, frameworks, and tools I use to build scalable products."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((catKey) => {
            const cat = skillsDataV2[catKey]
            const isActive = activeCategory === catKey
            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary text-white shadow-glow-sm'
                    : 'bg-surface-2 text-slate-700 dark:text-text-secondary border border-slate-300/80 dark:border-border hover:border-primary/50 hover:text-slate-900 dark:hover:text-text-primary'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <FadeIn key={activeCategory} duration={0.3} className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {currentCategoryData.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50/90 dark:bg-surface-2/70 border border-slate-200 dark:border-border/70 hover:border-primary/50 hover:bg-slate-100/90 dark:hover:bg-surface-2 transition-all group shadow-xs"
              >
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white dark:bg-surface-3/80 border border-slate-200 dark:border-white/5 group-hover:scale-105 transition-transform shrink-0 shadow-xs">
                    <SkillIcon name={skill.name} iconKey={skill.iconKey} size={18} />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-text-primary group-hover:text-primary transition-colors truncate">
                    {skill.name}
                  </span>
                </div>
                <TierDots tier={skill.tier} />
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-border flex items-center justify-center gap-6 text-xs text-slate-600 dark:text-text-muted font-medium">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <span className="text-slate-700 dark:text-text-secondary">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-surface-3 border border-slate-400/40 dark:border-transparent" />
              </div>
              <span className="text-slate-700 dark:text-text-secondary">Proficient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-surface-3 border border-slate-400/40 dark:border-transparent" />
                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-surface-3 border border-slate-400/40 dark:border-transparent" />
              </div>
              <span className="text-slate-700 dark:text-text-secondary">Learning</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

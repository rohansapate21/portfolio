import { useState, useEffect } from 'react'
import CountUp from '@/components/ui/CountUp'
import { useInView } from 'react-intersection-observer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { achievementsData } from '@/content/data'
import { Trophy, Code2 } from 'lucide-react'

function ProgressRing({ value, max, color }: { value: number; max: number; color: string }) {
  const r = 36
  const circumference = 2 * Math.PI * r
  const dashOffset = circumference - (Math.min(value, max) / max) * circumference

  return (
    <svg width="88" height="88" className="-rotate-90">
      <circle cx="44" cy="44" r={r} fill="none" stroke="var(--color-surface-3)" strokeWidth="6" />
      <circle
        cx="44"
        cy="44"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1.5s ease' }}
      />
    </svg>
  )
}

export default function AchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [lcStats, setLcStats] = useState<{ total: number; easy: number; medium: number; hard: number } | null>(null)

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/rohansapate')
      .then((r) => r.json())
      .then((d) => {
        if (d && d.status === 'success') {
          setLcStats({
            total: d.totalSolved,
            easy: d.easySolved,
            medium: d.mediumSolved,
            hard: d.hardSolved,
          })
        }
      })
      .catch(() => {
        // Fallback gracefully to default values if API fails
      })
  }, [])

  return (
    <section id="achievements" className="py-20 relative">
      <div className="section-container" ref={ref}>
        <SectionHeader
          label="Track Record"
          title={
            <>
              Key <span className="gradient-text">Achievements</span>
            </>
          }
          subtitle="Quantifiable milestones across problem solving, academics, and competitive events."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((item, idx) => (
            <FadeIn
              key={item.id}
              delay={idx * 0.1}
              className="glass-card p-6 flex flex-col justify-between"
              style={{ borderLeft: `3px solid ${item.color}` }}
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2">
                  {item.category}
                </span>
                <div className="text-3xl font-extrabold font-display text-text-primary mb-1">
                  {inView ? (
                    <CountUp
                      end={item.id === 'leetcode' && lcStats ? lcStats.total : item.value}
                      duration={2}
                      decimals={item.decimals || 0}
                    />
                  ) : (
                    0
                  )}
                  <span style={{ color: item.color }}>{item.suffix}</span>
                </div>
                <h4 className="text-xs font-semibold text-text-primary mb-2">{item.label}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{item.description}</p>
              </div>

              {item.id === 'leetcode' && (
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                  <div className="text-[11px] font-mono text-text-muted space-y-0.5">
                    <div>Easy: {lcStats ? lcStats.easy : '150+'}</div>
                    <div>Med: {lcStats ? lcStats.medium : '200+'}</div>
                    <div>Hard: {lcStats ? lcStats.hard : '50+'}</div>
                  </div>
                  <ProgressRing
                    value={lcStats ? lcStats.total : 400}
                    max={500}
                    color={item.color}
                  />
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

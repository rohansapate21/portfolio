import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { testimonialsData } from '@/content/data'
import { Quote, UserCheck } from 'lucide-react'

export default function TestimonialsSection() {
  if (!testimonialsData || testimonialsData.length === 0) return null

  return (
    <section id="testimonials" className="py-20 relative bg-surface-2/20">
      <div className="section-container">
        <SectionHeader
          label="Endorsements"
          title={
            <>
              What People <span className="gradient-text">Say</span>
            </>
          }
          subtitle="Feedback from clients, project partners, and mentors I've collaborated with."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.1} className="glass-card p-6 flex flex-col justify-between">
              <div>
                <Quote size={24} className="text-primary/40 mb-3" />
                <p className="text-sm text-text-secondary italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-text-primary">{item.author}</h4>
                  <p className="text-[11px] text-text-muted">
                    {item.role}, {item.company}
                  </p>
                </div>
                <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-2 text-text-muted uppercase border border-border">
                  {item.source}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

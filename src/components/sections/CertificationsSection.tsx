import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { certificationsData } from '@/content/data'
import { Award, ExternalLink } from 'lucide-react'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="Credentials"
          title={
            <>
              Certifications & <span className="gradient-text">Specializations</span>
            </>
          }
          subtitle="Formal industry certifications in AI/ML and modern web development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <FadeIn key={cert.id} delay={idx * 0.1} className="glass-card p-6 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                    <Award size={20} />
                  </span>
                  <span className="text-xs font-mono text-text-muted">{cert.year}</span>
                </div>

                <h3 className="text-base font-bold text-text-primary mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-secondary font-medium mb-4">
                  {cert.issuer} ({cert.platform})
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="tech-badge text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="font-mono text-text-muted text-[11px]">
                  ID: {cert.credentialId}
                </span>
                {cert.verifyUrl && cert.verifyUrl !== '#' && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light inline-flex items-center gap-1 font-medium"
                  >
                    <span>Verify</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

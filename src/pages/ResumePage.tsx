import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import { siteConfig, aboutData, experienceData, projectsData, skillsDataV2, certificationsData } from '@/content/data'
import { FileDown, Printer, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <PageTransition>
      <SEO
        title="Resume"
        description="Comprehensive resume and curriculum vitae of Rohan Sapate."
      />

      <div className="pt-32 pb-20">
        <div className="section-container max-w-4xl">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8 print:hidden">
            <div>
              <h1 className="text-2xl font-bold font-display text-text-primary">Curriculum Vitae</h1>
              <p className="text-xs text-text-muted">Web-based printable resume</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handlePrint} className="btn-outline text-xs !py-2 !px-3 cursor-pointer">
                <Printer size={15} />
                <span>Print</span>
              </button>
              <a
                href="/resume/ROHANSAPATE-9370951272.pdf"
                download
                className="btn-primary text-xs !py-2 !px-3"
              >
                <FileDown size={15} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Resume Container */}
          <div className="glass-card p-8 sm:p-12 print:shadow-none print:border-none print:p-0">
            {/* Header */}
            <div className="border-b border-border pb-6 mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-text-primary font-display">{siteConfig.name}</h2>
                <p className="text-sm text-primary font-medium mt-1">{siteConfig.title}</p>
              </div>
              <div className="text-xs text-text-secondary space-y-1">
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <Mail size={13} />
                  <span>{siteConfig.email}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={13} />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                Professional Summary
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {aboutData.bio}
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {aboutData.education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-text-primary">{edu.degree}</h4>
                      <p className="text-[11px] text-text-secondary">{edu.institution}</p>
                    </div>
                    <span className="text-[11px] font-mono text-text-muted">{edu.duration} | {edu.grade}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Experience
              </h3>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h4 className="text-xs font-bold text-text-primary">{exp.role}</h4>
                      <span className="text-[11px] font-mono text-text-muted">{exp.duration}</span>
                    </div>
                    <p className="text-[11px] text-secondary font-medium mb-2">{exp.organisation} · {exp.location}</p>
                    <p className="text-xs text-text-secondary leading-relaxed mb-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="tech-badge text-[10px]">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section className="mb-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
                Featured Projects
              </h3>
              <div className="space-y-4">
                {projectsData.map((p) => (
                  <div key={p.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                      <h4 className="text-xs font-bold text-text-primary">{p.title}</h4>
                      <span className="text-[11px] font-mono text-text-muted">{p.timeline}</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed mb-2">{p.shortDesc}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.map((tech) => (
                        <span key={tech} className="tech-badge text-[10px]">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                Certifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificationsData.map((c) => (
                  <div key={c.id} className="text-xs text-text-secondary">
                    <span className="font-semibold text-text-primary">{c.title}</span> — {c.issuer} ({c.year})
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

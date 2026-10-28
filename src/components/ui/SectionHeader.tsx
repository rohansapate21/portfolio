import { FadeIn } from './FadeIn'

interface SectionHeaderProps {
  label: string
  title: React.ReactNode
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <FadeIn className={centered ? 'text-center mb-14' : 'mb-14'}>
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      >
        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
          {label}
        </span>
      </div>
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </FadeIn>
  )
}

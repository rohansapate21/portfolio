import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, FileDown, Code2, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { heroData, siteConfig } from '@/content/data'

// Pre-computed particles outside component to prevent re-render re-calculation
const SEEDED_PARTICLES = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: `${(i * 19) % 100}%`,
  top: `${(i * 23) % 100}%`,
  size: (i % 3) + 2,
  duration: 4 + (i % 5),
  delay: (i % 4) * 0.5,
}))

export default function HeroSection() {
  const typeAnimationSequence = heroData.typingRoles.flatMap((role) => [role, 2000])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center hero-grid overflow-hidden pt-24 pb-12">
      {/* Background ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {SEEDED_PARTICLES.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{ y: [-10, 10, -10], opacity: [0.15, 0.45, 0.15] }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(96, 165, 250, 0.4)',
              filter: 'blur(1px)',
            }}
          />
        ))}
        {/* Glow gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      </div>

      <div className="section-container relative z-10 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-2/80 border border-border-light text-xs font-medium text-text-secondary mb-6 backdrop-blur-md"
        >
          <span className="status-dot" />
          <span>{heroData.availabilityBadge}</span>
        </motion.div>

        {/* Greeting & Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4"
        >
          <p className="text-text-secondary text-lg mb-2 font-mono">{heroData.greeting}</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display">
            {heroData.name}{' '}
            <span className="gradient-text">{heroData.lastName}</span>
          </h1>
        </motion.div>

        {/* Typing Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-mono text-secondary h-10 mb-6 flex items-center justify-center gap-2"
        >
          <span className="text-text-muted">&lt;</span>
          <TypeAnimation
            sequence={typeAnimationSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-secondary"
          />
          <span className="text-text-muted">/&gt;</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="section-subtitle max-w-xl mx-auto mb-8"
        >
          {heroData.tagline}
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="/resume/ROHANSAPATE-9370951272.pdf"
            download
            className="btn-primary"
          >
            <FileDown size={16} />
            <span>Download Resume</span>
          </a>
          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-outline cursor-pointer"
          >
            <Sparkles size={16} className="text-primary" />
            <span>View Projects</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 text-text-secondary mb-12"
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-2/60 border border-border hover:text-primary hover:border-primary/40 transition-all"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-2/60 border border-border hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={siteConfig.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-2/60 border border-border hover:text-primary hover:border-primary/40 transition-all"
            aria-label="LeetCode"
          >
            <Code2 size={18} />
          </a>
        </motion.div>

        {/* Scroll down indicator */}
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex flex-col items-center text-xs text-text-muted hover:text-primary transition-colors cursor-pointer group"
          aria-label="Scroll to About section"
        >
          <span className="mb-1 font-mono tracking-wider">SCROLL</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  )
}

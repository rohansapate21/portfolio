import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, FileDown, Command } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useActiveSection } from '@/hooks/useActiveSection'

const NAV_LINKS = [
  { label: 'Home', href: '/#home', sectionId: 'home' },
  { label: 'About', href: '/#about', sectionId: 'about' },
  { label: 'Skills', href: '/#skills', sectionId: 'skills' },
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Achievements', href: '/#certifications', sectionId: 'certifications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact', sectionId: 'contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const sectionIds = ['home', 'about', 'skills', 'projects', 'certifications', 'contact']
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '')
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-md border-b border-border shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight flex items-center gap-1 group">
          <span className="text-text-primary group-hover:text-primary transition-colors">RS</span>
          <span className="text-primary font-mono">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-surface-2/40 px-3 py-1.5 rounded-full border border-border-light/30">
          {NAV_LINKS.map((link) => {
            const isSectionActive =
              location.pathname === '/' &&
              link.sectionId &&
              activeSection === link.sectionId
            const isRouteActive = location.pathname === link.href

            const isActive = isSectionActive || isRouteActive

            return (
              <div key={link.label} className="relative">
                {link.href.startsWith('/#') ? (
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors cursor-pointer ${
                      isActive
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      isActive
                        ? 'text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-primary/10 border border-primary/25 rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </div>
            )
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume/ROHANSAPATE-9370951272.pdf"
            download
            className="btn-primary text-xs !py-2 !px-3.5 flex items-center gap-1.5"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-2 border border-border text-text-secondary"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface-2/95 border-b border-border backdrop-blur-lg px-6 py-4 flex flex-col gap-2"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.href.startsWith('/#') ? (
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left py-2 text-sm text-text-secondary hover:text-primary font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-text-secondary hover:text-primary font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <a
                href="/resume/ROHANSAPATE-9370951272.pdf"
                download
                className="btn-primary text-xs w-full justify-center"
              >
                <FileDown size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { Link } from 'react-router-dom'
import { Code2, Heart } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { siteConfig } from '@/content/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface/50 backdrop-blur-sm mt-20">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold tracking-tight inline-flex items-center gap-1 mb-3">
              <span className="text-text-primary">RS</span>
              <span className="text-primary font-mono">.</span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm mb-4">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 text-text-muted">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-2 hover:text-primary hover:bg-surface-3 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-2 hover:text-primary hover:bg-surface-3 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={siteConfig.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-surface-2 hover:text-primary hover:bg-surface-3 transition-colors"
                aria-label="LeetCode"
              >
                <Code2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/#projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/#skills" className="hover:text-primary transition-colors">Skills</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/resume" className="hover:text-primary transition-colors">Resume</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm text-text-secondary mb-2">{siteConfig.email}</p>
            <p className="text-sm text-text-muted">Pune, India 🇮🇳</p>
            <div className="mt-4">
              <span className="status-dot mr-2 inline-block"></span>
              <span className="text-xs text-text-secondary">Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19 + Vite + Tailwind CSS v4
          </p>
        </div>
      </div>
    </footer>
  )
}

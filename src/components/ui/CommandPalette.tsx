import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import { Search, Home, FileText, FolderGit2, FileCode2, Sun, Moon, ExternalLink, X } from 'lucide-react'

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName))) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [])

  if (!open) return null

  const actions = [
    { id: 'home', label: 'Go to Home', icon: Home, run: () => navigate('/') },
    { id: 'projects', label: 'View Projects', icon: FolderGit2, run: () => { navigate('/'); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100) } },
    { id: 'blog', label: 'Read Blog', icon: FileText, run: () => navigate('/blog') },
    { id: 'resume', label: 'View Resume', icon: FileCode2, run: () => navigate('/resume') },
    { id: 'theme', label: `Toggle Theme (${theme === 'dark' ? 'Light' : 'Dark'})`, icon: theme === 'dark' ? Sun : Moon, run: toggleTheme },
    { id: 'github', label: 'Open GitHub Profile', icon: ExternalLink, run: () => window.open('https://github.com/rohansapate', '_blank') },
  ]

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg bg-surface-2 border border-border rounded-xl shadow-card overflow-hidden">
        <div className="flex items-center px-4 border-b border-border">
          <Search size={18} className="text-text-muted mr-3" />
          <input
            type="text"
            placeholder="Type a command or search... (Esc to close)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full py-3 bg-transparent text-text-primary text-sm focus:outline-none"
          />
          <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text-primary">
            <X size={16} />
          </button>
        </div>
        <div className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="text-xs text-text-muted py-4 text-center">No commands found</p>
          ) : (
            filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.run()
                  setOpen(false)
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-surface-3 transition-colors text-left"
              >
                <item.icon size={16} className="text-primary" />
                <span>{item.label}</span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

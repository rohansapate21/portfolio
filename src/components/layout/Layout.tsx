import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { CursorSpotlight } from '@/components/ui/CursorSpotlight'
import { ReadingProgress } from '@/components/ui/ReadingProgress'
import { BackToTop } from '@/components/ui/BackToTop'
import { CommandPalette } from '@/components/ui/CommandPalette'

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-text-primary selection:bg-primary/30">
      <CursorSpotlight />
      <ReadingProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <CommandPalette />
    </div>
  )
}

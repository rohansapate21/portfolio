import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PageTransition } from '@/components/ui/PageTransition'
import { SEO } from '@/components/ui/SEO'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <PageTransition>
      <SEO title="404 — Page Not Found" />
      <div className="min-h-screen flex items-center justify-center pt-20 pb-12">
        <div className="section-container text-center max-w-md">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-8xl font-black font-display gradient-text inline-block mb-4">
              404
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary mb-2">Page Not Found</h1>
          <p className="text-xs text-text-secondary mb-8 leading-relaxed">
            The page you are looking for doesn't exist or has been moved to another URL.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link to="/" className="btn-primary text-xs">
              <Home size={14} />
              <span>Return Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline text-xs cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

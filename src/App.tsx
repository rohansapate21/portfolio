import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'

// Lazy-loaded pages for code splitting
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const ProjectPage = lazy(() => import('@/pages/ProjectPage'))
const ResumePage = lazy(() => import('@/pages/ResumePage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function PageSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <BlogPostPage />
              </Suspense>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <ProjectPage />
              </Suspense>
            }
          />
          <Route
            path="/resume"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <ResumePage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageSkeleton />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

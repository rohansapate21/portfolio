import { useState, useEffect } from 'react'

export function usePrefersReducedMotion() {
  const [pref, setPref] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPref(mq.matches)
    const handler = (e: MediaQueryListEvent) => setPref(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return pref
}

import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: Direction
  className?: string
  style?: React.CSSProperties
  once?: boolean
}

const offsetMap: Record<Direction, object> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: 28 },
  right: { x: -28 },
  none: {},
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className,
  style,
  once = true,
}: FadeInProps) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsetMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

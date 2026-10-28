import { useState, useEffect } from 'react'

export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [visible])

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      aria-hidden="true"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.04), transparent 80%)`,
      }}
    />
  )
}

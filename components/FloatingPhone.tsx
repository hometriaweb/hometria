'use client'

import { Phone } from 'lucide-react'
import { useState } from 'react'

export default function FloatingPhone() {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="tel:+48889000829"
      aria-label="Zadzwoń do nas: +48 889 000 829"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-[200] flex items-center gap-0 rounded-full shadow-2xl shadow-black/30 transition-all duration-300 ease-out overflow-hidden hover:scale-105 active:scale-95"
      style={{
        background: 'linear-gradient(135deg, #FF1493 0%, #d4006b 100%)',
        maxWidth: hovered ? '280px' : '56px',
      }}
    >
      {/* Icon */}
      <span className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
        <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
      </span>

      {/* Number — slides in */}
      <span
        className="text-white font-bold text-sm pr-5 whitespace-nowrap transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0 }}
      >
        +48 889 000 829
      </span>
    </a>
  )
}

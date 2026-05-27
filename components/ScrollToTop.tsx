'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Next.js App Router sometimes struggles with scrolling to top when using overflow-x-hidden
    // This forces the window to scroll to top on every route change
    window.scrollTo(0, 0)
  }, [pathname])
  
  return null
}

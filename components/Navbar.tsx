'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Strona główna' },
    { href: '/oferty', label: 'Oferty' },
    { href: '/o-nas', label: 'O nas' },
    { href: '/uslugi', label: 'Usługi' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-2xl font-black tracking-tight text-gray-900">
                HOME<span className="text-[#E6007E]">TRIA</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Główna nawigacja">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-[#E6007E] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#E6007E] transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Phone CTA */}
            <a
              href="tel:+48123456789"
              id="navbar-phone"
              className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#E6007E] transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-[#E6007E]" strokeWidth={2.5} />
              +48 123 456 789
            </a>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#E6007E] hover:bg-pink-50 transition-colors"
              aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-white pt-24 px-6 flex flex-col lg:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-2xl font-bold transition-colors ${
                    pathname === link.href ? 'text-[#E6007E]' : 'text-gray-900 hover:text-[#E6007E]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pb-12 flex flex-col items-center gap-6">
              <div className="w-16 h-px bg-gray-200" />
              <a
                href="tel:+48123456789"
                className="inline-flex items-center gap-3 text-lg font-bold text-gray-900"
              >
                <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#E6007E]" strokeWidth={2.5} />
                </div>
                +48 123 456 789
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

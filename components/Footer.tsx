import Link from 'next/link'

// Inline brand SVG icons — lucide-react v1 does not ship social brand icons
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
function IconYoutube() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" />
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/oferty', label: 'Oferty' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/kontakt', label: 'Kontakt' },
]

const legalLinks = [
  { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { href: '/polityka-cookies', label: 'Polityka cookies' },
  { href: '/regulamin', label: 'Regulamin' },
]

const socials = [
  { Icon: IconFacebook, href: 'https://facebook.com', label: 'Facebook' },
  { Icon: IconInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: IconLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { Icon: IconYoutube, href: 'https://youtube.com', label: 'YouTube' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white">
                HOME<span className="text-[#E6007E]">TRIA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Nowoczesne biuro nieruchomości specjalizujące się w kompleksowej
              obsłudze sprzedaży, zakupu oraz inwestycji na rynku nieruchomości.
            </p>
            <div className="text-xs space-y-1">
              <p className="font-medium text-gray-300">HOMETRIA</p>
              <p>ul. Grunwaldzka 10, pawilon D3</p>
              <p>82-200 Malbork</p>
              <a href="tel:+48889000829" className="block hover:text-[#E6007E] transition-colors">
                +48 889 000 829
              </a>
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#E6007E] hover:text-white transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Nawigacja</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#E6007E] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Informacje prawne</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#E6007E] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            © {year} HOMETRIA sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-gray-600">
            Licencja pośrednika nieruchomości nr 00000
          </p>
        </div>
      </div>
    </footer>
  )
}

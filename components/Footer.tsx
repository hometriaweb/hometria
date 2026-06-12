import Image from 'next/image'
import Link from 'next/link'



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


export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Hometria – Biuro Nieruchomości"
                width={140}
                height={74}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Nowoczesne biuro nieruchomości specjalizujące się w kompleksowej
              obsłudze sprzedaży, zakupu oraz inwestycji na rynku nieruchomości.
            </p>
            <div className="text-xs space-y-1">
              <p className="font-medium text-gray-300">HOMETRIA</p>
              <p>ul. Grunwaldzka 10, pawilon D3</p>
              <p>82-200 Malbork</p>
              <a href="tel:+48889000829" className="block hover:text-[#FF1493] transition-colors">
                +48 889 000 829
              </a>
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
                    className="text-sm hover:text-[#FF1493] transition-colors duration-200"
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
                    className="text-sm hover:text-[#FF1493] transition-colors duration-200"
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
            Design + deploy by{' '}
            <a href="https://bartlomiejcwiklak.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              bartlomiejcwiklak.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

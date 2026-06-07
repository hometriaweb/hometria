import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kontakt – HOMETRIA',
  description:
    'Skontaktuj się z biurem nieruchomości Hometria w Malborku. Zadzwoń, napisz email lub odwiedź nas osobiście przy ul. Grunwaldzkiej 10.',
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Zadzwoń do nas',
    value: '+48 889 000 829',
    href: 'tel:+48889000829',
  },
  {
    icon: Mail,
    label: 'Napisz e-mail',
    value: 'kontakt@hometria.pl',
    href: 'mailto:kontakt@hometria.pl',
  },
  {
    icon: MapPin,
    label: 'Odwiedź biuro',
    value: 'ul. Grunwaldzka 10, pawilon D3\n82-200 Malbork',
    href: 'https://maps.google.com/?q=Grunwaldzka+10+Malbork',
  },
  {
    icon: Clock,
    label: 'Godziny pracy',
    value: 'Pon–Pt: 9:00–18:00\nSobota: 10:00–14:00',
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 bg-white min-h-screen">
        {/* ── Header ────────────────────────────────────────────── */}
        <section className="bg-pink-50/50 pt-16 pb-24 border-b border-pink-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Porozmawiajmy o nieruchomościach
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Niezależnie czy chcesz sprzedać dom, czy dopiero badasz rynek – jesteśmy tu, aby Ci pomóc.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Main Layout ───────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">
                    Dane kontaktowe
                  </h2>
                </ScrollReveal>
                <div className="space-y-8">
                  {contactInfo.map((item, i) => (
                    <ScrollReveal key={i} delay={0.2 + 0.1 * i}>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-[#FF1493]" strokeWidth={2} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-500 mb-1">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-lg font-bold text-gray-900 hover:text-[#FF1493] transition-colors whitespace-pre-line"
                              target={item.icon === MapPin ? '_blank' : undefined}
                              rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-lg font-bold text-gray-900 whitespace-pre-line">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              <ScrollReveal delay={0.6}>
                <div className="pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Obserwuj nas
                  </h3>
                  <div className="flex gap-4">
                    {/* Social Placeholders */}
                    {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="px-4 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium text-sm hover:bg-[#FF1493] hover:text-white transition-colors"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.4}>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Wyślij wiadomość
                  </h2>
                  <p className="text-gray-500 mb-8">
                    Odpowiadamy zazwyczaj w ciągu 2 godzin w dni robocze.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* ── Google Maps ───────────────────────────────────────── */}
        <section className="h-[420px] w-full">
          <iframe
            title="Lokalizacja biura Hometria – ul. Grunwaldzka 10, Malbork"
            src="https://maps.google.com/maps?q=ul.+Grunwaldzka+10%2C+82-200+Malbork%2C+Polska&hl=pl&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

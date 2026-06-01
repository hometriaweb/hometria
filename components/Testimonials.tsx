import ScrollReveal from '@/components/ScrollReveal'
import { Quote } from 'lucide-react'

interface Testimonial {
  initials: string
  name: string
  location: string
  rating: number
  text: string
}

const testimonials: Testimonial[] = [
  {
    initials: 'AK',
    name: 'Anna K.',
    location: 'Malbork',
    rating: 5,
    text: 'Współpraca z Hometrią to czysta przyjemność. Sprzedaliśmy mieszkanie w 3 tygodnie, powyżej ceny wywoławczej. Pani Angelika prowadziła nas przez cały proces z ogromną cierpliwością i profesjonalizmem. Szczerze polecam!',
  },
  {
    initials: 'MW',
    name: 'Marek W.',
    location: 'Sztum',
    rating: 5,
    text: 'Szukałem nieruchomości inwestycyjnej od kilku miesięcy. Dzięki Hometrii znalazłem idealną działkę w świetnej lokalizacji. Pełne wsparcie formalne, zero stresu, zero zbędnych formalności. Profesjonaliści z prawdziwego zdarzenia.',
  },
  {
    initials: 'PN',
    name: 'Katarzyna i Piotr N.',
    location: 'Malbork',
    rating: 5,
    text: 'Kupiliśmy swój pierwszy dom za pośrednictwem Hometrii. Doradca przeprowadził nas przez całą dokumentację i negocjacje cenowe. Czuliśmy się bezpiecznie na każdym etapie. Polecamy każdemu, kto szuka rzetelnego biura nieruchomości!',
  },
  {
    initials: 'TR',
    name: 'Tomasz R.',
    location: 'Nowy Dwór Gdański',
    rating: 5,
    text: 'Sprzedaż domu po rodzicach to była dla nas trudna sytuacja – zarówno emocjonalnie, jak i formalnie. Hometria zajęła się wszystkim kompleksowo, dyskretnie i sprawnie. Za to ogromne podziękowania.',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#C89B3C" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] mb-3">
              Opinie klientów
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Co mówią nasi klienci?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Zaufanie klientów to nasza największa nagroda. Przeczytaj co mówią
              osoby, którym pomogliśmy sprzedać lub kupić nieruchomość.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#C89B3C]/30 transition-all duration-300 flex flex-col h-full relative">
                {/* Gold top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: 'linear-gradient(90deg, #C89B3C, #B8860B)' }}
                />

                {/* Quote icon */}
                <Quote className="w-7 h-7 mb-4 shrink-0" style={{ color: '#C89B3C' }} strokeWidth={1.5} />

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ background: 'linear-gradient(135deg, #FF1493, #d4006b)' }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <div className="flex items-center gap-2">
                      <Stars count={t.rating} />
                      <span className="text-xs text-gray-400">{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

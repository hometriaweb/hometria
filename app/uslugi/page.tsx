import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Key, Building2, Coins, Scale } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Usługi – HOMETRIA',
  description:
    'Zajmujemy się sprzedażą na rynku wtórnym, zakupem z rynku pierwotnego, wsparciem prawnym oraz bezpośrednim skupem nieruchomości.',
}

const services = [
  {
    icon: Key,
    title: 'Pośrednictwo w sprzedaży (Rynek wtórny)',
    description:
      'Zdejmujemy z Ciebie cały ciężar procesu sprzedaży. Analizujemy rynek, przygotowujemy profesjonalną wycenę, organizujemy sesję zdjęciową, a także home staging. Dzięki skutecznym działaniom marketingowym docieramy do zweryfikowanych kupców, negocjujemy najlepszą cenę i dopinamy wszelkie formalności.',
  },
  {
    icon: Building2,
    title: 'Zakup u dewelopera (Rynek pierwotny)',
    description:
      'Pomożemy Ci znaleźć wymarzone M w gąszczu deweloperskich inwestycji. Nie ponosisz żadnych kosztów prowizji. Analizujemy wiarygodność dewelopera, pomagamy w wyborze układu funkcjonalnego oraz doradzamy, na co zwrócić uwagę przed odbiorem technicznym lokalu.',
  },
  {
    icon: Coins,
    title: 'Szybki skup nieruchomości (Flipy)',
    description:
      'Potrzebujesz gotówki natychmiast? Zdecyduj się na bezpośredni odkup nieruchomości. Kupujemy mieszkania zadłużone, do generalnego remontu lub ze skomplikowanym stanem prawnym. Otrzymujesz wycenę w 24 godziny, a pieniądze bezpiecznie trafiają na Twoje konto od razu po akcie notarialnym.',
  },
  {
    icon: Scale,
    title: 'Wsparcie prawne i doradztwo kredytowe',
    description:
      'Każda transakcja nadzorowana jest przez nasz dział prawny. Prostujemy skomplikowane stany prawne (spadki, darowizny, zajęcia komornicze). Dodatkowo współpracujemy z niezależnymi doradcami kredytowymi, co gwarantuje naszym klientom najkorzystniejsze warunki finansowania na rynku.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 bg-gray-50 min-h-screen">
        {/* ── Header ────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                W czym możemy Ci pomóc?
              </h1>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Niezależnie od tego, czy chcesz zyskownie sprzedać dom, czy szukasz bezpiecznej inwestycji – mamy gotowe rozwiązania skrojone na miarę Twoich potrzeb.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Services List ─────────────────────────────────────── */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-20">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0">
                    <service.icon className="w-8 h-8 text-[#E6007E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-2 font-semibold text-[#E6007E] hover:text-[#c4006b] transition-colors group"
                    >
                      Zapytaj o szczegóły
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ── CTA Bottom ────────────────────────────────────────── */}
        <section className="bg-gray-900 py-20">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Nie jesteś pewien, jak zacząć?
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Skontaktuj się z nami. Zbadamy Twoje potrzeby i zaproponujemy optymalny plan działania — to nic nie kosztuje.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#E6007E] text-white font-semibold shadow-lg shadow-[#E6007E]/20 hover:bg-[#c4006b] hover:scale-105 transition-all duration-300"
              >
                Zamów bezpłatną wycenę
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </>
  )
}

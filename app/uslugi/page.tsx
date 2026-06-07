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
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                W czym możemy Ci pomóc?
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Niezależnie od tego, czy chcesz zyskownie sprzedać dom, czy szukasz bezpiecznej inwestycji – mamy gotowe rozwiązania skrojone na miarę Twoich potrzeb.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Services List ─────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-5">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={0.1 * index}>
                  <div className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-[#FF1493]/20 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    {/* Icon + title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center shrink-0 group-hover:bg-[#FF1493] transition-colors duration-300">
                        <service.icon className="w-5 h-5 text-[#FF1493] group-hover:text-white transition-colors duration-300" strokeWidth={1.75} />
                      </div>
                      <h2 className="text-base font-bold text-gray-900 leading-snug pt-1.5">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF1493] hover:text-[#D9007B] transition-colors group/link"
                    >
                      Zapytaj o szczegóły
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Bottom ────────────────────────────────────────── */}
        <section className="bg-gray-900 py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Nie jesteś pewien, jak zacząć?
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-400 mb-10 text-lg">
                  Skontaktuj się z nami. Zbadamy Twoje potrzeby i zaproponujemy optymalny plan działania — to nic nie kosztuje.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#FF1493] text-white font-semibold shadow-lg shadow-[#FF1493]/20 hover:bg-[#D9007B] hover:scale-105 transition-all duration-300"
                >
                  Zamów bezpłatną wycenę
                </Link>
              </ScrollReveal>
            </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

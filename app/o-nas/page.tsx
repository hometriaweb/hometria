import type { Metadata } from 'next'
import {
  Shield,
  Wrench,
  Banknote,
  Megaphone,
  UserCheck,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import Team from '@/components/Team'

export const metadata: Metadata = {
  title: 'O nas – HOMETRIA',
  description:
    'HOMETRIA to profesjonalne biuro nieruchomości specjalizujące się w kompleksowej obsłudze sprzedaży, zakupu oraz inwestycji. Towarzyszymy klientom na każdym etapie transakcji w Malborku i okolicach.',
}

const stats = [
  { label: 'Lat na rynku', value: '12+' },
  { label: 'Zadowolonych klientów', value: '500+' },
  { label: 'Sprzedanych nieruchomości', value: '850+' },
  { label: 'Ekspertów w zespole', value: '15' },
]

const reasons = [
  {
    icon: Shield,
    title: 'Kompleksowa obsługa transakcji',
    description:
      'Prowadzimy klientów przez cały proces sprzedaży lub zakupu nieruchomości – od przygotowania oferty i promocji, aż po finalizację transakcji u notariusza.',
  },
  {
    icon: Shield,
    title: 'Bezpieczeństwo formalne i organizacyjne',
    description:
      'Współpracujemy z kancelariami prawnymi, notariuszami oraz doradcami podatkowymi, pomagając klientom bezpiecznie przejść przez wszystkie formalności związane z nieruchomością.',
  },
  {
    icon: Wrench,
    title: 'Wiedza techniczna i inwestycyjna',
    description:
      'Dzięki współpracy ze specjalistami branży budowlanej pomagamy ocenić stan techniczny nieruchomości oraz potencjalne koszty i możliwości inwestycyjne.',
  },
  {
    icon: Banknote,
    title: 'Szybki odkup nieruchomości za gotówkę',
    description:
      'Oferujemy możliwość szybkiego odkupu nieruchomości – również tych wymagających uporządkowania sytuacji formalnej lub finansowej.',
  },
  {
    icon: Megaphone,
    title: 'Skuteczny marketing i szeroka baza klientów',
    description:
      'Wykorzystujemy nowoczesne narzędzia promocji oraz sprawdzone kanały sprzedaży, dzięki czemu skutecznie docieramy do osób aktywnie poszukujących nieruchomości.',
  },
  {
    icon: UserCheck,
    title: 'Indywidualne podejście i pełne wsparcie',
    description:
      'Każda nieruchomość i każda sytuacja jest inna. Dlatego stawiamy na indywidualne podejście, przejrzystą komunikację i realne wsparcie na każdym etapie współpracy.',
  },
]

const formalSupport = [
  'analizę dokumentacji nieruchomości',
  'wsparcie w rozumieniu zapisów umownych',
  'koordynację formalności związanych z transakcją',
  'współpracę z notariuszami i kancelariami prawnymi',
  'organizację dokumentów i procedur administracyjnych',
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 bg-white min-h-screen">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-3">
                Kim jesteśmy
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Państwa profesjonalny partner w świecie nieruchomości
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-600 leading-relaxed">
                HOMETRIA to nowoczesne biuro nieruchomości specjalizujące się w kompleksowej obsłudze
                sprzedaży, zakupu oraz inwestycji na rynku nieruchomości. Towarzyszymy naszym klientom
                na każdym etapie transakcji – od pierwszej rozmowy, aż po bezpieczne przekazanie nieruchomości.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Stats ───────────────────────────────────────────────── */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.1 * i} className="text-center px-4">
                  <p className="text-4xl sm:text-5xl font-black text-white mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-400">{stat.label}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── About text ──────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="prose prose-lg prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Łączymy doświadczenie rynku nieruchomości z praktyczną wiedzą techniczną i inwestycyjną.
                  Współpracujemy z zaufanymi notariuszami, kancelariami prawnymi, doradcami podatkowymi
                  oraz specjalistami branży budowlanej, dzięki czemu zapewniamy pełne wsparcie formalne
                  i organizacyjne.
                </p>
                <p>
                  Pomagamy w przygotowaniu dokumentacji, analizie stanu prawnego nieruchomości oraz sprawnym
                  przeprowadzeniu całego procesu sprzedaży lub zakupu. Współpracujemy również z inżynierami
                  budownictwa, kierownikami budów i sprawdzonymi wykonawcami, co pozwala nam rzetelnie ocenić
                  stan techniczny nieruchomości oraz wskazać potencjalne możliwości inwestycyjne.
                </p>
                <p>
                  Specjalizujemy się także w odkupie nieruchomości za gotówkę – również tych wymagających
                  uporządkowania sytuacji formalnej lub finansowej. Pomagamy klientom w rozwiązywaniu
                  skomplikowanych spraw związanych z nieruchomościami, zapewniając pełną dyskrecję
                  i indywidualne podejście.
                </p>
                <p>
                  Obsługujemy sprzedaż mieszkań, domów, gruntów, lokali usługowych, hal oraz nieruchomości
                  inwestycyjnych. Dzięki szerokiej bazie klientów i nowoczesnym narzędziom marketingowym
                  skutecznie łączymy sprzedających z kupującymi.
                </p>
                <p>
                  Stawiamy na bezpieczeństwo, przejrzystość oraz partnerskie relacje. Naszym celem jest
                  nie tylko skuteczna sprzedaż nieruchomości, ale przede wszystkim komfort i poczucie
                  bezpieczeństwa naszych klientów.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Dlaczego warto ──────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-3">
                  Nasze atuty
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                  Dlaczego warto nam zaufać?
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, i) => (
                <ScrollReveal key={i} delay={0.05 * i}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm h-full flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                      <reason.icon className="w-6 h-6 text-[#FF1493]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-[#FF1493] mb-1">
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </p>
                      <h3 className="text-base font-bold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wsparcie formalne ───────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-3">
                  Formalności
                </p>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                  Wsparcie formalne i administracyjne
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  W ramach współpracy pomagamy klientom w organizacji i koordynacji formalności
                  związanych z nieruchomościami, w tym w zakresie dokumentacji, umów
                  oraz procedur administracyjnych.
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-4">
                  Zakres wsparcia obejmuje m.in.:
                </p>
                <ul className="space-y-3">
                  {formalSupport.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="mt-1 w-5 h-5 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF1493]" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-8 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400 leading-relaxed">
                  Usługa nie stanowi porady prawnej w rozumieniu obowiązujących przepisów prawa.
                  W przypadku indywidualnych kwestii prawnych rekomendujemy konsultację z prawnikiem
                  posiadającym stosowne uprawnienia.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Zespół ─────────────────────────────────────────────── */}
        <Team />

      </main>
      <Footer />
    </>
  )
}

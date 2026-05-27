import type { Metadata } from 'next'
import { Shield, Target, Users, TrendingUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'O nas – HOMETRIA',
  description:
    'Poznaj historię i wartości biura nieruchomości Hometria. Od 12 lat wspieramy klientów w bezpiecznej sprzedaży i zakupie nieruchomości w Warszawie i okolicach.',
}

const stats = [
  { label: 'Lat na rynku', value: '12+' },
  { label: 'Zadowolonych klientów', value: '500+' },
  { label: 'Sprzedanych nieruchomości', value: '850+' },
  { label: 'Ekspertów w zespole', value: '15' },
]

const values = [
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    description:
      'Każda transakcja jest zabezpieczona prawnie i weryfikowana przez naszych notariuszy oraz radców prawnych.',
  },
  {
    icon: Target,
    title: 'Skuteczność',
    description:
      'Dzięki zaawansowanemu marketingowi i własnej bazie inwestorów, sprzedajemy nieruchomości szybciej niż rynkowa średnia.',
  },
  {
    icon: Users,
    title: 'Relacje',
    description:
      'Nie jesteś dla nas tylko kolejnym klientem. Budujemy długofalowe relacje oparte na zaufaniu i pełnej transparentności.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 bg-white min-h-screen">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal delay={0.1}>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E6007E] mb-3">
                Nasza misja
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Zmieniamy oblicze polskiego rynku nieruchomości
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Jesteśmy zespołem profesjonalistów, którzy wierzą, że sprzedaż
                lub zakup domu to jedno z najważniejszych wydarzeń w życiu.
                Dlatego eliminujemy chaos, stres i zbędne formalności.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────── */}
        <section className="py-16 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-white/10">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={0.1 * i} className="text-center px-4">
                  <p className="text-4xl sm:text-5xl font-black text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────────── */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                  Nasze wartości
                </h2>
                <p className="text-gray-500">
                  Na tych trzech filarach budujemy codzienne doświadczenia naszych klientów.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-10">
              {values.map((v, i) => (
                <ScrollReveal key={i} delay={0.1 + 0.1 * i} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                    <v.icon className="w-8 h-8 text-[#E6007E]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Poznaj naszych ekspertów
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    Za każdym sukcesem stoją ludzie. Nasi doradcy to licencjonowani
                    pośrednicy, prawnicy i eksperci finansowi z wieloletnim stażem.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Placeholders for team members */}
              {[...Array(4)].map((_, i) => (
                <ScrollReveal key={i} delay={0.1 + 0.1 * i} className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 mb-4">
                    {/* Silhouette placeholder since we don't have real photos */}
                    <div className="absolute inset-0 flex items-end justify-center opacity-20">
                      <svg className="w-3/4 h-3/4 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Ekspert #{i + 1}</h3>
                  <p className="text-sm text-[#E6007E] font-medium">Doradca ds. Nieruchomości</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PhoneCall } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-18 bg-gradient-to-br from-white via-gray-50 to-pink-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – copy */}
          <div className="space-y-8">

            <ScrollReveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-gray-900">
                Bezpieczna sprzedaż{' '}
                <span className="text-[#E6007E]">nieruchomości</span>{' '}
                – bez chaosu i zbędnych formalności
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Wspieramy właścicieli nieruchomości na każdym etapie sprzedaży.
                Od wyceny, przez marketing, aż po bezpieczne sfinalizowanie
                transakcji – wszystko w jednym miejscu.
              </p>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-8">
                {[
                  { value: '250+', label: 'Zrealizowanych transakcji' },
                  { value: '12', label: 'Lat doświadczenia' },
                  { value: '98%', label: 'Zadowolonych klientów' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA buttons */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/oferty"
                  id="hero-cta-sell"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#E6007E] text-white font-semibold text-sm shadow-lg shadow-pink-200 hover:bg-[#c4006b] active:scale-95 transition-all duration-200"
                >
                  Sprzedaj nieruchomość
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kontakt"
                  id="hero-cta-contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white active:scale-95 transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4" />
                  Skontaktuj się
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right – image */}
          <ScrollReveal delay={0.6} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/hero-interior.jpg"
                alt="Luksusowe wnętrze nowoczesnego apartamentu"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl px-5 py-3.5 flex items-center gap-3 border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0">
                <span className="text-[#E6007E] text-lg">★</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Średnia ocena klientów</p>
                <p className="font-black text-gray-900 text-sm">5.0 / 5.0</p>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-pink-100/60 -z-10 blur-2xl" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

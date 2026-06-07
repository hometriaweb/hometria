import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export default function Team() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1120]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ color: '#C89B3C' }}
          >
            Nasz zespół
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            W dzisiejszych czasach, w erze sztucznej inteligencji niezwykle ważną kwestią jest
            kontakt z drugim człowiekiem. Hometria to mała rodzinna firma, a za każdą transakcją
            stoją ludzie. Skontaktuj się — chętnie porozmawiamy o Twojej nieruchomości.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#FF1493] font-semibold text-sm text-white shadow-lg shadow-pink-900/30 hover:bg-[#D9007B] active:scale-95 transition-all duration-200"
            >
              Porozmawiajmy
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

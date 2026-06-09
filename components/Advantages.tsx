import { ShieldCheck, Award, Cpu, Megaphone } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Bezpieczeństwo',
    description:
      'Każda transakcja realizowana jest zgodnie z obowiązującym prawem, z pełnym zabezpieczeniem interesów Klienta.',
  },
  {
    icon: Award,
    title: 'Doświadczenie',
    description:
      'Wieloletnia znajomość rynku nieruchomości oraz liczne zrealizowane transakcje to nasz certyfikat.',
  },
  {
    icon: Cpu,
    title: 'Zaplecze techniczne',
    description:
      'Profesjonalne sesje foto i video, wirtualne spacery 3D oraz precyzyjne wyceny oparte na danych rynkowych.',
  },
  {
    icon: Megaphone,
    title: 'Skuteczny marketing',
    description:
      'Dotrzemy do prawdziwych kupców dzięki kampaniom na portalach ogłoszeniowych i w mediach społecznościowych.',
  },
]

export default function Advantages() {
  return (
    <section id="dlaczego-hometria" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#FF1493]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-3">
              Dlaczego HOMETRIA?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Twoja nieruchomość w dobrych rękach
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Wybierając Hometria, zyskujesz więcej niż agenta – zyskujesz partnera,
              który zadba o każdy szczegół.
            </p>
          </div>
        </ScrollReveal>

        {/* Advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={0.1 * idx}>
                <div
                  className="group relative h-full p-7 rounded-2xl border border-white/5 bg-white/3 hover:border-[#FF1493]/40 hover:bg-white/6 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF1493]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF1493]/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#FF1493]" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

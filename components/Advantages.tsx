import { ShieldCheck, Award, Cpu, Megaphone } from 'lucide-react'

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
      'Ponad 12 lat na rynku i setki sfinalizowanych transakcji to nasz najlepszy certyfikat jakości.',
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#E6007E]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E6007E] mb-3">
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

        {/* Advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-2xl border border-white/5 bg-white/3 hover:border-[#E6007E]/40 hover:bg-white/6 transition-all duration-300 overflow-hidden"
              >
                {/* Index number watermark */}
                <span className="absolute top-4 right-5 text-7xl font-black text-white/3 leading-none select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="w-12 h-12 rounded-xl bg-[#E6007E]/10 flex items-center justify-center mb-5 group-hover:bg-[#E6007E]/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#E6007E]" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

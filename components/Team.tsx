import ScrollReveal from '@/components/ScrollReveal'

export interface TeamMember {
  initials: string
  name: string
  role: string
  description: string
  accentColor?: string
}

const defaultMembers: TeamMember[] = [
  {
    initials: 'AW',
    name: 'Angelika Wiórkowska',
    role: 'Doradca klienta',
    description:
      'Specjalistka ds. obsługi klienta z wieloletnim doświadczeniem na rynku nieruchomości. Prowadzi klientów przez cały proces transakcji z pełnym zaangażowaniem.',
  },
  {
    initials: 'JK',
    name: '[ Imię Nazwisko ]',
    role: 'Pośrednik nieruchomości',
    description:
      'Ekspert w zakresie sprzedaży i zakupu mieszkań oraz domów jednorodzinnych. Specjalizuje się w rynku pierwotnym i wtórnym.',
  },
  {
    initials: 'MN',
    name: '[ Imię Nazwisko ]',
    role: 'Obsługa prawna i formalna',
    description:
      'Specjalista ds. dokumentacji nieruchomości i koordynacji formalnej. Dba o bezpieczeństwo każdej transakcji od strony prawnej.',
  },
  {
    initials: 'PW',
    name: '[ Imię Nazwisko ]',
    role: 'Doradca inwestycyjny',
    description:
      'Ekspert w zakresie nieruchomości komercyjnych, gruntów i obiektów inwestycyjnych. Pomaga w analizie potencjału inwestycji.',
  },
]

interface TeamProps {
  members?: TeamMember[]
}

export default function Team({ members = defaultMembers }: TeamProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C89B3C' }}>
              Nasz zespół
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Poznaj ekspertów Hometria
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Za każdą transakcją stoją ludzie. Nasi doradcy to licencjonowani specjaliści
              z wieloletnim doświadczeniem w obrocie nieruchomościami.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C89B3C]/40 hover:bg-white/8 transition-all duration-300 flex flex-col h-full">
                {/* Gold accent line on hover */}
                <div
                  className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(90deg, transparent, #C89B3C, transparent)' }}
                />

                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 text-white font-black text-xl shrink-0"
                  style={{ background: 'linear-gradient(135deg, #FF1493, #d4006b)' }}
                >
                  {member.initials}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-white font-bold text-base mb-0.5">{member.name}</p>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#C89B3C' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}

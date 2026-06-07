import { Home, RefreshCcw, TrendingUp, FileText, Shield } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    icon: Home,
    title: 'Sprzedaż nieruchomości',
    description: 'Kompleksowa obsługa od wyceny po podpisanie aktu notarialnego.',
  },
  {
    icon: RefreshCcw,
    title: 'Odkup nieruchomości',
    description: 'Szybki odkup bez pośredników – gotówka nawet w 7 dni.',
  },
  {
    icon: TrendingUp,
    title: 'Inwestycje',
    description: 'Doradztwo inwestycyjne i optymalizacja portfela nieruchomości.',
  },
  {
    icon: FileText,
    title: 'Wsparcie formalne',
    description: 'Obsługa prawna, kredytowa i dokumentacyjna pod jednym dachem.',
  },
  {
    icon: Shield,
    title: 'Ubezpieczenia',
    description: 'Ubezpieczenia nieruchomości dopasowane do Twoich potrzeb.',
  },
]

export default function Services() {
  return (
    <section id="uslugi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-4">
              Czym się zajmujemy
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800 max-w-xl mx-auto leading-snug">
              Hometria to nie tylko pośrednictwo – to kompleksowe wsparcie
              na każdym etapie transakcji.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={0.1 * index}>
                <div
                  className="group h-full flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:border-[#FF1493]/30 hover:bg-pink-50/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#FF1493] transition-colors duration-300">
                    <Icon
                      className="w-6 h-6 text-[#FF1493] group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PropertyCard } from './PropertyCard'
import { getFeaturedProperties } from '@/lib/properties'
import ScrollReveal from '@/components/ScrollReveal'

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties()

  return (
    <section id="wybrane-nieruchomosci" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C89B3C]/30 bg-[#C89B3C]/5 mb-5">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C89B3C' }}>
                Nasza oferta
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent mb-6"
              style={{ backgroundImage: 'linear-gradient(135deg, #FF1493 20%, #C89B3C 100%)' }}
            >
              Promowane oferty nieruchomości
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/oferty"
              id="featured-see-all"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#FF1493] transition-colors duration-200"
            >
              Zobacz wszystkie oferty
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <ScrollReveal key={property._id} delay={0.1 * (index + 1)}>
              <PropertyCard property={property} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

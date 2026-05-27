import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PropertyCard } from './PropertyCard'
import { getFeaturedProperties } from '@/lib/properties'

export default async function FeaturedProperties() {
  const properties = await getFeaturedProperties()

  return (
    <section id="wybrane-nieruchomosci" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E6007E] mb-3">
              Nasza oferta
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Wybrane nieruchomości
            </h2>
          </div>
          <Link
            href="/oferty"
            id="featured-see-all"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#E6007E] transition-colors duration-200 shrink-0"
          >
            Zobacz więcej
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  )
}

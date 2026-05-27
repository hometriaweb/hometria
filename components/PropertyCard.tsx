import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Maximize2, DoorOpen, ArrowUpRight, Star } from 'lucide-react'
import type { Property } from '@/types/property'
import { urlFor } from '@/sanity/lib/image'

interface PropertyCardProps {
  property: Property
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Resolve mainImage to a URL string.
 * - Plain string (mock / local public path): returned as-is.
 * - Sanity image asset reference: resolved via urlFor() with a sensible default size.
 */
function resolveImageSrc(mainImage: Property['mainImage']): string {
  if (typeof mainImage === 'string') return mainImage
  return urlFor(mainImage).width(800).height(600).fit('crop').auto('format').url()
}


const categoryColors: Record<Property['category'], string> = {
  Mieszkanie: 'bg-[#E6007E] text-white',
  Dom: 'bg-emerald-600 text-white',
  Działka: 'bg-amber-500 text-white',
  'Lokale komercyjne': 'bg-blue-600 text-white',
}

const marketTypeBadge: Record<Property['marketType'], string> = {
  Pierwotny: 'Rynek pierwotny',
  Wtórny: 'Rynek wtórny',
}

export function PropertyCard({ property }: PropertyCardProps) {
  const imageSrc = resolveImageSrc(property.mainImage)
  const slug = property.slug.current

  return (
    <article className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 sm:h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[property.category]}`}
        >
          {property.category}
        </span>

        {/* Promoted star */}
        {property.isPromoted && (
          <span
            aria-label="Oferta promowana"
            title="Oferta promowana"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Market type tag */}
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">
          {marketTypeBadge[property.marketType]}
        </p>

        <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#E6007E]" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Params */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-medium">{property.area} m²</span>
          </div>
          {property.rooms > 0 && (
            <div className="flex items-center gap-1.5">
              <DoorOpen className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-medium">
                {property.rooms}{' '}
                {property.rooms === 1 ? 'pokój' : property.rooms <= 4 ? 'pokoje' : 'pokoi'}
              </span>
            </div>
          )}
        </div>

        <hr className="border-gray-100" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <p className="text-lg font-black text-gray-900">{formatPrice(property.price)}</p>
          <Link
            href={`/oferty/${slug}`}
            id={`property-card-${property._id}`}
            aria-label={`Zobacz szczegóły: ${property.title}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#E6007E] hover:text-[#c4006b] transition-colors"
          >
            Szczegóły
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}

import type { SanityImageSource } from '@sanity/image-url'

// ─── Core property interface (mirrors Sanity schema) ──────────────────────────
export interface Property {
  _id: string
  title: string
  slug: { current: string }
  price: number
  area: number          // m²
  rooms: number
  location: string
  marketType: 'Pierwotny' | 'Wtórny'
  category: 'Mieszkanie' | 'Dom' | 'Działka' | 'Lokale komercyjne'
  isPromoted: boolean
  mainImage: SanityImageSource | string  // SanityImageSource from CMS, plain string path for mock
  gallery?: (SanityImageSource | string)[]
  description?: string
}

// ─── Filter types (future use) ────────────────────────────────────────────────
export type PropertyMarketType = Property['marketType']
export type PropertyCategory = Property['category']

export interface PropertyFilters {
  marketType?: PropertyMarketType
  category?: PropertyCategory
  priceMin?: number
  priceMax?: number
  areaMin?: number
  areaMax?: number
  rooms?: number
  location?: string
}

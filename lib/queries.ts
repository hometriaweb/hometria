import { defineQuery } from 'next-sanity'

/**
 * All GROQ queries live here so they are easy to discover and update.
 *
 * Field list matches the Property interface in @/types/property.ts.
 * Add or remove fields here in tandem with that interface.
 */

// Home page — promoted listings only
export const FEATURED_PROPERTIES_QUERY = defineQuery(`
  *[_type == "property" && isPromoted == true] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    area,
    rooms,
    location,
    marketType,
    category,
    isPromoted,
    mainImage,
    gallery
  }
`)

// All properties (for the /oferty listing page)
export const ALL_PROPERTIES_QUERY = defineQuery(`
  *[_type == "property"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    price,
    area,
    rooms,
    location,
    marketType,
    category,
    isPromoted,
    mainImage,
    gallery
  }
`)

// Single property by slug (for /oferty/[slug])
export const PROPERTY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    price,
    area,
    rooms,
    location,
    marketType,
    category,
    isPromoted,
    mainImage,
    gallery,
    description
  }
`)

// All slugs — used by generateStaticParams to pre-render detail pages
export const ALL_SLUGS_QUERY = defineQuery(`
  *[_type == "property" && defined(slug.current)]{ "slug": slug.current }
`)

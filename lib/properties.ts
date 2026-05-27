/**
 * Server-only data fetching layer — uses next-sanity Live Content API.
 * Do NOT import this file from Client Components.
 */
import { sanityFetch } from '@/sanity/lib/live'
import { FEATURED_PROPERTIES_QUERY, ALL_PROPERTIES_QUERY } from './queries'
import type { Property } from '@/types/property'

/**
 * Fetch promoted properties from Sanity CMS.
 * Automatically revalidates when content changes in Sanity Studio.
 */
export async function getFeaturedProperties(): Promise<Property[]> {
  const { data } = await sanityFetch({ query: FEATURED_PROPERTIES_QUERY })
  return data as Property[]
}

/**
 * Fetch all properties from Sanity CMS.
 */
export async function getAllProperties(): Promise<Property[]> {
  const { data } = await sanityFetch({ query: ALL_PROPERTIES_QUERY })
  return data as Property[]
}

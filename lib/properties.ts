/**
 * Server-only data fetching layer — uses standard client.fetch with Next.js ISR cache
 * to drastically reduce Sanity API usage.
 * Do NOT import this file from Client Components.
 */
import { client } from '@/sanity/lib/client'
import { FEATURED_PROPERTIES_QUERY, ALL_PROPERTIES_QUERY } from './queries'
import type { Property } from '@/types/property'

/**
 * Fetch promoted properties from Sanity CMS with Next.js cache.
 * Revalidates in the background every 1 hour (3600s) to save API calls.
 */
export async function getFeaturedProperties(): Promise<Property[]> {
  const data = await client.fetch(
    FEATURED_PROPERTIES_QUERY,
    {},
    { next: { revalidate: 3600 } }
  )
  return data as Property[]
}

export async function getAllProperties(): Promise<Property[]> {
  const data = await client.fetch(
    ALL_PROPERTIES_QUERY,
    {},
    { next: { revalidate: 3600 } }
  )
  return data as Property[]
}

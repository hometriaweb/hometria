import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { ALL_SLUGS_QUERY } from '@/lib/queries'

export const revalidate = 86400 // Revalidate the sitemap once a day

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hometria.pl'

  // Fetch all property slugs
  const slugs = await client.fetch<{ slug: string }[]>(
    ALL_SLUGS_QUERY,
    {},
    { next: { revalidate: 3600 } }
  )

  const propertyUrls = slugs.map(({ slug }) => ({
    url: `${baseUrl}/oferty/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const staticRoutes = [
    '',
    '/oferty',
    '/o-nas',
    '/uslugi',
    '/kontakt',
    '/polityka-prywatnosci',
    '/polityka-cookies',
    '/regulamin'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.9,
  }))

  return [...staticRoutes, ...propertyUrls]
}

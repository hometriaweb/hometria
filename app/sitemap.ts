import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { ALL_SLUGS_QUERY } from '@/lib/queries'

const baseUrl = 'https://hometria.pl'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/oferty`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/o-nas`, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/uslugi`, changeFrequency: 'yearly', priority: 0.7 },
  ]

  const slugs = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
  const propertyPages: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
    url: `${baseUrl}/oferty/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticPages, ...propertyPages]
}

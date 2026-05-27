import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/studio/'], // if studio was hosted here, but it's fine as a safety measure
    },
    sitemap: 'https://hometria.pl/sitemap.xml',
  }
}

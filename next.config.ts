import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow Sanity CDN images when you connect the CMS
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

export default nextConfig

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

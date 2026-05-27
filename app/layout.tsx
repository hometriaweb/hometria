import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hometria.pl'),
  title: {
    default: 'Hometria – Biuro Nieruchomości | Sprzedaż i Wynajem',
    template: '%s | Hometria',
  },
  description:
    'Profesjonalne biuro nieruchomości. Sprzedaż, wynajem i odkup mieszkań, domów i działek. Ponad 12 lat doświadczenia. Skontaktuj się i rozpocznij bezpieczną transakcję.',
  keywords: [
    'biuro nieruchomości',
    'agencja nieruchomości',
    'sprzedaż nieruchomości',
    'mieszkania na sprzedaż',
    'domy na sprzedaż',
    'pośrednik nieruchomości',
    'skup nieruchomości',
    'hometria',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hometria – Biuro Nieruchomości',
    description:
      'Profesjonalne biuro nieruchomości. Sprzedaż, wynajem i odkup bez chaosu i zbędnych formalności.',
    url: 'https://hometria.pl',
    siteName: 'Hometria',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hometria – Biuro Nieruchomości',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hometria – Biuro Nieruchomości',
    description:
      'Profesjonalne biuro nieruchomości. Sprzedaż, wynajem i odkup nieruchomości.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden">
        <LocalBusinessSchema />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}

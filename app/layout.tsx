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
    default: 'Hometria – Biuro Nieruchomości Radom | Sprzedaż i Wynajem',
    template: '%s | Hometria',
  },
  description:
    'Profesjonalne biuro nieruchomości w Radomiu. Sprzedaż, wynajem i odkup mieszkań, domów i działek w Radomiu i okolicach. Ponad 12 lat doświadczenia. Zadzwoń i rozpocznij bezpieczną transakcję.',
  keywords: [
    'biuro nieruchomości Radom',
    'agencja nieruchomości Radom',
    'sprzedaż nieruchomości Radom',
    'mieszkania na sprzedaż Radom',
    'domy na sprzedaż Radom',
    'działki Radom',
    'pośrednik nieruchomości Radom',
    'skup nieruchomości Radom',
    'hometria',
    'nieruchomości Radom',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Hometria – Biuro Nieruchomości Radom',
    description:
      'Profesjonalne biuro nieruchomości w Radomiu. Sprzedaż, wynajem i odkup bez chaosu i zbędnych formalności.',
    url: 'https://hometria.pl',
    siteName: 'Hometria',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hometria – Biuro Nieruchomości Radom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hometria – Biuro Nieruchomości Radom',
    description:
      'Profesjonalne biuro nieruchomości w Radomiu. Sprzedaż, wynajem i odkup nieruchomości.',
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

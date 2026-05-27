import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ScrollToTop from '@/components/ScrollToTop'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hometria.pl'),
  title: 'HOMETRIA – Bezpieczna sprzedaż nieruchomości w Warszawie',
  description:
    'Profesjonalne biuro nieruchomości w Warszawie. Sprzedaż, odkup, inwestycje i doradztwo formalne. Ponad 12 lat doświadczenia. Skontaktuj się i sprzedaj nieruchomość bez chaosu.',
  keywords: [
    'biuro nieruchomości Warszawa',
    'sprzedaż nieruchomości',
    'odkup nieruchomości',
    'pośrednik nieruchomości',
    'hometria',
    'agencja nieruchomości',
    'skup nieruchomości'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HOMETRIA – Bezpieczna sprzedaż nieruchomości',
    description:
      'Profesjonalne biuro nieruchomości w Warszawie. Bez chaosu i zbędnych formalności.',
    url: 'https://hometria.pl',
    siteName: 'HOMETRIA',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOMETRIA – Bezpieczna sprzedaż nieruchomości w Warszawie',
    description: 'Profesjonalne biuro nieruchomości w Warszawie. Sprzedaż, odkup, inwestycje i doradztwo formalne.',
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
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}

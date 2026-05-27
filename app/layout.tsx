import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HOMETRIA – Bezpieczna sprzedaż nieruchomości w Warszawie',
  description:
    'Profesjonalne biuro nieruchomości w Warszawie. Sprzedaż, odkup, inwestycje i doradztwo formalne. Ponad 12 lat doświadczenia. Skontaktuj się i sprzedaj nieruchomość bez chaosu.',
  keywords: [
    'biuro nieruchomości Warszawa',
    'sprzedaż nieruchomości',
    'odkup nieruchomości',
    'pośrednik nieruchomości',
    'hometria',
  ],
  openGraph: {
    title: 'HOMETRIA – Bezpieczna sprzedaż nieruchomości',
    description:
      'Profesjonalne biuro nieruchomości w Warszawie. Bez chaosu i zbędnych formalności.',
    locale: 'pl_PL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  )
}

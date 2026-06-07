import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PropertyNotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-18 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-7xl mb-6">🏚️</p>
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Oferta nie istnieje</h1>
          <p className="text-gray-500 mb-8 max-w-xs mx-auto">
            Ta oferta mogła zostać usunięta lub adres URL jest nieprawidłowy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/oferty"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF1493] text-white font-semibold text-sm hover:bg-[#D9007B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do ofert
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:border-[#FF1493] hover:text-[#FF1493] transition-colors"
            >
              <Home className="w-4 h-4" />
              Strona główna
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

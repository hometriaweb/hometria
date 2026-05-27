import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertyListings from '@/components/PropertyListings'
import { getAllProperties } from '@/lib/properties'

export const revalidate = 3600

export const metadata = {
  title: 'Oferty nieruchomości – Hometria',
  description:
    'Przeglądaj pełną bazę ofert nieruchomości Hometria. Mieszkania, domy, działki i lokale komercyjne w Warszawie i okolicach. Filtruj według ceny, powierzchni, rynku i kategorii.',
}

// Skeleton shown while the listing loads
function ListingSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
      <div className="h-10 bg-gray-200 rounded-xl w-56 mb-10" />
      <div className="flex gap-3 mb-8">
        <div className="h-11 bg-gray-200 rounded-xl flex-1" />
        <div className="h-11 bg-gray-200 rounded-xl w-32" />
        <div className="h-11 bg-gray-200 rounded-xl w-40" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
            <div className="h-52 bg-gray-200" />
            <div className="p-5 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-3 bg-gray-200 rounded w-1/2" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
              <div className="h-px bg-gray-100" />
              <div className="h-5 bg-gray-200 rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

async function ListingsContainer() {
  const properties = await getAllProperties()
  return <PropertyListings properties={properties} />
}

export default function OfertyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-18 min-h-screen bg-gray-50">
        <Suspense fallback={<ListingSkeleton />}>
          <ListingsContainer />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

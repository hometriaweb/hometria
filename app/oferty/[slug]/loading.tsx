import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PropertyDetailLoading() {
  return (
    <>
      <Navbar />
      <main className="pt-18 bg-white min-h-screen animate-pulse">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="h-4 bg-gray-200 rounded w-64" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* Title area */}
          <div className="mb-8">
            <div className="flex gap-2 mb-3">
              <div className="h-6 bg-gray-200 rounded-full w-24" />
              <div className="h-6 bg-gray-200 rounded-full w-28" />
            </div>
            <div className="h-8 bg-gray-200 rounded-xl w-2/3 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-48" />
          </div>

          {/* Main grid */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {/* Gallery skeleton */}
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] bg-gray-200 rounded-2xl" />
              <div className="flex gap-2 mt-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-20 h-14 bg-gray-200 rounded-lg shrink-0" />
                ))}
              </div>
            </div>

            {/* Sidebar skeleton */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-100 p-6 space-y-4">
                <div className="h-3 bg-gray-200 rounded w-16" />
                <div className="h-9 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-24" />
                <div className="h-11 bg-gray-200 rounded-xl mt-6" />
                <div className="h-11 bg-gray-200 rounded-xl" />
              </div>
              <div className="rounded-2xl border border-gray-100 p-6 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

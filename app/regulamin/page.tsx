import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Regulamin – HOMETRIA',
  description: 'Regulamin świadczenia usług przez biuro nieruchomości HOMETRIA.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Regulamin świadczenia usług</h1>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">§ 1. Postanowienia ogólne</h2>
              <p>
                Niniejszy regulamin określa ogólne warunki, zasady oraz sposób świadczenia usług przez HOMETRIA sp. z o.o. z siedzibą w Warszawie za pośrednictwem serwisu hometria.pl. Usługi polegają na pośrednictwie w obrocie nieruchomościami, wycenach oraz doradztwie prawnym.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">§ 2. Wymagania techniczne</h2>
              <p>
                Do korzystania z serwisu niezbędne jest urządzenie z dostępem do sieci Internet oraz przeglądarka internetowa z włączoną obsługą JavaScript i plików cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">§ 3. Warunki świadczenia usług</h2>
              <p>
                Podjęcie współpracy z naszym biurem wymaga podpisania stosownej umowy pośrednictwa, która precyzuje wysokość wynagrodzenia (prowizji) oraz szczegółowe obowiązki stron. Informacje prezentowane na stronie mają charakter poglądowy i nie stanowią oferty w rozumieniu przepisów Kodeksu cywilnego.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">§ 4. Odpowiedzialność</h2>
              <p>
                HOMETRIA dokłada wszelkich starań, aby informacje publikowane w serwisie były rzetelne i aktualne, jednak nie ponosi odpowiedzialności za ewentualne rozbieżności wynikające z faktu, że dane dostarczane są przez osoby trzecie (sprzedających, deweloperów).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">§ 5. Postanowienia końcowe</h2>
              <p>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy powszechnie obowiązującego prawa polskiego, w szczególności Kodeksu cywilnego.
              </p>
            </section>
            
            <section className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-400">
                Ostatnia aktualizacja: 27.05.2026
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

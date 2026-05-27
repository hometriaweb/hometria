import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Polityka Cookies – HOMETRIA',
  description: 'Informacje o plikach cookies wykorzystywanych na stronie biura nieruchomości HOMETRIA.',
}

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Polityka cookies</h1>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Czym są pliki cookies?</h2>
              <p>
                Pliki cookies (tzw. „ciasteczka”) to dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika serwisu i przeznaczone są do korzystania ze stron internetowych serwisu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Do czego używamy plików cookies?</h2>
              <p>W naszym serwisie pliki cookies wykorzystywane są w celu:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Dostosowania zawartości stron do preferencji Użytkownika.</li>
                <li>Tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy korzystają ze strony.</li>
                <li>Zapewnienia bezpieczeństwa i niezawodności serwisu.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Rodzaje wykorzystywanych cookies</h2>
              <p>
                Stosujemy dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony lub wyłączenia oprogramowania. „Stałe” pliki cookies przechowywane są w urządzeniu końcowym przez czas określony w parametrach plików cookies lub do czasu ich usunięcia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Zarządzanie cookies</h2>
              <p>
                Oprogramowanie do przeglądania stron internetowych zazwyczaj domyślnie dopuszcza przechowywanie plików cookies. Możesz jednak dokonać zmiany ustawień w tym zakresie w swojej przeglądarce. Pamiętaj, że wyłączenie obsługi plików cookies może utrudnić korzystanie z niektórych funkcjonalności naszej strony.
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

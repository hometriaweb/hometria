import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Polityka Prywatności – HOMETRIA',
  description: 'Informacje o przetwarzaniu danych osobowych i polityce prywatności biura nieruchomości HOMETRIA.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">Polityka prywatności</h1>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Informacje ogólne</h2>
              <p>
                Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez użytkowników w związku z korzystaniem z serwisu HOMETRIA.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Administrator danych osobowych</h2>
              <p>
                Administratorem Twoich danych osobowych jest HOMETRIA sp. z o.o. z siedzibą w Warszawie przy ul. Marszałkowskiej 10/16, wpisana do rejestru przedsiębiorców pod numerem KRS: 0000000000, NIP: 000-000-00-00. Możesz się z nami skontaktować pisząc na adres e-mail: <a href="mailto:kontakt@hometria.pl" className="text-[#E6007E] hover:underline">kontakt@hometria.pl</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cele przetwarzania danych</h2>
              <p>Twoje dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Udzielenia odpowiedzi na zapytania przesłane przez formularz kontaktowy.</li>
                <li>Świadczenia usług pośrednictwa w obrocie nieruchomościami.</li>
                <li>Wysyłania ofert dopasowanych do Twoich preferencji (na podstawie zgody).</li>
                <li>Realizacji obowiązków prawnych ciążących na Administratorze.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Prawa użytkownika</h2>
              <p>
                Przysługuje Ci prawo dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych oraz prawo wniesienia sprzeciwu. W przypadku przetwarzania danych na podstawie zgody, masz prawo do cofnięcia zgody w dowolnym momencie.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Udostępnianie danych</h2>
              <p>
                Twoje dane mogą być udostępniane podmiotom współpracującym (np. biurom notarialnym, doradcom kredytowym, dostawcom usług IT) wyłącznie w zakresie niezbędnym do realizacji celów opisanych powyżej.
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

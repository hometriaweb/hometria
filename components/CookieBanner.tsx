'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookies_accepted')) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookies_accepted', '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800 px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-400 leading-relaxed">
          Ta strona korzysta z plików cookies, w tym cookies Google Maps, w celu zapewnienia prawidłowego działania serwisu.
          Korzystając ze strony, akceptujesz ich użycie. Więcej informacji w{' '}
          <a href="/polityka-prywatnosci" className="underline hover:text-white transition-colors">
            Polityce Prywatności
          </a>
          .
        </p>
        <button
          onClick={accept}
          aria-label="Zaakceptuj politykę cookies"
          className="shrink-0 px-5 py-2 rounded-lg bg-[#FF1493] text-white text-xs font-semibold hover:bg-[#D9007B] transition-colors"
        >
          Akceptuję
        </button>
      </div>
    </div>
  )
}

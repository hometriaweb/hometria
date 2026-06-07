'use client'

import { useState, useId } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { sendContactEmail } from '@/app/actions/contact'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const formId = useId()
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      await sendContactEmail(form)
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle className="w-16 h-16 text-[#FF1493]" strokeWidth={1.5} />
        <h3 className="text-xl font-bold text-gray-900">Wiadomość wysłana!</h3>
        <p className="text-gray-500 max-w-xs">
          Dziękujemy za kontakt. Odezwiemy się do Ciebie w ciągu 24 godzin.
        </p>
        <button
          onClick={() => { setState('idle'); setForm({ name: '', email: '', phone: '', message: '' }) }}
          className="mt-2 text-sm text-[#FF1493] font-semibold hover:underline"
        >
          Wyślij kolejną wiadomość
        </button>
      </div>
    )
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Imię i nazwisko <span className="text-[#FF1493]">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all duration-200"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-gray-700 mb-1.5">
            Adres e-mail <span className="text-[#FF1493]">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jan@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor={`${formId}-phone`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefon
        </label>
        <input
          id={`${formId}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+48 123 456 789"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Wiadomość <span className="text-[#FF1493]">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Opisz swoją nieruchomość lub zadaj pytanie…"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all duration-200 resize-none"
        />
      </div>

      {state === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4" />
          Coś poszło nie tak. Spróbuj ponownie.
        </div>
      )}

      <button
        type="submit"
        id="contact-form-submit"
        disabled={state === 'loading'}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF1493] text-white font-semibold text-sm shadow-lg shadow-pink-200 hover:bg-[#D9007B] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {state === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Wysyłanie…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Wyślij wiadomość
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Twoje dane są chronione zgodnie z{' '}
        <a href="/polityka-prywatnosci" className="underline hover:text-[#FF1493]">
          Polityką Prywatności
        </a>
        .
      </p>
    </form>
  )
}

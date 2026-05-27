import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

const contactDetails = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+48 123 456 789',
    href: 'tel:+48123456789',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'kontakt@hometria.pl',
    href: 'mailto:kontakt@hometria.pl',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'ul. Marszałkowska 10/16, 00-590 Warszawa',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    label: 'Godziny pracy',
    value: 'Pon – Pt: 9:00–18:00, Sob: 10:00–14:00',
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#E6007E] mb-3">
            Skontaktuj się
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Porozmawiajmy o Twojej nieruchomości
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Wypełnij formularz, a nasz doradca odezwie się do Ciebie
            w ciągu jednego dnia roboczego.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-7 sm:p-10 border border-gray-100">
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dane kontaktowe</h3>
              <p className="text-gray-500 text-sm">
                Preferujesz kontakt telefoniczny? Zadzwoń, a z przyjemnością
                odpowiemy na wszystkie pytania.
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-pink-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#E6007E]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-gray-800">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-gray-100 h-48 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
              <MapPin className="w-5 h-5 mr-2 text-[#E6007E]" />
              Mapa — integracja z Google Maps
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

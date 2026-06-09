const schema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://hometria.pl/#business',
  name: 'Hometria',
  alternateName: 'Hometria Biuro Nieruchomości',
  url: 'https://hometria.pl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://hometria.pl/logo.png',
    width: 200,
    height: 60,
  },
  image: 'https://hometria.pl/hero-interior.png',
  description:
    'Profesjonalne biuro nieruchomości. Sprzedaż, wynajem i odkup mieszkań, domów i działek. Ponad 12 lat doświadczenia.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Grunwaldzka 10, pawilon D3',
    addressLocality: 'Malbork',
    postalCode: '82-200',
    addressRegion: 'Pomorskie',
    addressCountry: 'PL',
  },
  telephone: '+48889000829',
  email: 'kontakt@hometria.pl',
  priceRange: '$$',
  currenciesAccepted: 'PLN',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: ['https://www.facebook.com/hometria'],
}

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

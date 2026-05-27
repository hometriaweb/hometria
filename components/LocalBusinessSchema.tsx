const schema = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': 'https://hometria.pl/#business',
  name: 'Hometria',
  alternateName: 'Hometria Biuro Nieruchomości Radom',
  url: 'https://hometria.pl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://hometria.pl/logo.png',
    width: 200,
    height: 60,
  },
  image: 'https://hometria.pl/hero-interior.jpg',
  description:
    'Profesjonalne biuro nieruchomości w Radomiu. Sprzedaż, wynajem i odkup mieszkań, domów i działek w Radomiu i okolicach. Ponad 12 lat doświadczenia na lokalnym rynku.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Przykładowa 1',
    addressLocality: 'Radom',
    postalCode: '26-600',
    addressRegion: 'Mazowieckie',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4027,
    longitude: 21.1471,
  },
  telephone: '+48123456789',
  email: 'kontakt@hometria.pl',
  priceRange: '$$',
  currenciesAccepted: 'PLN',
  paymentAccepted: 'Przelew bankowy, gotówka',
  areaServed: [
    { '@type': 'City', name: 'Radom' },
    { '@type': 'AdministrativeArea', name: 'Powiat radomski' },
    { '@type': 'AdministrativeArea', name: 'Województwo mazowieckie' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
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

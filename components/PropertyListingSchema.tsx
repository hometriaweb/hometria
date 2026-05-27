import type { Property } from '@/types/property'

interface Props {
  property: Property
  slug: string
  imageUrl?: string
}

function formatPricePLN(price: number) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(price)
}

const rentalPattern = /wynajem|najem|do wynajęcia/i

export default function PropertyListingSchema({ property, slug, imageUrl }: Props) {
  const isRental = rentalPattern.test(property.title)
  const transactionLabel = isRental ? 'na wynajem' : 'na sprzedaż'
  const pageUrl = `https://hometria.pl/oferty/${slug}`

  const roomsPart =
    property.rooms > 0
      ? `, ${property.rooms} ${property.rooms === 1 ? 'pokój' : property.rooms <= 4 ? 'pokoje' : 'pokoi'}`
      : ''

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        '@id': `${pageUrl}#listing`,
        name: property.title,
        description: `${property.category} ${transactionLabel} w lokalizacji ${property.location}. Powierzchnia ${property.area} m²${roomsPart}. Cena: ${formatPricePLN(property.price)}.`,
        url: pageUrl,
        ...(imageUrl && { image: imageUrl }),
        floorSize: {
          '@type': 'QuantitativeValue',
          value: property.area,
          unitCode: 'MTK',
        },
        ...(property.rooms > 0 && { numberOfRooms: property.rooms }),
        address: {
          '@type': 'PostalAddress',
          addressLocality: property.location,
          addressCountry: 'PL',
        },
        offers: {
          '@type': 'Offer',
          price: property.price,
          priceCurrency: 'PLN',
          availability: 'https://schema.org/InStock',
          businessFunction: isRental
            ? 'https://schema.org/LeaseOut'
            : 'https://schema.org/Sell',
        },
        offeredBy: {
          '@id': 'https://hometria.pl/#business',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Strona główna',
            item: 'https://hometria.pl',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Oferty',
            item: 'https://hometria.pl/oferty',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: property.title,
            item: pageUrl,
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

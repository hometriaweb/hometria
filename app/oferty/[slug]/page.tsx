import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  MapPin,
  Maximize2,
  DoorOpen,
  Star,
  ChevronRight,
  Phone,
  Mail,
  Tag,
  LayoutGrid,
  ArrowLeft,
} from 'lucide-react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PropertyGallery from '@/components/PropertyGallery'
import PropertyListingSchema from '@/components/PropertyListingSchema'
import ContactForm from '@/components/ContactForm'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import {
  PROPERTY_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
} from '@/lib/queries'
import type { Property } from '@/types/property'
import type { SanityImageSource } from '@sanity/image-url'

// ─── Static params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(ALL_SLUGS_QUERY)
  return slugs.map(({ slug }) => ({ slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const property = await client.fetch<Property | null>(
    PROPERTY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 3600 } }
  )
  if (!property) return {}

  const ogImage = property.mainImage
    ? typeof property.mainImage === 'string'
      ? property.mainImage
      : urlFor(property.mainImage).width(1200).height(630).url()
    : undefined

  const isRental = /wynajem|najem|do wynajęcia/i.test(property.title)
  const transactionLabel = isRental ? 'na wynajem' : 'na sprzedaż'
  const formattedPrice = new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(property.price)

  const roomsPart =
    property.rooms > 0
      ? `, ${property.rooms} ${property.rooms === 1 ? 'pokój' : property.rooms <= 4 ? 'pokoje' : 'pokoi'}`
      : ''

  // title feeds into root layout template: "<title> | Hometria"
  const title = `${property.title} ${transactionLabel} – ${property.location}`
  const description = `${property.category} ${transactionLabel} w ${property.location}. ${property.area} m²${roomsPart}. Cena: ${formattedPrice}. Sprawdź ofertę biura nieruchomości Hometria.`

  return {
    title,
    description,
    alternates: {
      canonical: `/oferty/${slug}`,
    },
    openGraph: {
      title: `${title} | Hometria`,
      description,
      url: `https://hometria.pl/oferty/${slug}`,
      type: 'article',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `${property.title} – ${property.category} ${transactionLabel} w ${property.location}`,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatPrice(price: number) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

function resolveImages(property: Property): string[] {
  const images: string[] = []

  // Main image
  if (property.mainImage) {
    if (typeof property.mainImage === 'string') {
      images.push(property.mainImage)
    } else {
      images.push(
        urlFor(property.mainImage as SanityImageSource)
          .width(1600)
          .height(900)
          .fit('crop')
          .auto('format')
          .url(),
      )
    }
  }

  // Gallery items
  if (property.gallery?.length) {
    for (const img of property.gallery) {
      if (typeof img === 'string') {
        images.push(img)
      } else {
        images.push(
          urlFor(img as SanityImageSource)
            .width(1600)
            .height(900)
            .fit('crop')
            .auto('format')
            .url(),
        )
      }
    }
  }

  return images
}

const categoryColors: Record<Property['category'], string> = {
  Mieszkanie: 'bg-[#FF1493]/10 text-[#FF1493]',
  Dom: 'bg-emerald-50 text-emerald-700',
  Działka: 'bg-amber-50 text-amber-700',
  'Lokale komercyjne': 'bg-blue-50 text-blue-700',
}

// ─── Detail stat row ──────────────────────────────────────────────────────────
function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="w-9 h-9 rounded-lg bg-pink-50 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-[#FF1493]" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const property = await client.fetch<Property | null>(
    PROPERTY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 3600 } }
  )

  if (!property) notFound()

  const p = property as Property
  const images = resolveImages(p)
  const price = formatPrice(p.price)
  const pricePerM2 = p.area > 0 ? formatPrice(Math.round(p.price / p.area)) : null
  const mainImageUrl = images[0]

  return (
    <>
      <PropertyListingSchema property={p} slug={slug} imageUrl={mainImageUrl} />
      <Navbar />

      <main className="pt-18 bg-white min-h-screen">
        {/* ── Breadcrumb ─────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-gray-500">
            <Link href="/" className="hover:text-[#FF1493] transition-colors">
              Strona główna
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <Link href="/oferty" className="hover:text-[#FF1493] transition-colors">
              Oferty
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{p.title}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {/* ── Title + badges ─────────────────────────────────── */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[p.category]}`}>
                  {p.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                  Rynek {p.marketType.toLowerCase()}
                </span>
                {p.isPromoted && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    Oferta promowana
                  </span>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">{p.title}</h1>
              <div className="flex items-center gap-1.5 mt-2 text-gray-500">
                <MapPin className="w-4 h-4 text-[#FF1493]" />
                <span className="text-sm">{p.location}</span>
              </div>
            </div>

            <Link
              href="/oferty"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#FF1493] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do ofert
            </Link>
          </div>

          {/* ── Main grid: gallery + sidebar ───────────────────── */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {/* Gallery — takes 2 cols */}
            <div className="lg:col-span-2">
              <PropertyGallery images={images} title={p.title} />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Price card */}
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
                  Cena
                </p>
                <p className="text-3xl font-black text-gray-900 mb-1">{price}</p>
                {pricePerM2 && (
                  <p className="text-sm text-gray-400">{pricePerM2} / m²</p>
                )}

                <div className="mt-6 space-y-3">
                  <a
                    href="tel:+48889000829"
                    id="property-call-cta"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FF1493] text-white font-semibold text-sm shadow-lg shadow-pink-200 hover:bg-[#D9007B] active:scale-95 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    Zadzwoń: +48 889 000 829
                  </a>
                  <a
                    href="#kontakt-formularz"
                    id="property-contact-cta"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-gray-200 text-gray-800 font-semibold text-sm hover:border-[#FF1493] hover:text-[#FF1493] active:scale-95 transition-all duration-200"
                  >
                    <Mail className="w-4 h-4" />
                    Napisz do nas
                  </a>
                </div>
              </div>

              {/* Key details */}
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                <h2 className="text-sm font-bold text-gray-900 mb-1">Szczegóły oferty</h2>
                <Stat icon={Maximize2} label="Powierzchnia" value={`${p.area} m²`} />
                {p.rooms > 0 && (
                  <Stat
                    icon={DoorOpen}
                    label="Liczba pokoi"
                    value={`${p.rooms} ${p.rooms === 1 ? 'pokój' : p.rooms <= 4 ? 'pokoje' : 'pokoi'}`}
                  />
                )}
                <Stat icon={Tag} label="Typ nieruchomości" value={p.category} />
                <Stat
                  icon={LayoutGrid}
                  label="Rynek"
                  value={`Rynek ${p.marketType.toLowerCase()}`}
                />
                <Stat icon={MapPin} label="Lokalizacja" value={p.location} />
              </div>

              {/* Agent card */}
              <div className="rounded-2xl bg-gray-950 text-white p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Twój doradca
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF1493]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#FF1493] font-black text-lg">H</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Zespół Hometria</p>
                    <p className="text-xs text-gray-400">Biuro Nieruchomości</p>
                  </div>
                </div>
                <a
                  href="mailto:kontakt@hometria.pl"
                  className="text-xs text-gray-400 hover:text-[#FF1493] transition-colors"
                >
                  kontakt@hometria.pl
                </a>
              </div>
            </aside>
          </div>

          {/* ── Contact form ────────────────────────────────────── */}
          <section
            id="kontakt-formularz"
            className="max-w-3xl mx-auto"
            aria-labelledby="contact-section-title"
          >
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-2">
                Zainteresowany ofertą?
              </p>
              <h2 id="contact-section-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Skontaktuj się z nami
              </h2>
              <p className="text-gray-500 mt-2 max-w-sm mx-auto text-sm">
                Wypełnij formularz, a nasz doradca odezwie się do Ciebie w ciągu jednego dnia roboczego.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-7 sm:p-10">
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

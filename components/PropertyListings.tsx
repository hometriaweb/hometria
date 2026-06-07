'use client'

import { useState, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, ChevronDown, X, Search } from 'lucide-react'
import { PropertyCard } from './PropertyCard'
import { filterProperties } from '@/lib/filters'
import type {
  Property,
  PropertyFilters,
  PropertyCategory,
  PropertyMarketType,
} from '@/types/property'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
})

// ─── Types ────────────────────────────────────────────────────────────────────
type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc'

// ─── Constants ────────────────────────────────────────────────────────────────
const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Najnowsze' },
  { value: 'price-asc', label: 'Cena: rosnąco' },
  { value: 'price-desc', label: 'Cena: malejąco' },
  { value: 'area-asc', label: 'Powierzchnia: rosnąco' },
  { value: 'area-desc', label: 'Powierzchnia: malejąco' },
]

const CATEGORIES: PropertyCategory[] = ['Mieszkanie', 'Dom', 'Działka', 'Lokale komercyjne']
const MARKET_TYPES: PropertyMarketType[] = ['Pierwotny', 'Wtórny']
const ROOM_OPTIONS = [1, 2, 3, 4, 5]

// ─── Sort helper ──────────────────────────────────────────────────────────────
function sortProperties(properties: Property[], sortBy: SortOption): Property[] {
  return [...properties].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':  return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'area-asc':   return a.area - b.area
      case 'area-desc':  return b.area - a.area
      default:           return 0 // newest — already sorted by _createdAt from GROQ
    }
  })
}

// ─── Filter chip ──────────────────────────────────────────────────────────────
function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-xs font-medium text-[#FF1493]">
      {label}
      <button onClick={onRemove} aria-label={`Usuń filtr: ${label}`}>
        <X className="w-3 h-3" />
      </button>
    </span>
  )
}

// ─── Toggle button ────────────────────────────────────────────────────────────
function ToggleBtn({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
        active
          ? 'border-[#FF1493] bg-[#FF1493] text-white'
          : 'border-gray-200 bg-white text-gray-600 hover:border-[#FF1493] hover:text-[#FF1493]'
      }`}
    >
      {children}
    </button>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function PropertyListings({ properties }: { properties: Property[] }) {
  const [filters, setFilters] = useState<PropertyFilters>({})
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [search, setSearch] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const update = useCallback(
    <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K] | undefined) => {
      setFilters((f) => ({ ...f, [key]: value }))
    },
    [],
  )

  const toggleCategory = useCallback(
    (cat: PropertyCategory) =>
      setFilters((f) => ({ ...f, category: f.category === cat ? undefined : cat })),
    [],
  )

  const toggleMarketType = useCallback(
    (mt: PropertyMarketType) =>
      setFilters((f) => ({ ...f, marketType: f.marketType === mt ? undefined : mt })),
    [],
  )

  const clearFilters = useCallback(() => {
    setFilters({})
    setSearch('')
  }, [])

  const results = useMemo(() => {
    let list = filterProperties(properties, filters)
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q),
      )
    }
    return sortProperties(list, sortBy)
  }, [properties, filters, search, sortBy])

  const activeChips = [
    filters.category && { label: filters.category, clear: () => update('category', undefined) },
    filters.marketType && { label: `Rynek ${filters.marketType.toLowerCase()}`, clear: () => update('marketType', undefined) },
    filters.priceMin != null && { label: `Od ${filters.priceMin.toLocaleString('pl-PL')} PLN`, clear: () => update('priceMin', undefined) },
    filters.priceMax != null && { label: `Do ${filters.priceMax.toLocaleString('pl-PL')} PLN`, clear: () => update('priceMax', undefined) },
    filters.areaMin != null && { label: `Min. ${filters.areaMin} m²`, clear: () => update('areaMin', undefined) },
    filters.rooms != null && { label: `Min. ${filters.rooms} pok.`, clear: () => update('rooms', undefined) },
  ].filter(Boolean) as { label: string; clear: () => void }[]

  const roomsLabel = (n: number) =>
    n === 1 ? 'pokój' : n <= 4 ? 'pokoje' : 'pokoi'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* ── Page header ──────────────────────────────────────────── */}
      <motion.div {...fadeUp(0)} className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF1493] mb-2">
          Nasza baza
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Wszystkie oferty
        </h1>
      </motion.div>

      {/* ── Search + controls bar ─────────────────────────────────── */}
      <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="search"
            id="property-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Szukaj po nazwie lub lokalizacji…"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FF1493] focus:ring-2 focus:ring-[#FF1493]/20 transition-all"
          />
        </div>

        {/* Filter toggle */}
        <button
          id="toggle-filters"
          onClick={() => setShowFilters((s) => !s)}
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
            showFilters || activeChips.length > 0
              ? 'border-[#FF1493] bg-[#FF1493] text-white'
              : 'border-gray-200 bg-white text-gray-700 hover:border-[#FF1493] hover:text-[#FF1493]'
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filtry
          {activeChips.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-white text-[#FF1493] text-xs font-bold flex items-center justify-center">
              {activeChips.length}
            </span>
          )}
        </button>

        {/* Sort */}
        <div className="relative">
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="appearance-none pl-4 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-[#FF1493] cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-500 ml-auto shrink-0">
          <span className="font-semibold text-gray-900">{results.length}</span>{' '}
          {results.length === 1 ? 'oferta' : results.length <= 4 ? 'oferty' : 'ofert'}
        </p>
      </motion.div>

      {/* ── Filter panel ──────────────────────────────────────────── */}
      {showFilters && (
        <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-bold text-gray-900 text-sm">Filtry</h2>
            {activeChips.length > 0 && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#FF1493] font-medium hover:underline"
              >
                <X className="w-3.5 h-3.5" />
                Wyczyść wszystkie
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                Typ nieruchomości
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <ToggleBtn
                    key={cat}
                    active={filters.category === cat}
                    onClick={() => toggleCategory(cat)}
                  >
                    {cat}
                  </ToggleBtn>
                ))}
              </div>
            </div>

            {/* Market type */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                Rynek
              </p>
              <div className="flex flex-wrap gap-2">
                {MARKET_TYPES.map((mt) => (
                  <ToggleBtn
                    key={mt}
                    active={filters.marketType === mt}
                    onClick={() => toggleMarketType(mt)}
                  >
                    Rynek {mt.toLowerCase()}
                  </ToggleBtn>
                ))}
              </div>
            </div>

            {/* Price range */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                Cena (PLN)
              </p>
              <div className="flex items-center gap-2">
                <input
                  id="filter-price-min"
                  type="number"
                  placeholder="Od"
                  min={0}
                  value={filters.priceMin ?? ''}
                  onChange={(e) =>
                    update('priceMin', e.target.value ? Number(e.target.value) : undefined)
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF1493] focus:ring-1 focus:ring-[#FF1493]/20"
                />
                <span className="text-gray-400 shrink-0 text-xs">–</span>
                <input
                  id="filter-price-max"
                  type="number"
                  placeholder="Do"
                  min={0}
                  value={filters.priceMax ?? ''}
                  onChange={(e) =>
                    update('priceMax', e.target.value ? Number(e.target.value) : undefined)
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF1493] focus:ring-1 focus:ring-[#FF1493]/20"
                />
              </div>
            </div>

            {/* Area + Rooms */}
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                  Min. powierzchnia (m²)
                </p>
                <input
                  id="filter-area-min"
                  type="number"
                  placeholder="np. 50"
                  min={0}
                  value={filters.areaMin ?? ''}
                  onChange={(e) =>
                    update('areaMin', e.target.value ? Number(e.target.value) : undefined)
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#FF1493] focus:ring-1 focus:ring-[#FF1493]/20"
                />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-2.5">
                  Min. liczba pokoi
                </p>
                <div className="flex gap-1.5">
                  {ROOM_OPTIONS.map((r) => (
                    <ToggleBtn
                      key={r}
                      active={filters.rooms === r}
                      onClick={() => update('rooms', filters.rooms === r ? undefined : r)}
                    >
                      {r}+
                    </ToggleBtn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Active filter chips ───────────────────────────────────── */}
      {activeChips.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {activeChips.map((chip) => (
            <Chip key={chip.label} label={chip.label} onRemove={chip.clear} />
          ))}
        </div>
      )}

      {/* ── Results grid ─────────────────────────────────────────── */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-28 text-center">
          <span className="text-6xl mb-5">🏠</span>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Brak pasujących ofert</h2>
          <p className="text-gray-500 mb-6 max-w-xs">
            Zmień kryteria wyszukiwania lub wyczyść filtry, aby zobaczyć więcej ofert.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-3 rounded-xl bg-[#FF1493] text-white font-semibold text-sm hover:bg-[#D9007B] transition-colors"
          >
            Wyczyść filtry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {results.map((property, i) => (
            <motion.div
              key={property._id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                ease: [0.25, 0.1, 0.25, 1],
                delay: Math.min(i * 0.07, 0.35),
              }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      )}

      <span className="sr-only">{roomsLabel(1)}</span>
    </div>
  )
}

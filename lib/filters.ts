/**
 * Pure client-safe filter/sort helpers — NO server imports.
 *
 * This file is intentionally kept free of any next-sanity / server-only
 * imports so it can be safely imported by Client Components.
 */
import type { Property, PropertyFilters } from '@/types/property'

export function filterProperties(
  properties: Property[],
  filters: PropertyFilters,
): Property[] {
  return properties.filter((p) => {
    if (filters.marketType && p.marketType !== filters.marketType) return false
    if (filters.category && p.category !== filters.category) return false
    if (filters.priceMin != null && p.price < filters.priceMin) return false
    if (filters.priceMax != null && p.price > filters.priceMax) return false
    if (filters.areaMin != null && p.area < filters.areaMin) return false
    if (filters.areaMax != null && p.area > filters.areaMax) return false
    if (filters.rooms != null && p.rooms < filters.rooms) return false
    if (
      filters.location &&
      !p.location.toLowerCase().includes(filters.location.toLowerCase())
    )
      return false
    return true
  })
}

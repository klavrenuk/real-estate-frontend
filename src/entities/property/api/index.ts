import type { Property, PropertyListResponse } from '../model/types'
import { useApi } from '~/shared/api'

export function fetchProperties() {
  const api = useApi()

  return api<PropertyListResponse>('/properties')
}

export function fetchProperty(id: string | number) {
  const api = useApi()

  return api<Property>(`/properties/${id}`)
}

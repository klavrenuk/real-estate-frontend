export type PropertyType = 'apartment' | 'house' | 'commercial'

export interface Property {
  id: number
  title: string
  price: number
  currency: string
  type: PropertyType
  city: string
  address: string
  rooms: number
  area: number
  floor: number
  floors: number
  image: string
  createdAt: string
}

export interface PropertyListResponse {
  items: Property[]
  total: number
}

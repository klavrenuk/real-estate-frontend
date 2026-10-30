import { properties } from '../utils/properties'

export default defineEventHandler(() => ({
  items: properties,
  total: properties.length,
}))

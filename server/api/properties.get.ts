import { properties } from '~~/server/utils/properties'

export default defineEventHandler(() => ({
  items: properties,
  total: properties.length,
}))

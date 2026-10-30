import { properties } from '~~/server/utils/properties'

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'))

  if (!Number.isInteger(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Некорректный id' })
  }

  const property = properties.find(item => item.id === id)

  if (!property) {
    throw createError({ statusCode: 404, statusMessage: 'Объект не найден' })
  }

  return property
})

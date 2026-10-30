const priceFormatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0,
})

const areaFormatter = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 1,
})

export function formatPrice(value: number) {
  return priceFormatter.format(value)
}

export function formatArea(value: number) {
  return `${areaFormatter.format(value)} м²`
}

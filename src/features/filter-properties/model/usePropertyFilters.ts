import type { Property, PropertyType } from '~/entities/property'

export type PropertyFilterType = 'all' | PropertyType

export function usePropertyFilters(items: MaybeRefOrGetter<Property[]>) {
  const activeType = ref<PropertyFilterType>('all')
  const query = ref('')

  const tabs: { value: PropertyFilterType, label: string }[] = [
    { value: 'all', label: 'Все' },
    { value: 'apartment', label: 'Квартиры' },
    { value: 'house', label: 'Дома' },
    { value: 'commercial', label: 'Коммерческая' },
  ]

  const filtered = computed(() => {
    const needle = query.value.trim().toLowerCase()

    return toValue(items).filter((item) => {
      if (activeType.value !== 'all' && item.type !== activeType.value) {
        return false
      }

      if (!needle) {
        return true
      }

      return `${item.city} ${item.address} ${item.title}`.toLowerCase().includes(needle)
    })
  })

  return { activeType, query, tabs, filtered }
}

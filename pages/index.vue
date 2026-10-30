<script setup lang="ts">
import type { PropertyType, PropertyListResponse } from '~/types/property'

const api = useApi()

const { data, status, error, refresh } = await useAsyncData('properties', () =>
  api<PropertyListResponse>('/properties'),
)

const activeType = ref<'all' | PropertyType>('all')
const query = ref('')

const tabs: { value: 'all' | PropertyType, label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'apartment', label: 'Квартиры' },
  { value: 'house', label: 'Дома' },
  { value: 'commercial', label: 'Коммерческая' },
]

const filtered = computed(() => {
  const items = data.value?.items ?? []
  const needle = query.value.trim().toLowerCase()

  return items.filter((item) => {
    if (activeType.value !== 'all' && item.type !== activeType.value) {
      return false
    }

    if (!needle) {
      return true
    }

    return `${item.city} ${item.address} ${item.title}`.toLowerCase().includes(needle)
  })
})
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 pt-10">
    <h1 class="text-[30px] font-bold leading-tight tracking-tight sm:text-[40px]">
      Недвижимость в России
    </h1>

    <div class="mt-6 rounded-xl border border-line p-4">
      <div class="-mb-px flex gap-6 overflow-x-auto border-b border-line">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          type="button"
          class="-mb-px border-b-2 pb-3 text-[15px] transition"
          :class="activeType === tab.value
            ? 'border-ink font-medium text-ink'
            : 'border-transparent text-muted hover:text-ink'"
          @click="activeType = tab.value"
        >
          {{ tab.label }}
        </button>
      </div>

      <form class="mt-4 flex flex-col gap-2 sm:flex-row" @submit.prevent>
        <input
          v-model="query"
          class="field sm:flex-1"
          placeholder="Город, улица или жилой комплекс"
          aria-label="Поиск объектов"
        >
        <button type="submit" class="btn-accent sm:w-44">
          Найти
        </button>
      </form>
    </div>
  </section>

  <section class="mx-auto max-w-[1200px] px-4 py-8">
    <div class="mb-5 flex items-baseline justify-between">
      <h2 class="text-[20px] font-bold">Объявления</h2>
      <span class="text-[13px] text-muted">Найдено {{ filtered.length }}</span>
    </div>

    <div v-if="status === 'pending'" class="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 6" :key="n" class="animate-pulse">
        <div class="aspect-[4/3] rounded-lg bg-surface" />
        <div class="mt-3 h-5 w-1/2 rounded bg-surface" />
        <div class="mt-2 h-4 w-3/4 rounded bg-surface" />
      </div>
    </div>

    <div v-else-if="error" class="rounded-lg border border-line p-8 text-center">
      <p class="text-[15px] text-ink">Не удалось загрузить объявления</p>
      <button type="button" class="btn-accent mt-4" @click="refresh()">Повторить</button>
    </div>

    <div v-else-if="!filtered.length" class="rounded-lg border border-line p-8 text-center">
      <p class="text-[15px]">Ничего не найдено</p>
      <p class="mt-1 text-[13px] text-muted">Измените запрос или выберите другой раздел</p>
    </div>

    <div v-else class="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
      <PropertyCard v-for="property in filtered" :key="property.id" :property="property" />
    </div>
  </section>
</template>

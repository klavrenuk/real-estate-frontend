<script setup lang="ts">
import type { Property } from '~/types/property'

const route = useRoute()
const api = useApi()
const id = route.params.id

const { data: property, status, error } = await useAsyncData(`property-${id}`, () =>
  api<Property>(`/properties/${id}`),
)

if (!property.value) {
  throw createError({ statusCode: error.value ? 500 : 404, statusMessage: 'Объект не найден' })
}

const typeLabels: Record<Property['type'], string> = {
  apartment: 'Квартира',
  house: 'Дом',
  commercial: 'Коммерческая',
}

const params = computed(() => {
  if (!property.value) {
    return []
  }

  return [
    { label: 'Тип', value: typeLabels[property.value.type] },
    { label: 'Комнат', value: String(property.value.rooms) },
    { label: 'Площадь', value: formatArea(property.value.area) },
    { label: 'Этаж', value: `${property.value.floor} из ${property.value.floors}` },
    { label: 'Город', value: property.value.city },
    { label: 'Адрес', value: property.value.address },
  ]
})
</script>

<template>
  <section v-if="property" class="mx-auto max-w-[1200px] px-4 py-6">
    <nav class="flex items-center gap-2 text-[13px] text-muted">
      <NuxtLink to="/" class="hover:text-ink">Недвижимость</NuxtLink>
      <span>/</span>
      <span>{{ property.city }}</span>
      <span>/</span>
      <span class="text-ink">{{ typeLabels[property.type] }}</span>
    </nav>

    <div v-if="status === 'pending'" class="mt-6 aspect-[16/9] animate-pulse rounded-xl bg-surface" />

    <div v-else class="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div>
        <img
          :src="property.image"
          :alt="property.title"
          class="aspect-[16/9] w-full rounded-xl bg-surface object-cover"
        >

        <div class="mt-8">
          <h1 class="text-[24px] font-bold leading-snug sm:text-[30px]">
            {{ property.rooms }}-комн. {{ typeLabels[property.type].toLowerCase() }}, {{ formatArea(property.area) }}
          </h1>
          <p class="mt-2 text-[15px] text-muted">{{ property.title }}</p>
        </div>

        <dl class="mt-6 divide-y divide-line border-y border-line">
          <div v-for="param in params" :key="param.label" class="flex justify-between gap-6 py-3 text-[15px]">
            <dt class="text-muted">{{ param.label }}</dt>
            <dd class="text-right font-medium">{{ param.value }}</dd>
          </div>
        </dl>
      </div>

      <aside class="lg:sticky lg:top-20 lg:self-start">
        <div class="rounded-xl border border-line p-5">
          <p class="text-[28px] font-bold leading-none">{{ formatPrice(property.price) }}</p>
          <p class="mt-2 text-[13px] text-muted">Цена объекта</p>

          <button type="button" class="btn-accent mt-5 w-full">Связаться с агентом</button>
          <button type="button" class="btn-outline mt-2 w-full">Позвонить</button>

          <p class="mt-4 text-[12px] leading-relaxed text-muted">
            Демонстрационное объявление. Актуальность цены и характеристик уточняйте у продавца.
          </p>
        </div>
      </aside>
    </div>
  </section>
</template>

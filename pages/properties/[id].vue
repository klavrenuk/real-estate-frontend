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
</script>

<template>
  <section v-if="property" class="mx-auto max-w-6xl px-4 py-10">
    <NuxtLink to="/" class="text-sm font-medium text-brand-700 hover:underline">← В каталог</NuxtLink>

    <div v-if="status === 'pending'" class="mt-6 h-96 animate-pulse rounded-2xl bg-slate-200" />

    <div v-else class="mt-6 grid gap-8 lg:grid-cols-[2fr_1fr]">
      <img :src="property.image" :alt="property.title" class="h-96 w-full rounded-2xl object-cover">

      <div class="space-y-4">
        <span class="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
          {{ typeLabels[property.type] }}
        </span>
        <h1 class="text-2xl font-bold text-slate-900">{{ property.title }}</h1>
        <p class="text-slate-500">{{ property.city }}, {{ property.address }}</p>

        <dl class="grid grid-cols-2 gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
          <div>
            <dt class="text-xs text-slate-500">Комнат</dt>
            <dd class="font-semibold">{{ property.rooms }}</dd>
          </div>
          <div>
            <dt class="text-xs text-slate-500">Площадь</dt>
            <dd class="font-semibold">{{ formatArea(property.area) }}</dd>
          </div>
          <div>
            <dt class="text-xs text-slate-500">Этаж</dt>
            <dd class="font-semibold">{{ property.floor }} из {{ property.floors }}</dd>
          </div>
          <div>
            <dt class="text-xs text-slate-500">Цена</dt>
            <dd class="font-semibold">{{ formatPrice(property.price) }}</dd>
          </div>
        </dl>

        <button class="w-full rounded-xl bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700">
          Связаться с агентом
        </button>
      </div>
    </div>
  </section>
</template>

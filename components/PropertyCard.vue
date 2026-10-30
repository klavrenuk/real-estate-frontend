<script setup lang="ts">
import type { Property } from '~/types/property'

defineProps<{
  property: Property
}>()

const typeLabels: Record<Property['type'], string> = {
  apartment: 'Квартира',
  house: 'Дом',
  commercial: 'Коммерческая',
}
</script>

<template>
  <article class="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
    <NuxtLink :to="`/properties/${property.id}`" class="block">
      <img
        :src="property.image"
        :alt="property.title"
        loading="lazy"
        class="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
      >
      <div class="space-y-3 p-5">
        <div class="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span class="rounded-full bg-brand-50 px-2.5 py-1 text-brand-700">{{ typeLabels[property.type] }}</span>
          <span>{{ property.city }}</span>
        </div>
        <h3 class="line-clamp-2 text-base font-semibold leading-snug text-slate-900">
          {{ property.title }}
        </h3>
        <p class="text-sm text-slate-500">{{ property.address }}</p>
        <div class="flex items-center gap-3 text-sm text-slate-600">
          <span>{{ property.rooms }} комн.</span>
          <span class="text-slate-300">•</span>
          <span>{{ formatArea(property.area) }}</span>
          <span class="text-slate-300">•</span>
          <span>{{ property.floor }}/{{ property.floors }} эт.</span>
        </div>
        <p class="pt-1 text-xl font-bold text-slate-900">{{ formatPrice(property.price) }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

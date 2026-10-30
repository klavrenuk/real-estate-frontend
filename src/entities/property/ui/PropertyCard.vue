<script setup lang="ts">
import type { Property } from '../model/types'
import { propertyTypeLabels } from '../model/labels'
import { formatArea, formatPrice } from '~/shared/lib'

defineProps<{
  property: Property
}>()
</script>

<template>
  <article>
    <NuxtLink :to="`/properties/${property.id}`" class="group block">
      <div class="relative overflow-hidden rounded-lg bg-surface">
        <img
          :src="property.image"
          :alt="property.title"
          loading="lazy"
          class="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        >
        <span class="tag absolute left-2 top-2">{{ propertyTypeLabels[property.type] }}</span>
      </div>

      <div class="mt-3">
        <p class="text-[20px] font-bold leading-tight">{{ formatPrice(property.price) }}</p>
        <p class="mt-1 text-[15px] leading-snug transition group-hover:text-muted">
          {{ property.rooms }}-комн. квартира, {{ formatArea(property.area) }}
        </p>
        <p class="mt-1 text-[13px] text-muted">
          {{ property.floor }}/{{ property.floors }} эт. · {{ property.city }}, {{ property.address }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

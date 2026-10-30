<script setup lang="ts">
import type { Property } from '~/entities/property'
import { PropertyParams, propertyTypeLabels } from '~/entities/property'
import { formatArea, formatPrice } from '~/shared/lib'

defineProps<{
  property: Property
}>()
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 py-6">
    <nav class="flex items-center gap-2 text-[13px] text-muted">
      <NuxtLink to="/" class="hover:text-ink">Недвижимость</NuxtLink>
      <span>/</span>
      <span>{{ property.city }}</span>
      <span>/</span>
      <span class="text-ink">{{ propertyTypeLabels[property.type] }}</span>
    </nav>

    <div class="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div>
        <img
          :src="property.image"
          :alt="property.title"
          class="aspect-[16/9] w-full rounded-xl bg-surface object-cover"
        >

        <div class="mt-8">
          <h1 class="text-[24px] font-bold leading-snug sm:text-[30px]">
            {{ property.rooms }}-комн. {{ propertyTypeLabels[property.type].toLowerCase() }}, {{ formatArea(property.area) }}
          </h1>
          <p class="mt-2 text-[15px] text-muted">{{ property.title }}</p>
        </div>

        <PropertyParams :property="property" class="mt-6" />
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

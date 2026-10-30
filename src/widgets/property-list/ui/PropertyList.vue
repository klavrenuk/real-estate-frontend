<script setup lang="ts">
import type { Property } from '~/entities/property'
import { PropertyCard } from '~/entities/property'

defineProps<{
  items: Property[]
  status: 'idle' | 'pending' | 'success' | 'error'
}>()

defineEmits<{
  retry: []
}>()
</script>

<template>
  <div v-if="status === 'pending'" class="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    <div v-for="n in 6" :key="n" class="animate-pulse">
      <div class="aspect-[4/3] rounded-lg bg-surface" />
      <div class="mt-3 h-5 w-1/2 rounded bg-surface" />
      <div class="mt-2 h-4 w-3/4 rounded bg-surface" />
    </div>
  </div>

  <div v-else-if="status === 'error'" class="rounded-lg border border-line p-8 text-center">
    <p class="text-[15px] text-ink">Не удалось загрузить объявления</p>
    <button type="button" class="btn-accent mt-4" @click="$emit('retry')">Повторить</button>
  </div>

  <div v-else-if="!items.length" class="rounded-lg border border-line p-8 text-center">
    <p class="text-[15px]">Ничего не найдено</p>
    <p class="mt-1 text-[13px] text-muted">Измените запрос или выберите другой раздел</p>
  </div>

  <div v-else class="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
    <PropertyCard v-for="property in items" :key="property.id" :property="property" />
  </div>
</template>

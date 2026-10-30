<script setup lang="ts">
import type { PropertyListResponse } from '~/types/property'

const api = useApi()

const { data, status, error, refresh } = await useAsyncData('properties', () =>
  api<PropertyListResponse>('/properties'),
)
</script>

<template>
  <section class="border-b border-slate-200 bg-white">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h1 class="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Квартиры, дома и коммерческая недвижимость
      </h1>
      <p class="mt-4 max-w-xl text-slate-600">
        Подборка актуальных объектов с фотографиями, ценой и характеристиками.
      </p>
    </div>
  </section>

  <section class="mx-auto max-w-6xl px-4 py-10">
    <div v-if="status === 'pending'" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="n in 6" :key="n" class="h-80 animate-pulse rounded-2xl bg-slate-200" />
    </div>

    <div v-else-if="error" class="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
      <p>Не удалось загрузить объекты.</p>
      <button class="mt-3 text-sm font-semibold underline" @click="refresh()">Повторить</button>
    </div>

    <div v-else-if="!data?.items.length" class="rounded-xl border border-slate-200 bg-white p-10 text-center text-slate-500">
      Объекты не найдены.
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <PropertyCard v-for="property in data.items" :key="property.id" :property="property" />
    </div>
  </section>
</template>

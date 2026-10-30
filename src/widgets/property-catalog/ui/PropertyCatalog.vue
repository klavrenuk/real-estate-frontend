<script setup lang="ts">
import { fetchProperties } from '~/entities/property'
import { SearchPanel, usePropertyFilters } from '~/features/filter-properties'
import { PropertyList } from '~/widgets/property-list'

const { data, status, refresh } = await useAsyncData('properties', fetchProperties)
const { activeType, query, tabs, filtered } = usePropertyFilters(() => data.value?.items ?? [])
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 pt-10">
    <h1 class="text-[30px] font-bold leading-tight tracking-tight sm:text-[40px]">
      Недвижимость в России
    </h1>

    <SearchPanel
      v-model:type="activeType"
      v-model:query="query"
      :tabs="tabs"
      class="mt-6"
    />
  </section>

  <section class="mx-auto max-w-[1200px] px-4 py-8">
    <div class="mb-5 flex items-baseline justify-between">
      <h2 class="text-[20px] font-bold">Объявления</h2>
      <span class="text-[13px] text-muted">Найдено {{ filtered.length }}</span>
    </div>

    <PropertyList :items="filtered" :status="status" @retry="refresh" />
  </section>
</template>

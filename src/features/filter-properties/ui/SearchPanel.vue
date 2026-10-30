<script setup lang="ts">
import type { PropertyFilterType } from '../model/usePropertyFilters'

defineProps<{
  tabs: { value: PropertyFilterType, label: string }[]
}>()

const type = defineModel<PropertyFilterType>('type', { required: true })
const query = defineModel<string>('query', { required: true })
</script>

<template>
  <div class="rounded-xl border border-line p-4">
    <div class="-mb-px flex gap-6 overflow-x-auto border-b border-line">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        class="-mb-px border-b-2 pb-3 text-[15px] transition"
        :class="type === tab.value
          ? 'border-ink font-medium text-ink'
          : 'border-transparent text-muted hover:text-ink'"
        @click="type = tab.value"
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
</template>

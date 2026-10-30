<script setup lang="ts">
import type { Property } from '../model/types'
import { propertyTypeLabels } from '../model/labels'
import { formatArea } from '~/shared/lib'

const props = defineProps<{
  property: Property
}>()

const params = computed(() => [
  { label: 'Тип', value: propertyTypeLabels[props.property.type] },
  { label: 'Комнат', value: String(props.property.rooms) },
  { label: 'Площадь', value: formatArea(props.property.area) },
  { label: 'Этаж', value: `${props.property.floor} из ${props.property.floors}` },
  { label: 'Город', value: props.property.city },
  { label: 'Адрес', value: props.property.address },
])
</script>

<template>
  <dl class="divide-y divide-line border-y border-line">
    <div v-for="param in params" :key="param.label" class="flex justify-between gap-6 py-3 text-[15px]">
      <dt class="text-muted">{{ param.label }}</dt>
      <dd class="text-right font-medium">{{ param.value }}</dd>
    </div>
  </dl>
</template>

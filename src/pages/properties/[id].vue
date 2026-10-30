<script setup lang="ts">
import { fetchProperty } from '~/entities/property'
import { PropertyDetail } from '~/widgets/property-detail'

const route = useRoute()
const id = String(route.params.id)

const { data: property, error } = await useAsyncData(`property-${id}`, () => fetchProperty(id))

if (!property.value) {
  throw createError({
    statusCode: error.value?.statusCode ?? 404,
    statusMessage: 'Объект не найден',
  })
}
</script>

<template>
  <PropertyDetail v-if="property" :property="property" />
</template>

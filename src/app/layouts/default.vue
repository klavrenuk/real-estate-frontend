<script setup lang="ts">
import { AppHeader } from '~/widgets/header'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="mt-16 border-t border-line bg-surface py-8">
      <div class="mx-auto max-w-[1200px] px-4">
        <div class="flex items-baseline gap-1.5">
          <span class="text-xl font-black leading-none text-yandex">Я</span>
          <span class="text-[14px] font-bold">Недвижимость</span>
        </div>
        <p class="mt-3 text-[13px] text-muted">
          © {{ new Date().getFullYear() }} Демо-проект. Данные и стили вдохновлены Яндекс Недвижимостью.
        </p>
      </div>
    </footer>
  </div>
</template>

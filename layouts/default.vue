<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t border-slate-200 bg-white py-6">
      <div class="mx-auto max-w-6xl px-4 text-sm text-slate-500">
        © {{ new Date().getFullYear() }} Недвижимость
      </div>
    </footer>
  </div>
</template>

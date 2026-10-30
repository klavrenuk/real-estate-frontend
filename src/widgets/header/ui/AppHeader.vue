<template>
  <header class="sticky top-0 z-20 border-b border-line bg-white">
    <div class="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 px-4">
      <NuxtLink to="/" class="flex shrink-0 items-baseline gap-1.5">
        <span class="text-2xl font-black leading-none text-yandex">Я</span>
        <span class="text-[15px] font-bold tracking-tight">Недвижимость</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 text-[15px] text-muted md:flex">
        <NuxtLink to="/" class="transition hover:text-ink">Купить</NuxtLink>
        <span class="cursor-default transition hover:text-ink">Снять</span>
        <span class="cursor-default transition hover:text-ink">Новостройки</span>
        <span class="cursor-default transition hover:text-ink">Дома</span>
      </nav>

      <button type="button" class="btn-outline !py-2 text-[14px]">
        Войти
      </button>
    </div>
  </header>
</template>

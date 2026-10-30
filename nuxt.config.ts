import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: { strict: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Недвижимость',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Поиск квартир, домов и коммерческой недвижимости' },
      ],
    },
  },
})

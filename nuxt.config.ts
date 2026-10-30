import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
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
  css: ['~/app/assets/main.css'],
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
  srcDir: 'src/',
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [tailwindcss()],
  },
  typescript: { strict: true },
  eslint: {
    config: {
      stylistic: false,
    },
  },
})

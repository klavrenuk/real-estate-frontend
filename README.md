# real-estate-frontend

Nuxt 3 + Vue 3 + Tailwind CSS 4.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
```

## API

Базовый адрес задаётся в `nuxt.config.ts` (`runtimeConfig.public.apiBase`, по умолчанию `/api`) и переопределяется переменной окружения:

```bash
NUXT_PUBLIC_API_BASE=https://api.example.com
```

Запросы выполняются через `composables/useApi.ts`:

```ts
const api = useApi()
const data = await api<PropertyListResponse>('/properties')
```

Моковые эндпоинты для разработки: `server/api/properties.get.ts`, `server/api/properties/[id].get.ts`.

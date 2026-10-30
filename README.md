# real-estate-frontend

Nuxt 3 + Vue 3 + Tailwind CSS 4. Архитектура — Feature-Sliced Design, код в `src/`.

## Команды

```bash
npm install
npm run dev
npm run build
npm run preview
npm run typecheck
```

## Структура

```
src/
  app/                  инициализация приложения
    assets/main.css     Tailwind + дизайн-токены
    layouts/            лейауты
  pages/                роутинг Nuxt (тонкие страницы-композиции)
  widgets/              самостоятельные блоки UI
    header/             шапка
    property-catalog/   страница каталога: загрузка данных, фильтры, список
    property-list/      сетка объявлений и её состояния
    property-detail/    карточка объекта
  features/             пользовательские действия
    filter-properties/  фильтрация по типу и запросу
  entities/             бизнес-сущности
    property/           типы, api, карточка и параметры объекта
  shared/               переиспользуемый код без бизнес-логики
    api/                http-клиент
    lib/                форматтеры
  server/               мок-API на Nitro
```

Импорт — только через публичный API слайса (`index.ts`): `import { PropertyCard } from '~/entities/property'`.
Слои импортируют только нижестоящие: `pages → widgets → features → entities → shared`.

## API

Базовый адрес задаётся в `nuxt.config.ts` (`runtimeConfig.public.apiBase`, по умолчанию `/api`) и переопределяется переменной окружения:

```bash
NUXT_PUBLIC_API_BASE=https://api.example.com
```

Клиент — `src/shared/api/useApi.ts`, запросы сущности — `src/entities/property/api`:

```ts
const { data } = await useAsyncData('properties', fetchProperties)
```

Моковые эндпоинты: `src/server/api/properties.get.ts`, `src/server/api/properties/[id].get.ts`.

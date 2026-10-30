export function useApi() {
  const { public: { apiBase } } = useRuntimeConfig()

  return $fetch.create({
    baseURL: apiBase,
    headers: {
      Accept: 'application/json',
    },
    async onResponseError({ response }) {
      console.error('[api]', response.status, response._data)
    },
  })
}

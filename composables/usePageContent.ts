import { useI18n } from 'vue-i18n'
import { useNuxtApp, useAsyncData } from '#app'

export const usePageContent = async (pageId: string) => {
  const { locale, locales } = useI18n()
  const { $directus, $readItem } = useNuxtApp()

  const currentLocale = locales.value.find((l) => l.code === locale.value)

  const { data: page } = await useAsyncData(
    `page-${pageId}-${currentLocale?.code}`,
    () =>
      $directus.request(
        $readItem('pages', pageId, {
          fields: ['*', { translations: ['*'] }],
          deep: {
            translations: { _filter: { languages_code: { _eq: currentLocale?.iso } } }
          }
        })
      )
  )

  const translation = page.value?.translations?.[0] || {}

  return {
    page: {
      ...translation
    }
  }
}

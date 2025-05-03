import { useI18n } from 'vue-i18n'
import { useNuxtApp, useAsyncData } from '#app'

export const usePageContent = async (pageId: string) => {
  const { locale } = useI18n()
  const { $directus, $readItem } = useNuxtApp()

  const codeMap: Record<string, string> = { fr: 'fr-FR', en: 'en-US' }
  const directusLang = codeMap[locale.value] || locale.value
  // const directusLang = computed(() => codeMap[locale] || locale)

  const { data: page, error, pending } = await useAsyncData(
    `page-${pageId}-${directusLang}`,
    () =>
      $directus.request(
        $readItem('pages', pageId, {
          fields: ['*', { translations: ['*'] }],
          deep: {
            translations: { _filter: { languages_code: { _eq: directusLang } } }
          }
        })
      )
  )

  const translation = page.value?.translations?.[0] || {}
  // const translation = computed(() => page.value?.translations?.[0] || {})
  // console.log('translation', translation)
  return {
    page: {
      ...translation
    }
  }
}

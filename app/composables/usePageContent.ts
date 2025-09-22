import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

export const usePageContent = () => {
  const route = useRoute()
  const { locale } = useI18n()

  const path = computed(() => withLeadingSlash(String(route.path)))

  const {
    data: page,
    pending,
    error,
    refresh,
  } = useAsyncData(
    `page-${path.value}-${locale.value}`,
    async () => {
      const collection = ('content_' + locale.value) as keyof Collections
      const content = await queryCollection(collection).path(path.value).first()

      //   if (!content && locale.value !== 'en') {
      //     const fallbackContent = await queryCollection('content_en').path(pageSlug.value).first()
      //     return fallbackContent
      //   }

      return content
    },
    {
      watch: [locale, path],
      default: () => null,
      server: true,
    }
  )

  const title = computed(() => page.value?.title || '')
  const description = computed(() => page.value?.description || '')
  const body = computed(() => page.value?.body.value || [])

  return {
    page: readonly(page),
    title: readonly(title),
    description: readonly(description),
    body: readonly(body),
    pending: readonly(pending),
    error: readonly(error),
    refresh,
  }
}

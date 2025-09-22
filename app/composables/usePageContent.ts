import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

export const usePageContent = (slug?: string | Ref<string>) => {
  const route = useRoute()
  const { locale } = useI18n()
  
  const pageSlug = computed(() => {
    if (slug) {
      return withLeadingSlash(String(unref(slug)))
    }
    return withLeadingSlash(String(route.params.slug || '/'))
  })

  const { data: page, pending, error, refresh } = useAsyncData(
    `page-${pageSlug.value}-${locale.value}`,
    async () => {
      const collection = ('content_' + locale.value) as keyof Collections
      const content = await queryCollection(collection).path(pageSlug.value).first()

    //   if (!content && locale.value !== 'en') {
    //     const fallbackContent = await queryCollection('content_en').path(pageSlug.value).first()
    //     return fallbackContent
    //   }

      return content
    },
    {
      watch: [locale, pageSlug],
      default: () => null,
      server: true,
    }
  )

  const pageData = computed(() => ({
    title: page.value?.title || '',
    description: page.value?.description || '',
    body: page.value?.body?.value || [],
    meta: {
      socials: page.value?.meta?.socials || '',
      projects_featured: page.value?.meta?.projects_featured || '',
      projects_link: page.value?.meta?.projects_link || '',
      articles_featured: page.value?.meta?.articles_featured || '',
      articles_link: page.value?.meta?.articles_link || '',
    }
  }))

  return {
    page: readonly(page),
    pageData: readonly(pageData),
    pending: readonly(pending),
    error: readonly(error),
    refresh
  }
}
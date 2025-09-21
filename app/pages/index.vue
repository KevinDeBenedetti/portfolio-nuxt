<script setup lang="ts">
import { withLeadingSlash } from 'ufo'
import type { Collections } from '@nuxt/content'

const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug || '/')))

const { data: page } = await useAsyncData(
  'page-' + locale.value,
  async () => {
    console.log('and path:', route.path)
    const collection = ('content_' + locale.value) as keyof Collections
    const content = await queryCollection(collection).path(slug.value).first()

    // Optional: fallback to default locale if content is missing
    // if (!content && locale.value !== 'en') {
    //   return await queryCollection('content_en').path(slug.value).first()
    // }
    console.log('Fetched content:', content)
    return content
  },
  {
    watch: [locale],
  }
)

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: 'https://www.kevindb.dev/images/home.webp',
  twitterCard: 'summary_large_image',
})
console.log('Page data:', page.value)
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro :data="page.body.value" />
      <HomeSocialLinks :socials="page.meta.socials" />
      <HomeFeaturedProjects
        :featured="page.meta.projects_featured"
        :link="page.meta.projects_link"
      />

      <!--
      <HomeFeaturedArticles />
      <HomeNewsletter />
      -->
    </div>
  </main>
</template>

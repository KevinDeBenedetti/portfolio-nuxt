<script setup lang="ts">
import type { Collections } from '@nuxt/content'
const { t, locale } = useI18n()

const { data: page } = await useAsyncData(
  'page-home',
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections
    return await queryCollection(collection).path('/').first()
  },
  {
    watch: [locale],
  }
)

watchEffect(() => {
  useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
    ogTitle: page.value?.title,
    ogDescription: page.value?.description,
    ogImage: 'https://www.kevindb.dev/images/home.webp',
    twitterCard: 'summary_large_image',
  })
})
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro :data="page.body.value" />
      <HomeSocialLinks :socials="t('home.socials')" />
      <HomeFeaturedProjects
        :featured="t('home.projects_featured')"
        :link="t('home.projects_link')"
      />

      <!--
      <HomeFeaturedArticles />
      <HomeNewsletter />
      -->
    </div>
  </main>
</template>

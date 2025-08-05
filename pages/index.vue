<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()



const { data: page } = await useAsyncData(async () => {
  const collection = ('pages_' + locale.value) as keyof Collections
  const content = await queryCollection(collection).where('stem', '=', `${locale.value}/pages/home`).first()

  // Optional: fallback to default locale if content is missing

  return content
}, {
  watch: [locale],
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: 'https://www.kevindb.dev/images/home.webp',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <!--
      <HomeFeaturedArticles />
      <HomeNewsletter />
      -->
    </div>
  </main>
</template>

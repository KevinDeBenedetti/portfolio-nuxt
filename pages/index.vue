<script setup lang="ts">
const { locale } = useI18n()

const { data: page } = await useAsyncData(`home-${locale.value}`, () => {
  return queryCollection('pages').where('stem', '=', `${locale.value}/pages/home`).first()
})

// const { page } = await usePageContent('home')

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
      -->
<!--      <HomeNewsletter />-->
    </div>
  </main>
</template>

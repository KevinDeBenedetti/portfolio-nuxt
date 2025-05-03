<script setup lang="ts">
const { page } = await usePageContent('home')

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
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

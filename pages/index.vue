<script setup>
const { t } = useI18n()

useSeoMeta({
  title: t('home.title'),
  ogTitle: t('home.title'),
  description: t('home.description'),
  ogDescription: t('home.description'),
  ogImage: '/images/avatar.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
<!--      <HomeNewsletter />-->
    </div>
  </main>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { title, description, body, pending } = usePageContent()

watchEffect(() => {
  useSeoMeta({
    title: title.value,
    description: description.value,
    ogTitle: title.value,
    ogDescription: description.value,
    ogImage: 'https://www.kevindb.dev/images/home.webp',
    twitterCard: 'summary_large_image',
  })
})
</script>

<template>
  <main class="min-h-screen">
    <div v-if="pending" class="flex items-center justify-center">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
    <div v-else-if="body && !pending" class="space-y-24">
      <HomeIntro :data="body" />
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
    <div v-else class="flex items-center justify-center">
      <p>Contenu non disponible</p>
    </div>
  </main>
</template>

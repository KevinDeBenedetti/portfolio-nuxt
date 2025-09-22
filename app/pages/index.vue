<script setup lang="ts">
const { page, pageData, pending } = usePageContent()

const body = computed(() => pageData.value.body || [])
const socials = computed(() => pageData.value.meta?.socials || '')
const projects_featured = computed(() => pageData.value.meta?.projects_featured || '')
const projects_link = computed(() => pageData.value.meta?.projects_link || '')

watchEffect(() => {
  useSeoMeta({
    title: pageData.value.title,
    description: pageData.value.description,
    ogTitle: pageData.value.title,
    ogDescription: pageData.value.description,
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
    <div v-else-if="page && !pending" class="space-y-24">
      <HomeIntro :data="body" />
      <HomeSocialLinks :socials="socials" />
      <HomeFeaturedProjects
        :featured="projects_featured"
        :link="projects_link"
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

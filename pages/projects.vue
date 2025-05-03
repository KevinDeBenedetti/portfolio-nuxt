<script setup lang="ts">
const { t, locale } = useI18n()
const { $directus, $readItems } = useNuxtApp()
const codeMap: Record<string, string> = { fr: 'fr-FR', en: 'en-US' }
const directusLang = computed(() => codeMap[locale.value] || locale.value)

const { page } = await usePageContent('projects')

const { data: projects } = await useAsyncData(
  `projects-${directusLang.value}`,
  () => $directus.request($readItems('projects', {
    fields: ['*', { translations: ['*'] }],
    deep: {
      translations: { _filter: { languages_code: { _eq: directusLang.value } } }
    }
  }))
)

useSeoMeta({
  title: page.title,
  description: page.description,
  ogTitle: page.title,
  ogDescription: page.description,
  ogImage: 'https://www.kevindb.dev/images/projects.webp',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" :title="page?.h1" :description="page?.first_p" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

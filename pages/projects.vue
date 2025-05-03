<script setup lang="ts">
const { t, locale } = useI18n()
const { $directus, $readItems } = useNuxtApp()

const codeMap: Record<string,string> = { fr: 'fr-FR', en: 'en-US' }
const directusLang = computed(() => codeMap[locale.value] || locale.value)

const { data: projects, pending, error, refresh } = await useAsyncData(
  () => $directus.request($readItems('projects', {
    fields: ['*', { translations: ['*'] }],
    deep: {
      translations: { _filter: { languages_code: { _eq: directusLang.value } } }
    }
  })),
  { watch: [locale] }
) 

useSeoMeta({
  title: t('projects.title'),
  ogTitle: t('projects.title'),
  description: t('projects.description'),
  ogDescription: t('projects.description'),
  ogImage: 'https://www.kevindb.dev/images/projects.webp',
  twitterCard: 'summary_large_image',
})

// const { data: projects } = await useAsyncData("projects", () =>
// queryCollection('projects')
//     .where('lang', '=', locale.value)
//     .all()
// )
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" :title="t('projects.h1')" :description="t('projects.first_p')" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

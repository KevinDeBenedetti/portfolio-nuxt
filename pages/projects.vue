<script setup lang="ts">
const { t, locale, locales } = useI18n()
const { $directus, $readItems } = useNuxtApp()
// const codeMap: Record<string, string> = { fr: 'fr-FR', en: 'en-US' }
// const directusLang = computed(() => codeMap[locale.value] || locale.value)
const currentLocale = locales.value.find((l) => l.code === locale.value)

const { page } = await usePageContent('projects')

const { data: projects, error } = await useAsyncData(
  `projects-${currentLocale?.code}`,
  () => $directus.request($readItems('projects', {
    fields: ['*', { translations: ['*'] }],
    deep: {
      translations: { _filter: { languages_code: { _eq: currentLocale?.iso } } }
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

const toast = useToast()

if (error.value) {
  toast.add({ 
    title: t('error.title'),
    description: t('error.projects'),
    color: 'error'
  })
}
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

<script setup lang="ts">
const { t, locale } = useI18n()

const { page } = await usePageContent('projects')

// Use Nuxt Content to fetch projects based on current locale
const { data: projects, error } = await useAsyncData(
  `projects-${locale.value}`,
  () => queryCollection('projects')
    .where('lang', '=', locale.value)
    .all()
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

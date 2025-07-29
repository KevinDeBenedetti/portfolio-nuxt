<script lang="ts" setup>
const { t, locale, locales } = useI18n()
const localePath = useLocalePath()

// Utiliser Nuxt Content au lieu de Directus
const { data: projects, error } = await useAsyncData(
  `projects-home-${locale.value}`,
  () => queryCollection('projects')
    .where('lang', '=', locale.value)
    .limit(3)
    .all()
)

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
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">{{ t('home.projects_featured') }}</h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        :label="t('home.projects_link')"
        :to="localePath('projects')"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>
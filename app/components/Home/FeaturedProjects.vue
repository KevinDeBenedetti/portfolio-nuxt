<script lang="ts" setup>
import type { Collections } from '@nuxt/content'
const localePath = useLocalePath()
const { t, locale } = useI18n()

const { data: projects } = await useAsyncData(async () => {
  const collection = ('projects_' + locale.value) as keyof Collections
  const content = await queryCollection(collection)
    .order('sort', 'DESC')
    .limit(3)
    .all()

  return content
}, {
  watch: [locale],
})
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
        color="primary"
      />
    </div>
  </div>
</template>
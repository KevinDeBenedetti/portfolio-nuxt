<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
  title: t('projects.title'),
  ogTitle: t('projects.title'),
  description: t('projects.description'),
  ogDescription: t('projects.description'),
  ogImage: '/images/avatar.png',
  twitterCard: 'summary_large_image',
});

console.log(locale.value)

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").where({ lang: locale.value }).find()
);
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

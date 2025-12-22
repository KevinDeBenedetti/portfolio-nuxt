<script setup lang="ts">
import type { Collections } from '@nuxt/content';
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  'page-legal',
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    return await queryCollection(collection).path('/legal').first();
  },
  {
    watch: [locale],
  }
);
watchEffect(() => {
  useSeoMeta({
    title: page.value?.title,
    ogTitle: page.value?.title,
    description: page.value?.description,
    ogDescription: page.value?.description,
  });
});
</script>

<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <template v-if="page">
        <ContentRenderer :value="page" />
      </template>
    </div>
  </main>
</template>

<style scoped>
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>

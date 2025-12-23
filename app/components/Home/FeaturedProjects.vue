<script lang="ts" setup>
import type { Collections } from '@nuxt/content';
const localePath = useLocalePath();
const { locale } = useI18n();

const props = defineProps<{
  featured: string;
  link: string;
}>();

const { data: projects } = await useAsyncData(
  `featured-projects-${locale.value}`,
  async () => {
    const collection = ('projects_' + locale.value) as keyof Collections;
    const content = await queryCollection(collection).all();
    // Sort by 'sort' field descending
    return content
      .toSorted(
        (a, b) => ((b as { sort?: number }).sort ?? 0) - ((a as { sort?: number }).sort ?? 0)
      )
      .slice(0, 3);
  },
  {
    watch: [locale],
  }
);
</script>

<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      {{ props.featured }}
    </h2>
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton :label="props.link" :to="localePath('projects')" variant="link" color="primary" />
    </div>
  </div>
</template>

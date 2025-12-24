<script setup lang="ts">
import type { GitHubRepoFormatted } from '~~/shared/types/github';

interface Props {
  repo: GitHubRepoFormatted;
}

const props = defineProps<Props>();
const { locale } = useI18n();

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Vue: '#41b883',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051',
  Dockerfile: '#384d54',
  Rust: '#dea584',
  Go: '#00ADD8',
  Java: '#b07219',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
};

const languageColor = computed(() => {
  if (!props.repo.language) return '#8b8b8b';
  return languageColors[props.repo.language] || '#8b8b8b';
});

const formattedDate = computed(() => {
  const date = new Date(props.repo.pushedAt);
  return date.toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
});
</script>

<template>
  <NuxtLink
    class="flex flex-col gap-2 group p-4 rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-800 transition-colors"
    :to="repo.url"
    target="_blank"
    external
  >
    <div class="flex items-start justify-between gap-4">
      <div class="flex-1 min-w-0">
        <h3
          class="text-sm font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate"
        >
          {{ repo.title }}
        </h3>
        <p
          v-if="repo.description"
          class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mt-1"
        >
          {{ repo.description }}
        </p>
      </div>
      <UIcon name="i-heroicons-arrow-up-right" class="w-4 h-4 text-gray-400 flex-shrink-0" />
    </div>

    <div class="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-auto">
      <!-- Language -->
      <span v-if="repo.language" class="flex items-center gap-1">
        <span class="w-3 h-3 rounded-full" :style="{ backgroundColor: languageColor }" />
        {{ repo.language }}
      </span>

      <!-- Stars -->
      <span v-if="repo.stars > 0" class="flex items-center gap-1">
        <UIcon name="i-heroicons-star" class="w-3.5 h-3.5" />
        {{ repo.stars }}
      </span>

      <!-- Forks -->
      <span v-if="repo.forks > 0" class="flex items-center gap-1">
        <UIcon name="i-heroicons-share" class="w-3.5 h-3.5" />
        {{ repo.forks }}
      </span>

      <!-- Updated date -->
      <span class="ml-auto">
        {{ formattedDate }}
      </span>
    </div>

    <!-- Topics -->
    <div v-if="repo.topics?.length" class="flex flex-wrap gap-1 mt-1">
      <span
        v-for="topic in repo.topics.slice(0, 4)"
        :key="topic"
        class="px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
      >
        {{ topic }}
      </span>
      <span
        v-if="repo.topics.length > 4"
        class="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
      >
        +{{ repo.topics.length - 4 }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

declare global {
  interface Window {
    JSConfetti: new () => {
      addConfetti: (options: { emojis: string[] }) => void;
    };
  }
}

const { locale, t } = useI18n();

const { data: page } = await useAsyncData(
  `page-projects-${locale.value}`,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    return await queryCollection(collection).path('/projects').first();
  },
  {
    watch: [locale],
  }
);

const { h1, firstParagraph } = useContentParser(
  (page.value as { body?: { value: unknown[] } })?.body?.value || []
);

const { data: projects } = await useAsyncData(
  `all-projects-${locale.value}`,
  async () => {
    const collection = ('projects_' + locale.value) as keyof Collections;
    const content = await queryCollection(collection).all();
    // Sort by 'sort' field descending
    return content.toSorted(
      (a, b) => ((b as { sort?: number }).sort ?? 0) - ((a as { sort?: number }).sort ?? 0)
    );
  },
  {
    watch: [locale],
  }
);

// Fetch GitHub repos
const { repos: githubRepos, isLoading: isLoadingGitHub } = useGitHubRepos();

watchEffect(() => {
  useSeoMeta({
    title: page.value?.title,
    description: page.value?.description,
    ogTitle: page.value?.title,
    ogDescription: page.value?.description,
    ogImage: '/images/projects.webp',
    twitterCard: 'summary_large_image',
  });
});

const { onLoaded } = useScriptNpm({
  packageName: 'js-confetti',
  file: 'dist/js-confetti.browser.js',
  version: '0.12.0',
  scriptOptions: {
    bundle: true, // Bundle with app to eliminate external script security issues
    use() {
      return { JSConfetti: window.JSConfetti };
    },
  },
});

onLoaded(({ JSConfetti }) => {
  const confetti = new JSConfetti();

  // Modern web developer mix
  confetti.addConfetti({
    emojis: ['💻', '⚡', '🚀', '✨', '🔥', '💡', '🎯', '⚙️'],
  });

  // Or alternatively, random rotation
  const devEmojis = [
    ['💻', '⚡', '🚀', '✨'], // Energy pack
    ['👨‍💻', '🔧', '⚙️', '💡'], // Tools pack
    ['🎉', '🥳', '🏆', '✅'], // Celebration pack
    ['📱', '💾', '🖥️', '⌨️'], // Pack hardware
    ['⚛️', '💻', '🔥', '✨'], // React
    ['💚', '💻', '⚡', '🚀'], // Vue (votre cas avec Nuxt)
    ['💚', '⚡', '🚀', '📦'], // Node.js
    ['🐙', '📝', '🔄', '✅'], // Git/GitHub
  ];

  const randomPack = devEmojis[Math.floor(Math.random() * devEmojis.length)];
  confetti.addConfetti({ emojis: randomPack });
});
</script>

<template>
  <main class="min-h-screen">
    <AppHeader :title="String(h1)" :description="String(firstParagraph)" />

    <!-- Featured Projects Section
    <section class="mt-10">
      <h2 class="text-lg font-semibold mb-4">{{ t('projects.featured') }}</h2>
      <div class="space-y-4">
        <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
      </div>
    </section>
    -->

    <!-- GitHub Projects Section -->
    <section class="mt-12">
      <div class="flex items-center gap-2 mb-4">
        <UIcon name="i-simple-icons-github" class="w-5 h-5" />
        <h2 class="text-lg font-semibold">{{ t('projects.github') }}</h2>
      </div>

      <div v-if="isLoadingGitHub" class="flex items-center justify-center py-8">
        <UIcon name="i-heroicons-arrow-path" class="w-6 h-6 animate-spin text-gray-400" />
      </div>

      <div v-else-if="githubRepos?.length" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppGitHubRepoCard v-for="repo in githubRepos" :key="repo.id" :repo="repo" />
      </div>

      <p v-else class="text-gray-500 dark:text-gray-400 text-sm">
        {{ t('projects.noGithubRepos') }}
      </p>
    </section>
  </main>
</template>

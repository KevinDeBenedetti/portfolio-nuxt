<script setup lang="ts">
import type { Collections } from '@nuxt/content';
const { locale } = useI18n();

const { data: page } = await useAsyncData(
  'page-projects',
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    return await queryCollection(collection).path('/projects').first();
  },
  {
    watch: [locale],
  }
);

const { h1, firstParagraph } = useContentParser(page.value?.body.value || []);

const { data: projects } = await useAsyncData(
  async () => {
    const collection = ('projects_' + locale.value) as keyof Collections;
    const content = await queryCollection(collection).order('sort', 'DESC').all();

    return content;
  },
  {
    watch: [locale],
  }
);

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
    <AppHeader :title="h1" :description="firstParagraph" />
    <div class="space-y-4">
      <AppProjectCard v-for="(project, id) in projects" :key="id" :project="project" />
    </div>
  </main>
</template>

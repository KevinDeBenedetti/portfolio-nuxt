<script setup lang="ts">
import type { Collections, PagesFrCollectionItem, PagesEnCollectionItem } from '@nuxt/content'
const { locale } = useI18n()

const { data: page } = await useAsyncData(async () => {
  const collection = ('pages_' + locale.value) as keyof Collections
  const content = await queryCollection(collection).where('stem', '=', `${locale.value}/pages/projects`).first()
  return content as PagesFrCollectionItem | PagesEnCollectionItem
}, {
  watch: [locale],
})

const { data: projects } = await useAsyncData(async () => {
  const collection = ('projects_' + locale.value) as keyof Collections
  const content = await queryCollection(collection)
    .order('sort', 'DESC')
    .all()

  return content
}, {
  watch: [locale],
})

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description,
  ogTitle: page.value?.title,
  ogDescription: page.value?.description,
  ogImage: '/images/projects.webp',
  twitterCard: 'summary_large_image',
})

const { onLoaded } = useScriptNpm({
  packageName: 'js-confetti',
  file: 'dist/js-confetti.browser.js',
  version: '0.12.0',
  scriptOptions: {
    use() {
      return { JSConfetti: window.JSConfetti }
    },
  },
})

onLoaded(({ JSConfetti }) => {
  const confetti = new JSConfetti()
  
  // Mix développeur web moderne
  confetti.addConfetti({ 
    emojis: ['💻', '⚡', '🚀', '✨', '🔥', '💡', '🎯', '⚙️'] 
  })
  
  // Ou alternativement, rotation aléatoire
  const devEmojis = [
    ['💻', '⚡', '🚀', '✨'], // Pack énergie
    ['👨‍💻', '🔧', '⚙️', '💡'], // Pack outils
    ['🎉', '🥳', '🏆', '✅'], // Pack célébration
    ['📱', '💾', '🖥️', '⌨️'],  // Pack hardware
    ['⚛️', '💻', '🔥', '✨'], // React
    ['💚', '💻', '⚡', '🚀'], // Vue (votre cas avec Nuxt)
    ['💚', '⚡', '🚀', '📦'], // Node.js
    ['💚', '⚡', '🚀', '📦'], // Node.js
    ['🐙', '📝', '🔄', '✅'], // Git/GitHub
  ]
  
  const randomPack = devEmojis[Math.floor(Math.random() * devEmojis.length)]
  confetti.addConfetti({ emojis: randomPack })
})
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

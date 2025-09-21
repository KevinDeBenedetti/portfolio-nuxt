<script setup lang="ts">
import type {
  Collections,
  PagesFrCollectionItem,
  PagesEnCollectionItem,
} from '@nuxt/content'
const { locale } = useI18n()

const { data: page } = await useAsyncData(
  async () => {
    const collection = ('pages_' + locale.value) as keyof Collections
    const content = await queryCollection(collection)
      .where('stem', '=', `${locale.value}/pages/home`)
      .first()
    return content as PagesFrCollectionItem | PagesEnCollectionItem
  },
  {
    watch: [locale],
  }
)
</script>

<template>
  <div class="space-y-6">
    <h1 class="font-bold tracking-tight text-gray-800 dark:text-gray-100">
      {{ page?.h1 }}
    </h1>
    <img
      src="/images/favicon.png"
      alt="Kevin De Benedetti"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
    />
    <h2
      class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100"
    >
      {{ page?.h2 }}
    </h2>
    <p class="text-gray-900 dark:text-gray-400">{{ page?.first_p }}</p>
  </div>
</template>

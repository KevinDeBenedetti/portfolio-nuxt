<script setup lang="ts">
const { title, description, page, body, pending } = usePageContent('legal')

watchEffect(() => {
  useSeoMeta({
    title: title.value,
    ogTitle: title.value,
    description: description.value,
    ogDescription: description.value,
  })
})
</script>

<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <template v-if="body && !pending">
        <ContentRenderer :value="page" />
      </template>
      <div v-else class="flex items-center justify-center">
        <div
          class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>

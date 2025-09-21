<script setup>
const route = useRoute()
const { slug } = route.params
const { locale } = useI18n()

useSeoMeta({
  articleAuthor: 'Kevin De Benedetti',
})

// Get the specific article by slug and language
const { data: article } = await useAsyncData(
  `article-${slug}-${locale.value}`,
  () => {
    return queryCollection('articles')
      .where('slug', '=', slug)
      .where('lang', '=', locale.value)
      .first()
  }
)
</script>

<template>
  <main class="min-h-screen">
    <div
      class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg"
    >
      <h1>{{ article.title }}</h1>
      <ContentRenderer v-if="article" :value="article" />
    </div>
  </main>
</template>
<style>
.prose h2 a,
.prose h3 a {
  /* @apply no-underline; */
  text-decoration: none;
}
</style>

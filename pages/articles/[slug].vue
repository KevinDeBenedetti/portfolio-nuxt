<script setup>
const route = useRoute();
const { slug } = route.params;
const { locale } = useI18n();

useSeoMeta({
  articleAuthor: "Kevin De Benedetti"
});

const { data: article } = await useAsyncData(`/articles/${slug}.${locale}`, () => {
  return queryCollection('articles').where('lang', '=', locale.value).first()
})
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

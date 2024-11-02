<script setup>
const { t, locale } = useI18n();

useSeoMeta({
  title: t('articles.title'),
  ogTitle: t('articles.title'),
  description: t('articles.description'),
  ogDescription: t('articles.description'),
  ogImage: 'https://www.kevindb.dev/images/home.webp',
  twitterCard: 'summary_large_image',
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").where({ lang: locale.value }).sort({ published: -1 }).find()
);
</script>

<template>
  <main class="min-h-screen">
    <AppHeader class="mb-16" :title="t('articles.h1')" :description="t('articles.first_p')" />
    <ul class="space-y-16">
      <li v-for="(article, id) in articles" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
  </main>
</template>

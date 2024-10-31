<script setup>
const { t } = useI18n();

useSeoMeta({
  title: t('articles.title'),
  ogTitle: t('articles.title'),
  description: t('articles.description'),
  ogDescription: t('articles.description'),
  ogImage: '/images/avatar.png',
  twitterCard: 'summary_large_image',
});

const { data: articles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ published: -1 }).find()
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

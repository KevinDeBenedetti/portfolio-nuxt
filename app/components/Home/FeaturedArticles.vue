<script lang="ts" setup>
import type { Collections } from '@nuxt/content';

interface Article {
  slug: string;
  title: string;
  description: string;
  published?: string | Date;
}

const { t, locale } = useI18n();
const localePath = useLocalePath();

// Note: Articles collection needs to be defined in content.config.ts
// For now, this component is disabled in index.vue
const { data: articles } = await useAsyncData('articles-home', async () => {
  // TODO: Create articles collection in content.config.ts
  // const collection = ('articles_' + locale.value) as keyof Collections;
  // return await queryCollection(collection).limit(3).all();
  return [] as unknown[];
});
</script>

<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      {{ t('home.articles_featured') }}
    </h2>
    <ul class="space-y-16">
      <li v-for="(article, id) in articles as Article[]" :key="id">
        <AppArticleCard :article="article" />
      </li>
    </ul>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        :label="t('home.articles_link')"
        :to="localePath('articles')"
        variant="link"
        color="neutral"
      />
    </div>
  </div>
</template>

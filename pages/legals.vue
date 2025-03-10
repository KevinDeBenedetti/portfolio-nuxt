<script setup lang="ts">
const { t, locale } = useI18n();

useSeoMeta({
    title: t('legals.title'),
    ogTitle: t('legals.title'),
    description: t('legals.description'),
    ogDescription: t('legals.description'),
});

const { data: legals } = await useAsyncData("legals", () =>
  queryCollection('legals')
    .path(`/legals/${locale.value}`)
    .first()
)
</script>

<template>
    <main class="min-h-screen">
        <div class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
            <template v-if="legals">
                <h1>{{ legals.title }}</h1>
                <ContentRenderer :value="legals" />
            </template>
        </div>
    </main>
</template>

<style scoped>
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>
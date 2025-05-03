<script setup lang="ts">
const { locale } = useI18n();
const { page } = await usePageContent('legals')

useSeoMeta({
    title:  page.title,
    ogTitle: page.title,
    description: page.description,
    ogDescription: page.description,
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
                <h1>{{ page.h1 }}</h1>
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
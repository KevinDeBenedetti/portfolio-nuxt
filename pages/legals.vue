<script setup lang="ts">
const { locale } = useI18n();

useSeoMeta({
    title: "Mentions Légales | Kevin De Benedetti - Développeur Web",
    description: "Consultez les mentions légales de Kevin De Benedetti, développeur web. Informations sur l’éditeur du site, les conditions d’utilisation et les droits applicables.",
});

const { data: legals } = await useAsyncData("legalsall", () => queryContent(`/legals/${locale.value}`).findOne());

console.log(legals.value)
</script>

<template>
    <main class="min-h-screen">
        <div class="prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg">
            <ContentDoc :path="legals?._path" v-slot="{ doc }" tag="article">
                <article>
                    <h1>{{ doc.title }}</h1>
                    <ContentRenderer :value="doc" />
                </article>
            </ContentDoc>
        </div>
    </main>
</template>

<style scoped>
.prose h2 a,
.prose h3 a {
  text-decoration: none;
}
</style>
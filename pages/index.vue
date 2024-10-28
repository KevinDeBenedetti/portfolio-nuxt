<script setup>
useSeoMeta({
  title: "Portfolio | Kevin De Benedetti",
  description:
    "Je suis Kevin De Benedetti, bienvenue sur mon portfolio. Découvrez mes projets et ma passion pour le développement web, avec une expertise en PHP, Symfony, Node.js et Express.js. Mais également, en JavaScript, Vue.js et Twig.",
});
</script>

<template>
  <main class="min-h-screen">
    <div class="space-y-24">
      <HomeIntro />
      <HomeSocialLinks />
      <HomeFeaturedProjects />
      <HomeFeaturedArticles />
<!--      <HomeNewsletter />-->
    </div>
  </main>
</template>

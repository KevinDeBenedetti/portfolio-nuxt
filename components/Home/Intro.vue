<template>
  <div class="space-y-6">
    <NuxtImg src="/avatar.webp" alt="Kevin De Benedetti"
      class="ring-2 border ring-gray-200 border-gray-300 dark:ring-white/10 dark:border-gray-800 hover:ring-4 transition-all duration-300 bg-gray-200 dark:bg-gray-900 rounded-full h-12 w-12 sm:h-16 sm:w-16"
      sizes="48px sm:64px" placeholder format="webp" />
    <h2 class="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Salut !
    </h2>
    <h1 class="font-bold tracking-tight text-gray-800 dark:text-gray-100">
      Développeur Web Fullstack
    </h1>
    <p class="text-gray-900 dark:text-gray-400">
      Je suis Kevin, je suis spécialisé dans la réalisation d'applications te de sites web utilisant Javascript, Vue, Nuxt, , Express & Symfony.
    </p>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Kevin De Benedetti",
  description:
    "Je suis Kevin De Benedetti, bienvenue sur mon portfolio. Découvrez mes projets et ma passion pour le développement web, avec une expertise en PHP, Symfony, Node.js et Express.js. Mais également, en JavaScript, Vue.js et Twig.",
});
</script>

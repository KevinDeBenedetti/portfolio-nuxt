<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projets" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(projet, id) in projets"
        :key="id"
        :project="projet"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "Voici mes projets, la plupart sont open-source, donc si vous voyez quelque chose qui suscite votre intérêt, consultez le code et contribuez si vous avez des idées ou suggestions.";
useSeoMeta({
  title: "Projets | Kevin De Benedetti",
  description,
});

const { data: projets } = await useAsyncData("projets-all", () =>
  queryContent("/projets").find()
);
</script>

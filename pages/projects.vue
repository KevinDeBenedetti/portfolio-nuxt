<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Projects" :description="description" />
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
const description =
  "Voici mes projets, la plupart sont open-source, donc si vous voyez quelque chose qui suscite votre intérêt, consultez le code et contribuez si vous avez des idées ou suggestions.";
useSeoMeta({
  title: "Réalisations | Kevin De Benedetti",
  description,
});

const { data: projects } = await useAsyncData("projects-all", () =>
  queryContent("/projects").find()
);
</script>

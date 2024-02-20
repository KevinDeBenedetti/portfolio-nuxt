<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      PROJETS
    </h2>
    <div class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="Tous les projets &rarr;"
        to="/projets"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: projects } = await useAsyncData("projets-home", () =>
  queryContent("/projets").limit(3).find()
);
</script>

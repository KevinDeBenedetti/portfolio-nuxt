<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const config = useRuntimeConfig()
const { $readFile, $directus } = useNuxtApp();
const imageMeta = ref(null)

// Check if this is a Directus project (has translations) or Nuxt Content project (direct fields)
const isDirectusProject = !!props.project?.translations
const projectTitle = isDirectusProject ? props.project?.translations[0]?.title : props.project?.name
const projectDescription = isDirectusProject ? props.project?.translations[0]?.description : props.project?.description
const projectThumbnail = isDirectusProject ? props.project?.image : props.project?.thumbnail

if (!projectThumbnail) {
  imageMeta.value = null;
} else if (isDirectusProject) {
  // Handle Directus image
  const { data } = await useAsyncData(
    `imageMeta-${props.project.id}`,
    () => $directus.request($readFile(projectThumbnail))
  );
  imageMeta.value = data.value;
} else {
  // Handle static image path for Nuxt Content
  imageMeta.value = { filename_disk: projectThumbnail };
}
</script>
<template>
  <NuxtLink
    class="flex items-end gap-4 group p-2 max-m-2 rounded-lg"
    :to="project.url"
    target="_blank"
    external
  >
    <div class="max-w-sm">
      <h3 class="text-sm font-medium group-hover:text-primary-600">
        {{ projectTitle }}
      </h3>
      <p class="text-gray-400 text-sm">{{ projectDescription }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    ></div>
    <UAvatar
      :src="isDirectusProject ? (config.public.directusUrl + '/assets/' + imageMeta?.filename_disk) : imageMeta?.filename_disk"
      :ui="{ root: 'p-1', rounded: 'rounded z-10 relative' }"
      size="lg"
      :alt="projectTitle"
    />
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const config = useRuntimeConfig()
const { $readFile, $directus } = useNuxtApp();

const { data: imageMeta } = await useAsyncData('imageMeta', () => {
  return $directus.request($readFile(props.project?.image))
})
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
        {{ project.title }}
      </h3>
      <p class="text-gray-400 text-sm">{{ project.description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    ></div>
    <UAvatar
      :src="config.public.directusUrl + '/assets/' + imageMeta?.filename_disk"
      :ui="{ rounded: 'rounded z-10 relative' }"
      size="md"
      :alt="project.name"
    />
  </NuxtLink>
</template>

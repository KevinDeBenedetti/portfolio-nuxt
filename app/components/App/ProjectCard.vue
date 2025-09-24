<script setup lang="ts">
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const title = computed(() => props.project?.title)
const description = computed(() => props.project?.description)
const thumbnail = computed(() => props.project?.thumbnail)
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
        {{ title }}
      </h3>
      <p class="text-gray-400 text-sm">{{ description }}</p>
    </div>
    <div
      class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
    />
    <UAvatar
      :src="thumbnail"
      :ui="{ root: 'p-1', rounded: 'rounded z-10 relative' }"
      size="lg"
      :alt="title"
    />
  </NuxtLink>
</template>

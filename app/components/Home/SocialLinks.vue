<script lang="ts" setup>
const { t } = useI18n()

const links = [
  {
    name: "GitHub",
    url: "https://github.com/KevinDeBenedetti",
    icon: "mdi:github",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/kevindebenedetti",
    icon: "mdi:linkedin",
  },
];
</script>

<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">{{ t('home.socials') }}</h2>
    <div class="space-y-5">
      <NuxtLink
        v-for="link in links"
        :key="link.icon"
        :to="link.url"
        target="_blank"
        external
        class="flex items-end gap-4 dark:hover:text-gray-300 group"
      >
        <span class="text-sm">{{ link.name }}</span>
        <div class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"/>
        <Icon :name="link.icon" class="w-6 h-6"/>
      </NuxtLink>
    </div>
  </div>
</template>

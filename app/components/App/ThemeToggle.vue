<script setup>
const { t } = useI18n()
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UTooltip
      :text="t('toggle_theme')"
      :ui="{ popper: { strategy: 'absolute' } }"
    >
      <button
        class="relative px-3 py-4 flex items-center justify-center cursor-pointer transition hover:text-primary-500 dark:hover:text-primary-400"
        @click="isDark = !isDark"
      >
        <Icon
          aria-hidden="true"
          :name="isDark ? 'solar:sun-2-outline' : 'solar:moon-outline'"
          class="w-5 h-5"
        />
        <span class="sr-only">{{ t('toggle_theme') }}</span>
      </button>
      <template #fallback>
        <div class="size-8" />
      </template>
    </UTooltip>
  </ClientOnly>
</template>

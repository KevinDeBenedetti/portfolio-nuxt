<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer
    class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8"
  >
    <br>
    <p>© 2024 Kevin De Benedetti</p>
    
    <ULink :to="localePath('legals')" class="mt-2 text-xs hover:text-primary">{{ t('legals_title') }}</ULink>
  </footer>
</template>

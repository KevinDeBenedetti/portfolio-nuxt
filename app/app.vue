<script setup lang="ts">
import type { Locale } from '@dargmuesli/nuxt-cookie-control/runtime/types';
const { locale } = useI18n();
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="#14b8a6" />
    <AppNavbar />
    <div class="h-32" />
    <UContainer>
      <div class="">
        <NuxtPage />
      </div>
    </UContainer>
    <div class="h-32" />
    <AppFooter />
    <CookieControl :locale="locale as Locale" />
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/vue';
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
  </UApp>
  <Analytics />
  <SpeedInsights />
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

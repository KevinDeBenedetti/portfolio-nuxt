<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator color="#14b8a6" />
    <LayoutNavbar />
    <div class="h-32" />
    <UContainer>
      <div class="">
        <slot />
      </div>
    </UContainer>
    <div class="h-32" />
    <LayoutFooter />
  </UApp>
  <Analytics />
  <SpeedInsights />
</template>

<script setup lang="ts">
import type { Locale } from '@dargmuesli/nuxt-cookie-control/runtime/types';
const { locale } = useI18n();
const { cookiesEnabledIds } = useCookieControl()
const { initialize, gtag } = useGtag()
const config = useRuntimeConfig()

// Fonction de mise à jour du consentement des cookies
function onCookieUpdated(cookieId) {
  if (cookieId === 'google-analytics' && cookiesEnabledIds.value.includes('google-analytics')) {
    initialize(config.public.gtagId) // Initialise gtag.js avec l'ID configuré
    gtag('config', config.public.gtagId) // Configure gtag avec les paramètres par défaut
  }
}

// Surveille les changements dans les cookies activés
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // Si Google Analytics a été accepté, initialisez-le
      initialize(config.public.gtagId)
      gtag('config', config.public.gtagId)
    }
  },
  { deep: true }
)
</script>

<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />

  <CookieControl :locale="locale as Locale" />

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

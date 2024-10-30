<script setup lang="ts">

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('google-analytics') &&
      current?.includes('google-analytics')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)

// onMounted(() => {
//   console.log(cookiesEnabled.value)
// })

// Gestion de locale Cookie avec i18n
// const { locale } = useI18n()
// const cookieControl = useCookieControl()

// // Regarder les changements de langue et mettre à jour `cookieControl`
// watch(locale, (newLocale) => {
//   cookieControl.changeLocale(newLocale) // Change la langue dans `cookieControl`
// })
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

  <CookieControl locale="fr" />

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

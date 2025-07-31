<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

const isScrolled = ref(false)
const isVisible = ref(true)
const lastScrollY = ref(0)

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isScrolled.value = currentScrollY > 0

  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isVisible.value = false
  } else {
    isVisible.value = true
  }

  lastScrollY.value = currentScrollY
}

const headerStyles = computed(() => ({
  transform: isVisible.value ? 'translateY(0)' : 'translateY(-100%)',
  transition: 'transform 0.3s ease-in-out, backdrop-fitler 0.3s ease-in-out',
  backgroundColor: isScrolled.value ? 'blur(12px)' : 'blur(0px)',
}))

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const items = computed(() => [
  { name: t('nav.home_title'), path: localePath('index'), icon: "solar:home-smile-outline" },
  { name: t('nav.projects_title'), path: localePath('projects'), icon: "solar:folder-with-files-outline" },
  // { name: t('nav.articles_title'), path: localePath('articles'), icon: "solar:document-add-outline" }
]);
</script>

<template>
  <div
    class="fixed top-0 w-full z-50"
    :style="headerStyles"
  >
    <nav class="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
      <ul
        class="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 border-2"
        :class="[
          isScrolled
            ? 'bg-white/80 shadow-gray-800/10 ring-1 backdrop-blur-md dark:bg-gray-800/80 dark:ring-white/20 ring-gray-900/10 border-2'
            : 'bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5 border-2'
        ]"
      >
        <li v-for="item in items" :key="item.path">
          <UTooltip
            :text="item.name"
            :ui="{ popper: { strategy: 'absolute' } }"
          >
            <ULink
              :to="item.path"
              class="relative px-3 py-4 flex items-center justify-center transition hover:text-primary-500 dark:hover:text-primary-400"
              active-class="text-primary-600 dark:text-primary-400"
            >
              <Icon aria-hidden="true" :name="item.icon" class="w-5 h-5 z-10" />
              <span
                v-if="$route.path === item.path"
                class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"
              />
              <span
                v-if="$route.path === item.path"
                class="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
              <span class="sr-only">{{ item.name }}</span>
            </ULink>
          </UTooltip>
        </li>
        <li class="flex-1" />
        <li>
          <AppLangChoice />
        </li>
        <li>
          <AppThemeToggle />
        </li>
      </ul>
    </nav>
  </div>
</template>
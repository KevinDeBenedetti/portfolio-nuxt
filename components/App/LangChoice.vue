<script setup>
const { locale, setLocale, t } = useI18n()

const currentLocale = ref(locale.value)

function toggleLocale() {
  const newLocale = currentLocale.value === 'fr' ? 'en' : 'fr'
  setLocale(newLocale)
  currentLocale.value = newLocale
}
</script>

<template>
    <UTooltip :text="t('change_language')" :ui="{ popper: { strategy: 'absolute' } }">
        <button
            class="relative px-3 py-4 flex items-center justify-center"
            @click="toggleLocale"
        >
            <Icon
            aria-hidden="true"
            :name="currentLocale === 'fr' ? 'circle-flags:gb' : 'circle-flags:fx'"
            class="w-5 h-5"
            />
            <span class="sr-only">{{ t('change_language') }}</span>
        </button>
    </UTooltip>
</template>
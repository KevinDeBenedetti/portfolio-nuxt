import type { NuxtConfig } from 'nuxt/config'

const i18nConfig: Partial<NuxtConfig> = {
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
    vueI18n: './i18n.config.ts',
    locales: [
      { code: 'en', name: 'English', iso: 'en-US' },
      { code: 'fr', name: 'French', iso: 'fr-FR' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'fr',
    customRoutes: 'config',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    pages: {
      index: {
        fr: '/',
        en: '/',
      },
      projects: {
        fr: '/realisations',
        en: '/projects',
      },
      articles: {
        fr: '/articles',
        en: '/articles',
      },
      'articles-slug': {
        fr: '/articles/[slug]',
        en: '/articles/[slug]',
      },
      legals: {
        fr: '/mentions-legales',
        en: '/legal-notice',
      },
    },
  },
}

export default i18nConfig

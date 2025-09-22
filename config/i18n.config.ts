import type { NuxtConfig } from 'nuxt/config'

const i18nConfig: Partial<NuxtConfig> = {
  i18n: {
    defaultLocale: 'fr',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'French', file: 'fr.json' },
    ],
    strategy: 'prefix_except_default',
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

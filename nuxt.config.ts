import cookie from './config/cookie.config'
import i18n from './config/i18n.config'
import seo from './config/seo.config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ...i18n,
  ...seo,
  ...cookie,

  compatibilityDate: '2025-07-30',

  devServer: {
    host: '0.0.0.0',
    // host: 'localhost',
    // port: 3000,
  },

  // debug: true,

  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    'nuxt-gtag',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],

  content: {
    experimental: { sqliteConnector: 'native' },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'fr',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased bg-gray-50 dark:bg-black min-h-screen',
      },
    },
  },

  fonts: {
    provider: 'google',
    families: [{ name: 'Inter', provider: 'google' }],
  },

  css: ['~/assets/css/main.css'],

  gtag: {
    initMode: 'manual',
    id: process.env.NUXT_GTAG_ID,
    enabled: process.env.NODE_ENV === 'production',
  },

  vite: {
    plugins: [tailwindcss()],
  },
})

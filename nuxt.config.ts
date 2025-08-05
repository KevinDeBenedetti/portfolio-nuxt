// import tailwindcss from "@tailwindcss/vite";
import cookieConfig from "./config/cookie.config"
import i18nConfig from "./config/i18n.config"
import seoConfig from "./config/seo.config"

export default defineNuxtConfig({

  compatibilityDate: "2025-07-30",
  
  devServer: {
    // host: '0.0.0.0',
    host: 'localhost',
    port: 3000
  },

  devtools: { enabled: true },

  // nitro: {
  //   logLevel: 5, // Maximum de logs
  //   timing: true // Affiche les temps d'exécution
  // },

  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
      directusUrl: process.env.NUXT_DIRECTUS_URL || "https://REDACTED_URL",
    }
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    // "@nuxtjs/fontaine",
    "@nuxt/image",
    '@nuxtjs/sitemap',
    "@nuxtjs/robots",
    "@nuxt/content",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxt/eslint",
  ],

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  // documentDriven: true,

  ...i18nConfig,
  ...seoConfig,
  ...cookieConfig,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "fr",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },

  fonts: {
    provider: 'google',
    families: [
      { name: 'Inter', provider: 'google' },
    ]
  },

  css: ['~/assets/css/main.css'],

  gtag: {
    initMode: 'manual',
    id: process.env.NUXT_GTAG_ID,
    enabled: process.env.NODE_ENV === 'production'
  },
});
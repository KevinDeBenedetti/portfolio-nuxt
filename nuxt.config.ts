// import tailwindcss from "@tailwindcss/vite";
import cookieConfig from "./config/cookie.config"
import i18nConfig from "./config/i18n.config"
import seoConfig from "./config/seo.config"
import styleConfig from "./config/style.config"

export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: "2024-10-01",

  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
      directusUrl: process.env.NUXT_DIRECTUS_URL || "https://REDACTED_URL",
    }
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/icon",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@vueuse/nuxt",
    '@nuxtjs/sitemap',
    "@nuxtjs/robots",
    "@nuxt/content",
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n",
    "@nuxt/fonts"
  ],

  documentDriven: true,

  ...i18nConfig,
  ...seoConfig,
  ...cookieConfig,
  ...styleConfig,

  gtag: {
    initMode: 'manual',
    id: process.env.NUXT_GTAG_ID,
    enabled: process.env.NODE_ENV === 'production'
  },
});
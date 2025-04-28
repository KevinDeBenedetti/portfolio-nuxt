import type { NuxtConfig } from 'nuxt/config'

const styleConfig: Partial<NuxtConfig> = {
  // FIXME : test icons import
  // ui: {
  //   icons: ["heroicons", "lucide"],
  // },

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

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  fonts: {
    provider: 'google',
    families: [
      { name: 'Inter', provider: 'google' },
    ]
  },

  css: ['~/assets/css/main.css'],
}

export default styleConfig
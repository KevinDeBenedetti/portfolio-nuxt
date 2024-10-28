export default defineNuxtConfig({
  site: {
    url: 'https://kevindb.dev',
    name: 'Kevin De Benedetti Portfolio',

  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    '@nuxtjs/sitemap'
  ],

  ui: {
    icons: ["heroicons", "lucide"],
  },

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

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  }
  /*  sitemap: {
      hostname: 'https://kevindb.dev',
      gzip: true
    },*/,

  compatibilityDate: "2024-10-01",

  tailwindcss: {
    configPath: './tailwind.config.ts', // Lien vers le fichier de config séparé
    quiet: true,  // Supprime les warnings
  }
});
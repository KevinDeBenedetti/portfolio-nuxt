export default defineNuxtConfig({
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
    '@nuxtjs/sitemap',
    "@nuxtjs/robots",
    "nuxt-gtag"
  ],

  site: {
    url: 'https://www.kevindb.dev',
    name: 'Kevin De Benedetti Portfolio',
  },

  robots: {
    userAgent: '*',
    allow: '/',
    disallow: [
      '/articles/',
      '/icons/',
      '/projects/',
      '/images/'
    ],
    sitemap: 'https://www.kevindb.dev/sitemap.xml',
    blockNonSeoBots: true,
    credits: false,
  },

  gtag: {
    id: 'G-7S7VZZ54ME'
  },

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
  },

  compatibilityDate: "2024-10-01",

  tailwindcss: {
    configPath: './tailwind.config.ts', // Lien vers le fichier de config séparé
    quiet: true,  // Supprime les warnings
  }
});
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gtagId: 'G-7S7VZZ54ME'
    }
  },

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
    "nuxt-gtag",
    "@dargmuesli/nuxt-cookie-control"
  ],

  site: {
    url: 'https://www.kevindb.dev',
    name: 'Kevin De Benedetti Portfolio',
  },

  robots: {
    allow: '/',
    disallow: [
      '/articles/',
      '/icons/',
      '/projects/',
      '/images/',
      '/legals'
    ],
    sitemap: 'https://www.kevindb.dev/sitemap.xml',
    blockNonSeoBots: true,
    credits: false,
  },

  gtag: {
    enabled: false,
    id: 'G-7S7VZZ54ME'
  },

  cookieControl: {
    // options spécifiques pour configurer les cookies
    barPosition: 'bottom-full',
    closeModalOnClickOutside: true,
    colors: {
      barBackground: '#11181C',
      barButtonColor: '#000',
      barButtonHoverBackground: 'teal',
      checkboxActiveBackground: '#00A34A', // text-green-600
    },
    isAcceptNecessaryButtonEnabled: true,

    cookies: {
      necessary: [
      ],
      optional: [
        {
          name: 'google-analytics',
          id: 'google-analytics',
          isPreselected: true,
          description: {
            fr: 'Google Analytics est utilisé pour analyser le trafic et les données du site.',
            en: 'Google Analytics is used to track website traffic and analyze data.',
          },
          // description: 'Suivi pour améliorer l\'expérience utilisateur.',
          src: 'https://www.googletagmanager.com/gtag/js?id=G-7S7VZZ54ME',
          targetCookieIds: ['_ga', '_gid', '_gat'],
        },
      ],
    },
    // isAcceptNecessaryButtonEnabled: true
    // isControlButtonEnabled: true,
    // isCssEnabled: true,
    locales: ['fr', 'en'],

    localeTexts: {
      fr: {
        bannerTitle: "Cookies",
        bannerDescription: "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l’utilisation du site afin d'optimiser nos services. En continuant sur ce site, vous acceptez leur utilisation.",
        save: "Enregistrer",
        // accept: "Accepter",
        // decline: "J'accepte le nécessaire"
        // Gérer les cookies
      },
      en: {
        bannerDescription: "We use cookies to enhance your browsing experience and analyze site usage to optimize our services. By continuing on this site, you accept their use.",
        save: 'Remember',
      }
    }
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
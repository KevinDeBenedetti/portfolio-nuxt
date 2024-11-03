export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      gtagId: process.env.NUXT_GTAG_ID
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
    "@dargmuesli/nuxt-cookie-control",
    "@nuxtjs/i18n"
  ],

  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    customRoutes: 'config',
    detectBrowserLanguage: {
      useCookie: false,
      redirectOn: 'root',
    },
    pages: {
      index: {
        fr: '/',
        en: '/'
      },
      projects: {
        fr: '/realisations',
        en: '/projects'
      },
      articles: {
        fr: '/articles',
        en: '/articles'
      },
      'articles-slug': {
        fr: '/articles/[slug]',
        en: '/articles/[slug]'
      },
      legals: {
        fr: '/mentions-legales',
        en: '/legal-notice'
      }
    }
  },

  site: {
    url: 'https://www.kevindb.dev',
    name: 'Kevin De Benedetti | Portfolio',
  },

  robots: {
    allow: '/',
    disallow: [
      '/articles/',
      '/icons/',
      '/projects/',
      '/images/',
    ],
    blockNonSeoBots: true,
    credits: false,
  },

  sitemap: {
    exclude: [
      '/mentions-legales',
      '/en/legal-notice',
    ],
  },

  gtag: {
    initMode: 'manual',
    id: process.env.NUXT_GTAG_ID,
    enabled: process.env.NODE_ENV === 'production'
  },

  cookieControl: {
    barPosition: 'bottom-full',
    locales: ['fr', 'en'],
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365,
    closeModalOnClickOutside: true,
    colors: {
      barBackground: '#11181C',
      barButtonColor: '#000',
      barButtonHoverBackground: 'teal',
      checkboxActiveBackground: '#00A34A',
    },
    cookies: {
      necessary: [],
      optional: [
        {
          name: 'google-analytics',
          id: 'google-analytics',
          isPreselected: false,
          description: {
            fr: 'Google Analytics est utilisé pour analyser le trafic et les données du site.',
            en: 'Google Analytics is used to track website traffic and analyze data.',
          },
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_GTAG_ID}`,
          targetCookieIds: ['_ga', '_gid', '_gat'],
        },
      ],
    },
    // isControlButtonEnabled: true,
    // isCssEnabled: true,
    isAcceptNecessaryButtonEnabled: true,

    localeTexts: {
      fr: {
        bannerTitle: "Cookies",
        bannerDescription: "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l’utilisation du site afin d'optimiser nos services. En continuant sur ce site, vous acceptez leur utilisation.",
        save: "Enregistrer",
      },
      en: {
        bannerTitle: "Cookies",
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
    configPath: './tailwind.config.ts', // Link to separate config file
    quiet: true,  // Delete warnings
  }
});
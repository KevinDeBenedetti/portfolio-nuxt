import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-09-26',

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

  vite: {
    plugins: [tailwindcss()],
  },

  devServer: {
    host: '0.0.0.0',
    // host: 'localhost',
    // port: 3000,
  },

  devtools: { enabled: true },

  runtimeConfig: {
    ghToken: 'ghp_1234567890abcdefghijklmnopqrstuvwxyzABCDEF',
    public: {
      gtagId: process.env.NUXT_GTAG_ID,
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

  site: {
    url: 'https://kevindb.dev',
    name: 'Kevin De Benedetti | Portfolio',
  },

  robots: {
    allow: '/',
    disallow: ['/articles/', '/icons/', '/projects/', '/images/'],
    blockNonSeoBots: true,
    credits: false,
  },

  sitemap: {
    exclude: ['/mentions-legales', '/en/legal-notice'],
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
        en: '/legal',
      },
    },
  },

  content: {
    watch: {
      enabled: true,
    },
    experimental: { sqliteConnector: 'native' },
    preview: {
      api: 'https://api.nuxt.studio',
    },
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
        bannerTitle: 'Cookies',
        bannerDescription:
          "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l’utilisation du site afin d'optimiser nos services. En continuant sur ce site, vous acceptez leur utilisation.",
        save: 'Enregistrer',
      },
      en: {
        bannerTitle: 'Cookies',
        bannerDescription:
          'We use cookies to enhance your browsing experience and analyze site usage to optimize our services. By continuing on this site, you accept their use.',
        save: 'Remember',
      },
    },
  },
});

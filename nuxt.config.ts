import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-09-26',

  // Use Bun preset for production (optimized for Bun runtime)
  nitro: {
    preset: 'bun',
    // Security headers for all routes
    routeRules: {
      '/**': {
        headers: {
          // Prevent clickjacking attacks
          'X-Frame-Options': 'SAMEORIGIN',
          // Prevent MIME type sniffing
          'X-Content-Type-Options': 'nosniff',
          // Enable XSS protection
          'X-XSS-Protection': '1; mode=block',
          // Referrer policy
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          // Permissions Policy (replaces Feature-Policy)
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          // Strict Transport Security (HSTS) - 1 year
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
          // Cross-Origin policies for Spectre mitigation
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Embedder-Policy': 'credentialless',
          'Cross-Origin-Resource-Policy': 'same-origin',
          // Content Security Policy
          'Content-Security-Policy':
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.bunny.net; font-src 'self' https://fonts.bunny.net data:; img-src 'self' data: https://images.unsplash.com https://*.githubusercontent.com https://*.cloudinary.com; connect-src 'self' https://api.nuxt.studio; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;",
        },
      },
    },
  },

  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/content',
    '@dargmuesli/nuxt-cookie-control',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
    },
  },

  devServer: {
    host: '0.0.0.0',
    // host: 'localhost',
    // port: 3000,
  },

  devtools: { enabled: true },

  runtimeConfig: {
    ghToken: 'PLACEHOLDER_GITHUB_TOKEN',
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
    provider: 'bunny',
    families: [{ name: 'Inter', provider: 'bunny' }],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
    },
  },

  css: ['~/assets/css/main.css'],

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
    // Use native bun:sqlite connector (works with Bun runtime)
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
      optional: [],
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

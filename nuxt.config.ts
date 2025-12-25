import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-12-23',

  // Use Vercel preset for Vercel deployment
  nitro: {
    preset: 'vercel',
  },

  // Security headers only for production (upgrade-insecure-requests breaks local dev)
  $production: {
    nitro: {
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
            // Allow cross-origin for static assets (needed for fonts, images from CDN)
            'Cross-Origin-Resource-Policy': 'cross-origin',
            // Cache control for HTML pages
            'Cache-Control': 'public, max-age=0, must-revalidate',
            // Content Security Policy - Note: 'unsafe-eval' is required for Vue.js reactivity in production
            'Content-Security-Policy':
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.bunny.net; font-src 'self' https://fonts.bunny.net data:; img-src 'self' data: blob: https://images.unsplash.com https://*.githubusercontent.com https://*.cloudinary.com https://avatars.githubusercontent.com; connect-src 'self' https://api.nuxt.studio https://cloudflareinsights.com https://api.github.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests;",
          },
        },
        // Cache control for static assets (immutable, 1 year)
        '/_nuxt/**': {
          headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Access-Control-Allow-Origin': '*',
          },
        },
        // Cache control for Vercel image optimization
        '/_vercel/image/**': {
          headers: {
            'Cache-Control': 'public, max-age=31536000, immutable',
            'Access-Control-Allow-Origin': '*',
          },
        },
        // Sitemap caching
        '/__sitemap__/**': {
          headers: {
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
          },
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
    '@nuxtjs/i18n',
    '@nuxt/fonts',
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
    githubToken: '',
    public: {
      githubUsername: 'KevinDeBenedetti',
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
    disallow: ['/icons/', '/projects/', '/images/'],
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
      legals: {
        fr: '/mentions-legales',
        en: '/legal',
      },
    },
  },

  content: {
    database: {
      type: 'sqlite',
      filename: '/tmp/contents.sqlite',
    },
    watch: {
      enabled: true,
    },
    // Use native SQLite connector (compatible with Node.js v22.5.0+)
    experimental: { sqliteConnector: 'native' },
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
});

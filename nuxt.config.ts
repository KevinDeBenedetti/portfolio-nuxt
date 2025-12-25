import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-12-23',

  // Use Vercel preset for Vercel deployment
  nitro: {
    preset: 'vercel',
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
    'nuxt-security',
  ],

  // Security configuration using nuxt-security module
  security: {
    headers: {
      // Prevent clickjacking attacks
      xFrameOptions: 'SAMEORIGIN',
      // Prevent MIME type sniffing
      xContentTypeOptions: 'nosniff',
      // XSS Protection (legacy but useful for older browsers)
      xXSSProtection: '1; mode=block',
      // Referrer policy
      referrerPolicy: 'strict-origin-when-cross-origin',
      // Permissions Policy (replaces Feature-Policy)
      permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
      },
      // Strict Transport Security (HSTS) - 2 years for HSTS preload eligibility
      strictTransportSecurity: {
        maxAge: 63072000,
        includeSubdomains: true,
        preload: true,
      },
      // Cross-Origin policies for Spectre mitigation
      crossOriginOpenerPolicy: 'same-origin',
      crossOriginEmbedderPolicy: 'credentialless',
      // Allow cross-origin for static assets (needed for fonts, images from CDN)
      crossOriginResourcePolicy: 'cross-origin',
      // Content Security Policy
      contentSecurityPolicy: {
        'default-src': ["'self'"],
        'script-src': [
          "'self'",
          "'unsafe-inline'",
          "'unsafe-eval'",
          'https://static.cloudflareinsights.com',
        ],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.bunny.net'],
        'font-src': ["'self'", 'https://fonts.bunny.net', 'data:'],
        'img-src': [
          "'self'",
          'data:',
          'blob:',
          'https://images.unsplash.com',
          'https://*.githubusercontent.com',
          'https://*.cloudinary.com',
          'https://avatars.githubusercontent.com',
        ],
        'connect-src': [
          "'self'",
          'https://api.nuxt.studio',
          'https://cloudflareinsights.com',
          'https://api.github.com',
        ],
        'frame-ancestors': ["'self'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"],
        'object-src': ["'none'"],
        'upgrade-insecure-requests': true,
      },
      // X-Download-Options to prevent IE from executing downloads
      xDownloadOptions: 'noopen',
      // X-Permitted-Cross-Domain-Policies
      xPermittedCrossDomainPolicies: 'none',
      // X-DNS-Prefetch-Control
      xDNSPrefetchControl: 'on',
    },
    // Rate limiting for API routes
    rateLimiter: {
      tokensPerInterval: 150,
      interval: 300000, // 5 minutes
    },
    // Request size limit
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2000000, // 2MB
      maxUploadFileRequestInBytes: 8000000, // 8MB
    },
    // Enable SSG support
    ssg: {
      meta: true,
      hashScripts: false, // Disabled because we use 'unsafe-inline'
      hashStyles: false,
      exportToPresets: true,
    },
  },

  // Route rules for caching (non-security headers)
  routeRules: {
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

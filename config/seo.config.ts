import type { NuxtConfig } from 'nuxt/config'

const seoConfig: Partial<NuxtConfig> = {
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
}

export default seoConfig
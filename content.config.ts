import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'data',
      source: '**/pages/*.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        h1: z.string(),
        first_p: z.string().optional(),
        h2: z.string().optional(),
      })
    }),
    projects: defineCollection({
      type: 'data',
      source: '**/projects/*.json',
      schema: z.object({
        name: z.string(),
        url: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        lang: z.string(),
      })
    }),
    
    legals: defineCollection({
      type: 'page',
      source: '**/legals/*.md'
    }),

    articles: defineCollection({
      type: 'page',
      source: '**/articles/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.string(),
        slug: z.string(),
        lang: z.string(),
        sitemap: z.object({
          loc: z.string(),
          lastmod: z.string()
        })
      })
    })
  }
})

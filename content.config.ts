import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  h1: z.string(),
  first_p: z.string().optional(),
  h2: z.string().optional(),
})

const projectSchema = z.object({
  title: z.string(),
  url: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  slug: z.string(),
  sort: z.number(),
})

export default defineContentConfig({
  collections: {

    // content_en: defineCollection({
    //   type: 'data',
    //   source: {
    //     include: 'en/**',
    //     prefix: ''
    //   },
    //   schema: pageSchema
    // }),

    // content_fr: defineCollection({
    //   type: 'data',
    //   source: {
    //     include: 'fr/**',
    //     prefix: ''
    //   },
    //   schema: pageSchema
    // }),

    pages_fr: defineCollection({
      type: 'data',
      source: 'fr/pages/*.json',
      schema: pageSchema
    }),

    pages_en: defineCollection({
      type: 'data',
      source: 'en/pages/*.json',
      schema: pageSchema
    }),

    projects_fr: defineCollection({ 
      type: 'data',
      source: 'fr/projects/*.json',
      schema: projectSchema
    }),

    projects_en: defineCollection({ 
      type: 'data',
      source: 'en/projects/*.json',
      schema: projectSchema
    })

    // pages: defineCollection({
    //   type: 'data',
    //   source: '**/pages/*.json',
    //   schema: z.object({
    //     title: z.string(),
    //     description: z.string(),
    //     h1: z.string(),
    //     first_p: z.string().optional(),
    //     h2: z.string().optional(),
    //   })
    // }),

    // projects: defineCollection({
    //   type: 'data',
    //   source: '**/projects/*.json',
    //   schema: z.object({
    //     title: z.string(),
    //     url: z.string(),
    //     description: z.string(),
    //     thumbnail: z.string(),
    //     slug: z.string(),
    //     sort: z.number(),
    //   })
    // }),
    
    // legals: defineCollection({
    //   type: 'page',
    //   source: '**/legals/*.md'
    // }),

    // articles: defineCollection({
    //   type: 'page',
    //   source: '**/articles/*.md',
    //   schema: z.object({
    //     title: z.string(),
    //     description: z.string(),
    //     published: z.string(),
    //     slug: z.string(),
    //     lang: z.string(),
    //     sitemap: z.object({
    //       loc: z.string(),
    //       lastmod: z.string()
    //     })
    //   })
    // })
  }
})
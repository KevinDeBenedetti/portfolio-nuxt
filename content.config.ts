import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
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
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
      },
    }),

    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
    }),

    pages_fr: defineCollection({
      type: 'data',
      source: 'fr/pages/*.json',
      schema: pageSchema,
    }),

    pages_en: defineCollection({
      type: 'data',
      source: 'en/pages/*.json',
      schema: pageSchema,
    }),

    projects_fr: defineCollection({
      type: 'data',
      source: 'fr/projects/*.json',
      schema: projectSchema,
    }),

    projects_en: defineCollection({
      type: 'data',
      source: 'en/projects/*.json',
      schema: projectSchema,
    }),
  },
})

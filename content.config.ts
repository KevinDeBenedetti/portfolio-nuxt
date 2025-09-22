import { defineContentConfig, defineCollection, z } from '@nuxt/content'

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
        include: 'en/**.md',
        prefix: '',
      },
    }),

    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**.md',
        prefix: '',
      },
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

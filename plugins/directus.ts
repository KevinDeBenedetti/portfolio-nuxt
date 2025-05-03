import { createDirectus, rest, readItem, readItems, readFile, readFiles, readAssetRaw } from '@directus/sdk';

export default defineNuxtPlugin( async nuxtApp => {
  const config = useRuntimeConfig();

  interface Project {
    id: string
    image: string
    description: string
    title: string
    translations: object
    slug: string
    status: string
  }

  interface PageTranslation {
    id: string
    languages_code: string
    title: string
    description: string
  }

  interface Page {
    id: string
    translations: PageTranslation[]
  }

  interface Schema {
    projects: Project[],
    pages: Page[],
  }
  
  const directus = createDirectus<Schema>(config.public.directusUrl).with(rest());

  nuxtApp.provide('directus', directus)
  // nuxtApp.provide('Projects', projects)
  nuxtApp.provide('readFile', readFile)

  nuxtApp.provide('readItem', readItem)
  nuxtApp.provide('readItems', readItems)

});
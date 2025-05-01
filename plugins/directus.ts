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

  interface Schema {
    projects: Project[]
  }

  
  const directus = createDirectus<Schema>(config.public.directusUrl)
  .with(rest());

  /**
   * Get metadata from a directus file
   */
  async function getFileMeta(id: string) {
    const data = await directus.request(readFile(id))
    return data
  }

  /**
   * Get all projects
   */
  const projects = await directus.request(readItems('projects'))

	// return {
	// 	provide: {  
  //     directus,
  //     projects,
  //     getFileMeta
  //   },
	// };

  nuxtApp.provide('directus', directus);
  nuxtApp.provide('Projects', projects);
  nuxtApp.provide('getFileMeta', getFileMeta);
});
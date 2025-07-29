import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'

export const useDirectusSync = () => {
  const { $directus, $readItems } = useNuxtApp()

  const syncProjectsToContent = async () => {
    try {
      // Only run in development
      if (import.meta.server && process.env.NODE_ENV === 'development') {
        console.log('Syncing Directus projects to Nuxt Content...')
        
        const projects = await $directus.request($readItems('projects', {
          fields: ['*', { translations: ['*'] }],
          deep: {
            translations: { _filter: {} }
          }
        }))

        // Ensure content/projects directory exists
        const contentDir = join(process.cwd(), 'content', 'projects')
        await mkdir(contentDir, { recursive: true })

        // Convert each project to Nuxt Content format
        for (const project of projects) {
          for (const translation of project.translations) {
            const locale = translation.languages_code.split('-')[0] // Convert 'en-US' to 'en'
            const suffix = locale === 'en' ? '' : `-${locale}`
            const filename = `${project.slug}${suffix}.json`
            
            const contentProject = {
              name: translation.title,
              url: project.url || '#',
              description: translation.description,
              thumbnail: project.image ? `/images/projects/${project.slug}.webp` : '/images/default-project.webp',
              lang: locale
            }

            const filePath = join(contentDir, filename)
            await writeFile(filePath, JSON.stringify(contentProject, null, 2))
            console.log(`Created ${filename}`)
          }
        }

        console.log('Directus sync completed!')
      }
    } catch (error) {
      console.error('Error syncing Directus data:', error)
    }
  }

  return {
    syncProjectsToContent
  }
}
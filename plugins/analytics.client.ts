export default defineNuxtPlugin(nuxtApp => {
    const cookieControl = useCookieControl()
    const { initialize, gtag } = useGtag()
    const config = useRuntimeConfig()

    if (cookieControl.cookiesEnabledIds.value && cookieControl.cookiesEnabledIds.value.includes('google-analytics')) {
        initialize(config.public.gtagId)
        gtag('config', config.public.gtagId) 
    }
  })
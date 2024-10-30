export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    const cookieControl = useCookieControl();

    function initGoogleAnalytics() {
        if (!window.gtag) {
            // Injecter le script Google Analytics si ce n'est pas déjà fait
            const script = document.createElement('script');
            script.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.gtagId}`;
            script.async = true;
            document.head.appendChild(script);

            // Configurer gtag après l'injection du script
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(...args) {
                window.dataLayer.push(args);
            }
            window.gtag('js', new Date());
            window.gtag('config', config.public.gtagId, { anonymize_ip: true }); // RGPD: Anonymisation de l'IP
        }
    }

    if (cookieControl.cookiesEnabledIds?.value && cookieControl.cookiesEnabledIds.value.includes('google-analytics')) {
        console.log('Consentement pour Google Analytics obtenu');
        initGoogleAnalytics();
    }

    watch(cookieControl.cookiesEnabledIds, (newIds) => {
        if (newIds && newIds.includes('google-analytics')) {
            console.log('Consentement pour Google Analytics mis à jour');
            initGoogleAnalytics();
        }
    });
})
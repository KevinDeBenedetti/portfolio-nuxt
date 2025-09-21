import type { NuxtConfig } from 'nuxt/config'

const cookieConfig: Partial<NuxtConfig> = {
  cookieControl: {
    barPosition: 'bottom-full',
    locales: ['fr', 'en'],
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365,
    closeModalOnClickOutside: true,
    colors: {
      barBackground: '#11181C',
      barButtonColor: '#000',
      barButtonHoverBackground: 'teal',
      checkboxActiveBackground: '#00A34A',
    },
    cookies: {
      necessary: [],
      optional: [
        {
          name: 'google-analytics',
          id: 'google-analytics',
          isPreselected: false,
          description: {
            fr: 'Google Analytics est utilisé pour analyser le trafic et les données du site.',
            en: 'Google Analytics is used to track website traffic and analyze data.',
          },
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_GTAG_ID}`,
          targetCookieIds: ['_ga', '_gid', '_gat'],
        },
      ],
    },
    // isControlButtonEnabled: true,
    // isCssEnabled: true,
    isAcceptNecessaryButtonEnabled: true,

    localeTexts: {
      fr: {
        bannerTitle: 'Cookies',
        bannerDescription:
          "Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser l’utilisation du site afin d'optimiser nos services. En continuant sur ce site, vous acceptez leur utilisation.",
        save: 'Enregistrer',
      },
      en: {
        bannerTitle: 'Cookies',
        bannerDescription:
          'We use cookies to enhance your browsing experience and analyze site usage to optimize our services. By continuing on this site, you accept their use.',
        save: 'Remember',
      },
    },
  },
}

export default cookieConfig

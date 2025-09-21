// global.d.ts
export {} // S'assurer que ce fichier est traité comme un module

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: Array<Record<string, string | number | boolean | object>> // Typage pour dataLayer
  }

  interface Article {
    _path?: string
    title?: string
    description?: string
    published?: string
    slug?: string
    lang?: string
  }
}

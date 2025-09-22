export {}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: Array<Record<string, string | number | boolean | object>>
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

// global.d.ts
export {}; // S'assurer que ce fichier est traité comme un module

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: Array<Record<string, any>>; // Typage pour dataLayer
    }

    interface Article {
        _path?: string;
        title?: string;
        description?: string;
        published?: string;
        slug?: string;
        lang?: string;
    }
}
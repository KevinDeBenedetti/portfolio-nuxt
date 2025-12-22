# Kevin De Benedetti - Portfolio

[🇬🇧 Read in English](./README.md)

> Un portfolio moderne, performant et optimisé SEO construit avec Nuxt 4 et les dernières technologies web.

## ✨ Présentation

Ce portfolio présente mon travail en tant que développeur web fullstack, construit avec un focus sur la **performance**, l'**expérience développeur** et les **bonnes pratiques**. Il utilise des outils de pointe comme Nuxt 4, Tailwind CSS 4 et Oxlint pour offrir une base de code rapide, accessible et maintenable.

## 🎯 Fonctionnalités & Compétences Démontrées

### Architecture & Performance

- **Génération de site statique (SSG)** avec Nuxt 4 pour des chargements ultra-rapides
- **Approche TypeScript-first** avec typage strict dans tout le code
- **Vue 3.5+ Composition API** avec la syntaxe `<script setup>` exclusivement
- **Images optimisées** avec `@nuxt/image` et stratégies de lazy loading

### Gestion de Contenu

- **Nuxt Content v3** avec collections typées et schémas Zod
- **Syntaxe MDC** pour les composants Vue dans les fichiers Markdown
- **Architecture bilingue** du contenu (`content/en/`, `content/fr/`)

### Internationalisation

- **Support i18n complet** (Français/Anglais) avec stratégie `prefix_except_default`
- **URLs SEO-friendly** avec routes et meta tags localisés

### Expérience Développeur

- **Linting ultra-rapide** avec Oxlint (50-100x plus rapide qu'ESLint)
- **Formatage moderne** avec Oxfmt
- **Git hooks** avec prek pour validation pre-commit et pre-push
- **Intégration Turborepo** pour des pipelines de build optimisés

### SEO & Analytics

- **Génération automatique du sitemap** avec `@nuxtjs/sitemap`
- **Configuration robots.txt** avec `@nuxtjs/robots`
- **Meta tags structurés** avec `useSeoMeta`

### UI/UX

- **Bibliothèque de composants Nuxt UI v4**
- **Tailwind CSS v4** pour un styling utility-first
- **Support dark mode** natif
- **Transitions de page** pour une navigation fluide

## 🛠️ Stack Technique

| Catégorie | Technologies              |
| --------- | ------------------------- |
| Framework | Nuxt 4.2+, Vue 3.5+       |
| Langage   | TypeScript 5.9            |
| Styling   | Tailwind CSS 4, Nuxt UI 4 |
| Contenu   | Nuxt Content 3, MDC       |
| i18n      | @nuxtjs/i18n              |
| Build     | pnpm, Turborepo           |
| Linting   | Oxlint, Oxfmt             |
| Hooks     | prek                      |

## 📁 Structure du Projet

```
app/
├── components/     # Composants Vue (auto-importés)
├── composables/    # Fonctions de composition
├── pages/          # Routage basé sur les fichiers
├── assets/css/     # Styles globaux
└── plugins/        # Plugins Nuxt

content/
├── en/             # Contenu anglais
└── fr/             # Contenu français

i18n/locales/       # Fichiers de traduction
```

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Build pour la production
pnpm generate

# Lint & format
pnpm check
```

## 🙏 Remerciements

Ce projet est construit grâce à d'incroyables projets open-source :

### Framework Principal

- **[Nuxt](https://nuxt.com)** - Le framework Vue intuitif qui rend la création d'applications web performantes simple
- **[Vue.js](https://vuejs.org)** - Le framework JavaScript progressif

### Build & Outillage

- **[Turborepo](https://turbo.build)** - Système de build haute performance pour les monorepos JavaScript/TypeScript
- **[pnpm](https://pnpm.io)** - Gestionnaire de paquets rapide et économe en espace disque

### Qualité de Code

- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** - Le linter JavaScript/TypeScript ultra-rapide écrit en Rust
- **[Oxfmt](https://oxc.rs)** - Formateur de code ultra-rapide du projet OXC
- **[prek](https://github.com/j178/prek)** - Gestionnaire de hooks Git moderne

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **[Nuxt UI](https://ui.nuxt.com)** - Composants UI beaux et accessibles pour Nuxt

### Contenu & SEO

- **[Nuxt Content](https://content.nuxt.com)** - CMS basé sur les fichiers pour Nuxt
- **[Nuxt i18n](https://i18n.nuxtjs.org)** - Module d'internationalisation

---

Construit avec ❤️ par [Kevin De Benedetti](https://kevindb.dev)

# Kevin De Benedetti - Portfolio

[🇫🇷 Lire en français](./README_FR.md)

> A modern, performant, and SEO-optimized portfolio built with Nuxt 4 and the latest web technologies.

## ✨ Overview

This portfolio showcases my work as a fullstack web developer, built with a focus on **performance**, **developer experience**, and **best practices**. It leverages cutting-edge tools like Nuxt 4, Tailwind CSS 4, and Oxlint to deliver a fast, accessible, and maintainable codebase.

## 🎯 Key Features & Skills Demonstrated

### Architecture & Performance

- **Static Site Generation (SSG)** with Nuxt 4 for blazing-fast page loads
- **TypeScript-first** approach with strict typing throughout the codebase
- **Vue 3.5+ Composition API** with `<script setup>` syntax exclusively
- **Optimized images** with `@nuxt/image` and lazy loading strategies

### Content Management

- **Nuxt Content v3** with typed collections and Zod schemas
- **MDC syntax** for Vue components in Markdown files
- **Bilingual content** architecture (`content/en/`, `content/fr/`)

### Internationalization

- **Full i18n support** (French/English) with `prefix_except_default` strategy
- **SEO-friendly URLs** with localized routes and meta tags

### Developer Experience

- **Ultra-fast linting** with Oxlint (50-100x faster than ESLint)
- **Modern formatting** with Oxfmt
- **Git hooks** with prek for pre-commit and pre-push validation
- **Turborepo** integration for optimized build pipelines

### SEO & Analytics

- **Automatic sitemap** generation with `@nuxtjs/sitemap`
- **Robots.txt** configuration with `@nuxtjs/robots`
- **Google Analytics** integration with cookie consent (`nuxt-gtag`)
- **Structured meta tags** with `useSeoMeta`

### UI/UX

- **Nuxt UI v4** component library
- **Tailwind CSS v4** for utility-first styling
- **Dark mode** support out of the box
- **Page transitions** for smooth navigation

## 🛠️ Tech Stack

| Category  | Technologies              |
| --------- | ------------------------- |
| Framework | Nuxt 4.2+, Vue 3.5+       |
| Language  | TypeScript 5.9            |
| Styling   | Tailwind CSS 4, Nuxt UI 4 |
| Content   | Nuxt Content 3, MDC       |
| i18n      | @nuxtjs/i18n              |
| Build     | Bun, Turborepo            |
| Linting   | Oxlint, Oxfmt             |
| Hooks     | prek                      |

## 📁 Project Structure

```
app/
├── components/     # Vue components (auto-imported)
├── composables/    # Composition functions
├── pages/          # File-based routing
├── assets/css/     # Global styles
└── plugins/        # Nuxt plugins

content/
├── en/             # English content
└── fr/             # French content

i18n/locales/       # Translation files
```

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun generate

# Lint & format
bun check
```

## 🙏 Acknowledgments

This project is built on the shoulders of amazing open-source projects:

### Core Framework

- **[Nuxt](https://nuxt.com)** - The intuitive Vue framework that makes building performant web applications a breeze
- **[Vue.js](https://vuejs.org)** - The progressive JavaScript framework

### Build & Tooling

- **[Turborepo](https://turbo.build)** - High-performance build system for JavaScript/TypeScript monorepos
- **[Bun](https://bun.sh)** - Incredibly fast JavaScript runtime and package manager

### Code Quality

- **[Oxlint](https://oxc.rs/docs/guide/usage/linter.html)** - The blazing-fast JavaScript/TypeScript linter written in Rust
- **[Oxfmt](https://oxc.rs)** - Ultra-fast code formatter from the OXC project
- **[prek](https://github.com/j178/prek)** - Modern Git hooks manager

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[Nuxt UI](https://ui.nuxt.com)** - Beautiful and accessible UI components for Nuxt

### Content & SEO

- **[Nuxt Content](https://content.nuxt.com)** - File-based CMS for Nuxt
- **[Nuxt i18n](https://i18n.nuxtjs.org)** - Internationalization module

---

Built with ❤️ by [Kevin De Benedetti](https://kevindb.dev)

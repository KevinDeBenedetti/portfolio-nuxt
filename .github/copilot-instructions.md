# GitHub Copilot Instructions - Portfolio Nuxt

Always use context7 when I need code generation, setup or
configuration steps, or library/API documentation. This means
you should automatically use the Context7 MCP tools to resolve
library id and get library docs without me having to
explicitly ask.

## 🎯 Project Overview

Personal portfolio built with modern web technologies:

- **Nuxt 4.2+** with Vue 3.5+ and TypeScript
- **pnpm** as package manager
- **Oxlint/Oxfmt** for ultra-fast linting and formatting (50-100x faster than ESLint)
- **Nuxt Content** for Markdown/JSON content management with Zod schemas
- **Nuxt UI** for UI components
- **Tailwind CSS 4** for styling
- **i18n** for internationalization (fr/en) with `prefix_except_default` strategy

**Key Features:**

- Static site generation (SSG) optimized
- Bilingual content organized by language (`content/en/`, `content/fr/`)
- SEO optimized with sitemap and robots.txt
- Dark mode support
- Docker-ready with Dockerfile and docker-compose
- Makefile for common tasks

## 💻 Code Conventions

### TypeScript

- **Always use TypeScript** for new files
- **Strict typing**: avoid `any`, prefer explicit types
- **Type inference**: let TypeScript infer when obvious

```typescript
// ✅ GOOD
interface ProjectData {
  title: string;
  url: string;
  description: string;
}

// ❌ BAD
const project: any = {
  /* ... */
};
```

### Vue 3 Composition API

- **Always use** `<script setup lang="ts">`
- **No Options API**: use Composition API exclusively
- **Typed props** with interfaces
- **Computed properties** for derived values
- Leverage Nuxt auto-imports

```vue
<script setup lang="ts">
interface Props {
  project: {
    title: string;
    url: string;
  };
}

const props = defineProps<Props>();
const title = computed(() => props.project?.title);
</script>
```

### Components & Composables

- **Naming**: PascalCase for components, `use` prefix for composables
- **Props**: always type, define required/defaults
- **Single File Components**: one component per file
- **Return objects** from composables for clarity

### Nuxt Content

- **Typed collections** in `content.config.ts` with Zod schemas
- **i18n separation**: content organized by language
- **MDC syntax** for Vue components in Markdown: `::component-name{prop="value"}`
- Global components in `components/content/` directory

### Styling

- **Tailwind utility-first**: prefer utility classes
- **Dark mode**: use `dark:` prefix
- **Responsive**: use Tailwind breakpoints
- **Nuxt UI**: prefer Nuxt UI components when available

```vue
<template>
  <div class="flex items-end gap-4 p-2 rounded-lg dark:bg-gray-900">
    <h3 class="text-sm font-medium hover:text-primary-600">
      {{ title }}
    </h3>
  </div>
</template>
```

## 🔧 Development Tools

### Oxlint/Oxfmt

Ultra-fast linting and formatting (50-100x faster than ESLint):

```bash
pnpm lint           # Standard lint
pnpm lint:type      # Type-aware lint
pnpm lint:fix       # Safe auto-fix
pnpm format         # Format code
pnpm check          # Complete check (lint + types)
```

### Makefile

Use Makefile commands for common tasks. Check `Makefile` for available targets.

### Git Hooks (prek)

```bash
pnpm hooks:install  # Install git hooks
pnpm hooks:run      # Run on all files
```

## 📝 Best Practices

### Performance

- Use `<NuxtImg>` for images
- Lazy load with `LazyComponent`
- Use `useAsyncData` for queries
- Favor SSG when possible

### SEO

- Use `useSeoMeta` for meta tags
- Sitemap auto-configured
- Robots.txt configured

### Accessibility

- Add ARIA attributes when needed
- Always use `alt` for images
- Use semantic HTML5
- Test keyboard navigation

## 📚 Documentation

For official documentation on dependencies, use **Context7** with the `@mcp_context7` tools to get up-to-date documentation.

Key modules:

- `@nuxt/content` - Content management
- `@nuxt/ui` - UI components
- `@nuxtjs/i18n` - Internationalization
- `@nuxt/image` - Image optimization

## 🎯 Code Philosophy

1. **Simplicity**: readable code over clever code
2. **Performance**: optimize from the start
3. **TypeScript**: strong typing reduces bugs
4. **Composability**: small, reusable components
5. **Accessibility**: always consider a11y
6. **SEO-first**: optimize for search engines
7. **i18n-first**: think multilingual from start
8. **DX**: excellent developer experience

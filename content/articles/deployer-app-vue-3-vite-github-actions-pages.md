---
title: "Déployer son projet Vue 3 avec GitHub Actions & Pages"
description: "Un tuto pour bien démarrer avec le déploiement d'un projet Vue 3 et GitHub"
published: 2024/02/20
slug: "deployer-app-vue-3-vite-github-actions-pages"
---

> Cette article vous permettra de déployer votre code Vue 3 utilisant Vite grâce à GitHub Actions & Pages.

## Configurer un projet Vue 3 pour GitHub Actions & Pages

### Étape 1 : Modifier le fichier vite.config.js

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/repo-name/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
```

### Étape 2 : Créer un fichier GitHub Actions Workflow

```yml
// .github/workflows/deploy.yml

# Simple workflow for deploying static content to GitHub Pages
name: Deploy to GitHub Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v1
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

Il ne vous reste plus qu'à push votre projet sur Github et le déploiement se fera de façon automatiser !
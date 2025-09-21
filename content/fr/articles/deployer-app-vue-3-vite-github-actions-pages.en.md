---
title: 'Deploying Your Vue 3 Project with GitHub Actions & Pages'
description: 'A tutorial to get started with deploying a Vue 3 project using GitHub'
published: 2024/02/20
slug: 'deployer-app-vue-3-vite-github-actions-pages'
lang: 'en'
sitemap:
  loc: /en/articles/deployer-app-vue-3-vite-github-actions-pages
  lastmod: 2024-02-20
---

> This article will guide you through deploying your Vue 3 code with Vite using GitHub Actions & Pages.

## Setting Up a Vue 3 Project for GitHub Actions & Pages

### Step 1: Modify the vite.config.js File

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/repo-name/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

### Step 2: Create a GitHub Actions Workflow File

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

Set up GitHub Pages in `Settings` -> `Pages` -> `Build and deployment` -> `Source` => `GitHub Actions`.

Now, simply push your project to GitHub, and deployment will happen automatically !

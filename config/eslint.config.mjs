import { createConfigForNuxt } from '@nuxt/eslint-config';
import oxlint from 'eslint-plugin-oxlint';

export default createConfigForNuxt({
  root: true,
  features: {
    tooling: true,
  },
  stylistic: true,
}).append(oxlint.configs['flat/recommended']);

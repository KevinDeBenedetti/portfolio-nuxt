import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
  root: true,
  features: {
    tooling: true
  },
  stylistic: true
})

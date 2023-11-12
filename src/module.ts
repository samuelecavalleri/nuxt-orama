import { defineNuxtModule, addPlugin, createResolver, addImports } from '@nuxt/kit'
import type { NuxtOramaOptions } from './types/nuxt-orama-type'

export default defineNuxtModule<NuxtOramaOptions>({
  meta: {
    name: 'nuxt-orama',
    version: '0.0.1',
    configKey: 'nuxtOrama'
  },
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // addPlugin({
    //   src: resolver.resolve('./runtime/nuxt-orama.ts'),
    //   mode: 'all'
    // })
    addImports({
      name: 'useOrama',
      from: resolver.resolve('./runtime/use-orama.ts')
    })
  }
})

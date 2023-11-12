import { defineNuxtPlugin } from "nuxt/app";
import { create, insertMultiple } from '@orama/orama'
import type { AnyOrama } from '@orama/orama'

const schema = {
  name: 'string',
  age: 'number'
} as const

const docs = [
  { name: 'Samuele', age: 27 },
  { name: 'Mateo', age: 28 },
]

let orama: AnyOrama<typeof schema>

export default defineNuxtPlugin({
  async setup(nuxtApp) {
    orama = await create<typeof schema>({ schema })

    await insertMultiple(orama, docs)
  }
})

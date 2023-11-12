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

export default defineNuxtPlugin(async (nuxtApp) => {
  orama = await create({ schema })

  await insertMultiple(orama, docs)

  nuxtApp.provide('orama', orama)
})

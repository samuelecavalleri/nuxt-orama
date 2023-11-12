<template>
  <div>
    Hello Orama
    <div v-for="doc in Object.keys(docs)" :key="doc.name">
      {{ docs[doc].name }}
    </div>
  </div>
</template>

<script setup>
const { $orama } = useNuxtApp()

const docs = $orama?.data?.docs?.docs

console.log({ docs })

</script>
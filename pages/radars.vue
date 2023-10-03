<script setup lang="ts">
const { data } = await useFetch('/api/radars')
</script>

<template>
  <section>
    <h3>Python result:</h3>
    <pre>{{data}}</pre>
  </section>
</template>

<style scoped>

</style>

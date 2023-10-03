<script setup lang="ts"></script>

<template>
  <div class="p-6 flex">
    <header class="mb-4">
      <h1 class="text-5 capitalize">Boom 🤯</h1>
    </header>
    <div class="ml-auto mr-20">
      <NuxtLink class="mr-2" to="/">Home</NuxtLink>
      <NuxtLink class="mr-2" to="/radars">Radars</NuxtLink>
    </div>
  </div>
  <main class="md:max-w-6xl mx-auto">
    <slot />
  </main>
</template>

<style scoped></style>

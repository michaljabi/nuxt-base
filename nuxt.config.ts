// https://nuxt.com/docs/api/configuration/nuxt-config

console.log('I GOT', process.env.NODE_ENV);
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'development' ? '/' : '/nuxt-base/',
  }
})

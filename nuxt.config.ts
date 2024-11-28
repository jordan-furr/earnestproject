// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/style.css'],
  plugins: ['~/plugins/firebase.js'],
  build: {
    transpile: ['firebase'],
  },
  compatibilityDate: '2024-11-27'
});
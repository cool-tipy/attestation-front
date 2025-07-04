// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  eslint: {
    config: { standalone: false },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
  ],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
})

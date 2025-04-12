// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.js' },
      { code: 'ar', iso: 'ar', name: 'العربية', file: 'ar.js' },
    ],
    lazy: true,
    defaultLocale: 'ar',
    // vueI18n: {
    //   fallbackLocale: 'en',
    // },
  }
})
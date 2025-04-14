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
    '@nuxtjs/seo'
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en', name: 'English', file: 'en.js' },
      { code: 'ar', iso: 'ar', name: 'العربية', file: 'ar.js' },
    ],
    lazy: true,
    defaultLocale: 'ar',
    // vueI18n: {
    //   fallbackLocale: 'en',
    // },
  },
  head: {
    htmlAttrs: {
      lang: 'en', // Default to English, it will change dynamically when locale is switched.
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Smile Dental Clinic provides expert dental care and services in a modern and welcoming environment.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'dentist, dental care, teeth whitening, smile clinic, dental clinic, orthodontics',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Smile Dental Clinic - Expert Dental Care',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Smile Dental Clinic provides expert dental care and services in a modern and welcoming environment.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/path/to/logo.png', // Add your logo or a relevant image
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://your-website-url.com',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico', // Your website's favicon
      },
    ],
  },
})
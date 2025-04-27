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
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.js', dir: 'ltr' },
      { code: 'ar', iso: 'ar-SA', name: 'العربية', file: 'ar.js', dir: 'rtl' },
    ],
    langDir: 'locales/',
    lazy: true,
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    // vueI18n: {
    //   fallbackLocale: 'ar',
    // },
    // Fix for the warning
    bundle: {
      optimizeTranslationDirective: false
    }
  },
    
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: 'Smile Dental Clinic provides expert dental care and services in a modern and welcoming environment.'
        },
        {
          name: 'keywords',
          content: 'dentist, dental care, teeth whitening, smile clinic, dental clinic, orthodontics',
        },
        {
          property: 'og:title',
          content: 'Smile Dental Clinic - Expert Dental Care',
        },
        {
          property: 'og:description',
          content: 'Smile Dental Clinic provides expert dental care and services in a modern and welcoming environment.',
        },
        {
          property: 'og:image',
          content: '/img/og-image.jpg', 
        },
        {
          property: 'og:url',
          content: 'https://your-website-url.com',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
      ],
    }
  },
  
  // Additional recommended configurations
  nitro: {
    compressPublicAssets: true,
  }
})
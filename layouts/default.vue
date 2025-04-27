<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" :class="{ 'font-kufi': locale === 'ar' }"
    class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white shadow-md">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center">
            <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 class="text-2xl font-bold text-blue-600">Smile Dental</h1>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              active-class="text-blue-600 border-b-2 border-blue-600">
              {{ $t('nav.home') }}
            </NuxtLink>
            <NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              active-class="text-blue-600 border-b-2 border-blue-600">
              {{ $t('nav.about') }}
            </NuxtLink>
            <!-- <NuxtLink to="/services" class="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              active-class="text-blue-600 border-b-2 border-blue-600">
              {{ $t('nav.services') }}
            </NuxtLink>
            <NuxtLink to="/contact"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {{ $t('nav.contact') }}
            </NuxtLink> -->
          </nav>

          <!-- Language Toggle -->
          <!-- <div class="flex items-center space-x-4">
            <button @click="toggleLanguage"
              class="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors flex items-center"
              :class="{ 'bg-blue-100 text-blue-600': locale === 'ar' }">
              <span class="mr-2">{{ locale === 'en' ? 'العربية' : 'English' }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>
          </div> -->

          <div class="rounded-md shadow">
            <a href="#appointment"
              class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-blue-600 rounded-md border border-transparent ">
              {{ $t('bookAppointment') }}
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
            @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="bg-white shadow-lg md:hidden px-4 py-3 space-y-3 border-t border-gray-100"
        @click="isMobileMenuOpen = false">
        <NuxtLink to="/"
          class="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
          active-class="bg-blue-50 text-blue-600">
          {{ $t('nav.home') }}
        </NuxtLink>
        <NuxtLink to="/about"
          class="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
          active-class="bg-blue-50 text-blue-600">
          {{ $t('nav.about') }}
        </NuxtLink>
        <NuxtLink to="/services"
          class="block py-2 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
          active-class="bg-blue-50 text-blue-600">
          {{ $t('nav.services') }}
        </NuxtLink>
        <NuxtLink to="/contact"
          class="block py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
          {{ $t('nav.contact') }}
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Analytics -->
    <Analytics />

    <!-- WhatsApp Floating Button -->
    <FloatingWhatsApp phone-number="+905551483069" :clinic-name="$t('whatsapp.clinicName')"
      :default-message="$t('whatsapp.defaultMessage')" :show-on-mobile="true" :show-on-desktop="true"
      class="fixed bottom-6 right-6 z-40" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Footer from './Footer.vue';
import FloatingWhatsApp from '~/components/FloatingWhatsApp.vue';

const isMobileMenuOpen = ref(false);
const { locale, t } = useI18n();

// Toggle language between English and Arabic
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en';
  locale.value = newLocale;
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #38bdf8;
  --primary-dark: #0ea5e9;
  --secondary: #f0fdfa;
  --accent: #f59e0b;
}

.font-kufi {
  font-family: 'Noto Kufi Arabic', sans-serif;
}

body {
  font-family: 'Poppins', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Smooth transitions for NuxtLink */
.nuxt-link-active {
  transition: all 0.2s ease;
}

/* Container class for consistent width */
.container {
  max-width: 1280px;
  margin: 0 auto;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
</style>
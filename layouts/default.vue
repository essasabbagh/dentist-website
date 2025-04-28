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

          <WhatsAppButton />
        </div>
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
import WhatsAppButton from '~/components/WhatsAppButton.vue';

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
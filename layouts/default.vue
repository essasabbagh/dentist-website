<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" :class="{'font-kufi': locale === 'ar'}">
    <header class="p-4 bg-white shadow">
      <div class="container flex justify-between items-center mx-auto">
        <h1 class="text-2xl font-bold text-blue-600">Smile Dental</h1>
        <nav class="hidden space-x-4 md:flex">
          <NuxtLink to="/">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/about">{{ $t('nav.about') }}</NuxtLink>
        </nav>

        <!-- Language Toggle -->
        <div class="flex items-center space-x-4">
          <button @click="toggleLanguage" class="px-4 py-2 bg-gray-200 rounded-lg">
            {{ locale === 'en' ? 'العربية' : 'English' }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="p-2 rounded border border-blue-600 md:hidden" @click="isMobileMenuOpen = !isMobileMenuOpen">
          ☰
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="p-4 mt-2 space-y-2 bg-white shadow md:hidden">
      <NuxtLink to="/" @click="isMobileMenuOpen = false">{{ $t('nav.home') }}</NuxtLink>
      <NuxtLink to="/about" @click="isMobileMenuOpen = false">{{ $t('nav.about') }}</NuxtLink>
    </div>

    <main>
      <slot />
    </main>

    <Footer />
    <Analytics />
    <FloatingWhatsApp 
          phone-number="+905551483069" 
          :clinic-name="$t('whatsapp.clinicName')"
          :default-message="$t('whatsapp.defaultMessage')"
          :show-on-mobile="true"
          :show-on-desktop="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Analytics } from '@vercel/analytics/nuxt';
import FloatingWhatsApp from '~/components/FloatingWhatsApp.vue';
import Footer from './Footer.vue';

const isMobileMenuOpen = ref(false);
const { locale } = useI18n();

// Toggle language between English and Arabic
const toggleLanguage = () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en';
  locale.value = newLocale;
};

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&display=swap');

.font-kufi {
  font-family: 'Noto Kufi Arabic', sans-serif;
}
</style>

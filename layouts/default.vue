<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <header class="bg-white shadow p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">Smile Dental</h1>
        <nav class="space-x-4 hidden md:flex">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </nav>

        <!-- Language Toggle -->
        <div class="flex items-center space-x-4">
          <button @click="toggleLanguage" class="bg-gray-200 px-4 py-2 rounded-lg">
            {{ locale === 'en' ? 'العربية' : 'English' }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 border border-blue-600 rounded" @click="isMobileMenuOpen = !isMobileMenuOpen">
          ☰
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow mt-2 p-4 space-y-2">
      <NuxtLink to="/" @click="isMobileMenuOpen = false">Home</NuxtLink>
      <NuxtLink to="/about" @click="isMobileMenuOpen = false">About</NuxtLink>
    </div>

    <main>
      <slot />
    </main>

    <Footer />

    <FloatingWhatsApp phone-number="+966123456789" clinic-name="Smile Dental Clinic - Jeddah"
      default-message="Hello, I need information about teeth whitening" :show-on-mobile="true"
      :show-on-desktop="true" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
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
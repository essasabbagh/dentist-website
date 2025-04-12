<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <ContactSection />
    <ClinicInfo />
    <FAQ />
    <Testimonial />
    <OurVision />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import ContactSection from '~/components/ContactSection.vue'
import ClinicInfo from '~/components/ClinicInfo.vue'
import FAQ from '~/components/FAQ.vue';
import Testimonial from '~/components/Testimonial.vue';
import OurVision from '~/components/OurVision.vue';

// Dynamic metadata for the home page
useHead({
  title: 'Smile Dental Clinic - Home',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Welcome to Smile Dental Clinic, your trusted partner for expert dental care.',
    },
  ],
});
</script>
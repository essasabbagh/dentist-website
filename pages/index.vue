<template>
  <div>
    <HeroSection />
    <!-- <Slider /> -->
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
import ClinicInfo from '~/components/ClinicInfo.vue';
import ContactSection from '~/components/ContactSection.vue';
import FAQ from '~/components/FAQ.vue';
import HeroSection from '~/components/HeroSection.vue';
import Slider from '~/components/Slider.vue';
import OurVision from '~/components/OurVision.vue';
import ServicesSection from '~/components/ServicesSection.vue';
import Testimonial from '~/components/Testimonial.vue';

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
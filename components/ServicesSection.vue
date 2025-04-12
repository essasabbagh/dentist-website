<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold text-blue-600 mb-10">Our Dental Services</h2>
      <div class="grid md:grid-cols-3 gap-8 text-left">
        <div v-for="(service, index) in services" :key="index" class="bg-white p-6 rounded shadow">
          <h3 class="text-xl font-semibold text-blue-500 mb-2">{{ service.title }}</h3>
          <p class="text-gray-700">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Professional cleaning to keep your smile bright and healthy.',
  },
  {
    title: 'Dental Implants',
    description: 'Restore missing teeth with safe and durable dental implants.',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with whitening, veneers, and more.',
  },
];
</script>
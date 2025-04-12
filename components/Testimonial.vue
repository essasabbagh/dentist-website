<template>
    <section class="py-12 bg-blue-600 text-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">{{ $t('testimonial.title') }}</h2>
        <div class="space-y-6">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white text-black p-6 rounded-lg shadow-lg">
            <p class="italic">{{ testimonial.feedback }}</p>
            <p class="font-semibold mt-4">{{ testimonial.name }}</p>
            <p>{{ testimonial.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const testimonials = [
    {
      feedback: 'This is the best dental clinic I have ever visited! The staff is very professional and friendly.',
      name: 'John Doe',
      role: 'Patient',
    },
    {
      feedback: 'The dental team made me feel comfortable and safe during the entire procedure. Highly recommend!',
      name: 'Jane Smith',
      role: 'Patient',
    },
    // Add more testimonials here
  ];
  </script>
  
  <style scoped>
  </style>
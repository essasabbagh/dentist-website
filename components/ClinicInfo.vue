<template>
  <section class="py-20 bg-white border-t border-gray-200">
    <div class="container px-4 mx-auto text-center">
      <h2 class="mb-6 text-3xl font-bold text-blue-600">{{ $t('clinic.visitUs') }}</h2>

      <div class="grid gap-8 md:grid-cols-2">
        <div>
          <h3 class="mb-2 text-xl font-semibold">{{ $t('clinic.hours.title') }}</h3>
          <ul class="space-y-1 text-gray-700">
            <li>{{ $t('clinic.hours.weekdays') }}</li>
            <li>{{ $t('clinic.hours.saturday') }}</li>
            <li>{{ $t('clinic.hours.sunday') }}</li>
          </ul>
        </div>
        <div>
          <iframe
            class="w-full h-64 rounded"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019477102035!2d-122.41941568468333!3d37.77492977975916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c01!2sDentist!5e0!3m2!1sen!2sus!4v1680501049384"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed unless you add functionality
</script>
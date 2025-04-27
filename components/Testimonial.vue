<template>
  <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white relative">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">{{ $t('testimonials.title') }}</h2>

      <div class="relative max-w-3xl mx-auto">
        <!-- Swiper container -->
        <Swiper
          :modules="[Autoplay, Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="20"
          :autoplay="{ delay: 5000 }"
          :pagination="{ clickable: true }"
          :navigation="{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev'
          }"
          class="pb-16"
        >
          <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
            <div class="bg-white text-gray-800 p-8 rounded-xl shadow-xl flex flex-col items-center text-center">
              <div class="w-24 h-24 rounded-full overflow-hidden mb-6">
                <img :src="testimonial.avatar" alt="Avatar" class="object-cover w-full h-full" />
              </div>
              <p class="text-lg italic mb-6">{{ testimonial.feedback }}</p>
              <div>
                <p class="font-bold text-blue-600">{{ testimonial.name }}</p>
                <p class="text-gray-600">{{ testimonial.role }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <!-- Custom Navigation Buttons (outside slider) -->
        <div class="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10">
          <button
            class="custom-swiper-button-prev bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div class="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
          <button
            class="custom-swiper-button-next bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-blue-100 transition"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { computed } from 'vue';
const { t } = useI18n();

const testimonials = computed(() => [
  {
    feedback: t('testimonials.items[0].feedback'),
    name: t('testimonials.items[0].name'),
    role: t('testimonials.items[0].role'),
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    feedback: t('testimonials.items[1].feedback'),
    name: t('testimonials.items[1].name'),
    role: t('testimonials.items[1].role'),
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    feedback: t('testimonials.items[2].feedback'),
    name: t('testimonials.items[2].name'),
    role: t('testimonials.items[2].role'),
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    feedback: t('testimonials.items[3].feedback'),
    name: t('testimonials.items[3].name'),
    role: t('testimonials.items[3].role'),
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
  {
    feedback: t('testimonials.items[4].feedback'),
    name: t('testimonials.items[4].name'),
    role: t('testimonials.items[4].role'),
    avatar: 'https://i.pravatar.cc/150?u=5'
  },
  {
    feedback: t('testimonials.items[5].feedback'),
    name: t('testimonials.items[5].name'),
    role: t('testimonials.items[5].role'),
    avatar: 'https://i.pravatar.cc/150?u=6'
  },
]);
</script>
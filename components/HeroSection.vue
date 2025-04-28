<template>
  <div class="overflow-hidden relative bg-blue-50">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        :class="{ 'lg:ml-auto': $i18n.locale === 'ar' }">
        <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div :class="{ 'text-right': $i18n.locale === 'ar' }">
            <h1 class="tracking-tighttext-gray-900">
              <span class="block pb-8 text-4xl font-bold leading-normal sm:text-5xl md:text-6xl">{{ $t('heroTitle1')
                }}</span>
              <span class="block text-3xl font-medium text-blue-600 sm:text-4xl md:text-5xl">{{ $t('heroTitle2')
                }}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {{ $t('heroDescription') }}
            </p>
            <div class="mt-5 sm:mt-8 sm:flex" :class="[
              $i18n.locale === 'ar' ? 'sm:justify-center lg:justify-end flex-row-reverse' : 'sm:justify-center lg:justify-start'
            ]">
              <WhatsAppButton />
              <div :class="[
                'mt-3 sm:mt-0',
                $i18n.locale === 'ar' ? 'sm:ml-3' : 'sm:ml-3'
              ]">
                <a href="#services"
                  class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-blue-700 bg-blue-100 rounded-md border border-transparent hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                  {{ $t('ourServices') }}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:w-1/2"
      :class="{ 'lg:left-0': $i18n.locale === 'ar', 'lg:right-0': $i18n.locale !== 'ar' }">
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/dentist-hero.jpg"
        alt="Dentist with patient">
    </div>
  </div>
</template>

<script setup>
import WhatsAppButton from '~/components/WhatsAppButton.vue'; // Adjust the import path as needed
</script>
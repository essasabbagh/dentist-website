<template>
  <section id="services" class="py-20 bg-gray-50">
    <div class="container px-4 mx-auto text-center">
      <h2 class="mb-10 text-3xl font-bold text-blue-600">
        {{ $t('ourDentalServices') }}
      </h2>
      <div class="grid gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
        <div v-for="(service, index) in services" :key="index"
          class="relative bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
          <div class="aspect-w-3 aspect-h-2">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-6">
            <h3 class="mb-2 text-xl font-semibold text-blue-500">{{ service.title }}</h3>
            <p class="text-gray-700">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

const services = computed(() => [
  {
    title: t('services.teethCleaning.title'),
    description: t('services.teethCleaning.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',
  },
  {
    title: t('services.dentalImplants.title'),
    description: t('services.dentalImplants.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',

  },
  {
    title: t('services.cosmeticDentistry.title'),
    description: t('services.cosmeticDentistry.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',

  },
  {
    title: t('services.orthodontics.title'),
    description: t('services.orthodontics.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',

  },
  {
    title: t('services.pediatricDentistry.title'),
    description: t('services.pediatricDentistry.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',

  },
  {
    title: t('services.emergencyDentalCare.title'),
    description: t('services.emergencyDentalCare.description'),
    image: 'https://st2.depositphotos.com/4612235/10685/i/450/depositphotos_106858576-stock-photo-male-dentist-in-action.jpg',

  },
]);
</script>
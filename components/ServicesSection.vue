<template>
  <section class="py-20 bg-gray-50">
    <div class="container px-4 mx-auto text-center">
      <h2 class="mb-10 text-3xl font-bold text-blue-600">
        {{ $t('ourDentalServices') }}
        
        </h2>
      <div class="grid gap-8 text-left md:grid-cols-3">
        <div v-for="(service, index) in services" :key="index" class="p-6 bg-white rounded shadow">
          <h3 class="mb-2 text-xl font-semibold text-blue-500">{{ service.title }}</h3>
          <p class="text-gray-700">{{ service.description }}</p>
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
  },
  {
    title: t('services.dentalImplants.title'),
    description: t('services.dentalImplants.description'),
  },
  {
    title: t('services.cosmeticDentistry.title'),
    description: t('services.cosmeticDentistry.description'),
  },
]);
</script>
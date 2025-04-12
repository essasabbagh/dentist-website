<template>
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6">{{ $t('faq.title') }}</h2>
        <div class="space-y-6">
          <div v-for="(item, index) in faqItems" :key="index" class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="font-semibold text-xl mb-4">{{ item.question }}</h3>
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const faqItems = [
    {
      question: 'What is the best way to brush my teeth?',
      answer: 'Brushing your teeth twice a day with fluoride toothpaste is the best way to keep your teeth healthy.',
    },
    {
      question: 'How often should I visit the dentist?',
      answer: 'It’s recommended to visit your dentist every six months for regular checkups and cleanings.',
    },
    // Add more FAQ items here
  ];
  </script>
  
  <style scoped>
  </style>
<template>
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6">{{ $t('faq.title') }}</h2>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index" 
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <button 
            @click="toggleItem(index)" 
            class="w-full text-left p-6 flex justify-between items-center focus:outline-none"
            :aria-expanded="expandedItem === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <h3 class="font-semibold text-xl">{{ $t(item.questionKey) }}</h3>
            <svg 
              class="w-6 h-6 transform transition-transform duration-300" 
              :class="expandedItem === index ? 'rotate-180' : ''"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            :id="`faq-answer-${index}`"
            v-show="expandedItem === index" 
            class="px-6 pb-6 transition-all duration-300"
          >
            <p>{{ $t(item.answerKey) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// import { useHead } from 'head';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();
const expandedItem = ref(null);

const toggleItem = (index) => {
  expandedItem.value = expandedItem.value === index ? null : index;
};

const faqItems = [
  {
    questionKey: 'faq.questions.brushing.question',
    answerKey: 'faq.questions.brushing.answer',
  },
  {
    questionKey: 'faq.questions.visits.question',
    answerKey: 'faq.questions.visits.answer',
  },
  {
    questionKey: 'faq.questions.flossing.question',
    answerKey: 'faq.questions.flossing.answer',
  },
];

// SEO setup with dynamic content
const title = t('seo.faq.title');
const description = t('seo.faq.description');

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    // Twitter Card
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:card', content: 'summary' },
  ],
  link: [
    // Add hreflang references for each supported language
    { rel: 'alternate', hreflang: 'en', href: `/en/faq` },
    { rel: 'alternate', hreflang: 'ar', href: `/ar/faq` },
    { rel: 'canonical', href: `/${locale.value}/faq` }
  ]
});
</script>

<style scoped>
/* Optional: Add some animations or transitions */
.transition-all {
  transition-property: all;
}
</style>
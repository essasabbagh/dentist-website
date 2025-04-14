<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" :class="{'font-noto-arabic': locale === 'ar'}">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const { locale } = useI18n()
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&display=swap');

.font-noto-arabic {
  font-family: 'Noto Sans Arabic', sans-serif;
}
</style>
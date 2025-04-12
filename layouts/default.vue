<template>
  <div>
    <header class="bg-white shadow p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">Smile Dental</h1>
        <nav class="space-x-4 hidden md:flex">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </nav>
        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 border border-blue-600 rounded"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          ☰
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white shadow mt-2 p-4 space-y-2">
      <NuxtLink to="/" @click="isMobileMenuOpen = false">Home</NuxtLink>
      <NuxtLink to="/about" @click="isMobileMenuOpen = false">About</NuxtLink>
    </div>

    <main>
      <slot />
    </main>

    <footer class="bg-gray-100 text-center py-6 text-sm mt-10">
      &copy; 2025 Smile Dental Clinic. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);
</script>
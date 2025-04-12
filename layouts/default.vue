<template>
  <div>
    <header class="bg-white shadow p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-blue-600">Smile Dental</h1>
        <nav class="space-x-4">
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="bg-gray-100 text-center py-6 text-sm mt-10">
      &copy; 2025 Smile Dental Clinic. All rights reserved.
    </footer>
  </div>
</template>
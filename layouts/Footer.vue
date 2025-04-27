<template>
    <footer class="bg-gradient-to-r from-blue-50 to-teal-50 pt-12 pb-6">
        <div class="container mx-auto px-4">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <!-- Clinic Info -->
                <div class="col-span-1">
                    <NuxtLink to="/" class="flex items-center mb-4">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span class="text-2xl font-bold text-blue-600">{{ $t('footer.clinicName') }}</span>
                    </NuxtLink>
                    <p class="text-gray-600 mb-4">{{ $t('footer.tagline') }}</p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                            </svg>
                        </a>
                        <a href="#" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" class="text-blue-600 hover:text-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ $t('footer.quickLinks') }}</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="/about" class="text-gray-600 hover:text-blue-600 transition-colors">{{
                                $t('footer.links.about') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services" class="text-gray-600 hover:text-blue-600 transition-colors">{{
                                $t('footer.links.services') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/doctors" class="text-gray-600 hover:text-blue-600 transition-colors">{{
                                $t('footer.links.doctors') }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/blog" class="text-gray-600 hover:text-blue-600 transition-colors">{{
                                $t('footer.links.blog') }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ $t('footer.services') }}</h3>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="/services/cleaning"
                                class="text-gray-600 hover:text-blue-600 transition-colors">{{ $t('services.cleaning')
                                }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services/whitening"
                                class="text-gray-600 hover:text-blue-600 transition-colors">{{ $t('services.whitening')
                                }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services/implants"
                                class="text-gray-600 hover:text-blue-600 transition-colors">{{ $t('services.implants')
                                }}</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/services/orthodontics"
                                class="text-gray-600 hover:text-blue-600 transition-colors">{{
                                    $t('services.orthodontics') }}</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-span-1">
                    <h3 class="text-lg font-semibold text-gray-800 mb-4">{{ $t('footer.contact') }}</h3>
                    <ul class="space-y-3">
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mt-1 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span class="text-gray-600">123 Dental Street, Health City</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mt-1 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span class="text-gray-600">+1 (234) 567-8900</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mt-1 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span class="text-gray-600">info@smiledental.com</span>
                        </li>
                        <!-- <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mt-1 mr-2" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-gray-600">{{ $t('footer.hours') }}</span>
                        </li> -->
                    </ul>
                </div>
            </div>

            <!-- Divider -->
            <hr class="my-6 border-gray-200">

            <!-- Bottom Footer -->
            <div class="flex flex-col md:flex-row justify-between items-center">
                <span class="text-sm text-gray-500 mb-4 md:mb-0">
                    {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
                </span>

                <!-- <div class="flex space-x-6">
                    <NuxtLink to="/privacy" class="text-sm text-gray-500 hover:text-blue-600">{{
                        $t('footer.links.privacy') }}</NuxtLink>
                    <NuxtLink to="/terms" class="text-sm text-gray-500 hover:text-blue-600">{{ $t('footer.links.terms')
                        }}</NuxtLink>
                    <NuxtLink to="/sitemap" class="text-sm text-gray-500 hover:text-blue-600">{{
                        $t('footer.links.sitemap') }}</NuxtLink>
                </div> -->
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>
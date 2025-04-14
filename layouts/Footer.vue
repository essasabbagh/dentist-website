<template>
    <footer class="m-4 bg-white rounded-lg shadow-sm dark:bg-gray-900">
        <div class="p-4 mx-auto w-full max-w-screen-xl md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                    <img src="../images/logo.svg" class="h-12" :alt="$t('footer.logoAlt')" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ $t('footer.clinicName') }}</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.links.about') }}</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.links.privacy') }}</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">{{ $t('footer.links.licensing') }}</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">{{ $t('footer.links.contact') }}</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
            </span>
        </div>
    </footer>
</template>

<script setup>
</script>

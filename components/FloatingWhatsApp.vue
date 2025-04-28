<template>
    <div 
      class="fixed bottom-6 z-50"
      :class="{
        'left-6': $i18n.locale !== 'ar',
        'right-6': $i18n.locale === 'ar'
      }"
    >
      <div class="relative">
        <!-- Main Button -->
        <button
          @click="toggleChat"
          class="bg-[#25D366] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center"
          :class="{
            'animate-bounce': !showChatBox,
            'rounded-b-none': showChatBox
          }"
          aria-label="WhatsApp Chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span v-if="showChatBox" class="ml-2">{{ $t('close') }}</span>
        </button>
  
        <!-- Chat Box -->
        <Transition name="slide-up">
          <div 
            v-if="showChatBox"
            class="absolute bottom-full mb-2 w-72 bg-white rounded-lg shadow-xl overflow-hidden"
            :class="{
              'right-0': $i18n.locale === 'ar',
              'left-0': $i18n.locale !== 'ar'
            }"
          >
            <!-- Header -->
            <div class="bg-[#25D366] text-white p-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <div class="ml-2">
                <h3 class="font-bold">{{ clinicName }}</h3>
                <p class="text-xs">{{ $t('online') }}</p>
              </div>
            </div>
  
            <!-- Message -->
            <div class="p-4 text-sm text-gray-700">
              <p>{{ $t('whatsappMessage') }}</p>
            </div>
  
            <!-- Action Button -->
            <div class="p-3 bg-gray-50 flex justify-end">
              <a 
                :href="whatsappLink"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-[#25D366] text-white px-4 py-2 rounded flex items-center hover:bg-[#128C7E] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="mr-2">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.392 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                {{ $t('chatNow') }}
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  const { t } = useI18n();
  
  const props = defineProps({
    phoneNumber: {
      type: String,
      required: true,
      default: '+966123456789'
    },
    clinicName: {
      type: String,
      default: 'Smile Dental Clinic'
    },
    defaultMessage: {
      type: String,
      default: 'Hello, I would like to book an appointment.'
    },
    showOnMobile: {
      type: Boolean,
      default: true
    },
    showOnDesktop: {
      type: Boolean,
      default: true
    }
  });
  
  const showChatBox = ref(false);
  
  const toggleChat = () => {
    showChatBox.value = !showChatBox.value;
  };
  
  const whatsappLink = computed(() => {
    const encodedMessage = encodeURIComponent(props.defaultMessage);
    return `https://wa.me/${props.phoneNumber}?text=${encodedMessage}`;
  });
  </script>
  
  <style scoped>
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-up-enter-from,
  .slide-up-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  </style>
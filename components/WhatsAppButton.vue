<template>
    <div class="rounded-md shadow">
        <a :href="whatsappUrl" target="_blank"
            class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-blue-600 rounded-md border border-transparent hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
            {{ $t('bookAppointment') }}
        </a>
    </div>
</template>

<script setup>
const { t } = useI18n();

const props = defineProps({
    phoneNumber: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        default: '',
    },
    buttonTextOverride: {
        type: String,
        default: '',
    },
});

const whatsappUrl = computed(() => {
    const encodedMessage = encodeURIComponent(props.message);
    return `https://wa.me/+905050026612?text=hi`;
});

const buttonText = computed(() => {
    return props.buttonTextOverride || t('bookAppointmentViaWhatsApp');
});
</script>
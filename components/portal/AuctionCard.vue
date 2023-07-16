<template>
    <div class='border p-3 bg-white border-gray-200 rounded-lg transition hover:ring hover:ring-1 ring-pink-900'>
        <div class='relative isolate overflow-hidden bg-secondary h-[250px] mb-6'>
            <div class= "bg-white absolute flex items-center px-2 gap-1 top-2 right-2 rounded z-10 text-[10px]">
                <i class="ri-calendar-event-line text-lg"></i>
                {{ props.date }}
            </div>
            <img :src="`/assets/images/${props.thumb}`" alt=''
                 class='absolute rounded inset-0 h-full w-full object-cover object-top'/>
        </div>


        <div class="p-3 relative">

            <div class="absolute -top-14 left-3 z-20 ">
                <client-only>
                    <vue-countdown :time="2 * 24 * 60 * 60 * 1000" :interval="100" v-slot="{ days, hours, minutes, seconds }">
                        <div class="flex gap-1">
                            <div class="bg-white rounded text-center p-2 shadow">
                                <base-heading as="h6">{{ days }}</base-heading>
                                <p class="text-[11px] opacity-60">{{ $t('Day') }}</p>

                            </div>
                            <div class="bg-white rounded text-center p-2 shadow">
                                <base-heading as="h6">{{ hours }}</base-heading>
                                <p class="text-[11px] opacity-60">{{ $t('Hour') }}</p>

                            </div>
                            <div class="bg-white rounded text-center p-2 shadow">
                                <base-heading as="h6">{{ minutes }}</base-heading>
                                <p class="text-[11px] opacity-60">{{ $t('Minute') }}</p>
                            </div>
                            <div class="bg-white rounded text-center p-2 shadow">
                                <base-heading as="h6">{{ seconds }}</base-heading>
                                <p class="text-[11px] opacity-60">{{ $t('Seconds') }}</p>
                            </div>
                        </div>
                    </vue-countdown>
                </client-only>
            </div>

            <base-heading as="h4" class="mb-2">{{ props.name }}</base-heading>
            <div class="px-1 bg-white flex items-center gap-1 rounded z-10 text-[10px]">
                <i class="ri-map-pin-line text-lg"></i>
                {{ props.location }}
            </div>
            <div class="flex p-4 justify-between">
                <div class="text-center">
                    <base-heading class="text-lg" as="h5">{{ props.duration }}</base-heading>
                    <p class="text-xs opacity-50">ايام المزاد</p>
                </div>
                <div class="separator border-l border-gray-200"></div>
                <div class="text-center">
                    <base-heading class="text-md" as="h6">{{ props.duration }}</base-heading>
                    <p class="text-xs opacity-50">ايام المزاد</p>
                </div>
                <div class="separator border-l border-gray-200"></div>

                <div class="text-center">
                    <base-heading class="text-md" as="h6">{{ props.duration }}</base-heading>
                    <p class="text-xs opacity-50">ايام المزاد</p>
                </div>
            </div>
            <div class="flex justify-center p-4">
                <base-button intent="primary">تفاصيل المزاد</base-button>
            </div>
        </div>

    </div>

</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';

const props = defineProps({
    name: {
        type: String
    },
    thumb: {
        type: String
    },
    date: {
        type: String
    },
    location: {
        type: String
    },
    deposit: {
        type: Number
    },
    duration: {
        type: Number
    },
    products: {
        type: Number
    },
    status: {
        type: String
    }

})

</script>

<style scoped>

</style>

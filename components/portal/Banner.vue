<template>

    <div class='relative isolate overflow-hidden py-16 lg:py-32 bg-[#1C0612] h-[590px]'>
        <img src='@/assets/images/banner_1.png' alt=""
             class="absolute inset-0 -z-20 h-full w-full object-cover object-bottom  "/>
        <div class="absolute inset-0 -z-20 h-full w-full object-cover object-bottom bg-[#1C0612] opacity-90"></div>
        <div class='mx-auto max-w-7xl'>
            <div class='mx-auto  text-center'>
                <h1 class='mt-24 text-4xl font-bold text-white sm:mt-10 sm:text-5xl heading-effect-1 duration-700 delay-[0.5s]'>
                    {{ $t('Testahel Platform') }}</h1>
                <p class='mt-6 text-lg leading-8 text-neutral-50  text-white  duration-700 delay-[0.75s]'>
                    {{ $t('For Online RealEstate Auctions') }}</p>
                <div class='mt-10 flex items-center justify-center gap-2 duration-700 delay-[1s]'>
                    <base-button size="xl" intent="primary">{{ $t('Explore Auctions') }}</base-button>
                    <base-button size="xl" intent="outline">{{ $t('New Membership') }}</base-button>
                </div>
            </div>
        </div>
    </div>
    <div class='bg-white  rounded-2xl relative -mt-32 mb-16 mx-auto max-w-7xl px-12 '>

        <div class="grid grid-cols-1 lg:grid-cols-3  text-center">
            <div class="relative py-8" v-for="(feature, index) in bannerFeatures" :key="index + 'banner-feature'">
                <div class="h-[70px] mb-5  flex justify-center">
                    <img :src="`/assets/images/${feature.icon}`" class="max-h-full mg-x-auto"/>
                </div>
                <base-heading as="h3" class="text-xl mb-4 text-primary">{{ feature.title }}</base-heading>
                <p class="text-xs opacity-80">{{ feature.description }} </p>
            </div>
        </div>
    </div>

</template>

<script setup>

import BaseHeading from "~/components/ui/BaseHeading.vue";

const bannerFeatures = [
    {
        title: 'المشاركة فى المزادات عن بعد',
        description: 'بإمكانك المزايدة بشكل إلكتروني في أي وقت ومن أي مكان دون الحاجة إلى حضور المزاد العلني ',
        icon: 'bid.svg'
    },
    {
        title: ' المشاركة في أكثر من مزاد ',
        description: 'تستطيع المزايدة على عدة مزادات مختلفة في نفس الوقت ',
        icon: 'computer.svg'
    },
    {
        title: 'وسائل دفع إلكترونية',
        description: 'توفر المنصة وسائل دفع إلكترونية آمنه يمكنك من خلالها شحن محفظتك واسترجاع المبلغ بكل أمان  ',
        icon: 'price-list.svg'
    },
]


</script>

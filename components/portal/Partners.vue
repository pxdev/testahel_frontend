<template>
    <div class="bg-white">
        <div class='mx-auto max-w-7xl py-32  '>
            <div class="text-center max-w-3xl mx-auto mb-16">
                <BaseHeading as="h2" class="text-3xl mb-4">{{ $t('Partners') }}</BaseHeading>
                <p class="text-sm opacity-60">هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
                    عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة
                    لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام </p>
            </div>

            <Swiper :pagination="{ clickable: true }" :slides-per-view="6" :loop="true" :autoplay="{delay: 1000, disableOnInteraction: true,}">
                <SwiperSlide v-for="slide in logos" :key="slide" >
                    <div><img class="max-h-32" :src="`/assets/images/logos/${slide.thumb}`"
                                               alt=""/></div>
                </SwiperSlide>
             </Swiper>
        </div>
    </div>
</template>

<script setup>
const logos = [
    {
        title: "Lorem",
        thumb: "e91ywo5w.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "iiu6e3up.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "ngjgajp9.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "nwv8xrkf.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "obzusavj.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "s8yqthe4.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "e91ywo5w.png",
        link: "http://www.google.com"
    },
    {
        title: "Lorem",
        thumb: "e91ywo5w.png",
        link: "http://www.google.com"
    },
]
</script>

<style scoped>

</style>
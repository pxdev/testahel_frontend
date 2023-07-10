<template>
    <div class="bg-[#1C0612] py-8">
        <div class='mx-auto max-w-7xl'>
            <div class='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                <div class="py-4 flex">
                    <menu-item class='px-4 py-2 text-white' :title="$t('Home')" link='/'></menu-item>
                    <menu-item class='px-4 py-2 text-white' :title="$t('Auctions')" link='/auctions'></menu-item>
                    <menu-item class='px-4 py-2 text-white' :title="$t('FAQ')" link='/faq'></menu-item>
                    <menu-item class='px-4 py-2 text-white' :title="$t('Contact us')" link='/contact'></menu-item>
                </div>

                <div class="py-4 flex justify-end">
                    <a href="#" class="px-2 py-2  text-white"><i class="ri-twitter-fill text-2xl"></i></a>
                    <a href="#" class="px-2 py-2 text-white"><i class="ri-facebook-circle-fill text-2xl"></i></a>
                    <a href="#" class="px-2 py-2 text-white"><i class="ri-youtube-fill text-2xl"></i></a>
                    <a href="#" class="px-2 py-2 text-white"><i class="ri-instagram-fill text-2xl"></i></a>
                </div>

            </div>
        </div>
    </div>
    <div class="bg-[#2D1924] py-8">
        <div class='mx-auto max-w-7xl'>
            <p class="text-white text-xs">{{ $t('Testahel Platform') }} {{ $t('All Rights Reserved') }} {{year}}</p>
        </div>
    </div>
</template>

<script setup>
    const date = new Date();
    const year = date.getFullYear()
</script>

<style scoped>

</style>
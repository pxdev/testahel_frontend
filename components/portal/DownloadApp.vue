<template>
    <div class="bg-[#1C0612]">
    <div class='mx-auto max-w-7xl  '>
        <div  class='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div class="py-32">
            <h3 class="text-white text-4xl mb-4">{{$t('Download Our App Now')}}</h3>
            <p class="text-white text-xl opacity-60 mb-12">{{$t('Download the app and bid from your mobile')}}</p>

            <div class="flex gap-4">
                <a href="#"><img class="w-52" src="@/assets/images/apple.png" alt="" /></a>
                <a href="#"><img class="w-52"  src="@/assets/images/google.png" alt="" /></a>
            </div>
        </div>
            <div class="pt-12">
                <img  src="@/assets/images/app_banner.png" />
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "DownloadApp"
}
</script>

<style scoped>

</style>
<template>
    <Html :lang="head.htmlAttrs.lang" class="h-full" dir='rtl'>
    <Body class="bg-gray-100 h-full">
     <div class="h-screen">
         <slot/>
     </div>
     </Body>
    </Html>
</template>

<script setup>

const {t, localeProperties} = useI18n()
const head = useLocaleHead({addSeoAttributes: true})

</script>

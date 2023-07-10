<template>
    <Html :lang="head.htmlAttrs.lang" dir='rtl'>
    <Body class="bg-gray-100">
    <main-header></main-header>
    <slot/>
    <partners></partners>
    <main-footer></main-footer>
    </Body>
    </Html>
</template>

<script setup>

const {t, localeProperties} = useI18n()
const head = useLocaleHead({addSeoAttributes: true})

</script>

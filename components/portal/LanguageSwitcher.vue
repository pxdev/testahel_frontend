<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<template>
   <NuxtLink class='' :title='locale.name' v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        <i class="text-lg ri-global-line"></i>
       {{locale.name}}
   </NuxtLink>
</template>

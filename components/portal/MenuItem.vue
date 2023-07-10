<template>
   <nuxt-link :to='localePath(link)' exact-active-class="text-primary" active-class="" class="text-secondary hover:text-primary  transition ease-in-out "  >
    {{ props.title }}
  </nuxt-link>


</template>

<script setup>
const localePath = useLocalePath()

const props = defineProps({
  title: {
    type: String
  },

  link: {
    type: String
  },

  enableActive: {
    type: Boolean,
    default: false
  }
})


</script>

<style scoped></style>

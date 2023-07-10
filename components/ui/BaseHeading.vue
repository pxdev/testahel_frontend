<template>
  <Component :is="props.as" class="text-[#6E1946]"><slot></slot></Component>
</template>

<script setup>
const props = defineProps({
    as: String,
})
</script>

<style scoped>

</style>
<template>
  <div class="form-group form-textarea mb-5" v-bind="$attrs">
    <form-label v-if="props.label" :required="props.required">{{
      $t(props.label)
      }}</form-label>

    <textarea
      v-if="props.adjustToText"
      ref="textarea"
      :placeholder="props.placeholder"
      class="form-textarea resizable resize-none border flex text-xs p-3 rounded w-full min-h-[120px]"
      :class="props.size"
      v-model="input"
      @input="updateValue"
    />
    <textarea
      v-else
      ref="defaultTextarea"
      :placeholder="props.placeholder"
      class="form-textarea"
      :class="props.size"
      v-model="input"
      @input="updateValue"
    />
  </div>
  <Validation :validation="validations" v-if="validations" />

</template>

<script setup>
  import { ref, watchEffect } from 'vue'
  import { useTextareaAutosize } from '@vueuse/core'
  import { useCommon } from '~/utils/forms'

  const props = defineProps({
    ...useCommon.props(), // spread the useCommon props here
    value: String,
    modelValue: String,
    adjustToText: {
      type: Boolean,
      default: false
    },
    validations: {
      type: String,
      default: ''
    }
  })

  const inputValue = ref(props.value)
  const emit = defineEmits(['update:modelValue'])

  let { textarea, input } = useTextareaAutosize()

  const updateValue = (event) => {
    const value = event.target.value
    inputValue.value = value
    emit('update:modelValue', value)
  }
  watchEffect(() => {
    inputValue.value = props.modelValue
    input = props.modelValue
  })
</script>

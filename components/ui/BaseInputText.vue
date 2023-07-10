<template>
  <div class='form-group form-input-text relative mb-5' v-bind='$attrs'>
    <form-label v-if='props.label' :required='props.required'>{{ $t(props.label)}}</form-label>
    <div class='field-wrapper' :class='wrapperClass'>
      <i v-if='props.preIcon || props.postIcon' class='form-icon' :class='iconClass'></i>
      <input
        ref='inputText'
        class='form-control'
        :placeholder='props.placeholder'
        :class='inputClass'
        :value='props.modelValue'
        @input='onInput'
        :type='props.type'
        :required='props.required'
        :disabled='props.disabled || props.loading'
        :readonly='props.readonly'
        :autocomplete='props.autocomplete'
        :spellcheck='props.spellcheck'
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
      />
    </div>
    <Validation :validation="validations" v-if="validations" />

  </div>
</template>

<script setup>

  import { useCommon } from '~/utils/forms'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    ...useCommon.props(),
    validations: {
      type: String,
      default: ''
    }
  })

  const fromInputClasses = useCommon.formInput()


  const wrapperClass = computed(() => {
    return `${fromInputClasses.wrapper}`
  })

  const inputClass = computed(() => {
    let classList = [
      fromInputClasses.base,
      fromInputClasses.dark,
      fromInputClasses.focus,
      fromInputClasses.hover,
      fromInputClasses.rounded,
      fromInputClasses.placeholder
    ]
    props.size && classList.push(fromInputClasses.size[props.size])
    props.preIcon && classList.push(fromInputClasses.preIcon)
    props.postIcon && classList.push(fromInputClasses.postIcon)

    return classList.join(' ')
  })

  const iconClass = computed(() => {
    let classList = [
      fromInputClasses.icon.base
    ]
    props.preIcon && classList.push(fromInputClasses.icon.pre + ' ' + props.preIcon)
    props.postIcon && classList.push(fromInputClasses.icon.post + ' ' + props.postIcon)

    return classList.join(' ')
  })

  const onInput = (event) => {
    emit('update:modelValue', event.target.value)
  }

</script>

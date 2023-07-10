<template>
  <button
    :class='buttonClass'
    :disabled='disabled'
    @click.prevent='handleClick'>
    <span class='btn-loading gap-2' v-if='loading'>
      <i class='ri-loader-4-line animate-spin text-2xl'></i>
    </span>
    <i class='btn-icon' v-if='icon' :class='icon'></i>
    <span class='btn-tx' v-if='$slots.default'><slot /></span>
    <span
      class='block absolute pointer-events-none rounded-full z-0'
      :class="{ 'btn-ink-active': rippleActive }"
      :style='`
              left: ${rippleLeft}px;
              top: ${rippleTop}px;
              width: ${rippleWidth}px;
              height: ${rippleWidth}px;
              margin-left: -${ rippleWidth / 2}px;
              margin-top: -${rippleWidth / 2}px
              `'
    ></span>
  </button>
</template>

<script setup>
import { cva } from 'class-variance-authority'

const buttonClass = computed(() => {

  return cva('inline-flex text-current text-center text-sm cursor-pointer whitespace-nowrap px-4 gap-2 py-2 overflow-hidden content-center items-center relative justify-center capitalize transition ease-in-out h-10 focus:ring-1 focus:ring-offset-2 focus:shadow-inner focus:shadow-lg',
    {
      variants: {
        intent: {
          primary: 'bg-[#6E1946] text-white',
          outline: 'border border-white text-white',
          secondary: 'bg-[#1C0612] text-pink-100 hover:bg-pink-800 focus:ring-pink-800',
          success: 'bg-teal-500 text-neutral-100 hover:bg-teal-400 focus:ring-teal-400',
          warning: 'bg-yellow-400 text-neutral-900 hover:bg-yellow-300 focus:ring-yellow-400',
          danger: 'bg-red-500 text-neutral-100 hover:bg-red-400 focus:ring-red-400',
          gray: 'bg-gray-50 text-gray-700 hover:bg-gray-100 focus:ring-gray-400',
          text: 'text-gray-700 hover:bg-black/5'
        },
        size: {
          xs: 'text-xs py-1 h-6',
          sm: 'text-xs h-8',
          lg: 'text-sm h-12',
          xl: 'text-base h-14 px-10'
        },
        roundness: {
          square: 'rounded-none',
          round: 'rounded-md',
          pill: 'rounded-full'
        }
      }

    })
  ({
    intent: props.intent,
    roundness: props.roundness,
    size: props.size
  })

})
const emit = defineEmits(['clicked'])

const props = defineProps({
  disabled: Boolean,
  intent: {
    type: String,
    default: 'default',
    validator(value) {
      return ['primary', 'secondary', 'success', 'warning', 'danger', 'text', 'outline', 'gray'].includes(value)
    }
  },
  size: {
    type: String,
    validator(value) {
      return ['xs', 'sm', 'lg', 'xl'].includes(value)
    }

  },

  roundness: {
    type: String,
    validator(value) {
      return ['square', 'round', 'pill'].includes(value)
    },
    default:'round'

  },

  icon: {
    type: String,
    default: null
  },
  loading: {
    type: Boolean,
    default: false
  }
})


const rippleActive = ref(false)
const rippleTop = ref(0)
const rippleLeft = ref(0)
const rippleWidth = ref(null)


const handleClick = (event) => {
  emit('clicked')

  const button = event.target.getBoundingClientRect()
  const x = event.clientX - button.left
  const y = event.clientY - button.top

  rippleWidth.value = button.width

  rippleTop.value = y
  rippleLeft.value = x
  rippleActive.value = true

  setTimeout(() => {
    rippleTop.value = 0
    rippleLeft.value = 0
    rippleActive.value = false
  }, 500)
}


</script>

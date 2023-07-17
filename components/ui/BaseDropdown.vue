<template>
    <div>
    <form-label class="block" v-if='props.label' :required='props.required'>{{ $t(props.label)}}</form-label>



    <Menu as="div" class="relative mb-5">
    <MenuButton :class="[buttonClass, { 'ltr:pl-9 rtl:pr-9' : props.preIcon },{ 'ltr:pr-9 rtl:pl-9' : props.postIcon }  ]" v-slot="open">
      {{ selectedOption ? selectedOption : props.placeholder }}
      <span class="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
        <i class="ri-arrow-down-s-line" />
      </span>
      <i v-if="props.preIcon" :class="props.preIcon" class="form-icon absolute z-10 top-1/2 -translate-y-1/2 text-gray-400 ltr:left-3 rtl:right-3"></i>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="mt-0.5 inset-x-0 max-w-full rounded border bg-white shadow-md absolute z-50">
        <MenuItem
          as="template"
          v-slot="{ active }"
          v-for="(option, index) in props.options"
          :key="index + 'dropdown-option'">
          <a href="#" class="flex p-3 text-sm" @click="selectOption(option)" :class="{ 'bg-neutral-900 text-white': active }" >{{ option.name }}</a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
   </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { cva } from 'class-variance-authority';

const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(null);

const buttonClass = computed(() => {
  return cva('bg-white border p-2 w-full h-12 rounded content-between flex items-center relative', {
    variants: {
      size: {
        xs: 'text-xs py-1 h-6',
        sm: 'text-xs h-8',
        lg: 'text-sm h-12',
        xl: 'text-base h-14',
      },
      roundness: {
        square: 'rounded-none',
        round: 'rounded-md',
        pill: 'rounded-full',
      },


    },
  })({
    roundness: props.roundness,
     size: props.size,
  });
});

const props = defineProps({
  modelValue: {
    type: String || Number,
  },
  roundness: {
    type: String,
    validator(value) {
      return ['square', 'round', 'pill'].includes(value);
    },
    default: 'round',
  },
  options: {
    type: Array,
  },
  preIcon: {
    type: String,
  },
  postIcon: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  error: {
    type: String,
  },
  size: {
    type: String,
    validator(value) {
      return ['xs', 'sm', 'lg', 'xl'].includes(value);
    },
  },
  validations: {
    type: String,
    default: ''
  },
  valueID:{
    type: Boolean,
    default: false
  },
});
const findElByID = (id)=>{
  return props.options.find((el)=>el.id === id)?.name;
}
const selectOption = (option)=> {
  selectedOption.value = option.name;
  console.log(selectedOption.value , "selectedOption")
  emit('update:modelValue', props.valueID ?option.id:option.name);
}
if (props.modelValue){
  selectedOption.value = props.modelValue;
  if (props.valueID)
    selectedOption.value = findElByID(selectedOption.value);
}
</script>

<template>
    <TransitionRoot as="template" :show="visible">
        <Dialog as="div" class="relative z-10" @close="hide">

            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-neutral-900 bg-opacity-80 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all md:w-1/2">
                            <div>

                                <slot></slot>

                            </div>
                            <div class="mt-5 sm:mt-6">
                                <slot name="footer"></slot>
                             </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>


<script setup>
import {ref} from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps({


    title: {
        type: String
    },
    subtitle: {
        type: String
    },


    size: {
        type: String
    },

    modelValue: {
        type: Boolean,
        default: false
    }

})

const emit = defineEmits(['update:modelValue'])
const visible = ref(props.modelValue)

watch(
    () => props.modelValue,
    (value) => {
        value ? show() : hide()
    }
)

const show = ()=> {
    visible.value = true
    emit('update:modelValue', true)
}

const hide = ()=> {
    visible.value = false
    emit('update:modelValue', false)
}


</script>

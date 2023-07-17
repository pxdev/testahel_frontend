<template>
    <Html :lang="head.htmlAttrs.lang" :dir='localeProperties.dir' class="h-full">
    <Body class="bg-gray-100 h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
            <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                             enter-from="opacity-0" enter-to="opacity-100"
                             leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                             leave-to="opacity-0">
                <div class="fixed inset-0 bg-[#1C0612] bg-opacity-75"></div>
            </TransitionChild>

            <div class="fixed inset-0 z-40 flex">
                <DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                    <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                     enter-to="opacity-100" leave="ease-in-out duration-300"
                                     leave-from="opacity-100" leave-to="opacity-0">
                        <div class="absolute top-0 right-0 -mr-12 pt-2">
                            <button type="button"
                                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    @click="sidebarOpen = false">
                                <span class="sr-only">Close sidebar</span>
                                <i class="ri-close-line text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </TransitionChild>
                    <user-nav></user-nav>
                </DialogPanel>
                <div class="w-14 flex-shrink-0">
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col bg-white border border-l border-r">
        <user-nav></user-nav>
    </div>
    <div class="flex flex-1 flex-col ltr:md:pl-64 rtl:md:pr-64">
        <div class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button type="button"
                    class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click="sidebarOpen = true">
                <span class="sr-only">Open sidebar</span>
                <i class="ri-menu-fill text-2xl" aria-hidden="true"></i>
            </button>
        </div>
        <main class="flex-1">
            <div class="py-6">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <slot/>
                </div>
            </div>
        </main>
    </div>

    </Body>
    </Html>
</template>

<script setup>

import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";

const {t, localeProperties} = useI18n()
const head = useLocaleHead({addSeoAttributes: true})
const localePath = useLocalePath()
const sidebarOpen = ref(false)

</script>

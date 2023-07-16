<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog as="div" class="relative z-40 md:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                 enter-from="opacity-0" enter-to="opacity-100"
                                 leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                     enter-from="-translate-x-full" enter-to="translate-x-0"
                                     leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                     leave-to="-translate-x-full">
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
                            <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                                <div class="flex flex-shrink-0 items-center px-4">
                                    <img class="w-[180px]" src='@/assets/images/logo.svg' alt=''/>
                                </div>
                                <nav class="mt-5 space-y-1 px-2">
                                    <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                                        <i :class="item.icon" class="text-xl mx-2"/>
                                        {{ $t(item.name) }}
                                    </nuxt-link>
                                </nav>
                            </div>
                            <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                                <a href="#" class="group block flex-shrink-0">
                                    <div class="flex items-center">
                                        <div>
                                            <img class="inline-block h-10 w-10 rounded-full"
                                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                 alt=""/>
                                        </div>
                                        <div class="mx-3">
                                            <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom
                                                Cook</p>
                                            <p class="text-sm font-medium text-gray-500 group-hover:text-gray-700">View
                                                profile</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    <div class="w-14 flex-shrink-0">
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>

        <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
            <div class="flex min-h-0 flex-1 flex-col border-r border-l border-gray-200 bg-white">
                <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                    <div class="flex flex-shrink-0 items-center px-4 mb-3">
                        <img class="w-[180px]" src='@/assets/images/logo.svg' alt=''/>
                    </div>
                    <nav class="mt-5 flex-1 space-y-1 bg-white px-2">
                        <nuxt-link v-for="item in navigation" :key="item.name" :to="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']">
                            <i :class="item.icon" class="text-xl mx-2"/>
                            {{ $t(item.name) }}
                        </nuxt-link>
                    </nav>
                </div>
                <div class="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" class="group block w-full flex-shrink-0">
                        <div class="flex items-center">
                            <div>
                                <img class="inline-block h-9 w-9 rounded-full"
                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                     alt=""/>
                            </div>
                            <div class="mx-3">
                                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="flex flex-1 flex-col ltr:md:pl-64 rtl:md:pr-64">
            <div class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
                <button type="button" class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        @click="sidebarOpen = true">
                    <span class="sr-only">Open sidebar</span>
                    <i class="ri-menu-fill text-2xl" aria-hidden="true"></i>
                </button>
            </div>
            <main class="flex-1">
                <div class="py-6">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
                    </div>
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div class="py-4">
                            <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
definePageMeta({layout: 'plain'})
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'

const localePath = useLocalePath()

const navigation = [
    {name: 'Dashboard', href: '#', icon: "ri-home-3-line"},
    {name: 'Profile', href: '#', icon: "ri-user-line"},
    {name: 'Favourite', href: '#', icon: "ri-heart-line"},
    {name: 'Payments', href: '#', icon: "ri-currency-line"},
    {name: 'Purchases', href: '#', icon: "ri-shopping-cart-line"},
    {name: 'My Wallet', href: '#', icon: "ri-wallet-line"},
]

const sidebarOpen = ref(false)
</script>
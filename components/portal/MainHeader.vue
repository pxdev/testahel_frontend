<template>
    <Dialog as='div' class='lg:hidden' @close='mobileMenuOpen = false' :open='mobileMenuOpen'>
        <div class='fixed inset-0 z-100' />
        <DialogPanel
            class='fixed inset-y-0 right-0 z-100 w-full overflow-y-auto bg-[#1C0612] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div class='flex items-center justify-between py-4 z-100'>
                <a href='#' class='-m-1.5 p-1.5'>
                    <img class="w-40 invert brightness-0" src='@/assets/images/logo.svg'  alt='' />
                    <span class='sr-only'>Testahel</span>
                </a>
                <button type='button' class='-m-2.5 pink-950 rounded-md p-2.5 ' @click='mobileMenuOpen = false'>
                    <span class='sr-only'>Close menu</span>
                    <i class='ri-close-line text-xl text-white'  aria-hidden='true' />
                </button>
            </div>
            <div class='mt-6 flow-root'>
                <div class='-my-6 divide-y divide-white/10'>
                    <div class='space-y-2 py-6'>
                        <menu-item class='block px-2 py-2 text-white' :title="$t('Home')"  link='/'></menu-item>
                        <menu-item class='block px-2 py-2 text-white' :title="$t('Auctions')"  link='/auctions'></menu-item>
                        <menu-item class='block px-2 py-2 text-white' :title="$t('FAQ')"  link='/faq'></menu-item>
                        <menu-item class='block px-2 py-2 text-white' :title="$t('Contact us')"  link='/contact'></menu-item>
                    </div>
                    <div class='py-6'>
                        <base-button class="px-0" size="lg" icon="ri-user-line text-lg" intent="primary">{{$t('Login')}}</base-button>

                    </div>
                </div>
            </div>
        </DialogPanel>
    </Dialog>

    <header class='transition' >
        <nav class='mx-auto flex max-w-7xl py-6 items-center justify-between p-4'>
            <div class='flex lg:flex-1'>
                <a href='#' class='-m-1.5 px-1.5'>
                    <span class='sr-only'>Testahel</span>
                    <img class="w-[180px]" src='@/assets/images/logo.svg'  alt='' />
                </a>
            </div>
            <div class='flex lg:hidden'>
                <button type='button' class='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lg' @click='mobileMenuOpen = true'>
                    <span class='sr-only'>Open main menu</span>
                    <i class='ri-menu-line text-xl' v-if='!mobileMenuOpen' aria-hidden='true' />
                </button>
            </div>
            <div class='hidden lg:flex '>
                <menu-item class='block px-4 py-2' :title="$t('Home')"  link='/'></menu-item>
                <menu-item class='block px-4 py-2' :title="$t('Auctions')"  link='/auctions'></menu-item>
                <menu-item class='block px-4 py-2' :title="$t('FAQ')"  link='/faq'></menu-item>
                <menu-item class='block px-4 py-2' :title="$t('Contact us')"  link='/contact'></menu-item>
            </div>
            <div class='hidden lg:flex lg:flex-1 lg:justify-end'>
                <div class='flex gap-5 items-center'>
                    <language-switcher></language-switcher>
                    <base-button size="lg" icon="ri-user-line text-lg" intent="primary">{{$t('Account Login')}}</base-button>
                </div>
            </div>
        </nav>
    </header>

</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel} from '@headlessui/vue'
import LanguageSwitcher from "~/components/portal/LanguageSwitcher.vue";
const mobileMenuOpen = ref(false)

</script>

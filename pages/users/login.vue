<template>
    <div class="h-full bg-white">
        <div class="flex min-h-full">
            <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">


                    <div class="mt-8">

                        <div class="mt-6">
                            <div class="heading mb-12">
                                <base-heading class="text-3xl mb-5" as="h2">{{ $t('Login') }}</base-heading>
                                <p> {{ $t('Welcome to') }} {{ $t('Testahel Platform') }}</p>
                            </div>
                            <div class="space-y-6">

                                <base-input-text :label="$t('Username')" size="lg"/>
                                <base-input-text type="password" :label="$t('Password')" size="lg"/>

                                <div class="flex items-center justify-between">
                                    <a href="#" class="font-medium ">{{ $t('Forgot your password?') }}</a>
                                    <base-button @click="navigateTo(localePath('/users/profile'))" intent="primary" class="px-10" size="lg">{{ $t('Login') }}
                                    </base-button>
                                </div>

                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative isolate overflow-hidden hidden w-0 flex-1 lg:block">
                <nuxt-link :to="localePath('/')" class="bg-white rounded z-20 absolute p-6 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"><img class="w-[220px]" src='@/assets/images/logo.svg'  alt='' /></nuxt-link>
                <div class="absolute inset-0 h-full w-full object-cover object-bottom bg-[#1C0612] opacity-90"></div>
                <img class="absolute inset-0 h-full -z-20 w-full object-cover" src="@/assets/images/banner_1.png" alt=""/>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({layout: 'plain'})
const localePath = useLocalePath()

</script>

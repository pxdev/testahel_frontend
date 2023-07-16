
<template>
    <div class="h-full">
    <div class="flex min-h-full">
        <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">


                <div class="mt-8">

                    <div class="mt-6">
                        <div class="space-y-6">

                            <base-input-text :label="$t('National Id')" size="lg" />
                            <base-input-password :label="$t('National Id')" size="lg" />



                                <div class="flex items-center justify-between">
                                    <a href="#" class="font-medium ">Forgot your password?</a>
                                    <base-button intent="primary" class="px-10" size="lg">Sign in</base-button>
                                </div>

                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative isolate overflow-hidden hidden w-0 flex-1 lg:block">
            <div class="absolute inset-0 -z-20 h-full w-full object-cover object-bottom bg-[#1C0612] opacity-90"></div>
            <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/images/banner_1.png" alt="" />
        </div>
    </div>
    </div>
</template>

<script setup>
import BaseInputPassword from "~/components/ui/BaseInputPassword.vue";

definePageMeta({layout: 'plain'})
</script>

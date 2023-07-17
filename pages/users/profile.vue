<template>
    <base-heading as="h1" class="text-xl mb-5">{{$t('Profile')}} </base-heading>
    <div class="bg-white p-8 mb-8 border-t-4">
         <h3 class="text-lg mb-5 font-medium leading-6 text-gray-900">{{$t('Personal Information')}}</h3>

        <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <base-input-text size="lg" label="First Name"></base-input-text>
            <base-input-text size="lg" label="Middle Name"></base-input-text>
            <base-input-text size="lg" label="Last Name"></base-input-text>
        </div>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <base-input-text size="lg" label="National ID"></base-input-text>
            <base-input-text size="lg" label="Phone Number"></base-input-text>
            <base-input-text size="lg" label="Email Address"></base-input-text>
        </div>
    </div>

    <div class="bg-white p-8 mb-8 border-t-4">
        <h3 class="text-lg mb-5 font-medium leading-6 text-gray-900">{{$t('Address')}}</h3>
        <div class="grid gap-4 grid-cols-1">
            <base-dropdown :options="data" size="lg" label="Nationality"></base-dropdown>
        </div>
        <div class="grid gap-4 grid-cols-1 lg:grid-cols-3">
            <base-dropdown :options="data" size="lg" label="City"></base-dropdown>
            <base-dropdown :options="data" size="lg" label="Zip code"></base-dropdown>
            <base-dropdown :options="data" size="lg" label="Quarter"></base-dropdown>
            <base-input-text size="lg" label="Street"></base-input-text>
            <base-input-text size="lg" label="Building No"></base-input-text>
            <base-input-text size="lg" label="Unit No"></base-input-text>
        </div>


    </div>
    <div class="bg-white p-8 mb-8 border-t-4">

    <div class="flex justify-end gap-2">
        <base-button size="xl" intent="text" class="px-20">{{$t('Cancel')}}</base-button>
        <base-button size="xl" intent="primary" class="px-20">{{$t('Save')}}</base-button>
    </div>
    </div>

</template>

<script setup>

definePageMeta({layout: 'users'})

const data = reactive([
    {name: "Saudi Arabia", value: "1"},
    {name: "Egypt", value: "1"},
])

</script>
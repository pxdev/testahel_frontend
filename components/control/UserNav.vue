<template>
    <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center px-4">
            <nuxt-link :to="localePath('/')"><img class="w-[180px]" src='@/assets/images/logo.svg' alt=''/></nuxt-link>
        </div>
        <nav class="mt-5 space-y-1 px-2">
            <nuxt-link active-class="bg-pink-900/10 text-pink-900" v-for="item in navigation" :key="item.name" :to="localePath(item.href)" class="flex items-center rounded text-sm p-2.5 transition ease-in-out hover:bg-pink-900/10 ">
                <i :class="item.icon" class="text-xl mx-2"/>
                {{ $t(item.name) }}
            </nuxt-link>
        </nav>

    </div>
         <div class="flex flex-shrink-0 p-4 border-t border-gray-200 ">
            <a href="#" class="group block flex-shrink-0">
                    <div class="flex items-center">
                        <div>
                            <img class="inline-block h-10 w-10 rounded-full"
                                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                 alt=""/>
                        </div>
                        <div class="mx-3">
                            <p class="text-xs  text-gray-700 group-hover:text-gray-900">احمد براك بن احمد العصيمي</p>
                         </div>
                    </div>
                </a>
        </div>
  </template>

<script setup>
const navigation = [
    {name: 'Home', href: '/', icon: "ri-home-3-line"},
    {name: 'Profile', href: '/users/profile', icon: "ri-user-line"},
    {name: 'Favourite', href: '/users/favourite', icon: "ri-heart-line"},
    {name: 'Payments', href: '/users/payments', icon: "ri-currency-line"},
    {name: 'Purchases', href: '/users/purchases', icon: "ri-shopping-cart-line"},
    {name: 'My Wallet', href: '/users/wallet', icon: "ri-wallet-line"},
]


</script>

<style scoped>

</style>
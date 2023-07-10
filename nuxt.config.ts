// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    css: [
        '@/assets/css/main.pcss',
        'remixicon/fonts/remixicon.css',
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        '@nuxtjs/i18n',
        'nuxt-headlessui',
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        'nuxt-swiper'
    ],


    i18n: {
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales/',
        locales: [
            {code: 'en', iso: 'en-US', dir: 'ltr', name: 'English', file: 'en.js'},
            {code: 'ar', iso: 'ar-EG', dir: 'rtl', name: 'Arabic', file: 'ar.js'},
        ]
    },

    headlessui: {
        prefix: 'vue'
    },

})

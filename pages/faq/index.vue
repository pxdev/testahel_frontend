<template>

    <internal-banner></internal-banner>

    <div class='pages min-h-screen'>
        <div class='mx-auto mb-16 max-w-7xl'>


            <Disclosure v-slot="{ open }" as="div" class="mb-3" v-for="(faq, index) in faqs" :key="index + 'faq'">
                <DisclosureButton
                    class="flex w-full justify-between rounded-lg bg-white p-4 text-start"
                >
                    <base-heading as="p" class="text-base">{{ faq.question }}</base-heading>
                    <i class="ri-arrow-up-s-line text-pink-700 text-xl"
                       :class="open ? 'rotate-180 transform' : ''"

                    />
                </DisclosureButton>
                <DisclosurePanel class="flex w-full justify-between rounded-lg bg-white p-4 text-start -mt-2">
                    {{faq.answer }}
                </DisclosurePanel>
            </Disclosure>


        </div>
     </div>

</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const faqs = [
    {
        question: " ما هو المزاد الإلكتروني؟ ",
        answer: " المزاد الإلكتروني هي المنصة الرائدة للمزادات من تطوير وتشغيل شركة ثقة والتي تمكن المستفيدين من إجراء عمليات المزايدة وطرح الأصول المراد بيعها بسهولة وأمان، وتتيح المنصة المشاركة في مزادات متنوعة من أي مكان بشكل يتوافق مع قوانين إقامة المزادات والبيع والشراء في المملكة العربية السعودية "
    },
    {
        question: "  هل عملية المزايدة في الموقع موثوقة؟ ",
        answer: " عملية المزايدة في الموقع الإلكتروني آمنة، حيث تم تطبيق معايير الأمن السيبراني في المملكة العربية السعودية.   "
    },
    {
        question: " ما هو المزاد الإلكتروني؟ ",
        answer: " المزاد الإلكتروني هي المنصة الرائدة للمزادات من تطوير وتشغيل شركة ثقة والتي تمكن المستفيدين من إجراء عمليات المزايدة وطرح الأصول المراد بيعها بسهولة وأمان، وتتيح المنصة المشاركة في مزادات متنوعة من أي مكان بشكل يتوافق مع قوانين إقامة المزادات والبيع والشراء في المملكة العربية السعودية "
    },
    {
        question: "  هل عملية المزايدة في الموقع موثوقة؟ ",
        answer: " عملية المزايدة في الموقع الإلكتروني آمنة، حيث تم تطبيق معايير الأمن السيبراني في المملكة العربية السعودية.   "
    },
    {
        question: " ما هو المزاد الإلكتروني؟ ",
        answer: " المزاد الإلكتروني هي المنصة الرائدة للمزادات من تطوير وتشغيل شركة ثقة والتي تمكن المستفيدين من إجراء عمليات المزايدة وطرح الأصول المراد بيعها بسهولة وأمان، وتتيح المنصة المشاركة في مزادات متنوعة من أي مكان بشكل يتوافق مع قوانين إقامة المزادات والبيع والشراء في المملكة العربية السعودية "
    },
    {
        question: "  هل عملية المزايدة في الموقع موثوقة؟ ",
        answer: " عملية المزايدة في الموقع الإلكتروني آمنة، حيث تم تطبيق معايير الأمن السيبراني في المملكة العربية السعودية.   "
    },
]



</script>

<style scoped>

</style>

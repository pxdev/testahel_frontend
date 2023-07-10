<template>

    <banner></banner>

    <div class='pages min-h-screen'>
        <div class='mx-auto mb-16 max-w-7xl'>
            <div  class='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <auction-card
                        v-for='(auction, index) in auctionsList'
                        :key="index + '_auction'"
                        :name='auction.name'
                        :thumb='auction.thumb'
                        :location="auction.location"
                        :deposit="auction.deposit"
                        :products="auction.products"
                        :date="auction.date"
                        :duration="auction.duration"
                        :status='auction.status'
                ></auction-card>
            </div>
        </div>
        <download-app></download-app>
    </div>

</template>

<script setup>

const auctionsList = [
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
    {
        id:1,
        name: "مزاد استثمارات الدمام",
        thumb: "sample.png",
        date: " 23 سبتمبر 2023",
        location: "القويعة -عدة أحياء من محافظة القويعية",
        duration: 10,
        deposit: 12,
        products: 3,
        status: "running",
    },
]




</script>

<style scoped>

</style>

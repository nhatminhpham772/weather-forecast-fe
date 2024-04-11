<template>
    <div class="w-full max-w-7xl mx-auto relative">
        <div class="grid grid-cols-1 lg:grid-cols-10 mt-8 gap-10">
            <Search />
            <div class="md:flex-1 col-span-6 w-full">
                <Current />
                <Future />
            </div>
        </div>
    </div>
    <AuthModal />
</template>

<script setup lang="ts">
import { useDataForecast } from "@/stores/forecast"
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();
const dataForecast = useDataForecast();

if(dataAuth.userInfor?.city)
    dataForecast.city = dataAuth.userInfor?.city
await dataForecast.currentForecast(dataForecast.city)
await dataForecast.futureForecast(dataForecast.city)
</script>

<style lang="scss" scoped>

</style>
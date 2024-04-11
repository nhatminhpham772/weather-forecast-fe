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
</template>

<script setup lang="ts">
import { useDataForecast } from "@/stores/forecast"

const dataForecast = useDataForecast();
await dataForecast.currentForecast('Ha Noi')
await dataForecast.futureForecast('Ha Noi')
</script>

<style lang="scss" scoped>

</style>
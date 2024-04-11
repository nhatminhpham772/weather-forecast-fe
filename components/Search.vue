<template>
    <div class="md:flex-1 col-span-4 w-full">
        <div class="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
            <div class="max-w-md mx-auto">
                <span class="text-sm font-semibold">Nhập tên thành phố tại đây</span>   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" v-model="dataForecast.search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Vd: Ha Noi, Ho Chi Minh..." required />
                </div>
                <button @click="search" id="search" type="button" class="w-full mt-4 text-white bg-[#73C6D9] hover:opacity-80 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Tìm Kiếm</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useDataForecast } from "@/stores/forecast"

const dataForecast = useDataForecast();
const search = async () => {
    document.getElementById("search").disabled = true

    const check = await dataForecast.currentForecast(dataForecast.search)
    if(check) {
        dataForecast.future = []
        dataForecast.flag = 5
        await dataForecast.futureForecast(dataForecast.search)
    }

    document.getElementById("search").disabled = false
}

</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="flex flex-col space-y-6 bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40 mb-10">
        <div class="flex justify-between items-center animation-wipe-down" v-for="(item, index) in dataForecast.future.slice(1, dataForecast.flag)" :key="index">
            <span class="font-semibold text-lg w-1/4">{{ item.date }}</span>
            <div class="flex items-center justify-end w-1/4 pr-16">
                <span class="font-semibold">{{ item.day.avghumidity }}%</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 16 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g transform="matrix(1,0,0,1,-4,-2)">
                        <path d="M17.66,8L12.71,3.06C12.32,2.67 11.69,2.67 11.3,3.06L6.34,8C4.78,9.56 4,11.64 4,13.64C4,15.64 4.78,17.75 6.34,19.31C7.9,20.87 9.95,21.66 12,21.66C14.05,21.66 16.1,20.87 17.66,19.31C19.22,17.75 20,15.64 20,13.64C20,11.64 19.22,9.56 17.66,8ZM6,14C6.01,12 6.62,10.73 7.76,9.6L12,5.27L16.24,9.65C17.38,10.77 17.99,12 18,14C18.016,17.296 14.96,19.809 12,19.74C9.069,19.672 5.982,17.655 6,14Z" style="fill-rule:nonzero;"/>
                    </g>
                </svg>
            </div>
            <div class="flex items-center justify-end w-1/4 pr-16">
                <span class="font-semibold">{{ item.day.maxwind_mph }} M/S</span>
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M15.7639 7C16.3132 6.38625 17.1115 6 18 6C19.6569 6 21 7.34315 21 9C21 10.6569 19.6569 12 18 12H3M8.50926 4.66667C8.87548 4.2575 9.40767 4 10 4C11.1046 4 12 4.89543 12 6C12 7.10457 11.1046 8 10 8H3M11.5093 19.3333C11.8755 19.7425 12.4077 20 13 20C14.1046 20 15 19.1046 15 18C15 16.8954 14.1046 16 13 16H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                    </g>
                </svg>
            </div>
            <div class="h-8 w-8 fill-current border-0" title="Free Weather API"><img :src='item.day.condition.icon' class="h-full" alt="Weather data by WeatherAPI.com"></div>
            <span class="font-semibold text-lg w-1/4 text-right">{{ item.day.mintemp_c }}° / {{ item.day.maxtemp_c }}°</span>
        </div>
        <div class="flex items-center justify-center w-full">
            <button @click="showMore" id="show-more" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Xem Thêm</button>
        </div>
    </div>
</template>

<script setup>
import { useDataForecast } from "@/stores/forecast"

const dataForecast = useDataForecast();

const showMore = async () => {
    document.getElementById("show-more").disabled = true

    if(dataForecast.flag < dataForecast.future.length)
        dataForecast.flag += 4
    else {
        await dataForecast.futureForecast(dataForecast.city)
        dataForecast.flag = dataForecast.future.length
    }
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    document.getElementById("show-more").disabled = false
}
</script>

<style lang="css" scoped>
@keyframes wipeDown {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animation-wipe-down {
  animation: wipeDown 0.5s ease-out;
}
</style>
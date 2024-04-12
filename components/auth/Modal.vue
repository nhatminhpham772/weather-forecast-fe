<template>
    <div id="popup-auth" tabindex="-1" data-modal-backdrop="static" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative bg-white p-8 w-full max-w-2xl max-h-full rounded-lg">
            <div class="flex items-center justify-between">
                <button type="button" id="popup-auth-close" @click="dataAuth.flag = 0" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-auth">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div>
                <AuthSignin v-if="dataAuth.flag === 0"/>
                <AuthSignup v-else-if="dataAuth.flag === 1"/>
                <AuthOtp v-else/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();
</script>

<style lang="scss" scoped>

</style>
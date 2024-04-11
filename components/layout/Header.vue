<template>
    <header class="antialiased bg-white">
        <nav class="bg-primary-black border-b-2 px-4 py-1 max-w-full">
            <div class="flex w-full justify-between items-center" aria-label="Global">
                <div class="flex justify-center items-center">
                    <a href="/">
                        <span class="sr-only">Weather Forecast</span>
                        <img class="h-14 w-auto" src="/logo.png" alt="" />
                    </a>
                    <span class="text-2xl text-gray-700 font-bold">Weather Forecast</span>
                </div>

                <div class="flex justify-end w-32">
                    <button type="button" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700"
                        data-modal-target="popup-auth" data-modal-toggle="popup-auth">
                        <span class="sr-only">User</span>
                        <UserIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button v-if="dataAuth.accessToken !== ''" @click="dataAuth.logout"type="button" class="inline-flex items-center justify-center rounded-md p-3 text-gray-700">
                        <span class="sr-only">User</span>
                        <UserIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import {
  UserIcon,
} from "@heroicons/vue/24/outline";
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();

</script>

<style lang="scss" scoped>

</style>
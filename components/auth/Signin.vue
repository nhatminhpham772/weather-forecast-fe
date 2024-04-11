<template>
    <div>
        <!-- Card Title -->
        <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Đăng Nhập
        </h2>

        <form class="mt-10" @submit.prevent="onSubmit">
            <!-- Email Input -->
            <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" placeholder="Nhập email" v-model="email" autocomplete="email"
                class="block w-full py-3 px-1 mt-2 
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required />

            <!-- Password Input -->
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Mật Khẩu</label>
            <input id="password" type="password" name="password" minlength="8" v-model="password" placeholder="Nhập mật khẩu" autocomplete="current-password"
                class="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required />

            <!-- Auth Buttton -->
            <button type="submit" id="signin"
                class=" bg-[#73C6D9] hover:opacity-80 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 me-2 mb-2
                w-full py-3 mt-10 
                font-medium text-white uppercase">
                Đăng nhập
            </button>

            <!-- Another Auth Routes -->
            <div class="flex mt-8 mb-4 text-sm justify-end">
                <span @click="dataAuth.flag = 1" class="flex-2 underline cursor-pointer">
                    Tạo tài khoản mới
                </span>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();

var email = ref('')
var password = ref('')

const onSubmit = async () => {
    document.getElementById("signin").disabled = true

    await dataAuth.signin(email.value, password.value)

    document.getElementById("signin").disabled = false
}
</script>

<style lang="scss" scoped>

</style>
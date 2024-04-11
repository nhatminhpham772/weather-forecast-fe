<template>
    <div>
        <!-- Card Title -->
        <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Đăng Ký
        </h2>

        <form class="mt-10" @submit.prevent="onSubmit">
            <!-- Email Input -->
            <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" v-model="email" placeholder="Nhập email" autocomplete="email"
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

            <!-- Password Input -->
            <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Nhập Lại Mật Khẩu</label>
            <input id="password-confirm" type="password" name="password-confirm" minlength="8" v-model="passwordConfirm" placeholder="Nhập mật khẩu" autocomplete="current-password-confirm"
                class="block w-full py-3 px-1 mt-2 mb-4
                text-gray-800 appearance-none 
                border-b-2 border-gray-100
                focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required />

            <!-- Auth Buttton -->
            <button type="submit" id="signup"
                class=" bg-[#73C6D9] hover:opacity-80 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 me-2 mb-2
                w-full py-3 mt-10 
                font-medium text-white uppercase">
                Đăng ký
            </button>

            <!-- Another Auth Routes -->
            <div class="flex mt-8 mb-4 text-sm justify-end">
                <span @click="dataAuth.flag = 0" class="flex-2 underline cursor-pointer">
                    Đăng nhập
                </span>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"
import { toastStore } from "@/stores/toast"

const storeToast = toastStore()
const dataAuth = useAuthStore();

var email = ref('')
var password = ref('')
var passwordConfirm = ref('')

const onSubmit = async () => {
    document.getElementById("signup").disabled = true

    if(password.value !== passwordConfirm.value)
        storeToast.add({
            message: "Mật khẩu không trùng khớp",
            toastStatus: "error",
        })
    else
        await dataAuth.signup(email.value, password.value, passwordConfirm.value)

    document.getElementById("signup").disabled = false
}
</script>

<style lang="scss" scoped>

</style>
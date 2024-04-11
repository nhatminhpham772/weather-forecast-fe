<template>
    <div class="max-w-md mx-auto text-center px-4 sm:px-8 py-10">
        <div class="mb-8">
            <h1 class="text-2xl font-bold mb-1">Xác nhận mã OTP</h1>
            <p class="text-[15px] text-slate-500">Nhập 6 số bạn nhận đươc trong email</p>
        </div>
        <div class="w-[400px] mx-auto bg-white rounded-xl p-5 border">
            <AuthOtpInput v-model="data" :fields="6"></AuthOtpInput>
        </div>
        <button :disabled="data === null" @click="activeEmail()" id="otpButton"
            class=" bg-[#73C6D9] hover:opacity-80 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 me-2 mb-2
            w-full py-3 mt-10 
            font-medium text-white uppercase">
            Xác nhận
        </button>
        <div class="text-sm text-slate-500 mt-4">Bạn không nhận được mã? <span class="font-medium text-indigo-500 hover:text-indigo-600" href="#0">gửi lại</span></div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();
const data = ref(null);

const activeEmail = async () => {
    document.getElementById("otpButton").disabled = true

    await dataAuth.activeEmail(data.value)

    document.getElementById("otpButton").disabled = false
}

</script>

<style lang="scss" scoped>

</style>
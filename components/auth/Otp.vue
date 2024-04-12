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
            class="flex justify-center bg-[#73C6D9] hover:opacity-80 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 me-2 mb-2
            w-full py-3 mt-10 
            font-medium text-white uppercase">
            <span v-if="!isLoading">Xác nhận</span>
            <div v-if="isLoading" role="status" class="">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </button>
        <div class="text-sm text-slate-500 mt-4">Bạn không nhận được mã? <span class="font-medium text-indigo-500 hover:text-indigo-600" @click="dataAuth.resendOtp()">gửi lại</span></div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth"

const dataAuth = useAuthStore();
const data = ref(null);
const isLoading = ref(false)

const activeEmail = async () => {
    document.getElementById("otpButton").disabled = true
    isLoading.value = true

    await dataAuth.activeEmail(data.value)

    isLoading.value = false
    document.getElementById("otpButton").disabled = false
}

</script>

<style lang="scss" scoped>

</style>
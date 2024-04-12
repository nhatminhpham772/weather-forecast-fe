import { defineStore } from "pinia";
import { getCookie, deleteCookie } from "@/utils/cookie-utils";
import { AuthenticateSchema } from "./structs/auth_struct";
import { assert, mask } from "superstruct";

export const useAuthStore = defineStore("auth", () => {
  const storeToast = toastStore()
  const flag = ref(0)
  const accessToken = ref('')
  const userInfor = ref<Authenticate>()
  const emailOtp = ref('')

  function getAccessToken() {
    accessToken.value = localStorage.getItem("access_token") || '';
  }

  function getUserInfor() {
    const serializedObject = localStorage.getItem('user_infor') || '';
    if(serializedObject !== '')
      try {
        userInfor.value = mask(JSON.parse(serializedObject), AuthenticateSchema)
      } catch (error) {
        localStorage.removeItem('user_infor')
      }
  }

  async function signin(email: string, password: string) {
    const { data, error } = await useFetch("/auth", {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (data.value !== null) {
      const res = mask(mask(data.value, DataObjectSchema).data, AuthenticateSchema)
      localStorage.setItem("user_infor", JSON.stringify(res))
      localStorage.setItem("access_token", res.jwt_token)
      window.location.href = '/'
    } else if (error.value?.data.data.includes('otp')) {
      emailOtp.value = email
      flag.value = 2 
      storeToast.add({
        message: "Vui lòng kiểm tra email của bạn",
        toastStatus: "success",
      });
    } else {
      storeToast.add({
        message: "Sai tài khoản hoặc mật khẩu",
        toastStatus: "error",
      });
    }
  }

  async function signup(email: string, password: string, passwordConfirm: string) {
    const { data, error } = await useFetch("/user", {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        passwordConfirm: passwordConfirm
      }),
    });

    if (data.value !== null) {
      emailOtp.value = email
      flag.value = 2 
      storeToast.add({
        message: "Vui lòng kiểm tra email của bạn",
        toastStatus: "success",
      });
    } else {
      storeToast.add({
        message: "Tài khoản đã tồn tại",
        toastStatus: "error",
      });
    }
  }

  async function resendOtp() {
    const { data, error } = await useFetch("/user/otp/" + emailOtp.value, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
    });

    if (data.value !== null) {
      flag.value = 2 
      storeToast.add({
        message: "Vui lòng kiểm tra email của bạn",
        toastStatus: "success",
      });
    } else {
      storeToast.add({
        message: "Không thể gửi Otp",
        toastStatus: "error",
      });
    }
  }

  async function activeEmail(otp: string) {
    const { data, error } = await useFetch("/user/active/" + emailOtp.value + '/' + otp, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "PATCH",
    });

    if (data.value !== null) {
      flag.value = 0
      emailOtp.value = ''
      storeToast.add({
        message: "Vui lòng đăng nhập lại",
        toastStatus: "success",
      });
    } else {
      storeToast.add({
        message: "Mã otp hết hạn",
        toastStatus: "error",
      });
    }
  }

  async function refreshToken() {
    try {
      const jwtPayload = JSON.parse(
        window.atob(getCookie("user_token") || "")
      );

      if (jwtPayload.exp < (new Date().getTime() + 1) / 1000) {
        const { data, error } = await useFetch("/auth/refresh", {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "POST",
        });

        if (data.value !== null) {
          const res = mask(mask(data.value, DataObjectSchema).data, AuthenticateSchema);
          localStorage.setItem('user_infor', JSON.stringify(res))
          localStorage.setItem('access_token', res.jwt_token) 
        } else {
          await logout()
        }
      }
    } catch (error) {
      await logout();
    }
  }

  async function logout() {
    await useFetch("/auth/logout", {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "DELETE",
    });
    localStorage.removeItem('access_token')
    localStorage.removeItem('user_infor')

    accessToken.value = "";
    userInfor.value = undefined
    deleteCookie("user_token");
    return;
  }

  

  return {
    flag,
    accessToken,
    userInfor,
    getAccessToken,
    getUserInfor,
    signin,
    signup,
    resendOtp,
    activeEmail,
    refreshToken,
    logout
  }
})

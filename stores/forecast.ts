import { defineStore } from "pinia";
import { array, mask } from 'superstruct'
import { toastStore } from "./toast";
import { CurrentForecastSchema, type Current, type Future } from "./structs/forecast_struct";
import { DataObjectSchema } from "./structs/response_struct";

export const useDataForecast = defineStore('forecast', () => {
    const storeToast = toastStore()
    const dataAuth = useAuthStore()
    const location = ref('')
    const city = ref('ha noi')
    const localTime = ref('')
    const current = ref<Current>()
    const future = ref<Future[]>([])
    const futureDay = ref('')
    var flag = ref(5)
    const search = ref('')
    const authorization = "Bearer " + dataAuth.accessToken;

    async function currentForecast(city: string) {
        if(city === "") {
            storeToast.add({
                message: "Vui lòng nhập tên thành phố",
                toastStatus: "error",
            });
            return false
        }

        const { data } = await useFetch('/forecast/current/' + city, {
            baseURL: useRuntimeConfig().public.baseURL,
            method: "GET",
        });

        if (data.value !== null) {
            const res = mask(mask(data.value, DataObjectSchema).data, CurrentForecastSchema)
            if(location.value !== '')
                storeToast.add({
                    message: "Thành Công",
                    toastStatus: "success",
                });
            location.value = res.location.name + ', ' + res.location.country
            localTime.value = res.location.localtime.split(" ")[0]
            current.value = res.current
        } else {
            storeToast.add({
                message: "Không tìm thấy thành phố này",
                toastStatus: "error",
            });
            return false
        }
        return true
    }

    function convertDateToString(date: Date) {
        const year = date.getFullYear().toString().padStart(4, "0")
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const day = date.getDate().toString().padStart(2, "0")

        futureDay.value = year + '-' + month + '-' + day
    }

    async function futureForecast(city: string) {
        if(future.value.length === 0) {
            const date = new Date()
            date.setDate(date.getDate() + 10)

            convertDateToString(date)
        }
        const { data } = await useFetch('/forecast/future/' + city + '/' + futureDay.value, {
            baseURL: useRuntimeConfig().public.baseURL,
            method: "GET",
        });

        if (data.value !== null) {
            const res = mask(mask(data.value, DataArraySchema).data, array(FutureSchema))
            future.value = [...future.value, ...res]

            const date = new Date(futureDay.value)
            date.setDate(date.getDate() + 4)

            convertDateToString(date)
        } else {
            storeToast.add({
                message: "Không tìm thấy thành phố này",
                toastStatus: "error",
            });
        }
    }

    async function notifyForecast(cityip: string, isActive: boolean) {
        const { data, error } = await useFetch('/forecast/notification/' + cityip + '/' + isActive, {
            baseURL: useRuntimeConfig().public.baseURL,
            method: "PATCH",
            headers: {
                Authorization: authorization,
            },
        });

        if (data.value !== null) {
            if(dataAuth.userInfor) {
                dataAuth.userInfor.email_notification = isActive
                console.log(isActive)
                if(isActive)
                    dataAuth.userInfor.city = cityip
                localStorage.setItem("user_infor", JSON.stringify(dataAuth.userInfor))
            }

            dataAuth.getUserInfor()

            if(dataAuth.userInfor?.city)
                city.value = dataAuth.userInfor?.city
            await currentForecast(city.value)
            await futureForecast(city.value)
        } else {
            storeToast.add({
                message: "Không tìm thấy thành phố này",
                toastStatus: "error",
            });
        }
    }

    return {
        location,
        city,
        localTime,
        current,
        future,
        futureDay,
        flag,
        search,
        currentForecast,
        futureForecast,
        notifyForecast
    }
})


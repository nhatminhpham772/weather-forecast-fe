import {
    string,
    number,
    array,
    record,
    object,
    size,
    optional,
    defaulted,
    assign,
    type Infer,
    any,
    date,
} from "superstruct";

export const LocationSchema = object({
    name: string(),
    region: string(),
    country: string(),
    lat: number(),
    lon: number(),
    tz_id: string(),
    localtime_epoch: number(),
    localtime: string()
})

export const CurrentSchema = object({
    temp_c: number(),
    is_day: number(),
    condition: object({
        text: string(),
        icon: string()
    }),
    wind_mph: number(),
    humidity: number(),
    feelslike_c: number()
})

export const CurrentForecastSchema = object({
    location: LocationSchema,
    current: CurrentSchema
})

export const FutureSchema = object({
    date: string(),
    date_epoch: number(),
    day: object({
        maxtemp_c: number(),
        mintemp_c: number(),
        maxwind_mph: number(),
        avghumidity: number(),
        condition: object({
            text: string(),
            icon: string()
        })
    }),
    astro: any(),
    hour: array(any())
})


export type CurrentForecast = Infer<typeof CurrentForecastSchema>
export type Current = Infer<typeof CurrentSchema>
export type Future = Infer<typeof FutureSchema>


import { type WeatherCodeEntry } from "../types/Weather";

export const WEATHER_CODE_MAP: Record<number, WeatherCodeEntry> = {
    //Record<K, V> returns an object where all keys are K type, and all values are V type
    
    //In this case, an object indexed by numbers (weather code) that always returns a WeatherCodeEntry object

    0: {
        day: { label: "Sunny", iconURL: "http://openweathermap.org/img/wn/01d@2x.png" },
        night: { label: "Clear", iconURL: "http://openweathermap.org/img/wn/01n@2x.png" },
    },
    1: {
        day: { label: "Mainly Sunny", iconURL: "http://openweathermap.org/img/wn/01d@2x.png" },
        night: { label: "Mainly Clear", iconURL: "http://openweathermap.org/img/wn/01n@2x.png" },
    },
    2: {
        day: { label: "Partly Cloudy", iconURL: "http://openweathermap.org/img/wn/02d@2x.png" },
        night: { label: "Partly Cloudy", iconURL: "http://openweathermap.org/img/wn/02n@2x.png" },
    },
    3: {
        day: { label: "Cloudy", iconURL: "http://openweathermap.org/img/wn/03d@2x.png" },
        night: { label: "Cloudy", iconURL: "http://openweathermap.org/img/wn/03n@2x.png" },
    },
    45: {
        day: { label: "Foggy", iconURL: "http://openweathermap.org/img/wn/50d@2x.png" },
        night: { label: "Foggy", iconURL: "http://openweathermap.org/img/wn/50n@2x.png" },
    },
    48: {
        day: { label: "Rime Fog", iconURL: "http://openweathermap.org/img/wn/50d@2x.png" },
        night: { label: "Rime Fog", iconURL: "http://openweathermap.org/img/wn/50n@2x.png" },
    },
    51: {
        day: { label: "Light Drizzle", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Light Drizzle", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    53: {
        day: { label: "Drizzle", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Drizzle", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    55: {
        day: { label: "Heavy Drizzle", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Heavy Drizzle", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    56: {
        day: { label: "Light Freezing Drizzle", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Light Freezing Drizzle", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    57: {
        day: { label: "Freezing Drizzle", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Freezing Drizzle", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    61: {
        day: { label: "Light Rain", iconURL: "http://openweathermap.org/img/wn/10d@2x.png" },
        night: { label: "Light Rain", iconURL: "http://openweathermap.org/img/wn/10n@2x.png" },
    },
    63: {
        day: { label: "Rain", iconURL: "http://openweathermap.org/img/wn/10d@2x.png" },
        night: { label: "Rain", iconURL: "http://openweathermap.org/img/wn/10n@2x.png" },
    },
    65: {
        day: { label: "Heavy Rain", iconURL: "http://openweathermap.org/img/wn/10d@2x.png" },
        night: { label: "Heavy Rain", iconURL: "http://openweathermap.org/img/wn/10n@2x.png" },
    },
    71: {
        day: { label: "Light Snow", iconURL: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { label: "Light Snow", iconURL: "http://openweathermap.org/img/wn/13n@2x.png" },
    },
    73: {
        day: { label: "Snow", iconURL: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { label: "Snow", iconURL: "http://openweathermap.org/img/wn/13n@2x.png" },
    },
    75: {
        day: { label: "Heavy Snow", iconURL: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { label: "Heavy Snow", iconURL: "http://openweathermap.org/img/wn/13n@2x.png" },
    },
    77: {
        day: { label: "Snow Grains", iconURL: "http://openweathermap.org/img/wn/13d@2x.png" },
        night: { label: "Snow Grains", iconURL: "http://openweathermap.org/img/wn/13n@2x.png" },
    },
    80: {
        day: { label: "Light Showers", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Light Showers", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    81: {
        day: { label: "Showers", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Showers", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    82: {
        day: { label: "Heavy Showers", iconURL: "http://openweathermap.org/img/wn/09d@2x.png" },
        night: { label: "Heavy Showers", iconURL: "http://openweathermap.org/img/wn/09n@2x.png" },
    },
    95: {
        day: { label: "Thunderstorm", iconURL: "http://openweathermap.org/img/wn/11d@2x.png" },
        night: { label: "Thunderstorm", iconURL: "http://openweathermap.org/img/wn/11n@2x.png" },
    },
    96: {
        day: { label: "Thunderstorm With Hail", iconURL: "http://openweathermap.org/img/wn/11d@2x.png" },
        night: { label: "Thunderstorm With Hail", iconURL: "http://openweathermap.org/img/wn/11n@2x.png" },
    },
    99: {
        day: { label: "Thunderstorm With Hail", iconURL: "http://openweathermap.org/img/wn/11d@2x.png" },
        night: { label: "Thunderstorm With Hail", iconURL: "http://openweathermap.org/img/wn/11n@2x.png" },
    },
};


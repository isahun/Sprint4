export interface WeatherResponse {
    current: {
        weather_code: number;
        temperature_2m: number;
    }
}

export interface WeatherIconInfo {
    iconURL: string;
    label: string;
}

export interface WeatherCodeEntry {
    day: WeatherIconInfo;
    night: WeatherIconInfo;
}
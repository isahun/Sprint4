import { type WeatherIconInfo } from "../types/Weather";
import { WEATHER_CODE_MAP } from "../config/WeatherCodeMap";

function isDayOrNight():boolean {
    const hour = new Date().getHours();
    return hour >= 6 && hour <= 20;
}

export function getIconData(wCode: number): WeatherIconInfo {
    const weatherEntry = WEATHER_CODE_MAP[wCode];

    if (!weatherEntry) {
        return {
            iconURL: "http://openweathermap.org/img/wn/04d@2x.png",
            label: "Unknown"
        };
    }

    return isDayOrNight()? weatherEntry.day : weatherEntry.night;
};
import { WeatherService } from "../services/WeatherService";
import { WEATHER_API } from "../config/apiConfig";
import { type WeatherResponse } from "../types/Weather";

export class WeatherManager {
    private weatherApi = new WeatherService();

    async getWeather(lat: number, lon: number): Promise<number> {
        const url =  `${WEATHER_API.baseUrl}?latitude=${lat}&longitude=${lon}&current=temperature_2m`

        const data = await this.weatherApi.get<WeatherResponse>(url);

        return data.current.temperature_2m;
    }
}

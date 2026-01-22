import { WeatherManager } from "./WeatherManager";

export class WeatherUI {
    private manager = new WeatherManager();
    private weatherElement: HTMLDivElement;

    constructor(weatherElement: HTMLDivElement) {
        this.weatherElement = weatherElement;
    }

    async renderTemp() {
        const temp = await this.manager.getWeather(41.375, 2.125);
        this.weatherElement.textContent = `${temp} ºC`; //text content only takes strings
    }
}
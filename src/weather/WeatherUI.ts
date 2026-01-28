import { WeatherManager } from "./WeatherManager";
import { getIconData } from "./WeatherIconData";

export class WeatherUI {
    private manager = new WeatherManager();
    private weatherElement: HTMLDivElement;
    private iconElement: HTMLImageElement;

    constructor(weatherElement: HTMLDivElement, iconElement: HTMLImageElement) {
        this.weatherElement = weatherElement;
        this.iconElement = iconElement;
    }

    async renderTemp() {
        const lat = document.getElementById("latitude") as HTMLInputElement;
        const long = document.getElementById("longitude") as HTMLInputElement;

        if (!long || !lat) {
            throw new Error ("DOM elements not found");
        };

        const latVal = Number(lat.value);
        const longVal = Number(long.value);

        if (isNaN(latVal) || isNaN(longVal) || latVal > 90 || latVal < -90 || longVal > 180 || longVal < -180) {
            this.weatherElement.textContent = "Please try a valid number (-180 to 180 for longitude and -90 to 90 for latitude)";
        };

        const data = await this.manager.getWeather(latVal, longVal);

        this.weatherElement.textContent = `${data.current.temperature_2m} ºC`; //text content only takes strings

        const wCode = data.current.weather_code;

        //Retrieve icon data and fill HTML img element fields
        const iconData = getIconData(wCode);

        const iconURL = iconData.iconURL;
        const iconLabel = iconData.label;
        
        console.log(iconData);

        this.iconElement.src = iconURL;
        this.iconElement.alt = iconLabel;
    }
}


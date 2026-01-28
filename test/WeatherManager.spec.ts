import { describe, expect, vi, it } from 'vitest'
import { WeatherManager  } from '../src/weather/WeatherManager'


//API service mock with Vite helper vi.mock
vi.mock('../src/services/ApiService', () => {
    return {
        ApiService: class {
            get() {
                return Promise.resolve({
                    current: {
                        temperature_2m: 12.6,
                        weather_code: 0
                    }
                });
            }
        }
    };
});

describe('WeatherManager', () => {

    it('returns temperature as a number from API data', async () => {
        
        //Arrange: weatherManager instance using mock ApiService
        const manager = new WeatherManager();

        //Act: execute method
        const result = await manager.getWeather(41.38, 2.15);

        //Assert: check result is the one expected
        //1. Check if it's a number
        expect(typeof result).toBe('number');
        expect(result.current).toHaveProperty('temperature_2m');
        expect(result.current).toHaveProperty('weather_code');

        //2. Check if it's THE number (12.6)
        expect(result.current.temperature_2m).toBe(12.6);
        expect(result.current.weather_code).toBe(0);
    });
});

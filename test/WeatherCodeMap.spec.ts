import { describe, it, expect, vi } from 'vitest';
import * as weatherIcons from '../src/weather/WeatherIconData'//to import all modules and use vi.spyOn, which needs 2 or more parameters)

describe('WeatherCodeMap', () => {
    it('returns day sunny icon for code 0 and when isItDaytime returns true', () => {
        //mock the real hour
        vi.spyOn(weatherIcons, 'isItDaytime').mockReturnValue(true);

        const result = weatherIcons.getIconData(0);

        expect(result.label).toBe('Sunny');
    });

    it('returns clear moon icon for code 0 and isItDaytime returns false', () => {
        vi.spyOn(weatherIcons, 'isItDaytime').mockReturnValue(false);

        const result = weatherIcons.getIconData(0);
        expect(result.label).toBe('Clear');
    });

    it('returns fallback icon for unknown weather code', () => {
        const result = weatherIcons.getIconData(999);
        expect(result.label).toBe('Unknown');
    });
});
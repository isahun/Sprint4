import { describe, it, expect, vi, afterEach } from 'vitest';
import * as weatherIcons from '../src/weather/WeatherIconData'//to import all modules and use vi.spyOn, which needs 2 or more parameters)

describe('WeatherCodeMap', () => {
    it('returns day sunny icon for code 0 during daytime', () => {
    const spy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(12);

    const result = weatherIcons.getIconData(0);
    expect(result.label).toBe('Sunny');

    spy.mockRestore();
});


    it('returns clear moon icon for code 0 during nighttime', () => {
    const spy = vi.spyOn(Date.prototype, 'getHours').mockReturnValue(2);

    const result = weatherIcons.getIconData(0);
    expect(result.label).toBe('Clear');

    spy.mockRestore();
});

    it('returns fallback icon for unknown weather code', () => {
        const result = weatherIcons.getIconData(999);
        expect(result.label).toBe('Unknown');
    });
});
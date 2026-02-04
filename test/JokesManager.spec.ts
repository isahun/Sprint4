import { describe, expect, vi, it, test } from 'vitest'
import { JokesManager  } from '../src/jokes/JokesManager'


//API service mock with Vite helper vi.mock, telling JokesManager to use this instead of ApiService
vi.mock('../src/services/ApiService', () => {
    return {
        ApiService: class {
            get() {
                return Promise.resolve ({
                    id: "P71TnyI6prc",
                    joke: "Me and my mates are in a band called Duvet. We're a cover band.",
                    value: "Chuck Norris is love. Chuck Norris is life.",
                    status: 200
                })
            }
        }
    }
})

describe('JokesManager', () => {
    it('returns a dadjoke as a string from API data when Math.random > 0.5', async () => {
        
        //Mocking Math.random for .getJoke() to use this value as Math.random and always choose dadjokes
        vi.spyOn(Math, 'random').mockReturnValue(0.9)

        //Arrange: jokesManager instance using mock ApiService
        const manager = new JokesManager();

        //Act: execute method
        const result = await manager.getJoke();

        //Assert: check result is the one expected
        //1. Check if it's a string
        expect(typeof result).toBe('string')

        //2. Check if it's THE dadjoke
        expect(result).toBe("Me and my mates are in a band called Duvet. We're a cover band.");
    })

    it('returns a chuck norris joke as a string from API data when Math.random < 0.5', async () => {
        
        //Mocking Math.random for .getJoke() to use this value as Math.random and always choose dadjokes
        vi.spyOn(Math, 'random').mockReturnValue(0.4)

        //Arrange: jokesManager instance using mock ApiService
        const manager = new JokesManager();

        //Act: execute method
        const result = await manager.getJoke();

        //Assert: check result is the one expected
        //1. Check if it's a string
        expect(typeof result).toBe('string')

        //2. Check if it's THE chuck norris joke
        expect(result).toBe("Chuck Norris is love. Chuck Norris is life.");
    })
})

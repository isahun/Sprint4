//Responsibility: Getting the data we will later on paint in the UI. Exports to JokesUI.ts, which will actually paint the DOM. Imports classes, types and functions from external files. Calls to different APIs (we set up in ApiService), each API returns a different structure (ApiService), and returns ONE TYPE only for UI (string).


//Importing with TS vertabimModuleSyntax: since tsconfig.json includes "verbatimModuleSyntax": true, TS wont delete imports automatically, if something is ONLY one type we need to tell TS. Values and types, values exist in JS, (class, constr, function) but types only exist while TS compiles (interface, type), so we need to specify "type" when importing to make it clear it includes TS oriented data

import { ApiService  } from "../services/ApiService";
import { DAD_JOKE_API, CHUCK_JOKE_API } from "../config/apiConfig";
import { type DadJokeResponse, type ChuckJokeResponse } from "../types/Joke";

export class JokesManager {
    private api = new ApiService();

    async getJoke(): Promise<string> { 
        const useDadApi = Math.random() > 0.5; //math.random generates decimal numbers between 0 and 1(not included), will be true 50% of the times

        if (useDadApi) {
            const data = await this.api.get<DadJokeResponse>(DAD_JOKE_API.url, DAD_JOKE_API.headers); //telling TS: this call will return EXACTLY this (id:string, joke:string, status:number)

            return data.joke;
        } else {
            const data = await this.api.get<ChuckJokeResponse>(CHUCK_JOKE_API.url); //telling TS: this call will return EXACTLY this (value: string)

            return data.value;
        }
    }
}
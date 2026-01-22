//Responsibility: Getting the data we will later on paint in the UI. Exports to JokesUI.ts, which will actually paint the DOM. Imports classes, types and functions from external files. Calls to different APIs (we set up in ApiService), each API returns a different structure (ApiService), and returns ONE TYPE only for UI (string).


//Importing with TS vertabimModuleSyntax: since tsconfig.json includes "verbatimModuleSyntax": true, TS wont delete imports automatically, if something is ONLY one type we need to tell TS. Values and types, values exist in JS, (class, constr, function) but types only exist while TS compiles (interface, type), so we need to specify "type" when importing to make it clear it includes TS oriented data

import { ApiService  } from "../services/ApiService";
import { DAD_JOKE_API, CHUCK_JOKE_API } from "../config/apiConfig";
import { type DadJokeResponse, type ChuckJokeResponse } from "../types/Joke";

export class JokesManager {
    private api = new ApiService();

    async getJoke(): Promise<string> { 
        const useDadApi = Math.random() > 0.5; //math.random generates decimal numbers between 0 and 1(not included), will be true 50% of the times

        console.log('---- getJoke called ----');
        console.log('Using Dad API', useDadApi);

        if (useDadApi) {
            console.log('Calling DAD JOKE API');

            const data = await this.api.get<DadJokeResponse>({endpoint: DAD_JOKE_API.url, headers: DAD_JOKE_API.headers}); //telling TS: this call will return EXACTLY this (object = {id:string, joke:string, status:number})

            console.log('Dad API response:', data)

            return data.joke;
        } else {
            console.log('Calling CHUCK NORRIS API');

            const data = await this.api.get<ChuckJokeResponse>({endpoint: CHUCK_JOKE_API.url}); //telling TS: this call will return EXACTLY this (object = {value: string})

            console.log('Chuck API response: ', data)

            return data.value;
        }
    }
}
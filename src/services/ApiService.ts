//Responsibility: Fetching data, talking to the internet. It is AGNOSTIC, in the sense that it has no idea what a joke is or what UI is, no idea what is returning or why are we calling for the data to begin with. Only knows "u gimme URL --> i give you data"

export interface ApiRequestOptions {
    endpoint: string;
    headers?: HeadersInit;
}

export class ApiService { //headersInit contemplates all kind of headers fetch can accept
    async get<T>(url: string, headers?: HeadersInit): Promise<T> { 
        //will only go through if headers exist, otherwise is UNDEFINED
        const response = await fetch(url, headers? { headers } : undefined); //capture the case of undefined

        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        return response.json() as Promise<T>;
    }
}
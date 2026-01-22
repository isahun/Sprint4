//Responsibility: Fetching data, talking to the internet. It is AGNOSTIC, in the sense that it has no idea what a joke is or what UI is, no idea what is returning or why are we calling for the data to begin with. Only knows "u gimme URL --> i give you data"

//ApiRequestOptions defines the CONTRACT for any API call made through ApiService.It groups all the data needed to perform a request (endpoint + optional headers)into a single object, making the service easier to extend and harder to misuse.

// Using an options object instead of multiple parameters avoids ambiguity and allows the service to remain agnostic and scalable.

export interface ApiRequestOptions {
    endpoint: string;
    headers?: HeadersInit; //headersInit contemplates all kind of headers fetch can accept
}

export class ApiService { 
    async get<T>(options: ApiRequestOptions): Promise<T> { 
        //GET method. <T> is expected shape of response data, about which ApiService does not care. The caller defines what T is when calling the method. This will only go through if headers exist, otherwise is UNDEFINED

        const response = await fetch(options.endpoint, options.headers? { headers: options.headers } : undefined); //ternary operator to check if headers has info, in case it doesn't, it captures the undefined

        if(!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
        }

        return response.json() as Promise<T>;
    }
}
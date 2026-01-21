//Responsibility: Contract, describing data. No logic, no fetch. If API changes, here we come to change API data format

export interface DadJokeResponse {
    id: string;
    joke: string;
    status: number;
}

export interface ChuckJokeResponse {
    value: string;
}
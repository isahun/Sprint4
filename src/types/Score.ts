//Responsibility: Describe structure of a joke rating entry. No logic, only shaping data

export interface JokeScore {
    joke: string;
    score: 1 | 2 | 3;
    date: string; //ISO format
}
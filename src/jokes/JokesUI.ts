//Responsibility: To paint UI with data collected from other files. Knows nothing of APIs, nothing of TYPES, only consumes STRING

import { JokesManager } from "./JokesManager";

export class JokesUI {
    private manager = new JokesManager();
    private jokeElement: HTMLParagraphElement;

    constructor(jokeElement: HTMLParagraphElement) {
        this.jokeElement = jokeElement;
    }

    async renderJoke() {
        this.jokeElement.textContent = 'Loading...';
        this.jokeElement.textContent = await this.manager.getJoke();
    }
};
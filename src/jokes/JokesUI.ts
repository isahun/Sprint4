//Responsibility: UI component responsible for rendering jokes. It encapsulates HOW a joke is displayed (loading state, text update), but does not know WHEN it should be rendered or WHERE the data comes from. Knows nothing of APIs, nothing of TYPES, only consumes STRING.

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
}
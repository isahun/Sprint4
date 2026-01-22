//Responsibility: UI component responsible for rendering jokes. Handles HOW a joke is displayed (loading state, text update), but does not know WHEN it should be rendered or WHERE the data comes from. Knows nothing of APIs, nothing of TYPES, only consumes STRING from jk manager.

import { JokesManager } from "./JokesManager"; // .js necessary when not in a Vite project for compiled files' modules to find each other

export class JokesUI {
    private manager = new JokesManager();
    private jokeElement: HTMLParagraphElement;

    constructor(jokeElement: HTMLParagraphElement) { //dom element that will update
        this.jokeElement = jokeElement;
    }

    async renderJoke() {
        this.jokeElement.textContent = 'Loading...';
        this.jokeElement.textContent = await this.manager.getJoke();
    }

    attachScoreBtns(container: HTMLElement) {
        //internal UI interactions --> score btns, translates clicks into num values, delivers to manager
        container.addEventListener('click', (event) => {
            const target = event.target as HTMLElement; //event -> navigator generated object, gives lots of info
            //event.currentTarget would be the container, while event.target is the ACTUAL element being clicked, in this case the button
            const score = target.dataset.score;

            if(!score) return; //in case we click an empty element

            this.manager.rateCurrentJoke(Number(score) as 1 | 2 | 3);
        });
    }
}
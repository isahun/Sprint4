//Responsibility: UI component responsible for rendering jokes. Handles HOW a joke is displayed (loading state, text update), but does not know WHEN it should be rendered or WHERE the data comes from. Knows nothing of APIs, nothing of TYPES, only consumes STRING from jk manager.

import { JokesManager } from "./JokesManager"; // .js necessary when not in a Vite project for compiled files' modules to find each other

export class JokesUI {
    private manager = new JokesManager();
    private jokeElement: HTMLParagraphElement;
    private button: HTMLButtonElement;
    private anyJoke = false;

    constructor(jokeElement: HTMLParagraphElement, button: HTMLButtonElement) { //dom element that will update
        this.jokeElement = jokeElement;
        this.button = button;

        this.button.textContent = "Hit me!"
    }

    async renderJoke() {
        this.jokeElement.textContent = 'Loading...';
        this.jokeElement.textContent = await this.manager.getJoke();

        if(!this.anyJoke) {
            this.button.textContent = "Next joke"
            this.anyJoke = true;
        }
    }

    attachScoreSelect(scoreSelect: HTMLSelectElement, clearBtn:HTMLButtonElement) {
        //internal UI interactions --> score btns, translates clicks into num values, delivers to manager
        scoreSelect.addEventListener('change', () => {
            const value = Number(scoreSelect.value); 
            if(!value) return; //in case we click an empty element

            this.manager.rateCurrentJoke(value as 1 | 2 | 3);
        });

        clearBtn.addEventListener('click', () => {
            scoreSelect.value = "";
            this.manager.clearJoke();
        });
    }
}
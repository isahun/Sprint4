//Responsibility: UI painting with data collected from other files

import { JokesUI } from "./jokes/JokesUI";

const jokeSpace = document.querySelector<HTMLParagraphElement>('#jokeSpace');
const button = document.querySelector<HTMLButtonElement>('#nextJokeBtn');

if (!jokeSpace || !button) { //ALWAYS CHECK BEFORE USING ELEMENTS: TS needs this to have a certainty of what to do in case elements are null, otherwise it's not confident enough to add the event listener. 
    throw new Error('Required DOM elements not found')
}

const jokesUI = new JokesUI(jokeSpace);

button.addEventListener('click', () => {
    jokesUI.renderJoke();
    
});



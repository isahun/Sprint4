//Responsibility: Application entry point and event orchestration. WHEN data from jokesUI is painted. It initializes the app by selecting global DOM elements, instantiating UI components, and wiring user events. It contains NO business logic or rendering details. UI painting with data collected from other files

import { JokesUI } from './jokes/JokesUI';

const jokeSpace = document.querySelector<HTMLParagraphElement>('#jokeSpace');
const button = document.querySelector<HTMLButtonElement>('#nextJokeBtn');

if (!jokeSpace || !button) { //ALWAYS CHECK BEFORE USING ELEMENTS: TS needs this to have a certainty of what to do in case elements are null, otherwise it's not confident enough to add the event listener. 
    throw new Error('Required DOM elements not found')
}

const jokesUI = new JokesUI(jokeSpace);

button.addEventListener('click', () => {
    jokesUI.renderJoke();
    
});



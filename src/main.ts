//Responsibility: Application entry point and event orchestration. WHEN data from jokesUI is painted. It initializes the app by selecting global DOM elements, instantiating UI components, and wiring user events. It contains NO business logic or rendering details. UI painting with data collected from other files

import { JokesUI } from './jokes/JokesUI';
import { WeatherUI } from './weather/WeatherUI';

const jokeSpace = document.querySelector<HTMLParagraphElement>('#jokeSpace');
const button = document.querySelector<HTMLButtonElement>('#nextJokeBtn');
const scoreSelect = document.querySelector<HTMLSelectElement>('#jokeScore');
const showReportBtn = document.querySelector<HTMLButtonElement>('#showReport');
const reportElement = document.querySelector<HTMLParagraphElement>("#scoreElement");
const clearBtn = document.querySelector<HTMLButtonElement>('#clearScore');
const scQuestion = document.querySelector<HTMLLegendElement>("#scoreQuestion");

const weatherSpace = document.querySelector<HTMLDivElement>('#weatherSpace');
const iconSpace = document.querySelector<HTMLImageElement>('#weatherIcon');
const weatherBtn = document.querySelector<HTMLButtonElement>('#weatherBtn');


if (!jokeSpace || !button || !scoreSelect || !weatherSpace || !iconSpace || !weatherBtn || !clearBtn || !showReportBtn || !reportElement || !scQuestion) { //ALWAYS CHECK BEFORE USING ELEMENTS: TS needs this to have a certainty of what to do in case elements are null, otherwise it's not confident enough to add the event listener. 
    throw new Error('Required DOM elements not found')
}

const jokesUI = new JokesUI(jokeSpace, button, reportElement, scoreSelect, clearBtn, showReportBtn, scQuestion);
const weatherUI = new WeatherUI(weatherSpace, iconSpace);

button.addEventListener('click', () => {
    jokesUI.renderJoke();
});

//Attach score interactions to UI component
jokesUI.attachScoreSelect();

weatherBtn.addEventListener('click', () => {
    weatherUI.renderTemp();
});

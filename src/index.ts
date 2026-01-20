//interface to define structure of API data
interface jokeData {
    id: string;
    joke: string;
    status: number;
}

async function getJoke(): Promise<string> { //promises to return a string, but later. Always use with await
    const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json'}
});
    const data: jokeData = await response.json();
    return data.joke;
};

const jokeSpace = document.getElementById("jokeSpace") as HTMLParagraphElement;
const button = document.getElementById("nextJokeBtn") as HTMLButtonElement;

button.addEventListener('click', async () => {
    const joke = await getJoke();
    jokeSpace.textContent = joke;
});



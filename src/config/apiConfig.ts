//Responsibility: Set up (not logic), just stores API info, if API url changes, this is the place to change it w/o altering the rest of the code

export const DAD_JOKE_API = {
    url: 'https://icanhazdadjoke.com/',
    headers: {
        Accept: 'application/json'
    }
};

export const CHUCK_JOKE_API = { //no headers needed in this API
    url: 'https://api.chucknorris.io/jokes/random'
}
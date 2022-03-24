const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiContainer");
const url = 'https://api.rawg.io/api/games?ordering=-metacritic' + '/' + id + '&key=fc28d25bb9a8458487040dc95d300dff';
const gamesMonth = 'https://api.rawg.io/api/games?ordering=-metacritic&dates=2022-02-01,2022-03-22' + '/' + id + '&key=fc28d25bb9a8458487040dc95d300dff';

async function apiGame() {
    try {
        const fetchApi = await fetch(url);
        const callApi = await fetchApi.json();
        const games = callApi.results;
        document.title = `${games.name}`;
        html.innerHTML = '';
        console.log(games);
        html.innerHTML += `
        <div class="uniqueGame">
        <h2>${games.name}</h2>
        </div>
        `
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError(), "ERROR HAS OCCURED!";
    }
}

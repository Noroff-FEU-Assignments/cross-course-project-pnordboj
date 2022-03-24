const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiContainer");
const url = 'https://api.rawg.io/api/games?ordering=-metacritic&key=fc28d25bb9a8458487040dc95d300dff' + id;
const gamesMonth = "https://api.rawg.io/api/games?ordering=-metacritic&dates=2022-02-01,2022-03-22&key=fc28d25bb9a8458487040dc95d300dff" + id;

async function apiGame() {
    try {
        const fetchApi = await fetch(url);
        const callApi = await fetchApi.json();
        const games = callApi.results;
        html.innerHTML = '';
        for(let i = 0; i < games.length; i++) {
            document.title = `${games[i].name}`;
            console.log(games[i]);
            html.innerHTML = `
            <div class="uniqueGame">
            <h2>${games[i].name}</h2>
            </div>
            `
        }
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError(), "ERROR HAS OCCURED!";
    }
}

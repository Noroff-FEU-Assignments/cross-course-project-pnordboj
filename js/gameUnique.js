const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiContainer");
const url = 'https://api.rawg.io/api/games/' + id + '?key=fc28d25bb9a8458487040dc95d300dff';

async function apiGame() {
        const fetchApi = await fetch(url);
        const callApi = await fetchApi.json();
        const games = callApi.results;
        console.log(games);
        html.innerHTML = '';
        document.title = `${games.name}`;
        console.log(games);
        html.innerHTML += `
        <div class="uniqueGame">
        <h2>${games.name}</h2>
        </div>
        `;
}
apiGame();

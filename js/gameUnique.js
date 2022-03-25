const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiContainer");
const addCart = document.querySelector(".addCart");
const url = 'https://api.rawg.io/api/games/' + id + '?key=fc28d25bb9a8458487040dc95d300dff';

async function apiGame() {
        try {
                const fetchApi = await fetch(url);
                const games = await fetchApi.json();
                console.log(games);
                html.innerHTML = '';
                document.title = `${games.name} | Gamehub`;
                document.getElementsByTagName('meta')["description"].content = `${games.description}`;
                html.innerHTML += `
                <div class="uniqueGame">
                <h2>${games.name}</h2>
                <img src="${games.background_image}" id="apiImage" alt="${games.name}(Image Missing)">
                </div>`;
                const gameGenre = games.genres;
                for(let i = 0; i < gameGenre.length; i++) {
                        html.innerHTML += `
                        <div class="uniqueGameGenre">
                        <label id="genreApi">${gameGenre[i].name}</label>
                        </div>`;       
                }
                html.innerHTML += `<div class="uniqueGame">
                <p id="apiDescription">${games.description_raw}</p>
                <p id="apiRelease">Released: ${games.released}</p>
                </div>`;
                addCart.innerHTML += `
                <a class="purchaseButton" href="checkout.html?id=${games.id}">
                <button id="apiPurchase">
                Purchase ${games.name}
                </button>
                </a>`;
        } catch(error) {
                console.log(error);
                html.innerHTML = displayError(error, 'An error has occured!');
        }
}
apiGame();

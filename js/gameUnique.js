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
                html.innerHTML = '';
                document.title = `${games.name}`;
                document.querySelector('meta')["description"].content = `${games.description}`;
                html.innerHTML += `
                <div class="uniqueGame">
                <h2>${games.name}</h2>
                <img src="${games.background_image}" id="apiImage" alt="${games.name}(Image Missing)">
                <p id="apiDescription">${games.description}</p>
                <p id="apiRelease">${games.released}</p>
                </div>`;
                addCart.innerHTML += `
                <div class="addContainer">
                <a id="buttonRef" href="checkout.html?id=${games.id}">
                        <button id="complete">
                                Purchase ${games.name}
                        </button>
                </a>
                </div>
                `;
        } catch(error) {
                console.log(error);
                html.innerHTML = displayError(error, 'An error has occured!');
        }
}
apiGame();

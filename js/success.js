const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiSuccess");
const url = 'https://api.rawg.io/api/games/' + id + '?key=fc28d25bb9a8458487040dc95d300dff';

async function apiSuccess() {
        try {
                const fetchApi = await fetch(url);
                const games = await fetchApi.json();
                console.log(games);
                html.innerHTML = '';
                document.title = `${games.name}`;
                console.log(games);
                html.innerHTML += `
                <div class="uniqueGame">
                <h2 id="apiH2">${games.name}</h2>
                <img src="${games.background_image}" alt="${games.name}" id="cartImage">
                </div>`;
                button.innerHTML += `
                <a href="success.html?${games.id}">
			        <button id="complete">
				        Complete Purchase
			        </button>
		        </a>
                `;
        } catch(error) {
                console.log(error);
                html.innerHTML = displayError(error, 'An error has occured!');
        }
}
apiSuccess();

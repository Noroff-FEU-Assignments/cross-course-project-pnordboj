const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiSuccess");
const url = 'https://patricknj.one/wp-json/wc/v3/products' + '/' + id + '?consumer_key=ck_407e102a399e8bfb1e6131bc91b5bb418e515b84&consumer_secret=cs_3f458ce92af6ffff564f5b472040984ba45601c4';

async function apiSuccess() {
        try {
                const fetchApi = await fetch(url);
                const games = await fetchApi.json();
                html.innerHTML = '';
                document.title = `${games.name}`;
                html.innerHTML += `
                <div class="uniqueGame">
                <h2 id="apiH2">${games.name}</h2>
                <img src="${games.images[0].src}" alt="${games.name}" id="cartImage">
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

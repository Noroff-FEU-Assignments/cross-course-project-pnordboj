const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const html = document.querySelector(".apiContainer");
const addCart = document.querySelector(".addCart");
const url = 'https://patricknj.one/wp-json/wc/v3/products' + '/' + id + '?consumer_key=ck_407e102a399e8bfb1e6131bc91b5bb418e515b84&consumer_secret=cs_3f458ce92af6ffff564f5b472040984ba45601c4';

async function apiGame() {
        try {
                const fetchApi = await fetch(url);
                const games = await fetchApi.json();
                html.innerHTML = '';
                document.title = `${games.name} | Gamehub`;
                document.getElementsByTagName('meta')["description"].content = `${games.short_description}`;
                html.innerHTML += `
                <div class="uniqueGame">
                <h2>${games.name}</h2>
                <img src="${games.images[0].src}" id="apiImage" alt="${games.name}(Image Missing)">
                </div>`;
                html.innerHTML += `<div class="uniqueGame">
                <p id="apiDescription">${games.short_description}</p>
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
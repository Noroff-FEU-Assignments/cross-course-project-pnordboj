const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://patricknj.one/wp-json/wc/v3/products?consumer_key=ck_407e102a399e8bfb1e6131bc91b5bb418e515b84&consumer_secret=cs_3f458ce92af6ffff564f5b472040984ba45601c4";
const html = document.querySelector(".game_list");

async function getTopGames() {
    try {
        const fetchApi = await fetch(url);
        const games = await fetchApi.json();
        html.innerHTML = ``;
        for(let i = 0; i < games.length; i++) {
            html.innerHTML += `
                <div class="game-api">
                    <a href="../html/api.html?id=${games[i].id}">
                    <h2 id="apiTitle">${games[i].name}</h2>
                    </a>
                    <a href="../html/api.html?id=${games[i].id}" id="imageLink">
                        <img id="cartImage" alt="${games[i].name}(Missing Image)" src="${games[i].images[0].src}">
                    </a>
                    <a href="../html/api.html?id=${games[i].id}">
                        <button id="view_game">
                            <h4>View Game</h4>
                        </button>
                    </a>
                    <hr id="whiteline">
                </div>
                `;
        }
    } catch(error) {
        console.log(error);
        html.innerHTML = displayError("Error", error);
    }
}

getTopGames();

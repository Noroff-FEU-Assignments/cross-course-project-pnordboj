const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://patricknj.one/wp-json/wc/v3/products?consumer_key=ck_407e102a399e8bfb1e6131bc91b5bb418e515b84&consumer_secret=cs_3f458ce92af6ffff564f5b472040984ba45601c4";
const html = document.querySelector(".games");

async function featuredGames() {
    try {
        const fetchApi = await fetch(url);
        const callApi = await fetchApi.json();
        html.innerHTML = ``;
        for(let i = 0; i < 2; i++) {
            const games = callApi[i];
            html.innerHTML += `
                <div class="game_container_1">
                    <div class="homeGame">
                        <a href="../html/api.html?id=${games.id}">
                        <h2 id="apiHomeTitle">${games.name}</h2>
                        </a>
                        <a href="../html/api.html?id=${games.id}" id="homeGameImage">
                            <img id="apiHomeImage" alt="${games.name}(Missing Image)" src="${games.images[0].src}">
                        </a>
                    </div>
                </div>
                `;
        }
        for(let i = 3; i < 4; i++) {
            const games = callApi[i];
            html.innerHTML += `
                <div class="game_container_2">
                    <div class="homeGame">
                        <a href="../html/api.html?id=${games.id}">
                        <h2 id="apiHomeTitle">${games.name}</h2>
                        </a>
                        <a href="../html/api.html?id=${games.id}" id="homeGameImage">
                            <img id="apiHomeImage" alt="${games.name}(Missing Image)" src="${games.images[0].src}">
                        </a>
                    </div>
                </div>
                `;
        }

    } catch(error) {
        console.log(error);
        html.innerHTML = displayError("Error", error);
    }
}

featuredGames();


/*

*/
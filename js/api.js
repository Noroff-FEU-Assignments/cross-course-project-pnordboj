const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://api.rawg.io/api/games?ordering=-metacritic&key=fc28d25bb9a8458487040dc95d300dff";
const html = document.querySelector(".game_list");

async function getTopGames() {
    try {
        const fetchApi = await fetch(url);
        const callApi = await fetchApi.json();
        const games = callApi.results;
        html.innerHTML = ``;
        for(let i = 0; i < games.length; i++) {
            html.innerHTML += `
                <div class="game-api">
                    <a href="../html/api.html?id=${games[i].id}">
                    <h2 id="apiTitle">${games[i].name}</h2>
                    </a>
                    <a href="../html/api.html?id=${games[i].id}" id="imageLink">
                        <img id="apiImage" alt="${games[i].name}(Missing Image)" src="${games[i].background_image}">
                    </a>
                        <label id="apiRating">Metacritic Score: ${games[i].metacritic}</label>
                        <label id="apiReleaseTop">Released: ${games[i].released}</label>
                    
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

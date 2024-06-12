let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemonItem) {
        if (typeof pokemonItem === 'object' && pokemonItem !== null &&
            'name' in pokemonItem &&
            'detailsUrl' in pokemonItem) {
            pokemonList.push(pokemonItem);
        } else {
            console.error('Invalid PokemonItem. Make sure to enter an object with the specified properties');
        }
    }

    function addListItem(pokemon) {
        let listContainer = document.querySelector(".row");

        let listpokemon = document.createElement("li");
        listpokemon.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");

        let button = document.createElement("button");
        button.classList.add("btn", "btn-secondary", "button-class");

        let imageElement = document.createElement('img');
        imageElement.src = pokemon.imageUrl;
        imageElement.classList.add('pokemon-button-image');

        button.appendChild(imageElement);
        button.appendChild(document.createTextNode(pokemon.name));
        
        listpokemon.appendChild(button);
        listContainer.appendChild(listpokemon);
        addEventListenerToButton(button, pokemon);
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.name = details.name;
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            let modalTitle = document.querySelector('.modal-title');
            let modalBody = document.querySelector('.modal-body');

            modalTitle.innerHTML = '';
            modalBody.innerHTML = '';

            modalTitle.innerText = pokemon.name;

            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;
            imageElement.classList.add('pokemon-image');

            let heightElement = document.createElement('p');
            heightElement.innerText = `Height: ${pokemon.height}`;

            let typesElement = document.createElement('p');
            typesElement.innerText = `Types: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

            modalBody.appendChild(imageElement);
            modalBody.appendChild(heightElement);
            modalBody.appendChild(typesElement);

            $('.modal').modal('show');
        });
    }

    function addEventListenerToButton(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };

})();

pokemonRepository.loadList().then(function () {
    let allPokemon = pokemonRepository.getAll();
    let loadDetailsPromises = allPokemon.map(pokemon => pokemonRepository.loadDetails(pokemon));
    
    Promise.all(loadDetailsPromises).then(function () {
        allPokemon.forEach(function (pokemonItem) {
            pokemonRepository.addListItem(pokemonItem);
        });
    });
});

document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let searchTerm = document.getElementById('search-input').value.toLowerCase();
    filterPokemon(searchTerm);
});

function filterPokemon(searchTerm) {
    let filteredList = pokemonRepository.getAll().filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm));
    
    let listContainer = document.querySelector(".row");
    listContainer.innerHTML = '';

    filteredList.forEach(pokemon => {
        pokemonRepository.addListItem(pokemon);
    });
}













































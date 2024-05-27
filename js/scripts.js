let pokemonRepository = (function () {
    // Repository of pokemons
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function getAll() {
        return pokemonList;
    }

    function add(pokemonItem) {

        // Condition introduced to make sure that the next pokemon added is an object, that follows the template used in PokemonList

        if (typeof pokemonItem === 'object' && pokemonItem !== null &&
            'name' in pokemonItem &&
            'detailsUrl' in pokemonItem
        ) {
            pokemonList.push(pokemonItem);

        } else {
            console.error('Invalid PokemonItem. Make sure to enter a object with the specified properties');
        }

    }

    // logs details of pokemons in repository


    function addListItem(pokemon) {
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
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
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    // function that adds the eventListener to the button
    function addEventListenerToButton(button, pokemon) {
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,

    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemonItem) {
        pokemonRepository.addListItem(pokemonItem);
    });
});




















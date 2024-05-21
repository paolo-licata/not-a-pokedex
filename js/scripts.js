let pokemonRepository = (function () {
    // Repository of pokemons
    let repository = [
        { name: 'Bulbasaur', height: 0.7, type: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, type: 'fire' },
        { name: 'Squirtle', height: 0.5, type: 'water' },
        { name: 'Diglett', height: 0.2, type: 'ground' },
        { name: 'Pikachu', height: 0.4, type: 'electric' },
        { name: 'Ekan', height: 2, type: 'poison' },
        { name: 'Pidgey', height: 0.3, type: ['flying', 'normal'] },
        { name: 'Onix', height: 8.8, type: ['rock', 'ground'] },
        { name: 'Paras', height: 0.3, type: ['grass', 'bug'] },
        { name: 'Vulpix', height: 0.6, type: 'fire' },
        { name: 'Snorlax', height: 2.8, type: 'normal' },
        { name: 'Eevee', height: 0.3, type: 'normal' },
        { name: 'Wailmer', height: 2.6, type: 'water' }
    ]

    function getAll() {
        return repository;
    }

    function add(pokemonItem) {

        // Condition introduced to make sure that the next pokemon added is an object, that follows the template used in PokemonList

        if (typeof pokemonItem === 'object' && pokemonItem !== null &&
            'name' in pokemonItem &&
            'height' in pokemonItem &&
            'type' in pokemonItem
        ) {
            repository.push(pokemonItem);

        } else {
            console.error('Invalid PokemonItem. Make sure to enter a object with the specified properties');
        }

    }

    // logs details of pokemons in repository

    function showDetails(pokemon) {
        console.log(pokemon);
    }

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
        showDetails: showDetails
    };

})();

pokemonRepository.getAll().forEach(function (pokemonItem) {
    pokemonRepository.addListItem(pokemonItem);

});





















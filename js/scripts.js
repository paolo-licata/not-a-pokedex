let pokemonRepository = (function () {
    let pokemonList = [
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
        return pokemonList;
    }

    function add(pokemonItem) {
        pokemonList.add(pokemonItem);
    }

    return {
        getAll: getAll,
        add: add
    };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    console.log(pokemon.name + ' is ' + pokemon.height + ' meters tall.' + ' It is a type: ' + pokemon.type);
    document.write('<p>' + pokemon.name + ' is ' + pokemon.height + ' meters tall.' + ' It is a type: ' + pokemon.type + '</p>');
});












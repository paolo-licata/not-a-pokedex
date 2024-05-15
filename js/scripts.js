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

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height < 1) {

        document.write(pokemonList[i].name + ": " + " Height: " + pokemonList[i].height + " - This is a small pokemon" + "<br>" + "<br>");

    } else if (pokemonList[i].height >= 1 && pokemonList[i].height < 2.5) {
        document.write(pokemonList[i].name + " Height: " + pokemonList[i].height + " - This is an average-size pokemon" + "<br>" + "<br>");

    } else {
        document.write(pokemonList[i].name + " Height: " + pokemonList[i].height + " - That... is big!" + "<br>" + "<br>");
    }
}
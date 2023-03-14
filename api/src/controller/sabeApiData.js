require('dotenv').config();
const axios = require('axios');
const { Pokemon, Type, Pokemon_Type } = require('../db');
const { API_URL } = process.env;

async function savePokemonData() {
  try {
    let pokemonList = [];
    let nextUrl = API_URL;
    
    // Obtener todos los Pokemones disponibles
    while (nextUrl) {
      const response = await axios.get(nextUrl);
      pokemonList = [...pokemonList, ...response.data.results];
      nextUrl = response.data.next;
    }

    // Procesar cada pokemon
    for (let i = 0; i < pokemonList.length; i++) {
      const pokemon = pokemonList[i];
      const pokemonDataResponse = await axios.get(pokemon.url);
      const pokemonData = pokemonDataResponse.data;

      // Extraer información relevante
      const { name, sprites, height, stats, weight, types } = pokemonData;
      const image = sprites.other['official-artwork'].front_default;
      const life = stats[0].base_stat;
      const attack = stats[1].base_stat;
      const defense = stats[2].base_stat;
      const speed = stats[5].base_stat;

      // Crear el pokemon en la base de datos
      const newPokemon = await Pokemon.create({ name, image, life, attack, defense, speed, height, weight });

      // Agregar cada tipo a la base de datos y la relación a Pokemon
      for (let j = 0; j < types.length; j++) {
        const typeName = types[j].type.name;
        let pokemon_Type = await Type.findOne({ where: { name: typeName } });
        if (!pokemon_Type) {
          pokemon_Type = await Type.create({ name: typeName });
        }
        await Pokemon_Type.create({ pokemonId: newPokemon.id, typeId: pokemon_Type.id });
      }
    }
    return { message: 'Se guardaron los datos de los pokemons correctamente' };
  } catch (error) {
    console.error(error);
    return { error: 'No se pudo obtener la lista de pokemons' };
  }
}


module.exports = {
  savePokemonData,
};

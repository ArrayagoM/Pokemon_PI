require('dotenv').config();
const { Op } = require('sequelize');
const { Pokemon, Type, Pokemon_Type } = require('../db');
const axios = require('axios');
const { API_URL, IMG_URL } = process.env

const allPokemons = async () => {
    try {
        const dataPoke = await Pokemon.findAll({
            include: {
              model: Type,
              through: Pokemon_Type
            }
          });
        
          return dataPoke;
    } catch (error) {
        return {error: error.message};
    }
  };
  
const createPokemon = async (pokemonData) => {
    try {
      const newPokemon = await Pokemon.create({
        name: pokemonData.name,
        image: pokemonData.image,
        life: pokemonData.life,
        attack: pokemonData.attack,
        defense: pokemonData.defense,
        speed: pokemonData.speed,
        height: pokemonData.height,
        weight: pokemonData.weight,
        types: pokemonData.types
      });
      
  
     
      if (pokemonData.types) {
        const types = await Type.findAll({
          where: { name: pokemonData.types },
        });
  
        await newPokemon.setTypes(types);
      }
  
      return newPokemon;
    } catch (error) {
      return { error: error.message };
    }
  };

  const idPokemon = async (id) => {
    try {
      // Buscar el pokemon por su id en la base de datos
      const pokemon = await Pokemon.findByPk(id, {
        include: {
          model: Type,
          through: Pokemon_Type,
        },
      });
  
      if (pokemon) {
        // Si el pokemon existe en la base de datos, devolver sus datos
        return pokemon;
      } else {
        // Si el pokemon no existe en la base de datos, llamar a la API de PokéAPI
        const response = await axios.get(API_URL+id);
  
        // Guardar los datos del pokemon en la base de datos
        const { name, height, weight, stats, types } = response.data;
        const newPokemon = await Pokemon.create({
          name,
          image: IMG_URL+id+'.png',
          life: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          speed: stats[5].base_stat,
          height: `${height / 10} m`,
          weight: `${weight / 10} kg`,
        });
        await newPokemon.addTypes(
          await Promise.all(
            types.map(async (type) => {
              const [dbType] = await Type.findOrCreate({
                where: { name: type.type.name },
              });
              return dbType;
            })
          )
        );
  
        // Devolver los datos del pokemon recién creado
        return await Pokemon.findByPk(newPokemon.id, {
          include: {
            model: Type,
            through: Pokemon_Type,
          },
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };



module.exports = {
    allPokemons,
    createPokemon,
    idPokemon  
};
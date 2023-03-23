const { Pokemon, Favorite, Type, Favorite_Type, Pokemon_favorite } = require('../db');

const favorites = async () => {
  try {
    const fav = await Favorite.findAll({
      include: [
        {
          model: Pokemon,
          through: Pokemon_favorite,
          include: {
            model: Type,
            through: Favorite_Type
          }
        }
      ]
    });
    return fav  
  } catch (error) {
    return { error: error.message }
  }
}

const addFavorite = async (id) => {
  try {
    // Verificar si el ID es un número válido
    if (isNaN(id)) {
      return "El ID debe ser un número";
    }

    // Buscar si ya existe un Pokémon con el mismo ID en favoritos
    const favoritePokemon = await Favorite.findOne({
      include: {
        model: Pokemon,
        where: {
          id: id
        }
      }
    });

    if (favoritePokemon) {
      return "El Pokémon ya está en tus favoritos";
    }

    // Buscar el Pokémon por ID
    const pokemon = await Pokemon.findByPk(id);

    if (!pokemon) {
      return "No se encuentra el Pokémon con ese ID";
    }

    // Crear una nueva entrada en la tabla "Favorite"
    const newFavorite = await Favorite.create({id:id});
    await newFavorite.addPokemon(pokemon, { through: { pokemonId: pokemon.id } });

    return "El Pokémon se ha agregado a tus favoritos";
  } catch (error) {
    return { error: error.message };
  }
};



const deleteFavorite = async (id) => {
  try {
    const favorite = await Favorite.findByPk(id);
    if (!favorite) {
      return "No se encuentra el registro de favorito";
    } else {
      await favorite.destroy();
      return "El registro de favorito ha sido eliminado";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  favorites,
  deleteFavorite,
  addFavorite,
};





















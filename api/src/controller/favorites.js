const { Pokemon, Favorite } = require('../db');


const favorites = async () => {
  try {
    const favorite = await Favorite.findAll({
      include: {
        model: Pokemon
      }
    });
    return favorite;
  } catch (error) {
    return { error: error.message };
  }
};

const addFavorite = async (id) => {
  try {
    const pokemon = await Pokemon.findOne({
      where: {
        id: id
      }
    });

    if (!pokemon) {
      return "No se encuentra el ID del pokemon";
    } else {
      const newFavorite = await Favorite.create();
      await newFavorite.addPokemon(pokemon); // Aquí se usa addPokemon para agregar el pokemon al array de pokemones favoritos
      return "El pokemon se ha agregado a tus favoritos";
    }
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
  addFavorite,
  deleteFavorite
};

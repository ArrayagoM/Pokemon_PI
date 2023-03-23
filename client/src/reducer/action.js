import { 
  ALL_POKEMONS,
  DELETE_POKEMON, 
  SORT_POKEMON, 
  SORT_ATTACK_LEVEL, 
  DELETE_POKEMON_ERROR,  
  SORT_DEFENSE_LEVEL, 
  SORT_SPEED_LEVEL, 
  LEGENDARY_POKE,
  ADD_FAVORITE,
  DELETE_FAVORITE
 
 } from "./antion_type";
import axios from 'axios';

export const allPokedex = () => {
    return async (dispatch) => { // agrega dispatch como parámetro
        const pokemons =  (await axios('http://localhost:3001/pokemons')).data;
        dispatch({type: ALL_POKEMONS, payload: pokemons}); // despacha la acción al store de Redux
    }
}

export const order = () => {
    return { type: SORT_POKEMON };
}
export const orderAttack = () => {
    return { type: SORT_ATTACK_LEVEL };
}
export const orderDefense = () => {
    return { type: SORT_DEFENSE_LEVEL };
}
export const orderSpeed = () => {
    return { type: SORT_SPEED_LEVEL }
}


export const addFavorite = (id) => {
  return async (dispatch) => {
    try {
      const fav = await axios.post(`http://localhost:3001/fav/${id}`)
      dispatch ({type: ADD_FAVORITE, payload: fav})
    } catch (error) {
      return {error:error.message}
    }

  }
}

export const deleteFavorite = (id) =>  {
return async (dispatch) => {
try {
  const deletePoke = await axios.delete(`http://localhost:3001/fav/${id}`)
  dispatch ({ type: DELETE_FAVORITE, payload: deletePoke });
} catch (error) {
  return { error: error.message }
}
}
}


export const getFavorite = () => {
  return async (dispatch) => {
    try {
      const response = await axios('http://localhost:3001/fav');
      const favorites = response.data;

      // Itera a través de cada objeto de pokemon favorito en la respuesta de la API
      const pokemonList = favorites.flatMap(favorite => favorite.pokemons);

      return dispatch({ type: ADD_FAVORITE, payload: pokemonList });
    } catch (error) {
      return { error: error.message };
    }
  }
}



  export const IsLegendary = () => {
    return async (dispatch) =>{
        const legendary =  (await axios('http://localhost:3001/pokemons/leg/legendary')).data;
        dispatch({ type: LEGENDARY_POKE, payload: legendary });
    }
  }

  export const createPokemon = (pokemonData) => {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' }
    };
  
    return async (dispatch) => {
      try {
        await axios.post('http://localhost:3001/pokemons', pokemonData, requestOptions);
  
        // Si la solicitud POST es exitosa, podrías actualizar la lista de pokemones
        dispatch(allPokedex());
      } catch (error) {
        console.log(error);
      }
    }
  }

  export const deletePokemon = (id) => {
    return (dispatch) => {
      axios.delete(`http://localhost:3001/pokemons/${id}`)
        .then(() => {
          dispatch({
            type: DELETE_POKEMON,
            payload: id
          })
        })
        .catch(error => {
          dispatch({
            type: DELETE_POKEMON_ERROR,
            payload: error.message
          })
        })
    }
  }
  
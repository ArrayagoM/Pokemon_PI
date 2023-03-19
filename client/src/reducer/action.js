import { ALL_POKEMONS,DELETE_POKEMON, SORT_POKEMON, SORT_ATTACK_LEVEL, DELETE_POKEMON_ERROR,  SORT_DEFENSE_LEVEL, SORT_SPEED_LEVEL, LEGENDARY_POKE } from "./antion_type";
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
  
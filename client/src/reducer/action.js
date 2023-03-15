import { ALL_POKEMONS } from "./antion_type";
import axios from 'axios';

export const allPokedex = () => {
    return async (dispatch) => { // agrega dispatch como parámetro
        const pokemons =  (await axios('http://localhost:3001/pokemons')).data;
        dispatch({type: ALL_POKEMONS, payload: pokemons}); // despacha la acción al store de Redux
    }
}

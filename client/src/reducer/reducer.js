import { ALL_POKEMONS } from "./antion_type";


const intialstate = {
    allPokemons: [],
}



const reducer = (state = intialstate, action) => {
    switch(action.type){
        case ALL_POKEMONS: 
        return{
            ...state,
            allPokemons: action.payload
        }
        default:
            return {...state}
    }
}


export default reducer;
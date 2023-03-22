import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import SearchBar from '../SearchBar/SearchBar';

const AllPokemon = () => {
    const allPokemons =  useSelector(state => state.allPokemons);
    
    return(
        <div>
            <SearchBar/>
            <Cards pokemons={allPokemons}/>
        </div>
    )
}

export default AllPokemon;
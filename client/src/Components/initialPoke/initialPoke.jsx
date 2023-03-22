/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";

const Initialpoke = () => {
const initialPokemons =  useSelector(state => state.initialPokemons);
    
    
    return (
        <div>
            <SearchBar/>
            <Cards pokemons={initialPokemons}/>
        </div>
    )
}


export default Initialpoke;
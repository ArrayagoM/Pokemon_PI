import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import SearchBar from '../SearchBar/SearchBar';
import style from './allpokemon.module.css'
const AllPokemon = () => {
    const allPokemons =  useSelector(state => state.allPokemons);
    
    return(
        <div>
            <div className={style.relleno}>clas</div>
            <SearchBar/>
            <Cards pokemons={allPokemons}/>
        </div>
    )
}

export default AllPokemon;
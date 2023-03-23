import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";


const Favorite = () => {
const favorites =  useSelector(state => state.favorites);
console.log('favoritos',favorites);
    return (
        <div>
            <Cards pokemons={favorites}/>
        </div>
    )
}

export default Favorite;
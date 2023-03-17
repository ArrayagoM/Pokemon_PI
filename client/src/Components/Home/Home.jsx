import React from "react";
import Cards from "../Cards/Cards";
import { useDispatch } from 'react-redux';
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import PokeLegen from '../PokemonLegendary/PokemonLegen';
import { order, orderAttack, allPokedex, orderDefense, orderSpeed } from "../../reducer/action";
const Home = () => {
  const dispatch = useDispatch();

  return(
    <div>
      <NavBar/>
      <button onClick={() => dispatch(order())}>A a Z</button>
      <button onClick={() => dispatch(orderAttack())}>Attack Max & Min</button>
      <button onClick={() => dispatch(orderDefense())}>Defense Max & Min</button>
      <button onClick={() => dispatch(orderSpeed())} >Speed Max & Min</button>
      <button onClick={() => dispatch(allPokedex())}>All Pokemons</button>
      <SearchBar/>
       <PokeLegen/> 
      <h1>Welcome to Home</h1>
      <Cards/>
    </div>
  )
}

export default Home;

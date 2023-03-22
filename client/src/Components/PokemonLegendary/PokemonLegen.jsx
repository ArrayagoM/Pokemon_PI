import React from "react";
import { useSelector } from "react-redux";
import Cards from '../Cards/Cards';
import SearchBar from "../SearchBar/SearchBar";

const PokeLegen = () => {
  const allLegendary = useSelector(state => state.allLegendary);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
  <div>
    <h1>hola</h1>
    <SearchBar/>
  <Cards pokemons={allLegendary}/>
  </div>
  );
};

export default PokeLegen;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { allPokedex, IsLegendary } from "../../reducer/action";
import Card from "../card/Card";
import style from './Cards.module.css';

const Cards = () => {
  const dispatch = useDispatch();
  const allPokemon = useSelector(state => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 18;

  useEffect(()=> {
    dispatch(allPokedex());
    dispatch(IsLegendary());
  },[])
  
  // calculate number of pages
  const totalPages = Math.ceil(allPokemon.length / pokemonsPerPage);

  // get pokemons for current page
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={style.contenedor}>
      <div className={style.buttonsContainer}>
        <button className={`${style.arrowLeft} ${style.arrow}`} onClick={handlePrevPage}>⏮</button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button className={`${style.arrowRight} ${style.arrow}`} onClick={handleNextPage}>⏭</button>
      </div>
      <div className={style.element}>
        {currentPokemons.map((pokemon) => {
          const types = pokemon.types.map((type) => type.name).join(', ');
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              type={types}
            />
          );
        })}
      </div>
      <div className={style.buttonsContainer}>
        <button className={`${style.arrowLeft} ${style.arrow}`} onClick={handlePrevPage}>⏮</button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button className={`${style.arrowRight} ${style.arrow}`} onClick={handleNextPage}>⏭</button>
      </div>
    </div>
  );
}

export default Cards;

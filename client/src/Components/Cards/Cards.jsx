import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Card from "../card/Card";
import style from "./Cards.module.css";
import { order, orderAttack, allPokedex, orderDefense, orderSpeed } from '../../reducer/action';

const Cards = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 18;
  const dispatch = useDispatch();
  // calculate number of pages
  const totalPages = Math.ceil(pokemons?.length / pokemonsPerPage);

  // get pokemons for current page
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons?.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

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
       <div className={style.menu}>
                <button onClick={() => dispatch(order())}>A a Z</button>
                <button onClick={() => dispatch(orderAttack())}>Attack Max & Min</button>
                <button onClick={() => dispatch(orderDefense())}>Defense Max & Min</button>
                <button onClick={() => dispatch(orderSpeed())}>Speed Max & Min</button>
                <button onClick={() => dispatch(allPokedex())}>All Pokemons</button>
                </div>
      <div className={style.buttonsContainer}>
        <button
          className={`${style.arrowLeft} ${style.arrow}`}
          onClick={handlePrevPage}
        >
          ⏮
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          className={`${style.arrowRight} ${style.arrow}`}
          onClick={handleNextPage}
        >
          ⏭
        </button>
      </div>
      <div className={style.element}>
      {currentPokemons && currentPokemons.map((pokemon) => {
          const types = pokemon.types.map((type) => type.name).join(", ");
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
        <button
          className={`${style.arrowLeft} ${style.arrow}`}
          onClick={handlePrevPage}
        >
          ⏮
        </button>
        <span>{`${currentPage} of ${totalPages}`}</span>
        <button
          className={`${style.arrowRight} ${style.arrow}`}
          onClick={handleNextPage}
        >
          ⏭
        </button>
      </div>
    </div>
  );
};

export default Cards;

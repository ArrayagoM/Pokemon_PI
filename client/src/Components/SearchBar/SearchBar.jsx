import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import style from './SearchBar.module.css';
import { Link } from "react-router-dom";

const SearchBar = () => {
  const allPokemons = useSelector((state) => state.allPokemons);
  const [pokemon, setPokemon] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const handleSearch = (event) => {
    const name = event.target.value.toLowerCase();
    setPokemon(name);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const filtered = allPokemons.filter((poke) =>
        poke.name.toLowerCase().includes(pokemon) || poke.id === parseInt(pokemon)
      );
      setFilteredPokemons(filtered);
    }
  }

  useEffect(() => {
    if (pokemon === '') {
      setFilteredPokemons([]);
    } else {
      const filtered = allPokemons.filter((poke) =>
        poke.name.toLowerCase().includes(pokemon) || poke.id === parseInt(pokemon)
      );
      setFilteredPokemons(filtered);
    }
  }, [pokemon, allPokemons]);

  return (
    <div>
      <input type="text" value={pokemon} onChange={handleSearch} onKeyDown={handleKeyPress} placeholder='Search Pokémon...' />
      {filteredPokemons.length > 0 ? (
        filteredPokemons.map((poke) => (
            <Link key={poke.id} to={`/detail/${poke.id}`}><div className={style.conteiner}>
            <div className={style.element}>
            <img src={poke.image} alt={poke.name} className={style.image} />
            <h3 className={style.name} >{poke.name}</h3>
            <h3 className={style.id}>#{poke.id.toString().padStart(4,"0")}</h3>
            </div>
          </div></Link>
          
        ))
      ) : (
        <p>No se encontró ningún Pokémon.</p>
      )}
    </div>
  );
};

export default SearchBar;

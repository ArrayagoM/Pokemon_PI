import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";

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
            <Card key={poke.id} {...poke}/>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default SearchBar;

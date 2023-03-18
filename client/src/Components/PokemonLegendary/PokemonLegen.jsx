import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTypeClass } from "./utils";
import style from './PokemonLegen.module.css';

const PokeLegen = () => {
  const allLegendary = useSelector(state => state.allLegendary);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const type = [...new Set(allLegendary.map(pokemon => pokemon.types).flat())];

  
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={style.contenedor}>
      {allLegendary.map((e) => {
       const typeClass = type ? getTypeClass(e.types.map((type)=> type.name).join(',')) : '';
       return (
           <Link key={e.id} to={`/detail/${e.id}`}>
               <div className={`${style.element} ${style[typeClass]}`}>
                   <img src={e.image} alt={e.name} className={style.image} />
               </div>
           </Link>
       );
      })}
    </div>
  );
};

export default PokeLegen;

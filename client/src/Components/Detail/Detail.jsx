import React, { useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePokemon } from '../../reducer/action';
import style from './Detail.module.css'
import { Link } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ pokemon, setPokeon] = useState({});
    const typeColors = {
      normal: '#A8A77A',
      fire: '#EE8130',
      water: '#6390F0',
      electric: '#F7D02C',
      grass: '#7AC74C',
      ice: '#96D9D6',
      fighting: '#C22E28',
      poison: '#A33EA1',
      ground: '#E2BF65',
      flying: '#A1BBEC',
      psychic: '#F95587',
      bug: '#A6B91A',
      rock: '#B6A136',
      ghost: '#735797',
      dragon: '#6F35FC',
      dark: '#705746',
      steel: '#B7B7CE',
      fairy: '#D685AD',
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este Pokémon?')) {
          dispatch(deletePokemon(id));
          navigate('/home');
        }
      }
    

    useEffect(()=> {
        fetch(`http://localhost:3001/pokemons/${id}`)
        .then((res) => res.json())
        .then((poke) => {
            if(poke.name) {
                setPokeon(poke);
            }else{
                alert("No hay pokemones con ese ID");
            }
        })
        .catch((err)=> {
            alert("NO ahi pokemones con ese ID");
        });
        return setPokeon({});
        
    },[id]);

    return(
        <div>
            <div className={style.container}>
            <button className={style.Poke_button}>
                <Link to='/home' className={style.Deatail_link}>X</Link>
            </button>
                <h1 className={style.name}>{pokemon?.name}</h1>
                <h3 className={style.id}>#{id.toString().padStart(3, "0")}</h3>
                <div className={style.cont_img} style={{backgroundColor: pokemon?.types && typeColors[pokemon.types[0]?.name]}}>
                {pokemon && pokemon.types && pokemon.types.map((type, index) => (
                <span key={index} className={style.type_badge} style={{backgroundColor: typeColors[type.name]}}>{type.name}</span>
                 ))}
                <img className={style.img} src={pokemon?.image} alt={pokemon?.name} />
                </div>

                <div className={style.detail}>
                    <h3 className={style.life}>Life: </h3>
                    <progress className={style.progress} value={pokemon?.life} max="200"></progress>
                    
                    <h3 className={style.attack}>Attack: </h3>
                    <progress className={style.progress} value={pokemon?.attack} max="200"></progress>
                    <h3 className={style.defense}>Defense: </h3>
                    <progress className={style.progress} value={pokemon?.defense} max="200"></progress>
                    <h3 className={style.speed}>Speed: </h3>
                    <progress className={style.progress} value={pokemon?.speed} max="200"></progress>
                    <h3 className={style.height}>Height: <span>{(pokemon?.height/10).toFixed(1)}</span>m</h3>
                    <h3 className={style.weight}>Weight: <span>{(pokemon?.weight/10).toFixed(1)}</span> kg</h3>
                    <button onClick={()=> handleDelete(pokemon.id)}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;

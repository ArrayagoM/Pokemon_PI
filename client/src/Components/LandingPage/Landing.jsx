import React from "react";
import style from './Landing.module.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div className={style.contenedor}>
            <div className={style.element}>
                <h1 className={style.welcome}>Welcome to app Pokémon</h1>
                <button className={style.toHome}><Link to={'/home'}>Start</Link></button>
            </div>
            <h4 className={style.henry}>Proyecto individual - Soy Henry</h4>
            <h4 className={style.miname}>Juan Martin</h4>
        </div>
    )
}


export default Landing;
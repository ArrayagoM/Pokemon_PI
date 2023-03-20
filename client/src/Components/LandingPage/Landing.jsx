import React from "react";
import style from './Landing.module.css';
import { Link } from "react-router-dom";
import  pikachu  from "../../img/pokemon.png"

const Landing = () => {
    return(
     <div className={style.back}>
           <div className={style.all_container}>
        <div className={style.top_container}>
            <div className={style.top_element}>
                <img src={pikachu} className={style.img} alt="ash and pikachu"/>
                <h1 className={style.welcome}>¡Welcome to app Pokémon!...</h1>
                <p className={style.perrafo}>This application is developed for fans of the beloved Pokémon saga, you can find detailed information on all different types of Pokémon.</p>
            </div>
        </div>
        <div className={style.botton_container}>
        <div className={style.botton_element}>
            <div className={style.left}>
                <h3 className={style.history}>some history!!!</h3>
                <p className={style.p_history} >Pokémon (ポケモン Pokemon?) is a media franchise that originally began as an RPG video game, but due to its popularity it has managed to expand to other entertainment media such as television series, movies, card games, clothing, among others, becoming a brand that is recognized in the world market. Video game sales until December 1, 2006 had reached a number of 340 million copies (including the sale of the Pikachu version of the Nintendo 64 console),1 managing to occupy second place in the best-selling video game sagas of Nintendo.2 The franchise celebrated its tenth anniversary on February 27, 2006.34</p>
            </div>
            <div className={style.right}>
                <button className={style.lest}><a  href="/home"><span>lest goo!!!...</span></a></button>
            
            </div>
        </div>
        </div>
        </div>
     </div>
    )
}


export default Landing;
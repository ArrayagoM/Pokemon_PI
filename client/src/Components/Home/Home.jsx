import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import initial from '../../img/initialPokemons.jpg';
import legendari from '../../img/legendaryP.png';
import allpoke from '../../img/Allpoke.png';

import styles from './Home.module.css';

const Home = () => {
  

  return(
    <div className={styles.container}>
      <NavBar className={styles.Nav}/>
      <div className={styles.detail}></div>
     <div className={styles.container}>
     <div className={styles.element}>
     <div className={styles.initial}>
        <h2>primera generacion</h2>
        <Link to={'/initialPoke'}><img src={initial} alt="" className={styles.img_init} /></Link>
        <div className={styles.par_cont}>
        <p className={styles.par}>La primera generación de Pokémon, también conocida como Generación I, fue introducida en 1996 con el lanzamiento de los videojuegos Pokémon Rojo y Verde en Japón. Esta generación incluyó un total de 151 Pokémon, cada uno con su propio diseño, habilidades y personalidad única. Entre los Pokémon más icónicos de esta generación se encuentran Pikachu, Charizard, Mewtwo y Bulbasaur. Además de los juegos, la primera generación también se expandió a través del anime, el manga y una gran cantidad de merchandising. La Generación I es considerada por muchos fans como la más nostálgica y emblemática, ya que sentó las bases para lo que se convertiría en una de las franquicias más populares y exitosas del mundo.</p>
          </div></div>
      <div className={styles.legen}>
        <h2>Legendarios</h2>
        <Link to={'/legendarys'}><img src={legendari} alt=""  className={styles.img_legen}/></Link>
        <div className={styles.par_legen}>
          <p>Los Pokémon Legendarios son criaturas únicas y poderosas que habitan en el mundo de Pokémon. A diferencia de los Pokémon normales, solo hay un ejemplar de cada Pokémon Legendario en todo el mundo, lo que los hace extremadamente raros y codiciados. Estos Pokémon tienen habilidades y características únicas que los hacen muy poderosos en batalla, y a menudo están vinculados con mitos y leyendas en el mundo de Pokémon. Además de su poder en la batalla, los Pokémon Legendarios también tienen objetivos importantes en el mundo de Pokémon, como mantener el equilibrio natural y proteger a la humanidad de amenazas peligrosas. Muchos entrenadores de Pokémon sueñan con atrapar a un Pokémon Legendario, pero hacerlo puede ser extremadamente difícil y requiere mucho esfuerzo y habilidad. Algunos de los Pokémon Legendarios más famosos incluyen a Mewtwo, Lugia, Ho-Oh y Rayquaza, y cada uno tiene su propia historia y papel importante en el mundo de Pokémon.</p>
        </div>
        </div>
      <div className={styles.allpoke}>
        <h2>All Pokémon</h2>
        <Link to={'/allPokemons'}><img src={allpoke} alt="" className={styles.allpoke} /></Link>
        <div className={styles.par_allpoke}>
          <p className={styles.par_all}>Los Pokémon son criaturas ficticias que habitan en el universo de la franquicia de Pokémon. Hay más de 800 especies diferentes de Pokémon, cada una con sus propias características y habilidades únicas. Los Pokémon son clasificados en diferentes tipos según sus atributos, como fuego, agua, planta, eléctrico, entre otros. Los entrenadores de Pokémon capturan, entrenan y usan a los Pokémon en batallas entre ellos. Los Pokémon pueden evolucionar a formas más fuertes y avanzadas a medida que suben de nivel o cumplen ciertos requisitos. Los Pokémon son un elemento fundamental en la cultura popular, incluyendo videojuegos, programas de televisión, películas, juegos de cartas coleccionables y mucho más.</p>
        </div>
        </div>
     </div>
     </div>
      
    
      
     
     
    </div>
  )
}

export default Home;

import Cards from "../Cards/Cards";

import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import PokeLegen from '../PokemonLegendary/PokemonLegen';

import styles from './Home.module.css';

const Home = () => {
  

  return(
    <div className={styles.container}>
      <NavBar/>
  <Cards/>
     
     
    </div>
  )
}

export default Home;

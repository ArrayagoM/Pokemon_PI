import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { order, orderAttack, allPokedex, orderDefense, orderSpeed } from '../../reducer/action';
import pokemonLogo from '../../img/pokemon.png';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
  const dispatch = useDispatch();


    return (
        <nav className={styles.navbar}>
            <img src={pokemonLogo} alt="Pokemon logo" className={styles.logo} />
            <div>
                <button className={styles.menu_btn}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className={styles.menu}>
                <span onClick={() => dispatch(order())}>A a Z</span>
                <span onClick={() => dispatch(orderAttack())}>Attack Max & Min</span>
                <span onClick={() => dispatch(orderDefense())}>Defense Max & Min</span>
                <span onClick={() => dispatch(orderSpeed())}>Speed Max & Min</span>
                <span onClick={() => dispatch(allPokedex())}>All Pokemons</span>
                </div>
            </div>
            <span className={styles.sign}><Link to={'/'}>Sign off</Link></span>
            <span className={styles.about}><Link to={'/about'}>About</Link></span>
            <span className={styles.create}><Link to={'/create'}>Create</Link></span>
            <SearchBar/>
        </nav>
    );
};

export default NavBar;

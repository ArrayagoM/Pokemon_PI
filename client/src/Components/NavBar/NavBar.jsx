import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pokemonLogo from '../../img/pikachuImg.png';
import styles from './NavBar.module.css';

const NavBar = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
    setIsMenuOpen(!isMenuOpen)
  };
  

    return (
        <nav className={styles.navbar}>
            <img src={pokemonLogo} alt="Pokemon logo" className={styles.logo} />
            <div>
                <div className={styles.container_btn}>
                <button className={`${styles.menu_btn} ${isMenuOpen ? styles.open: ''}`} onClick={handleMenuClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                </div>
                
               
            </div>
            <div className={styles.additionalLinks}>
            <Link to={'/'} className={styles.singLink} >Sign off  </Link>
            <Link to={'/about'} className={styles.aboutLink} >  About  </Link>
            <Link to={'/create'} className={styles.createLink} > Create </Link>
            <Link to={'/fav'} className={styles.favorites}> Favorites </Link>
            </div>
        </nav>
    );
};

export default NavBar;

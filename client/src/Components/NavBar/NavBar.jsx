import React, {useState, useRef, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { order, orderAttack, allPokedex, orderDefense, orderSpeed } from '../../reducer/action';
import pokemonLogo from '../../img/pokemon.png';
import { slide as Menu } from 'react-burger-menu';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [hambur,  setHambur] = useState(false);
    const dispatch = useDispatch();
    const buttonRef = useRef(null);

    const handleClick = () => {
        setHambur(true);
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setHambur(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <nav className={styles.navbar}>
            <img src={pokemonLogo} alt="Pokemon logo" className={styles.logo} />
            <div ref={buttonRef}>
                <button onClick={handleClick} value={hambur}>
                    ☰
                </button>
                {hambur ? (
                    <Menu right>
                        <span onClick={() => dispatch(order())}>A a Z</span>
                        <span onClick={() => dispatch(orderAttack())}>Attack Max & Min</span>
                        <span onClick={() => dispatch(orderDefense())}>Defense Max & Min</span>
                        <span onClick={() => dispatch(orderSpeed())}>Speed Max & Min</span>
                        <span onClick={() => dispatch(allPokedex())}>All Pokemons</span>
                    </Menu>
                ) : null}
            </div>
            <span className={styles.sign}><Link to={'/'}>Sign off</Link></span>
            <span className={styles.about}><Link to={'/about'}>About</Link></span>
            <span className={styles.create}><Link to={'/create'}>Create</Link></span>
        </nav>
    );
};

export default NavBar;

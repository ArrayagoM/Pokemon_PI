import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';

const NavBar = () => {
    
    return(
        <div>
            <span className={style.sing}><Link to={'/'}>Sign off</Link></span>
            <span className={style.about}><Link to={'/about'}>About</Link></span>
            <span className={style.create}><Link to={'/create'}>Create</Link></span>
        </div>
    )
}

export default NavBar;

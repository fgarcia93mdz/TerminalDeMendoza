import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav >
            <h3> <Link to='/' exact='true'> NAV BAR DE PROYECTO </Link> </h3>

            <ul>
                <li> <Link to='/tablero-arribos' > TABLERO ARRIBOS </Link> </li>
                <li> <Link to='/tablero-partidas' > TABLERO PARTIDAS </Link> </li>
                <li> <Link to='/login' > LOGIN </Link> </li>
            </ul>
        </nav>
    );
}

export default NavBar;

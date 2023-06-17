/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../../styles/main.css";
import logo from '../../assets/logo.webp';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1><img src={logo} alt='logo sportsee' /></h1>
            <nav>
                <NavLink exact to="/">Accueil</NavLink>
                <NavLink exact to='#'>Profil</NavLink>
                <NavLink exact to='#'>Réglages</NavLink>
                <NavLink exact to='#'>Communauté</NavLink>
            </nav>
        </header>
    )
}

export default Header;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../../styles/main.css";
import logo from '../../assets/logo.webp';

function Header() {
    return (
        <header>
            <img src={logo} alt='logo sportsee' />
            <nav>
                <a href='#'>Accueil</a>
                <a href='#'>Profil</a>
                <a href='#'>Réglages</a>
                <a href='#'>Communauté</a>
            </nav>
        </header>
    )
}

export default Header;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "../../styles/main.css";
import yoga from '../../assets/yoga.webp';
import swim from '../../assets/swim.webp';
import bike from '../../assets/bike.webp';
import muscu from '../../assets/muscu.webp';

function VerticalNav() {
    return (
        <div className='vertical-nav'>
            <div className='icons-vertical-nav'>
                <a href='#'><img src={yoga} alt='yoga' /></a>
                <a href='#'><img src={swim} alt='swim' /></a>
                <a href='#'><img src={bike} alt='bike' /></a>
                <a href='#'><img src={muscu} alt='muscu' /></a>
            </div>
            <p className='copiright'>Copiright, SportSee 2020</p>
        </div>
    )
}

export default VerticalNav;
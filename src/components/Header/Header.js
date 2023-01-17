import React from "react";
import {helm} from "../../utils/constants";

function Header () {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">HOME</li>
                    <li className="header__nav-item">ABOUT</li>
                    <li className="header__nav-item">TEAM</li>
                    <li className="header__nav-item">BOOKING</li>
                    <li className="header__nav-item">MENU</li>
                    <li className="header__nav-item">GALERIE</li>
                    <li className="header__nav-item">EVENTS</li>
                    <li className="header__nav-item">CONTACT</li>
                </ul>
            </nav>
            <img className="header__img" alt="helm" src={helm}/>
            <p className="header__time">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
            <div className="header__block-links">
                <ul className="header__links">
                    <li className="header__link"></li>
                    <li className="header__link"></li>
                    <li className="header__link"></li>
                </ul>
            </div>
            <div className="header__block-title">
                <p className="header__text">RESTAURANT</p>
                <h1 className="header__title">hungry people</h1>
                <div className="header__rectangle"></div>
                <div className="header__block-buttons">
                    <button onClick="header__button_yellow">BOOK TABLE</button>
                    <button onClick="header__button">EXPLORE</button>
                </div>
            </div>
        </header>
    )
}

export default Header;
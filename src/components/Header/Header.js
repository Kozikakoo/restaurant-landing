import React from 'react';

import {helm, facebookLogo, instaLogo, twitterLogo} from '../../utils/constants';

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="#top">HOME</a></li>
          <li className="header__nav-item"><a href="#about-us">ABOUT</a></li>
          <li className="header__nav-item"><a href="#our-team">TEAM</a></li>
          <li className="header__nav-item"><a href="#booking">BOOKING</a></li>
          <li className="header__nav-item"><a href="#menu">MENU</a></li>
          <li className="header__nav-item"><a href="#">GALERIE</a></li>
          <li className="header__nav-item"><a href="#private-events">EVENTS</a></li>
          <li className="header__nav-item"><a href="#contact">CONTACT</a></li>
        </ul>
      </nav>
      <img className="header__img" alt="helm" src={helm}/>

      <div className="header__block-title">
        <p className="header__time">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</p>
        <p className="header__text">RESTAURANT</p>
        <h1 className="header__title">hungry people</h1>
        <div className="header__rectangle"></div>
        <div className="header__block-buttons">
          <a className="header__button header__button_yellow" href="#booking">BOOK TABLE</a>
          <a className="header__button">EXPLORE</a>
        </div>
        <ul className="header__links">
          <li className="header__link"><a href="#"><img className="header__logo" src={facebookLogo}
            alt="facebook"/></a></li>
          <li className="header__link"><a href="#"><img className="header__logo" src={twitterLogo} alt="twitter"/></a>
          </li>
          <li className="header__link"><a href="#"><img className="header__logo" src={instaLogo} alt="instagram"/></a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
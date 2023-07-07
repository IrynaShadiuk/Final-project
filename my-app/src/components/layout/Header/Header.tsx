import React from 'react';
import "./header.scss"
import logo from '../../img/logo.png';



const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '70.5882px' }}/>
        </div>
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="/">Home</a>
            </li>
            <li className="menu__item">
              <a href="/order">Order</a>
            </li>
            <li className="menu__item">
              <a href="/assortment">Assortment</a>
            </li>
            <li className="menu__item">
              <a href="/about">About us</a>
            </li>
            <li className="menu__item">
              <a href="/admin">Admin</a>
            </li>
          </ul>
        </nav>
        <div className="sign-in">
          <button className="sign-in__button">Sign in</button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__background">
          <div className="header__text">
            Handmade Leather
            Accessories 
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

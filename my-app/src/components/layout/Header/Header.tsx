import React from 'react';
import "./header.scss"
import logo from '../../img/logo.png';
import { Link, useLocation} from 'react-router-dom'
import { useRoute } from '../../shared_/hooks/useRoute';
import { useState } from 'react';




const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="logo">
        <img src={logo} alt="Logo" style={{ width: '70.5882px' }}/>
        </div>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu__hamburger" onClick={toggleMenu}>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
            <span className="hamburger__line"></span>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
            <Link className={useRoute('/') ? 'active' : ''} to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/order') ? 'active' : ''} to="/order">
                Order
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/assortment') ? 'active' : ''} to="/assortment">
                Assortment
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/about') ? 'active' : ''} to="/about">
                About us
              </Link>
            </li>
            <li className="menu__item">
            <Link className={useRoute('/admin') ? 'active' : ''} to="/admin">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className="sign-in"> */}
          // {/* <ActionButton className="sign-in"  buttonText='Sign-in' />
          <button className="sign-in__button">Sign in</button>
        </div> */}
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

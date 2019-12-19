import React from "react";
import { Link } from "gatsby";

import Logo from '../Logo/logo';
import Burger from './burger'

const Header = () => (
  <header className="header">
    <div className="header__logo header__logo--sp"><Link to="/"><Logo /></Link></div>
    <Burger />
    <Link to="/about" className="header__subnav">ABOUT</Link>
    <nav className="header__gnav">
      <ul className="header__gnavList">
        <li className="header__gnavItem"><a href="/web">WEB</a></li>
        <li className="header__gnavItem"><a href="/english">ENGLISH</a></li>
        <div className="header__logo"><Link to="/"><Logo /></Link></div>
        <li className="header__gnavItem"><a href="/life">LIFE</a></li>
        <li className="header__gnavItem"><a href="/tv-movie">TV/MOVIE</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;
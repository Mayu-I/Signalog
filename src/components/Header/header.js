import React from "react";
import { Link } from "gatsby";

import Logo from '../Logo/logo'

const Header = () => (
  <header className="header">
    <Link to="/about" className="header__subnav">ABOUT</Link>
    <nav className="header__gnav">
      <ul className="header__gnavList">
        <li className="header__gnavItem"><a href="">WEB</a></li>
        <li className="header__gnavItem"><a href="">TV/MOVIE</a></li>
        <div className="header__logo"><Link to="/"><Logo/></Link></div>
        <li className="header__gnavItem"><a href="">LIFE</a></li>
        <li className="header__gnavItem"><a href="">ENGLISH</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;
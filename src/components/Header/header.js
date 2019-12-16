import React from "react";
import { Link } from "gatsby";

import Logo from '../Logo/logo'

const Header = () => (
  <header className="header">
    <Link to="/about" className="header__subnav">ABOUT</Link>
    <nav className="header__gnav">
      <ul className="header__gnavList">
        <li className="header__gnavItem"><a href="" target="_blank">WEB</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">TV/MOVIE</a></li>
        <div className="header__logo"><Link to="/"><Logo/></Link></div>
        <li className="header__gnavItem"><a href="" target="_blank">LIFE</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">ENGLISH</a></li>
      </ul>
    </nav>
  </header>
)

export default Header;
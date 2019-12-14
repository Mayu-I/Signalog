import React from "react";
import { Link } from "gatsby";

import logo from '../../../content/assets/header_logo.svg'

const Header = () => (
  <header className="header">
    <a href="" className="header__subnav">ABOUT</a>
    <nav className="header__gnav">
      <ul className="header__gnavList">
        <li className="header__gnavItem"><a href="" target="_blank">WEB</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">TV/MOVIE</a></li>
        <div className="header__logo"><Link to="/"><img src={logo} alt="SIGNALOG"></img></Link></div>
        <li className="header__gnavItem"><a href="" target="_blank">LIFE</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">ENGLISH</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
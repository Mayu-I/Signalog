import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";

import logo from '../../../content/assets/header_logo.jpg'

const Header = () => (
  <header className="header">
    <Link to="/" className="header__logo"><img src={logo} alt="SIGNALOG"></img></Link>
    <a href="" className="header__subnav">ABOUT</a>
    <nav className="header__gnav">
      <ul className="header__gnavList">
        <li className="header__gnavItem"><a href="" target="_blank">WEB</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">TV/MOVIE</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">LIFE</a></li>
        <li className="header__gnavItem"><a href="" target="_blank">ENGLISH</a></li>
      </ul>
    </nav>
  </header>
)

export default Header

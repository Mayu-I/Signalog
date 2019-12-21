import React from "react";
// import { Link } from "gatsby";

import linkedin from '../../../content/assets/icon_linkedin.png'
import twitter from '../../../content/assets/icon_twitter.png'
import instagram from '../../../content/assets/icon_instagram.png'
import git from '../../../content/assets/icon_git.png'


const Footer = () => (
    <footer className="footer">
        <div className="footer__wrapper">
            <nav className="footer__nav">
                <ul className="footer__navList">
                    <li className="footer__navItem"><a href="/about">ABOUT</a></li>
                    <li className="footer__navItem--forrow"><a href="https://www.linkedin.com/in/mayu-imanaka-19a306194/" target="_blank" rel="noopener noreferrer"><img
                        src={linkedin} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://www.instagram.com/mayu_cuuuu/"
                        target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://twitter.com/cukioo_mayu" target="_blank" rel="noopener noreferrer"><img src={twitter}
                        alt="" /></a>
                    </li>
                    <li className="footer__navItem--forrow"><a href="https://github.com/Mayu-I" target="_blank" rel="noopener noreferrer"><img src={git}
                        alt="" /></a></li>
                </ul>
            </nav>
            <div className="footer__copy">
                <p>Copyright &copy; 2019 signalog All Rights Reserved.</p>
            </div>
        </div>
    </footer>
)

export default Footer
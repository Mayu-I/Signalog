import React from "react";
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu className="header__burger" width={'40%'}>
                <li className="header__gnavItem menu-item"><a href="/">HOME</a></li>
                <li className="header__gnavItem menu-item"><a href="/web">WEB</a></li>
                <li className="header__gnavItem menu-item"><a href="/english">ENGLISH</a></li>
                <li className="header__gnavItem menu-item"><a href="/life">LIFE</a></li>
                <li className="header__gnavItem menu-item"><a href="/tv-movie">TV/MOVIE</a></li>
                <li className="header__gnavItem menu-item"><a href="/about">ABOUT</a></li>
            </Menu>
        );
    }
}


export default Burger;
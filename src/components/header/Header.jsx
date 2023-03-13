/* library import */
import {useState} from "react"

/* file import */
import Logo from "../../image/logo.svg"

/* SCSS import */

import "./Header.scss"

const Header = () => {


    return ( 
        <header id="header">
            <img src={Logo} alt="FreeToGame logo" />
        </header>
    );
}

export default Header;
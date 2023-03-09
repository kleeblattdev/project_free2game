/* library import */
import {useState} from "react"

/* file import */
import Logo from "../../image/logo.svg"

/* SCSS import */

import "./Header.scss"

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("")
    
    function searchGame(event){
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }

    return ( 
        <header id="header">
            <img src={Logo} alt="FreeToGame logo" />
            <input type="search" name="search" id="search" onChange={searchGame}/>
        </header>
    );
}

export default Header;
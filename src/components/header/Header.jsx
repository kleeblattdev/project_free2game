/* library import */
import { Link } from "react-router-dom"

/* file import */
import Logo from "../../image/logo.svg"

/* SCSS import */
import "./Header.scss"

/* component import */
import GamesList from "../gamesList/GamesList"

const Header = () => {

    return ( 
        <header>
            <Link to="/"><img src={Logo} alt="FreeToGame logo" /></Link>
            <GamesList/>
        </header>
    );
}

export default Header;
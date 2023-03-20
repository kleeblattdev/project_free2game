/* SCSS import */
import "./Header.scss"

/* component import */
import GamesList from "../gamesList/GamesList"

const Header = () => {

    return ( 
        <header>
            <GamesList/>
        </header>
    );
}

export default Header;
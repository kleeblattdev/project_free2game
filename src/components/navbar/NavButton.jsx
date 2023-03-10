/* library import */
import { Link } from "react-router-dom"
import { useState } from "react"

/* import SCSS */
import "./NavButton.scss";

const NavGameButton = ({link, icon, text}) => {
    const [isActive, setActive] = useState(false)
    const [homeButton,setHomeButton] = useState(false)
    const [gamesButton,setGamesButton] = useState(false)
    const [recentlyButton,setRecentlyButton] = useState(false)

    const handleClick = () => {
        setActive(!isActive)
    }

    return ( 
        <>
        <Link to={link} className={homeButton? "navButton redBg":"navButton"} id={icon} onClick={() => setHomeButton(true) && setGamesButton(false) && setRecentlyButton(false) }><p>{text}
            </p></Link>
        <Link to={link} className={gamesButton? "navButton redBg":"navButton"} id={icon} onClick={() => setHomeButton(false) && setGamesButton(true) && setRecentlyButton(false) }><p>{text}
            </p></Link>
        <Link to={link} className={recentlyButton? "navButton redBg":"navButton"} id={icon} onClick={() => setHomeButton(false) && setGamesButton(false) && setRecentlyButton(true) }><p>{text}
            </p></Link>
        </>
    );
}

export default NavGameButton;

import { Link } from "react-router-dom"
import { useState } from "react"

/* import SCSS */
import "./NavBarGames.scss"

const NavButtonGame = ({link, icon, text,classname}) => {
    const [isActive, setActive] = useState(false)
    const [homeButton,setHomeButton] = useState(false)
    const [gamesButton,setGamesButton] = useState(false)
    const [recentlyButton,setRecentlyButton] = useState(false)

    const handleClick = () => {
        setActive(!isActive)
    }

    return ( 
        <>
        <Link to={link} className={classname} id={icon} onClick={() => setHomeButton(true) && setGamesButton(false) && setRecentlyButton(false) }><p>{text}
            </p></Link>
        </>
    );
}

export default NavButtonGame;

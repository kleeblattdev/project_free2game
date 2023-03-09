/* library import */
import { Link } from "react-router-dom"
import { useState } from "react"

/* import SCSS */
import "./NavButton.scss";

const NavGameButton = ({link, icon, text}) => {
    const [isActive, setActive] = useState(false)

    const handleClick = () => {
        setActive(!isActive)
    }

    return ( 
        <>
        <Link to={link} className={isActive? "navButton redBg":"navButton"} id={icon} onClick={handleClick}><p>{text}
            </p></Link>
        </>
    );
}

export default NavGameButton;

/* library import */
import { NavLink } from "react-router-dom"
import { useState } from "react"

/* import SCSS */
import "./NavButton.scss";

const NavButton = ({link, icon, text,classname}) => {
    const [isActive, setActive] = useState(false)


    

    const handleClick = () => {
        setActive(!isActive)
    }

    return ( 
        <>
        <NavLink to={link} className={isActive? "navButton redBg":"navButton"} id={icon}><p>{text}</p></NavLink>

        </>
    );
}

export default NavButton;

/* library import */
import { Link } from "react-router-dom"

/* import SCSS */
import "./NavButton.scss";


const NavGameButton = ({link, icon, text}) => {
    function handleClick(){
        /* document.querySelector(".navButton").classList.add("redBg"); */
    }

    return ( 
        <>
        <Link to={link} className="navButton" id={icon} onClick={handleClick}><p>{text}
            </p></Link>
        </>
    );
}

export default NavGameButton;

/* library import */
import {useState} from "react"

/* SCSS import */
import "./Navbar.scss"

const Navbar = () => {
    const [navOpen, setNavOpen]=useState(true)

    const handleToggle=(prev)=>{
        setNavOpen(prev => !prev)
    }

    return ( 
        <nav className={navOpen? "navbar":"showNavbar"}>
            <div className={navOpen? "burger":"burgerClose"} onClick={handleToggle}></div>
            <NavLink to="/">
                <div id="home"></div>
                <p className={navOpen? "hideText":"showText"}>Home</p>
            </NavLink>
            <NavLink to="/allgames">
                <div id="games"></div>
                <p className={navOpen? "hideText":"showText"}>All Games</p>
            </NavLink>
            <NavLink to="/recentlyadded">
                <div id="recent"></div>
                <p className={navOpen? "hideText":"showText"}>Recently Added</p>
            </NavLink>
            <div className={navOpen? "verticalLine":"openVerticalLine"}/>
        </nav>
    );
}

export default Navbar;
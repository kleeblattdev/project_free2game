/* library import */
import {useState} from "react"
import { NavLink,Link } from "react-router-dom"

/* file import */
import Logo from "../../image/logo.svg"

/* SCSS import */
import "./Navbar.scss"

const Navbar = () => {
    const [navOpen, setNavOpen]=useState(true)

    const handleToggle=(prev)=>{
        setNavOpen(prev => !prev)
    }

    return ( 
        <>
        <Link to="/" className={`${navOpen? "logo":"logoNav"}`}><img src={Logo} alt="FreeToGame logo" /></Link>
        <nav className={`navbar ${navOpen? " ":"showNavbar"}`}>
            <div className={`burger ${navOpen? "":"burgerClose"}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <section>
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
                <div className={`verticalLine ${navOpen? "":"openVerticalLine"}`}/>
            </section>
        </nav>
        </>
    );
}

export default Navbar;
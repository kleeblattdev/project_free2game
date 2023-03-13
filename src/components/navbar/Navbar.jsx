/* components import */
import NavButton from "./NavButton"
import { useParams } from "react-router-dom";

/* SCSS import */
import "./Navbar.scss"

const Navbar = (props) => {
    function openNav() {
        document.querySelector("nav").style.width = "200px";
        document.querySelector("header").style.marginLeft = "200px";
        document.querySelector(".menuButton").style.display = "none";
        document.querySelector(".closeBtn").style.display = "block";
        document.querySelector(".verticalLine").style.left = "200px";
    }
        function closeNav() {
        document.querySelector("nav").style.width = "70px";
        document.querySelector("header").style.marginLeft = "0";
        document.querySelector(".menuButton").style.display = "block";
        document.querySelector(".closeBtn").style.display = "none";
        document.querySelector(".verticalLine").style.left = "70px";
    }

        return ( 
            <nav className="navBar">
                <div id="menuContainer">
                    <div className="menuButton" onClick={openNav}></div>
                    <div className="closeBtn" onClick={closeNav}></div>
                </div>
                <NavButton link="/" icon="home" text="Home" classname="active"/>
                <NavButton link="/allgames" icon="games" text="All Games"/>
                <NavButton link="/recentlyadded" icon="recent" text="Recently Added"/>
                <div className="verticalLine"/>
            </nav>
        );

    }


export default Navbar;
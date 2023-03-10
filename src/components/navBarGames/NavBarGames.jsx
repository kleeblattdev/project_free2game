/* components import */
import NavButtonGame from "./NavButtonGames";
import { useParams } from "react-router-dom";

/* SCSS import */
import "./NavBarGames.scss"

const NavBarGames = () => {
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
            <nav className="navBarGames">
                <div id="menuContainer">
                    <div className="menuButton" onClick={openNav}></div>
                    <div className="closeBtn" onClick={closeNav}></div>
                </div>
                <NavButtonGame link="/" icon="home" text="Home" />
                <NavButtonGame link="/allgames" icon="games" text="All Games" classname="active"/>
                <NavButtonGame link="/recentlyadded" icon="recent" text="Recently Added"/>
                <div className="verticalLine"/>
            </nav>
        );

    }


export default NavBarGames;
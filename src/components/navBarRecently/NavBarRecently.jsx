/* components import */
import NavButtonRecently from "./NavButtonRecently"
import { useParams } from "react-router-dom";

/* SCSS import */
import "./NavBarRecently.scss"

const NavBarRecently = () => {
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
            <nav className="navBarRecently">
                <div id="menuContainer">
                    <div className="menuButton" onClick={openNav}></div>
                    <div className="closeBtn" onClick={closeNav}></div>
                </div>
                <NavButtonRecently link="/" icon="home" text="Home" classname="active"/>
                <NavButtonRecently link="/allgames" icon="games" text="All Games"/>
                <NavButtonRecently link="/recentlyadded" icon="recent" text="Recently Added"/>
                <div className="verticalLine"/>
            </nav>
        );

    }


export default NavBarRecently;
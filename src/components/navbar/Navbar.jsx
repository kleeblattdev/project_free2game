/* components import */
import NavButton from "./NavButton"

/* SCSS import */
import "./Navbar.scss"

const Navbar = () => {
    function openNav() {
        document.querySelector("nav").style.width = "200px";
        document.querySelector("header").style.marginLeft = "200px";
        document.querySelector(".hamburgerButton").style.display = "none";
        document.querySelector(".closeBtn").style.display = "block";
        document.querySelector(".verticalLine").style.left = "200px";
    }
        function closeNav() {
        document.querySelector("nav").style.width = "70px";
        document.querySelector("header").style.marginLeft = "0";
        document.querySelector(".hamburgerButton").style.display = "block";
        document.querySelector(".closeBtn").style.display = "none";
        document.querySelector(".verticalLine").style.left = "70px";
    }
    console.log(document.querySelectorAll(".navButton"))
    
    return ( 
        <nav className="navBar">
            <div className="hamburgerButton" onClick={openNav}></div>
            <div className="closeBtn" onClick={closeNav}></div>
            <NavButton link="/" icon="home" text="Home"/>
            <NavButton link="/allgames" icon="games" text="All Games"/>
            <NavButton link="/recentlyadded" icon="recent" text="Recently Added"/>
            <div className="verticalLine"/>
        </nav>
    );
}

export default Navbar;
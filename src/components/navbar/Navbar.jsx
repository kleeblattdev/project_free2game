//components import
import HamburgerButton from "./HamburgerButton"
import NavButton from "./NavButton"

const Navbar = () => {
    return ( 
        <nav className="navBar">
            <HamburgerButton/>
            <NavButton/>
            <NavButton/>
            <NavButton/>
        </nav>
    );
}

export default Navbar;
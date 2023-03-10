
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import Recentlylist from "../components/recentlylist/Recentlylist"
import NavBarRecently from "../components/navBarRecently/NavBarRecently";
/* image import */
import heroImg from "../image/HeroImg_recently.png"


const RecentlyAdded = () => {

    return ( 
        <main>
            <NavBarRecently />
            <HeroSection img={heroImg} text="Recently Added"/>
            <Recentlylist/>
        </main>
    );
}

export default RecentlyAdded;
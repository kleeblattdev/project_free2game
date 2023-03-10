
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import Recentlylist from "../components/recentlylist/Recentlylist"
import Navbar from "../components/navbar/Navbar"
/* image import */
import heroImg from "../image/HeroImg_recently.png"


const RecentlyAdded = () => {

    return ( 
        <main>
            <Navbar/>
            <HeroSection img={heroImg} text="Recently Added"/>
            <Recentlylist/>
        </main>
    );
}

export default RecentlyAdded;
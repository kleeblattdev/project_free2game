
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import Recentlylist from "../components/recentlylist/Recentlylist"

/* image import */
import heroImg from "../image/HeroImg_recently.png"


const RecentlyAdded = () => {

    return ( 
        <main>
            <HeroSection img={heroImg} text="Recently Added"/>
            <Recentlylist/>
        </main>
    );
}

export default RecentlyAdded;
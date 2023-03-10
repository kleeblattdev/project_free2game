
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import Recentlylist from "../components/recentlylist/Recentlylist"


const RecentlyAdded = () => {

    return ( 
        <main>
            <HeroSection img={heroImg}/>
            <Recentlylist/>
        </main>
    );
}

export default RecentlyAdded;
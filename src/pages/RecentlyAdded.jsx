
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import RecentlyList2 from "../components/recentlyList2/RecentlyList2"
import Navbar from "../components/navbar/Navbar"
/* image import */
import heroImg from "../image/HeroImg_recently.png"


const RecentlyAdded = () => {

    return ( 
        <main>
            <Navbar/>
            <HeroSection img={heroImg} text="Recently Added"/>
            <RecentlyList2/>
        </main>
    );
}

export default RecentlyAdded;
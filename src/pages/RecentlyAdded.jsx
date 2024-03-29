
/* component import */
import HeroSection from "../components/heroSection/HeroSection";
import RecentlyList2 from "../components/recentlyList2/RecentlyList2"
/* image import */
import heroImg from "../image/HeroImg_recently.png"


const RecentlyAdded = () => {

    return ( 
        <main>
            <HeroSection img={heroImg} text="Recently Added"/>
            <RecentlyList2/>
        </main>
    );
}

export default RecentlyAdded;
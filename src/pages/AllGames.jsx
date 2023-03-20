
/* components import */
import HeroSection from "../components/heroSection/HeroSection"
import DropDownFilter from "../components/dropDownFilter/DropDownFilter"


/* image import */
import heroImg from "../image/HeroSection_AllGames.png"

const AllGames = () => {
    return ( 
        <main>
            <HeroSection img={heroImg} text="All Games"/>
            <DropDownFilter/>
        </main>

    );
}

export default AllGames;
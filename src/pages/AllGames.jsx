
/* components import */
import HeroSection from "../components/heroSection/HeroSection"
import DropDownFilter from "../components/dropDownFilter/DropDownFilter"
import GamesList from "../components/gamesList/GamesList"


/* image import */
import heroImg from "../image/HeroSection_AllGames.png"
import NavBarGames from "../components/navBarGames/NavBarGames"

const AllGames = () => {
    return ( 
        <main>
            <NavBarGames />
            <HeroSection img={heroImg} text="All Games"/>
            <DropDownFilter/>
            <GamesList/>
        </main>

    );
}

export default AllGames;
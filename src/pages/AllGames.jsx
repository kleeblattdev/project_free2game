
/* components import */
import HeroSection from "../components/heroSection/HeroSection"
import DropDownFilter from "../components/dropDownFilter/DropDownFilter"
import GamesList from "../components/gamesList/GamesList"

/* image import */
import heroImg from "../image/HeroSection_AllGames.png"

const AllGames = () => {
    return ( 
        <main>
            <HeroSection img={heroImg} text="All Game"/>
            <DropDownFilter/>
            <GamesList/>
        </main>

    );
}

export default AllGames;
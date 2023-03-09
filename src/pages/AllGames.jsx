
/* components import */
import HeroSection from "../components/herosection/Herosection"
import DropDownFilter from "../components/dropDownFilter/DropDownFilter"
import GamesList from "../components/gamesList/GamesList"


const AllGames = () => {
    return ( 
        <main>
            <HeroSection/>
            <DropDownFilter/>
            <GamesList/>
        </main>

    );
}

export default AllGames;
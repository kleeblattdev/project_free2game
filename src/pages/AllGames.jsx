
/* components import */
import HeroSection from "../components/heroSection/HeroSection"
import DropDownFilter from "../components/dropDownFilter/DropDownFilter"
import GamesList from "../components/gamesList/GamesList"


const AllGames = () => {
    return ( 
        <main>
            <HeroSection img={heroImg}/>
            <DropDownFilter/>
            <GamesList/>
        </main>

    );
}

export default AllGames;
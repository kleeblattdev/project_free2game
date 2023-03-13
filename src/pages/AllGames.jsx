
/* components import */
import HeroSection from "../components/heroSection/HeroSection"
import GamesList from "../components/gamesList/GamesList"
import Navbar from "../components/navbar/Navbar"

/* image import */
import heroImg from "../image/HeroSection_AllGames.png"

const AllGames = () => {
    return ( 
        <main>
            <Navbar/>
            <HeroSection img={heroImg} text="All Games"/>

            <GamesList/>
        </main>

    );
}

export default AllGames;
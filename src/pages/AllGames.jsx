
/* components import */

import DropDownFilter from "../components/dropDownFilter/DropDownFilter"
import GamesList from "../components/gamesList/GamesList"


const AllGames = () => {
    return ( 
        <main>

            <DropDownFilter/>
            <GamesList/>
        </main>

    );
}

export default AllGames;
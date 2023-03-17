/* library import */
import { useState, } from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"

const GamesList = () => {

    const [games, setGames] = useState([])
    const [searchTerm, setSearchTerm] = useState()
    const [handleToggle, setHandleToggle]=useState(false)
    
    function searchGame(event){
        setSearchTerm(event.target.value)
        if (event.target.value == ""){
            setHandleToggle(false)
        }else{
            setHandleToggle(true)
        }

        fetch("https://www.freetogame.com/api/games")
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }

    return (
        <>
            <input type="search" name="search" id="search" onChange={searchGame}/>
            <section className={`${handleToggle? "gamesList":"hideGamesList"}`}>
                    {games && games.map((games) => {
                        if (games.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return (<GameItemNoDescription
                                key={uuidv4()}
                                title={games.title}
                                img={games.thumbnail}
                                id={games.id}
                                genre={games.genre}
                            />)
                        } 
                    }
                    )
                }
        </section>
        </>
    );
}

export default GamesList;
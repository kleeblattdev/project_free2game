/* library import */
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"

const GamesList = () => {

    const [games, setGames] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    let [gameSearch, setGameSearch] = useState(false)
    
    function searchGame(event){
        setSearchTerm(event.target.value)
        setGameSearch(true)

        fetch("https://www.freetogame.com/api/games")
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
            
    }

    const gamesAllSearch = [...games]


    return (
        <>
            <input type="search" name="search" id="search" onChange={searchGame}/>
            <section className="gamesList">

                {gameSearch === true?

                    (gamesAllSearch && gamesAllSearch.map((games) => {
                        console.log(gamesAllSearch)
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
                    ))
                    : false
                }
        </section>
        </>
    );
}

export default GamesList;
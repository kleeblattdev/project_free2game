/* library import */
import {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItem from "../gameItem/GameItem"

const GamesList = () => {

    const [games, setGames]=useState([])
    useEffect(() =>{
        fetch("https://www.freetogame.com/api/games")
        .then(respone => respone.json())
        .then(data =>{
            setGames(data)
        })
    },[])

    console.log(games)

    return ( 
        <section className="gamesList">
            
            {games && games.map((games) =>{
                return ( <GameItem
                    key ={uuidv4()}
                    title ={games.title}
                    img ={games.thumbnail}
                    id ={games.id}
                    genre ={games.genre}
                    />
                )
            })
            }

        </section>
    );
}

export default GamesList;
/* library import */
import {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"

const GamesList = () => {

    const [games, setGames]=useState([])

    useEffect(() =>{
        fetch("https://www.freetogame.com/api/games")
        .then(respone => respone.json())
        .then(data =>{
            setGames(data)
        })
    },[])

    const [searchTerm, setSearchTerm] = useState("")
    
    function searchGame(event){
        setSearchTerm(event.target.value)
    }


    return ( 
        <>
        <input type="search" name="search" id="search" onChange={searchGame}/>
        <section className="gamesList">
            {games && games.map((games) =>{
                if(searchTerm){
                    if(games.title.includes(searchTerm)){
                        return ( <GameItemNoDescription
                            key ={uuidv4()}
                            title ={games.title}
                            img ={games.thumbnail}
                            id ={games.id}
                            genre ={games.genre}
                            />)
                    }
                }else return <GameItemNoDescription
                key ={uuidv4()}
                title ={games.title}
                img ={games.thumbnail}
                id ={games.id}
                genre ={games.genre}
                />
            })}
        </section>
        </>
    );
}

export default GamesList;
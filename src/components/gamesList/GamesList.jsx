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

    const [searchTerm, setSearchTerm] = useState("")
    
    function searchGame(event){
        setSearchTerm(event.target.value)
        console.log(searchTerm)
    }

    let gameSearch = true;

    return ( 
        <>
        <input type="search" name="search" id="search" onChange={searchGame}/>
        <section className="gamesList">
            {games && games.map((games) =>{
                if(searchTerm){
                    if(games.title.includes(searchTerm)){
                        return ( <GameItem
                            key ={uuidv4()}
                            title ={games.title}
                            img ={games.thumbnail}
                            id ={games.id}
                            genre ={games.genre}
                            />)
                    }else{
                        gameSearch =false;
                    }
                }else return <GameItem
                key ={uuidv4()}
                title ={games.title}
                img ={games.thumbnail}
                id ={games.id}
                genre ={games.genre}
                />
            })}
            {!gameSearch && (
				<h5>This Game does not exist.</h5>
			)}
        </section>
        </>
    );
}

export default GamesList;
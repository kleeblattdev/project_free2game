/* library import */
import {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItem from "../gameItem/GameItem"
import DropDownFilter from "../dropDownFilter/DropDownFilter"

//data import
import platformData from "../data/PlatformData"
import genreData from "../data/GenreData"
import sortByData from "../data/SortByData"

const GamesList = () => {

    const [platform, setPlatform] = useState([])
    const [genre, setGenre] = useState([])
    const [sortBy, setSortBy] = useState([])
    const [response, setResponse] = useState(0)

    
    const [games, setGames]=useState([])

useEffect(() =>{
        if(platform !== undefined && genre !== undefined && sortBy !== undefined){

            fetch(`https://www.freetogame.com/api/games`)
            .then(respone => respone.json())
            .then(data =>{
                setGames(data)
            })
        }else if (platform !== undefined) {
            
            fetch(`https://www.freetogame.com/api/games?platform=${platform[0]}`)
            .then(respone => respone.json())
            .then(data =>{
                setGames(data)
            })
        }


    },[platform])

    const [searchTerm, setSearchTerm] = useState("")
    
    function searchGame(event){
        setSearchTerm(event.target.value)
    }

    return ( 
        <>
        <input type="search" name="search" id="search" onChange={searchGame}/>
        <section className="DropDownFilter">
            <DropDownFilter title="Plattform" data={platformData} setState={setPlatform} state={platform}/>
            <DropDownFilter title="Genre/Tag" data={genreData} setState={setGenre} state={genre}/>
            <DropDownFilter title="Sort by" data={sortByData} setState={setSortBy} state={sortBy}/>
        </section>
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
                    }
                }
                else return <GameItem
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
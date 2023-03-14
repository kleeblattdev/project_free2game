/* library import */
import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

/* SCSS import */
import "./GamesList.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"
import DropDownFilter from "../dropDownFilter/DropDownFilter"

const GamesList = () => {

    const [games, setGames] = useState([])

    const [searchTerm, setSearchTerm] = useState("")
    
    function searchGame(event){

        setSearchTerm(event.target.value)

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games")
            .then(response => response.json())
            .then(data => {
                setGames(data)
            })
    }, [])

    const [searchTerm, setSearchTerm] = useState("")
    let [gameSearch, setGameSearch] = useState(0)


    function searchGame(event) {
        setSearchTerm(event.target.value)
        setGameSearch(true)
        .then(respone => respone.json())
        .then(data =>{
            setGames(data)
        })
        
    }


    const [getPageErweitern, setPageErweitern] = useState(1)
    useEffect(() => {
        const mehrGames = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                setPageErweitern(getPageErweitern + 1);
            }
        };
        window.addEventListener("scroll", mehrGames);
        return () => { window.removeEventListener("scroll", mehrGames) }
    }, [getPageErweitern])

    /*  const gamesAllSearch = [...games]
     const gamesMax10 = [...games]
     const gamesMax10St = gamesMax10.slice(0, getPageErweitern * 10)
     console.log(gamesMax10St) */



    /************************************************************************************************
     * 
     *                Filter
     * 
     *************************************************************************************************/

    console.log("FILTER")
    function handelCheckbox(e) { console.log(e.target.checked) }


    const [getCheckedValue, setCheckedValue] = useState("")
    const [getCheckedValue2, setCheckedValue2] = useState("")
    const [getCheckedValue3, setCheckedValue3] = useState("")
    const [getCheckedValuePlatform, setCheckedValuePlatform] = useState("")

    console.log(getCheckedValue)

    const [getGamesFetchFilter, setGamesFetchFilter] = useState([{}])
    useEffect(() => {
        fetch(`https://www.freetogame.com/api/filter?tag=${getCheckedValue}.${getCheckedValue2}.${getCheckedValue3}&platform=${getCheckedValuePlatform}`)
            .then(response => response.json())
            .then(data => {
                setGamesFetchFilter(data)
            })
    },[getCheckedValue,getCheckedValue2,getCheckedValue3,getCheckedValuePlatform])

    console.log("getGamesFetchFilter")
    console.log(getGamesFetchFilter)

    const gamesAllSearch = [...games]
    let gamesMax10 = [...games]
    if (getGamesFetchFilter.length > 1) {
        gamesMax10 = getGamesFetchFilter
    }
    else { gamesMax10 = [...games] }
    const gamesMax10St = gamesMax10.slice(0, getPageErweitern * 10)
    console.log(gamesMax10St)



    return (
        <>
            <input type="search" name="search" id="search" onChange={searchGame} />




            <h2>Genre</h2>

            <label htmlFor="strategy">strategy</label>
            <input onClick={(e) => setCheckedValue(e.target.checked ? e.target.value : "")} type="checkbox" name="strategy" id="strategy" value="strategy" />
            <label htmlFor="shooter">shooter</label>
            <input onClick={(e) => setCheckedValue2(e.target.checked ? e.target.value : "")} type="checkbox" name="shooter" id="shooter" value="shooter" />
            <label htmlFor="mmorpg">mmorpg</label>
            <input onClick={(e) => setCheckedValue3(e.target.checked ? e.target.value : "")} type="checkbox" name="mmorpg" id="mmorpg" value="mmorpg" />


            <h2>Platform</h2>
            <label htmlFor="pc">pc</label>
            <input onClick={(e) => setCheckedValuePlatform(e.target.checked ? e.target.value : "all")} type="checkbox" name="pc" id="pc" value="pc" />





            <section className="gamesList">

                {gameSearch === true

                    ?

                    (gamesAllSearch && gamesAllSearch.map((games) => {
                        console.log("suche")
                        if (games.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return (<GameItemNoDescription
                                key={uuidv4()}
                                title={games.title}
                                img={games.thumbnail}
                                id={games.id}
                                genre={games.genre}
                            />)
                        } /* else {
                            
                        } */
                    }
                    ))
                    :
                    (gamesMax10St && gamesMax10St.map((games) => {
                        console.log("max10St")
                        return <GameItemNoDescription
                            key={uuidv4()}
                            title={games.title}
                            img={games.thumbnail}
                            id={games.id}
                            genre={games.genre}
                        />
                    }))

                }

            </section>
                }
            })}
        </section>
        </>
    );
}

export default GamesList;
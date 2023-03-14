import { useState,useEffect } from "react";
import { v4 } from "uuid";
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription";

import "./DropDownFilter.scss"

const DropDownFilter = () => {

        const [expandPlatform,setExpandPlatform] = useState(false)
        const [expandGenre,setExpandGenre] = useState(false)
        const [expandSort,setExpandSort] = useState(false)
        
        /* default values for all games render */
        const [platform,setPlatform] = useState("all")
        const [sortBy,setSortBy] = useState("release-date")
        const [genre,setGenre] = useState({
            value:"",
            checked:false
        })

        const [gameList,setGameList] = useState([])


        const platformObject = [
            {name: "All Platforms",value:"all"},
            {name: "Windows(PC)" ,value:"pc"},
            {name: "browser" ,value:"browser"}
        ]

        const genreArray =[
        "mmorpg",
        "shooter",
        "strategy",
        "moba",
        "racing",
        "sports",
        "social",
        "sandbox",
        "open-world",
        "survival",
        "pvp",
        "pve",
        "pixel",
        "voxel",
        "zombie", 
        "turn-based", 
        "first-person",
        "third-Person",
        "top-down",
        "tank",
        "space",
        "sailing",
        "side-scroller",
        "superhero",
        "permadeath",
        "card",
        "battle-royale",
        "mmo",
        "mmofps",
        "mmotps",
        "3d",
        "2d",
        "anime",
        "fantasy",
        "sci-fi",
        "fighting",
        "action-rpg",
        "action",
        "military",
        "martial-arts",
        "flight",
        "low-spec",
        "tower-defense",
        "horror",
        "mmorts",

]
        const sortByArray = [
            "release-date",
            "popularity",
            "alphabetical",
            "relevance"]


            let apiLink = genre.checked ? `https://www.freetogame.com/api/games?platform=${platform}&category=${genre.value}&sort-by=${sortBy}`
                                        : `https://www.freetogame.com/api/games?platform=${platform}&sort-by=${sortBy}`

            /* console.log(apiLink) */

            useEffect(() => {
                fetch(`${apiLink}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    data&&setGameList(data)
                    
                })
            },[apiLink])


    return ( 

        <>
        <div className="dropDownFilter">
            <div className="dropDownContainer">
                <div onClick={() => setExpandPlatform(!expandPlatform)} className="listTitle">PLATFORM</div>     
            {expandPlatform && platformObject.map((item,index) => {
                
                
                return(
                    
                    <div key={v4()} className="filterItem">
                        <input onChange={() => setPlatform(item.value)} type="radio" value={item.value}  name={index}/>
                        <p>{item.name}</p>
                    </div>

                )
            })}
            </div>
            <div className="filterContainer">
            <div onClick={() => setExpandGenre(!expandGenre)} className="listTitle">GENRE/TAG</div>
            {expandGenre && genreArray.map((item,index) => {
                
                

                return(
                    
                    <div key={v4()} className="filterItem">
                        <input onChange={() => setGenre({value:item,checked:true})}  type="checkbox" value={item}  name={index}/>
                        <p>{item}</p>
                    </div>

                )
            })}
            </div>
            <div>
                <div onClick={() => setExpandSort(!expandSort)} className="listTitle">SORT BY</div>
            {expandSort && sortByArray.map((item,index) => {
                
                
                
                return(
                    
                    <div key={v4()} className="filterItem">
                        <input onChange={() => setSortBy(item)} type="radio" value={item} name={index} />
                        <p>{item}</p>
                    </div>

                )
            })}
            </div>
        </div>
        <section className="gameListFilter">
            {gameList?.map((item) => {
                console.log(item)
                return(
                    <GameItemNoDescription 
                    img={item.thumbnail}
                    title={item.title}
                    platform={item.platform}
                    id={(item.id).toString()}
                    genre={item.genre}
                    key={v4()}
                    />
                )
            })}
        </section>
        
        </>
     );
}
 
export default DropDownFilter
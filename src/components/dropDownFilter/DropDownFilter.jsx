import { useState } from "react";
import { v4 } from "uuid";

import "./DropDownFilter.scss"

const DropDownFilter = () => {

        const [expandPlatform,setExpandPlatform] = useState(false)
        const [expandGenre,setExpandGenre] = useState(false)
        const [expandSort,setExpandSort] = useState(false)
        
        const [platform,setPlatform] = useState()

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
        const sortByArray = [" release-date","popularity","alphabetical","relevance"]

    return ( 
        <div className="DropDownFilter">
            <div>
            <button onClick={() => setExpandPlatform(!expandPlatform)} className="listTitle">PLATFORM</button>     
            {expandPlatform && platformObject.map((item) => {
                
                console.log(item)
                
                return(
                    
                    <div key={v4()} className="filterItem">
                        <input  type="checkbox" value={item.value} />
                        <p>{item.name}</p>
                    </div>

                )
            })}
            </div>
            <div>
            <button onClick={() => setExpandGenre(!expandGenre)} className="listTitle">GENRE/TAG</button>
            {expandGenre && genreArray.map((item) => {
                
                console.log(item)
                
                return(
                    
                    <div key={v4()} className="filterItem">
                        <input  type="checkbox" value={item} />
                        <p>{item}</p>
                    </div>

                )
            })}
            </div>
            <div>
            <button onClick={() => setExpandSort(!expandSort)} className="listTitle">SORT BY</button>
            {expandSort && sortByArray.map((item) => {
                
                console.log(item)
                
                return(
                    
                    <div key={v4()} className="filterItem">
                        <input  type="checkbox" value={item} />
                        <p>{item}</p>
                    </div>

                )
            })}
            </div>
        </div>
     );
}
 
export default DropDownFilter
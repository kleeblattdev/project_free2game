/* library import */
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

/* SCSS import */
import "./Recentlylist.scss"

/* component import */
import GameItem from "../gameItem/GameItem"


const RecentlyList = () => {

    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
        .then(res => res.json())
        .then(data => {
            /* console.log(data) */
            setRecentData(data.slice(0,limiter))
        })
    },[limiter])



    return ( 
        <section className="recentlyList">

        <p>Recently Added</p>
        <section className="recentlyListContainer">
            {recentData?.map((item) => {
                /* console.log(item.genre) */
                    return(
                        <GameItem 
                        img={item.thumbnail}
                        title={item.title}
                        description={item.short_description}
                        platform={item.platform}
                        id={item.id}
                        genre={item.genre}
                        key={uuidv4()}
                        />
                    )
                    
                })
            
            }
        </section>

            <button onClick={() => setLimiter(limiter + 4)}>SHOW MORE</button>
            
        </section>
    );
}

export default RecentlyList;
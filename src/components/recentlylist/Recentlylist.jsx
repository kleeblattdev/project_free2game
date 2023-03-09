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
            console.log(data)
            setRecentData(data.slice(0,limiter))
            
        })
    },[limiter])



    return ( 
        <main className="recentlyList">

        <p>Recently Added</p>
        <section className="recentlyListContainer">
            {recentData?.map((item) => {
                /* console.log(item) */
                    return(
                        <GameItem 
                        img={item.thumbnail}
                        title={item.title}
                        description={item.short_description}
                        platform={item.platform}
                        id={item.id}
                        key={uuidv4()}
                        />
                    )
                    
                })
            
            }
        </section>

            <button onClick={() => setLimiter(limiter + 4)}>SHOW MORE</button>
            
        </main>
    );
}

export default RecentlyList;
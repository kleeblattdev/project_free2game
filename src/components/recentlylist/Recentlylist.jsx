import { useState,useEffect } from "react";
import GameItem from "../gameItem/GameItem"
import { v4 as uuidv4 } from 'uuid';
import "./Recentlylist.scss"


const RecentlyList = () => {

    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date`)
        .then(res => res.json())
        .then(data => {
            
            setRecentData(data.slice(0,limiter))
            
        })
    },[limiter])



    return ( 
        <main className="recentlyList">

        <p>Recently Added</p>
        <section>
            {recentData?.map((item) => {
                console.log(item)
                    return(
                        <GameItem 
                        img={item.thumbnail}
                        title={item.title}
                        description={item.short_description}
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
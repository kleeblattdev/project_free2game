import { useState,useEffect } from "react";
import GameItem from "../gameItem/GameItem"
import { v4 as uuidv4 } from 'uuid';

const RecentlyList = () => {

    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date`)
        .then(res => res.json())
        .then(data => {
            
            setRecentData(data.slice(0,limiter))
            
        })
    },[])



    return ( 
        <main className="recentlyList">

            <h1>recentlylist</h1>

            {recentData?.map((item) => {
                console.log(item)
                    return(
                        <GameItem 
                        img={item.thumbnail}
                        title={item.title}
                        description={item.short_description}
                        key={uuidv4()}
                        />
                    )
                    
                })
            
            
            }

            
            
        </main>
    );
}

export default RecentlyList;
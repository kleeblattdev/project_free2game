import { useState,useEffect } from "react";
import GameItem from "../gameItem/GameItem"


const RecentlyList = () => {

    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(5)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date`)
        .then(res => res.json())
        .then(data => {
            /* console.log(data) */
            setRecentData(data)
            
        })
    },[])



    return ( 
        <main className="recentlyList">

            <h1>recentlylist</h1>

            {
            

                recentData?.map((item) => {
                console.log(item)
    
                    return(
        
                        <GameItem />
                    )
                    
                })
            
            
            }

            
            
        </main>
    );
}

export default RecentlyList;
/* library import */
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

/* component import */
import GameItem from "../gameItem/GameItem";

const TopGamesBrowser = () => {
    
    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&platform=all`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecentData(data.slice(0,limiter))
        })
    },[])
    
    return ( 
        <section className="topGamesBrowser">

            <h3>Top 4 recent Games for Browser</h3>
            <div className="recentBrowserGameContainer">
                {recentData?.map((item) => {
                    return(
                    <GameItem 
                    img={item.thumbnail}
                    title={item.title}
                    platform={item.platform}
                    id={item.id}
                    key={uuidv4()}
                    />)
                })}

            </div>


        </section>
     );
}
 
export default TopGamesBrowser;
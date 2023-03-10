/* library import */
import { useState,useEffect } from "react";
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription";
import { v4 as uuidv4 } from 'uuid';
import "./TopGamesBrowser.scss";

const TopGamesBrowser = () => {
    
    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&platform=browser`)
        .then(res => res.json())
        .then(data => {
            /* console.log(data) */
            setRecentData(data.slice(0,limiter))
        })
    },[limiter])
    
    
    return ( 
            
        <section className="topGamesBrowser">

            <p>Top recent Browser Games</p>
            <div className="recentBrowserGameContainer">
                {recentData?.map((item) => {
                    /* console.log((item.id).toString()) */
                    return(
                    <GameItemNoDescription
                    img={item.thumbnail}
                    title={item.title}
                    platform={item.platform}
                    id={(item.id).toString()}
                    genre={item.genre}
                    key={uuidv4()}
                    />)
                })}

            </div>

            <button onClick={() => setLimiter(limiter + 4)}>SHOW MORE</button>

        </section>
     );
}
 
export default TopGamesBrowser;
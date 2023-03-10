import { useState, useEffect } from "react";
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription";
import { v4 as uuidv4 } from 'uuid';


const TopGamesPC = () => {
    
    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&platform=pc`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRecentData(data.slice(0,limiter))
        })
    },[])
    
    return ( 
        <section className="topGamesPc">
            <h1>Top PC Games List</h1>

            {recentData?.map((item) => {
                return(
                    <GameItemNoDescription 
                    img={item.thumbnail}
                    title={item.title}
                    platform={item.platform}
                    id={(item.id).toString()}
                    genre={item.genre}
                    key={uuidv4()}
                    />
                )
            })}

        </section> 
    );
}

export default TopGamesPC;
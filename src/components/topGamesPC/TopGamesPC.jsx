import { useState, useEffect } from "react";
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription";
import { v4 as uuidv4 } from 'uuid';
import "./TopGamesPC.scss"

const TopGamesPC = () => {
    
    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&platform=pc`)
        .then(res => res.json())
        .then(data => {
            
            setRecentData(data.slice(0,limiter))
        })
    },[])
    
    return ( 
        <section className="topGamesPc">
            {/* <h1>Top PC Games List</h1> */}

            {recentData?.map((item) => {
                console.log(item.thumbnail)
                return(
                    <section className="topGamesPcContainer">
                        <div className="firstGame">
                            <img src={item.thumbnail} alt="" />
                        </div>
                        <div className="secondGame"></div>
                        <div className="thirstGame"></div>
                        <div className="fourthtGame"></div>
                    </section>
                )
            })}

        </section> 
    );
}

export default TopGamesPC;
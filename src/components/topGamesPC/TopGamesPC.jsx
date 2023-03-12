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
            console.log(data[0]?.thumbnail)
        })
    },[])
    return ( 
        <section className="topGamesPc">

            <div className="firstGame">
                <img src={recentData[0]?.thumbnail} alt="" />
            </div>
            
            <div className="secondGame">
                <img src={recentData[1]?.thumbnail} alt="" />
            </div>
            
            <div className="thirdGame">
                <img src={recentData[2]?.thumbnail} alt="" />
            </div>
            
            <div className="fourthGame">
                <img src={recentData[3]?.thumbnail} alt="" />
            </div>
            
            

        </section> 
    );
}

export default TopGamesPC;
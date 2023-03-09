import { useState,useEffect } from "react";
import GameItem from "../gameItem/GameItem";

const TopGamesBrowser = () => {
    
    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    },[])
    
    return ( 
        <section className="topGamesBrowser">

            <h1>Top 4 Games for Browser in March 2023</h1>


        </section>
     );
}
 
export default TopGamesBrowser;
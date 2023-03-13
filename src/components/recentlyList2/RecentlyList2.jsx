/* library import */
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

/* SCSS import */
import "../recentlylist/Recentlylist.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"


const RecentlyList = () => {

    const [recentData, setRecentData] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
        .then(res => res.json())
        .then(data => {
            setRecentData(data)
        })
    },[])



    return ( 
        <section className="recentlyList">
            
        <section className="recentlyListContainer">
            {recentData?.map((item) => {
                /* console.log(item.genre) */
                    return(
                        <GameItemNoDescription 
                        img={item.thumbnail}
                        title={item.title}
                        platform={item.platform}
                        id={item.id}
                        genre={item.genre}
                        key={uuidv4()}
                        />
                    )
                    
                })
            
            }
        </section>
            
        </section>
    );
}

export default RecentlyList;
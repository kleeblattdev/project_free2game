/* library import */
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

/* SCSS import */
import "../recentlylist/Recentlylist.scss"

/* component import */
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription"


const RecentlyList = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?&sort-by=release-date?&platform=all`)
        .then(res => res.json())
        .then(data => {
            setGames(data)
            console.log(data)
        })
    },[])

    const [getPageErweitern, setPageErweitern] = useState(1)
    useEffect(() => {
        const mehrGames = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
                setPageErweitern(getPageErweitern + 1);
            }
        };
        window.addEventListener("scroll", mehrGames);
        return () => { window.removeEventListener("scroll", mehrGames) }
    }, [getPageErweitern])

    const gamesMax10 = [...games]
    const gamesMax10St = gamesMax10.slice(0, getPageErweitern * 10)

    return ( 
        <section className="recentlyList">
            
        <section className="recentlyListContainer">
            {gamesMax10St?.map((item) => {
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
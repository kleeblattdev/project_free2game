import { useState, useEffect } from "react";
import GameItemNoDescription from "../gameItemNoDescription/GameItemNoDescription";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import "./TopGamesPC.scss"
import windowsLogo from "../../image/windows_Logo.png"

const TopGamesPC = () => {
    
    const [recentData, setRecentData] = useState([])
    const [limiter,setLimiter] = useState(4)

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/games?platform=browser&sort-by=release-date&platform=pc`)
        .then(res => res.json())
        .then(data => {
            
            setRecentData(data.slice(0,limiter))
            console.log(data[0].id)
        })
    },[])
    return ( 
        <section className="topGamesPc">

            <div className="firstGame">
                <p className="number1">1</p>
                <div className="title1">
                <p>{recentData[0]?.title}</p>
                <Link to={`/detailview/${recentData[0]?.id}`} className="button">READ MORE</Link>
                    <div>
                        <img src={windowsLogo} alt="windows" />
                        <p>{recentData[1]?.genre}</p>
                    </div>
                </div>
                <img src={recentData[0]?.thumbnail} alt="" />
            </div>
            
            <div className="secondGame">
                <img src={recentData[1]?.thumbnail} alt="" />
                    <p className="number">2</p>
                <div className="description">
                <p>{recentData[1]?.title}</p>
                <Link to={`/detailview/${recentData[1]?.id}`} className="button">READ MORE</Link>
                <div className="logoSection">
                    <img src={windowsLogo} alt="windows" />
                    <p>{recentData[1]?.genre}</p>
                </div>
                </div>
            </div>
            
            <div className="thirdGame">
                <img src={recentData[2]?.thumbnail} alt="" />
                <p className="number">3</p>
                <div className="description">
                <p>{recentData[2]?.title}</p>
                <Link to={`/detailview/${recentData[2]?.id}`} className="button">READ MORE</Link>
                <div className="logoSection">
                    <img src={windowsLogo} alt="windows" />
                    <p>{recentData[2]?.genre}</p>
                </div>
                </div>
            </div>
            
            <div className="fourthGame">
                <img src={recentData[3]?.thumbnail} alt="" />
                <p className="number">4</p>
                <div className="description">
                <p>{recentData[3]?.title}</p>
                <Link to={`/detailview/${recentData[3]?.id}`} className="button">READ MORE</Link>
                <div className="logoSection">
                    <img src={windowsLogo} alt="windows" />
                    <p>{recentData[3]?.genre}</p>
                </div>
                </div>
            </div>
            
            

        </section> 
    );
}

export default TopGamesPC;
/* library import */
import { Link } from "react-router-dom"

/* image import */
import windowsLogo from "../../image/windows_Logo.png"
import browserLogo from "../../image/browser_Logo.png"

/* SCSS import */
import "./GameItem.scss"


const GameItem = (props) => {

    return ( 
        <section className="gameItem">
            
            <img className="gameImg" src={props.img} alt={props.title}/>

            <article className="gameCard">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <Link className="readMoreLink" to={`/detailview/${props.id}`}>Read More</Link>
                <div className="borderLine"></div>
            </article>
            <section className="platformGenreSection">
                
        {/* sets img src to platform logo */}
        <img className="platformLogo" src={props.platform === "PC (Windows)" ? windowsLogo : browserLogo} alt="" />
        <p>{props.genre}</p>
        </section>
        </section>
    );
}

export default GameItem;
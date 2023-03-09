import "./GameItem.scss"
import { Link } from "react-router-dom";
import windowsLogo from "../../image/Logos_Plattform/windows_logo.png"
import browserLogo from "../../image/Logos_Plattform/browser_Logo.png"


const GameItem = (props) => {
    return ( 
        <section className="gameItem">
            
            <img src={props.img} alt="Game Img" />

            <article className="gameCard">

            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link className="readMoreLink" to={`/detailview/${props.id}`}>Read More</Link>
            {/* <p> </p>   */}          {/* p Tag zum Stylen vom Strich */}
            </article>

       <article>

        </article>
        <section className="platformGenreSection">
        {/* sets img src to platform logo */}
        {/* logos unscharf  */}
        <img className="platformLogo" src={props.platform === "PC (Windows)" ? windowsLogo : browserLogo} alt="" />

        </section>
        </section>
     );
}
 
export default GameItem;
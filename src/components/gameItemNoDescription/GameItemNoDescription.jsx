import "./GameItemNoDescription.scss"
import { Link } from "react-router-dom";
import windowsLogo from "../../image/windows_Logo.png"
import browserLogo from "../../image/browser_Logo.png"
import "./GameItemNoDescription.scss"

const GameItemNoDescription = (props) => {
    return ( 

        <section className="gameItemNoDescription">
            
        <img src={props.img} alt={props.title}/>

        <article className="gameCard">

        <h3>{props.title}</h3>
        <Link className="readMoreLink" to={`/detailview/${props.id}`}>Read More</Link>
        </article>

       <article>

        </article>
        <section className="platformGenreSection">
        {/* sets img src to platform logo */}
        <img className="platformLogo" src={props.platform === "PC (Windows)" ? windowsLogo : browserLogo} alt="" />

        </section>
        </section>
     );
}
 
export default GameItemNoDescription;
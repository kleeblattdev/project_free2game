import "./GameItem.scss"
import { Link } from "react-router-dom";


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
        <p>{props.platform}</p>
        <img src={props.platform === "PC (Windows)" ? console.log("image PC") : console.log("image andere platform")} alt="" />
        </section>
     );
}
 
export default GameItem;
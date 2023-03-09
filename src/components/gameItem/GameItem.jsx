import "./GameItem.scss"
import { Link } from "react-router-dom";


const GameItem = (props) => {
    return ( 
        <section className="gameItem">
            

            <article className="gameCard">
            <img src={props.img} alt="Game Img" />

            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Link className="readMoreLink" to={`/detailview/${props.id}`}>Read More</Link>
            <p> </p>            {/* p Tag zum Stylen vom Strich */}
            </article>

{/*             <article>
                <button>Win</button>
                <button>1. </button>
                <button>2.</button>
            </article>
 */}
        </section>
     );
}
 
export default GameItem;
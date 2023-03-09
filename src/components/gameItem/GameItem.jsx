import "./GameItem.scss"



const GameItem = (props) => {
    return ( 
        <section className="gameItem">
            

            <article>
            <img src={props.img} alt="Game Img" />
            </article>

            <article>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button>Link To Show More</button>
            <p> </p>            {/* p Tag zum Stylen vom Strich */}
            </article>

            <article>
                <button>Win</button>
                <button>1. </button>
                <button>2.</button>
            </article>

        </section>
     );
}
 
export default GameItem;
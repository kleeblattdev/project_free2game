import "./GameItem.scss"



const GameItem = () => {
    return ( 
        <section className="gameItem">
            <h1>GameItem - Schablone</h1>

            <article>
            <img src="" alt="Game Img" />
            </article>

            <article>
            <h1>Titel</h1>
            <p>Description</p>
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
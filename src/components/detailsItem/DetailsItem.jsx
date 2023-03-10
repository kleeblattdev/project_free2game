import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./DetailsItem.scss"




const DetailsItem = (props) => {
    return (
        <main className="detailsItem">

            <article>
                {/* // !   "" weg bei src s überall auch unten */}
                <img src={props.imgEins} alt="header Bild von ${props.title}" />
                <h1>{props.title}</h1>
            </article>

            <article>
                <img src={props.thumbnail} alt="SBild links" />
                <h2>{props.platform}</h2>
                <p>{props.genre}</p>

                <a href={props.url} target={"_blank"}>
                   {/*  <button> play Now </button> */}
                    <Button 
                        buttonName={`play Now`}
                        >  </Button>
                </a>
            </article>

            <article>
                <h2>About</h2>
                <p>{props.description}</p>
            </article>

            <article>
                <img src={props.imgZwei} alt="" />
            </article>

            <article>
                <img src={props.imgDrei} alt="" />
            </article>

            <article>
                <h2>Additional Information</h2>
                <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                <h3>Developer    </h3>
                <p>{props.developer}</p>
                <h3>Publisher   </h3>
                <p>{props.publisher}</p>
                <h3>Release Date    </h3>
                <p>{props.release_date}</p>
            </article>

            <article>
                <h2>Minimum System Requirements (Windows) </h2>
                <h3>OS</h3>
                <p>{props.os}</p>
                <h3>Memory</h3>
                <p>{props.memory}</p>
                <h3>Storage</h3>
                <p>{props.storage}</p>
                <h3>Processor</h3>
                <p>{props.processor}</p>
                <h3>Graphics</h3>
                <p>{props.graphics}</p>
                <h3>Additional Notes</h3>
                <p>Specifications may change during development</p>
            </article>


        </main>
    );
}

export default DetailsItem;
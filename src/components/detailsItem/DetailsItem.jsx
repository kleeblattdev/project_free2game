import { Link } from "react-router-dom";
import "./DetailsItem.scss"




const DetailsItem = (props) => {
    return (
        <main className="detailsItem">

            <article>
                {/* // !   "" weg bei src s überall auch unten */}
                <img src="{props.screenshots[0].image}" alt="header Bild von ${props.title}" />
                <h1>{props.title}</h1>
            </article>

            <article>
                <img src="{props.thumbnail}" alt="SBild links" />
                <h2>{props.platform}</h2>
                <p>{props.genre}</p>

                <a href="{props.freetogame_profile_url}" target={"_blank"}>
                    <button> play Now </button>
                </a>
            </article>

            <article>
                <h2>About</h2>
                <p>{props.description}</p>
            </article>

            <article>
                <img src="{props.screenshots[1].image}" alt="" />
            </article>

            <article>
                <img src="{props.screenshots[2].image}" alt="" />
            </article>

            <article>
                <h2>Additional Information</h2>
                <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                <h3>Developer    </h3> <p>{props.developer}</p>
                <h3>Publisher   </h3> <p>{props.publisher}</p>
                <h3>Release Date    </h3> <p>{props.release_date}</p>
            </article>

            <article>
                <h2>Minimum System Requirements (Windows) </h2>
                <h3>OS</h3>
                <p>props.minimum_system_requirements.os</p>
                <h3>Memory</h3>
                <p>props.minimum_system_requirements.memory</p>
                <h3>Storage</h3>
                <p>props.minimum_system_requirements.storage</p>
                <h3>Processor</h3>
                <p>props.minimum_system_requirements-processor</p>
                <h3>Graphics</h3>
                <p>props.minimum_system_requirements.graphics</p>
                <h3>Additional Notes</h3>
                <p>props.Specifications may change during development</p>
            </article>


        </main>
    );
}

export default DetailsItem;
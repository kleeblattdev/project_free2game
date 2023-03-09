import { Link } from "react-router-dom";
import "./DetailsItem.scss"




const DetailsItem = (props) => {
    return (
        <main className="detailsItem">

            <img src="screenshots[0].image" alt="   header bild" />   {/* // ! ins erste objekt rein ? */}
            <h1>title</h1>

            <article>
                <img src="thumbnail" alt="   bild links " />
                <h2>platform</h2>
                <p>genre</p>

                <a href="https://www.freetogame.com/call-of-duty-warzone" target={"_blank"}>
                    <button> play Now </button>
                </a>
            </article>

            <article>
                <h2>About</h2>
                <p>description</p>
            </article>

            <article>
            <img src="screenshots[0].image" alt="" />    {/* // ! ins zweite objekt rein ? */}
            </article>

            <article>
            <img src="screenshots[0].image" alt="" />    {/* // ! ins dritte objekt rein ? */}
            </article>

            <article>
                <h2>Additional Information</h2>
                <p>Please note this free-to-play game may or may not offer optional in-game purchases.</p>
                <h3>Developer    </h3> <p>developer</p>
                <h3>Publisher   </h3> <p>publisher</p>
                <h3>Release Date    </h3> <p>release_date</p>
            </article>

            <article>
                <h2>Minimum System Requirements (Windows) </h2>
                <h3>OS</h3>
                <p>minimum_system_requirements.os</p>
                <h3>Memory</h3>
                <p>minimum_system_requirements.memory</p>
                <h3>Storage</h3>
                <p>minimum_system_requirements.storage</p>
                <h3>Processor</h3>
                <p>minimum_system_requirements-processor</p>
                <h3>Graphics</h3>
                <p>minimum_system_requirements.graphics</p>
                <h3>Additional Notes</h3>
                <p>Specifications may change during development</p>
            </article>


        </main>
    );
}

export default DetailsItem;
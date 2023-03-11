import Button from "../button/Button";
import "./DetailsItem.scss"
import HeroSection from "../heroSection/HeroSection";


function scrollToTop() {
    window.scrollTo(0, 0);
}

const DetailsItem = (props) => {
    const imgEins = props.imgEins
    const title = props.title

    scrollToTop()
    
    return (
        <main className="detailsItem">


            <HeroSection img={imgEins} text={title} > </HeroSection>

{/*             <section>
                <img src={props.imgEins} alt="header Bild von ${props.title}" />
                <h1>{props.title}</h1>
            </section> */}


            <section>
                <article>
                    <img src={props.thumbnail} alt="SBild links" />
                    <h2>Platform: {props.platform}</h2>
                    <p>{props.genre}</p>

                    <a href={props.url} target={"_blank"}>
                        <Button
                            text={`play Now`}
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
                    <span>
                        <h3   >Developer   </h3>
                        <p>{props.developer}</p>
                    </span>
                    <span>
                        <h3>Publisher   </h3>
                        <p>{props.publisher}</p>
                    </span>
                    <span>
                        <h3>Release Date    </h3>
                        <p>{props.release_date}</p>
                    </span>
                </article>

                <article style={{ display: props.os  ? "flex" : "none"}} >
                    <span>
                        <h2>Minimum System Requirements ({props.platform}) </h2>
                    </span>

                    <span>
                        <h3>OS</h3>
                        <p>{props.os}</p>
                        <h3>Memory</h3>
                        <p>{props.memory}</p>
                        <h3>Storage</h3>
                        <p>{props.storage}</p>
                    </span>

                    <span >
                        <h3  >Processor</h3>
                        <p>{props.processor}</p>
                        <h3>Graphics</h3>
                        <p>{props.graphics}</p>
                        <h3>Additional Notes</h3>
                        <p>Specifications may change during development</p>
                    </span>
                </article>
            </section>

        </main>
    );
}

export default DetailsItem;
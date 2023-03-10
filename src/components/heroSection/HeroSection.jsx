/* SCSS import */
import "./HeroSection.scss"


const HeroSection = ({img,text}) => {
    return ( 
        <section className="heroSection">
            <img className="heroSectionImg" src={img} alt={text} />
            <h1>{text}</h1>
        </section>
    );
}
export default HeroSection
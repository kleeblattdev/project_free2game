/* SCSS import */
import "./HeroSection.scss"


const HeroSection = ({img}) => {
    console.log(img)
    return ( 
        <section className="heroSection">
            <img className="heroSectionImg" src={img} alt="" />
            <h1>Herosection Titelbild</h1>

        </section>
    );
}
export default HeroSection
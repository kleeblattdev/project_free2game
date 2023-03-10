/* component import */
import RecentlyList from "../components/recentlylist/Recentlylist"
import TopGamesBrowser from "../components/topGamesBrowser/TopGamesBrowser"
import HeroSection from "../components/heroSection/HeroSection"
import Navbar from "../components/navbar/Navbar"

/* image import */
import heroImg from "../image/HeroSection_img.png"

const Home = () => {
    

    return ( 
        <main>
            <Navbar page={"Home"}/>
            <HeroSection img={heroImg} text="Home"/>
            <RecentlyList />
            <TopGamesBrowser />
        </main>
    )}


export default Home;
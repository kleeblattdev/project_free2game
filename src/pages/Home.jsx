import RecentlyList from "../components/recentlylist/Recentlylist";
import TopGamesBrowser from "../components/topGamesBrowser/TopGamesBrowser";
import HeroSection from "../components/herosection/Herosection";
import heroImg from "../image/HeroSection_img.png"

const Home = () => {
    return ( 
        <div>
            <h1>Home</h1>
            <HeroSection 
            img={heroImg}
            />
            <RecentlyList />
            <TopGamesBrowser />
        </div>
    )}


export default Home;
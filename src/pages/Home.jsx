/* component import */
import RecentlyList from "../components/recentlylist/Recentlylist";
import TopGamesBrowser from "../components/topGamesBrowser/TopGamesBrowser";
import HeroSection from "../components/herosection/HeroSection";
import heroImg from "../image/HeroSection_img.png"

const Home = () => {
    return ( 
        <main>
            <h1>Home</h1>
            <HeroSection 
            img={heroImg}
            />
            <RecentlyList />
            <TopGamesBrowser />
        </main>
    )}


export default Home;
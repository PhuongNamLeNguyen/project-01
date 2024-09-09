import Hero from "./HeroSection/Hero";
import Statistics from "./StatisticsSection/Statistics";
import PopularFood from "./PopularFoodSection/PopularFood";
import OpeningTimes from "./OpeningTimesSection/OpeningTimes";
import IntroMenu from "./IntroMenuSection/IntroMenu";
import RestaurantView from "./RestaurantViewSection/RestaurantView";
import Booking from "./BookingSection/Booking";

import "./Home.scss";

function Home() {
    return (
        <div className="home" id="home">
            <Hero></Hero>
            <Statistics></Statistics>
            <PopularFood></PopularFood>
            <OpeningTimes></OpeningTimes>
            <IntroMenu></IntroMenu>
            <RestaurantView></RestaurantView>
            <Booking></Booking>
            <p>Our Daily offers</p>
            <p>Slide</p>
            <p>Chef</p>
            <p>Blog</p>
            <p>Newsletter</p>
        </div>
    );
}

export default Home;

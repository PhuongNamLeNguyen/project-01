import Hero from "./HeroSection/Hero";
import Statistics from "./StatisticsSection/Statistics";
import PopularFood from "./PopularFoodSection/PopularFood";
import OpeningTimes from "./OpeningTimesSection/OpeningTimes";
import IntroMenu from "./IntroMenuSection/IntroMenu";
import RestaurantView from "./RestaurantViewSection/RestaurantView";
import Booking from "./BookingSection/Booking";
import DailyOffers from "./DailyOffersSection/DailyOffers";
import Banner from "./BannerSection/Banner";
import Chefs from "./ChefsSection/Chefs";
import Blog from "./BlogSection/Blog";
import Newsletter from "./NewsletterSection/Newsletter";

import "./Home.scss";

function Home() {
    return (
        <main className="home" id="home">
            <Hero></Hero>
            <Statistics></Statistics>
            <PopularFood></PopularFood>
            <OpeningTimes></OpeningTimes>
            <IntroMenu></IntroMenu>
            <RestaurantView></RestaurantView>
            <Booking></Booking>
            <DailyOffers></DailyOffers>
            <Banner></Banner>
            <Chefs></Chefs>
            <Blog></Blog>
            <Newsletter></Newsletter>
        </main>
    );
}

export default Home;

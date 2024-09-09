import "./Banner.scss";

import bannerIcon1 from "../../../assets/img/i-banner-01.svg";
import bannerIcon2 from "../../../assets/img/i-banner-02.svg";
import bannerIcon3 from "../../../assets/img/i-banner-03.svg";
import bannerIcon4 from "../../../assets/img/i-banner-04.svg";

const bannerItems = [
    { image: bannerIcon1, name: "Super Taste" },
    { image: bannerIcon2, name: "Self Services" },
    { image: bannerIcon3, name: "Best Food" },
    { image: bannerIcon4, name: "Fast Delivery" },
];

const Banner = () => {
    return (
        <section className="banner">
            <div className="container">
                <ul className="banner__list">
                    {bannerItems.map((item) => {
                        return (
                            <li className="banner__item">
                                <div className="item__img">
                                    <img src={item.image} alt=""></img>
                                </div>
                                <span className="item__name">{item.name}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Banner;

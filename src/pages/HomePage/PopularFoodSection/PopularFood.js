import "./PopularFood.scss";

import { Link } from "react-router-dom";

import Buttons from "../../../components/Buttons/Buttons";

import popularFood1 from "../../../assets/img/popular-01.png";
import popularFood2 from "../../../assets/img/popular-02.png";
import popularFood3 from "../../../assets/img/popular-03.png";
import yellowStarIcon from "../../../assets/img/i-yellow-star.svg";
import grayStarIcon from "../../../assets/img/i-gray-star.svg";
import arrowRight from "../../../assets/img/i-arrow-right.svg";

const popularFood = [
    {
        name: "Schezwan Noodles",
        price: "$49",
        desc: "Fresh toasted sourdough bread with olive oil and pomegranate.",
        image: popularFood1,
        rating: 5,
    },
    {
        name: "Schezwan Noodles",
        price: "$49",
        desc: "Fresh toasted sourdough bread with olive oil and pomegranate.",
        image: popularFood2,
        rating: 4,
    },
    {
        name: "Schezwan Noodles",
        price: "$49",
        desc: "Fresh toasted sourdough bread with olive oil and pomegranate.",
        image: popularFood3,
        rating: 4,
    },
];

const RatingStars = ({ rating }) => {
    return (
        <>
            {Array.from({ length: 5 }).map((_, index) => {
                return <img src={index < rating ? yellowStarIcon : grayStarIcon} alt=""></img>;
            })}
        </>
    );
};

const PopularFood = () => {
    return (
        <section className="popularFood">
            <div className="container">
                <h2 className="popularFood__heading">Most popular food</h2>
                <p className="popularFood__desc">
                    A list of most popular Bangladeshi food including mains, drinks, and deserts you must try while in Bangladesh, for an authentic experience.
                    Check now!
                </p>
                <ul className="popularFood__list">
                    {popularFood.map((food) => {
                        return (
                            <li className="popularFood__item">
                                <div className="image">
                                    <img src={food.image} alt=""></img>
                                </div>
                                <div className="details">
                                    <div className="row">
                                        <span className="name">{food.name}</span>
                                        <span className="price">{food.price}</span>
                                    </div>
                                    <p className="desc">{food.desc}</p>
                                    <div className="row">
                                        <Buttons.LinkButton path="/booking" linkName="Order now"></Buttons.LinkButton>
                                        <div className="rating">
                                            <RatingStars rating={food.rating}></RatingStars>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Link to="/menu" className="popularFood__btn">
                    <Buttons.LinkButton path="/menu" linkName="Explore All Food"></Buttons.LinkButton>
                    <img src={arrowRight} alt=""></img>
                </Link>
            </div>
        </section>
    );
};

export default PopularFood;

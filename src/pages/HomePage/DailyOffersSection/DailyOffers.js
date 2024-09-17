import "./DailyOffers.scss";

import dailyMenu1 from "../../../assets/img/dailyoffers-02.avif";
import dailyMenu2 from "../../../assets/img/dailyoffers-03.avif";
import dailyMenu3 from "../../../assets/img/dailyoffers-04.avif";

import Buttons from "../../../components/Buttons/Buttons";

const dailyFoods = [
    {
        name: "Spicy Club",
        price: "$42",
        desc: "Pork, chicken and vegetable fried rolls served with lettuce wraps",
        image: dailyMenu1,
    },
    {
        name: "Almond baked Brie",
        price: "$42",
        desc: "Pork, chicken and vegetable fried rolls served with lettuce wraps",
        image: dailyMenu2,
    },
    {
        name: "Tuscan Flatbread",
        price: "$42",
        desc: "Pork, chicken and vegetable fried rolls served with lettuce wraps",
        image: dailyMenu3,
    },
];

const DailyOffers = () => {
    return (
        <section className="dailyOffers">
            <div className="container">
                <h2 className="dailyOffers__heading">Our Daily Offers</h2>
                <div className="dailyOffers__main">
                    <div className="dailyOffers__event">
                        <div className="content">
                            <h3 className="content__heading">
                                Lunch Time <strong>30%</strong> off
                            </h3>
                            <p className="content__desc">
                                We love food, lots of different and food, just
                                like you.
                            </p>
                            <Buttons.LinkButton
                                path="/booking"
                                linkName="Order now"
                            ></Buttons.LinkButton>
                        </div>
                    </div>
                    {dailyFoods.map((food, index) => {
                        return (
                            <div key={index} className="dailyOffers__food">
                                <div className="food__img">
                                    <img src={food.image} alt=""></img>
                                </div>
                                <div className="food__info">
                                    <div className="row">
                                        <h4 className="food__name">
                                            {food.name}
                                        </h4>
                                        <span className="food__price">
                                            {food.price}
                                        </span>
                                    </div>
                                    <p className="food__desc">{food.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DailyOffers;

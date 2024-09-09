import "./Chefs.scss";

import chef1 from "../../../assets/img/chef-01.png";
import chef2 from "../../../assets/img/chef-02.png";
import chef3 from "../../../assets/img/chef-03.png";
import decor1 from "../../../assets/img/i-decor-01.svg";

const chefs = [
    { name: "Jubed Ahmed", image: chef1, job: "Chef" },
    { name: "Delwar hussen", image: chef2, job: "Assisted chef" },
    { name: "Tajul Islam", image: chef3, job: "Chef" },
];

const Chefs = () => {
    return (
        <section className="chefs">
            <div className="container">
                <h2 className="chefs__heading">They will cook for you</h2>
                <p className="chefs__desc">
                    Our Diners can enjoy cooking for themselves, or visiting a curated selection of restaurants in the area. They will cook for you and make
                    sure you have a home away from home at all times.
                </p>
                <ul className="chefs__list">
                    {chefs.map((chef) => {
                        return (
                            <li className="chef__details">
                                <div className="chef__img">
                                    <img src={chef.image} alt=""></img>
                                </div>
                                <span className="chef__name">{chef.name}</span>
                                <span className="chef__job">{chef.job}</span>
                            </li>
                        );
                    })}
                </ul>
                <div className="chefs__decor">
                    <img src={decor1} alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default Chefs;

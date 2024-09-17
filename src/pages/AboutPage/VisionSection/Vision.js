import "./Vision.scss";

import visionIcon1 from "../../../assets/img/i-hamburger.svg";
import visionIcon2 from "../../../assets/img/i-delivery.svg";
import visionIcon3 from "../../../assets/img/i-chef.svg";

const visionList = [
    {
        title: "Delicious Cuisine",
        icon: visionIcon1,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
    {
        title: "Fast Delivery",
        icon: visionIcon2,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
    {
        title: "Professional Chef",
        icon: visionIcon3,
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.",
    },
];

const Vision = () => {
    return (
        <section className="vision">
            <div className="container">
                <h2 className="vision__heading">Our Vision & Mission</h2>
                <p className="vision__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Erat aliquam amet, cursus tellus non consequat laoreet eget
                    ornare. Tellus vulputate tellus a, lobortis et nisl. Quisque
                    vulputate eget et, aliquet libero, porttitor luctus
                    placerat.{" "}
                </p>
                <div className="row">
                    <div className="vision__content">
                        <ul className="list">
                            {visionList.map((vision, index) => {
                                return (
                                    <li key={index} className="item">
                                        <div className="item__img">
                                            <img src={vision.icon} alt=""></img>
                                        </div>
                                        <div className="item__details">
                                            <h3 className="item__title">
                                                {vision.title}
                                            </h3>
                                            <p className="item__desc">
                                                {vision.desc}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="vision__img">
                        <img src="./img/vision-01.avif" alt=""></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;

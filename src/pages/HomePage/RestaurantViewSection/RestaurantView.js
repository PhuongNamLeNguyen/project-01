import "./RestaurantView.scss";

import viewImage1 from "../../../assets/img/view-01.avif";
import viewImage2 from "../../../assets/img/view-02.avif";
import viewImage3 from "../../../assets/img/view-03.avif";
import viewImage4 from "../../../assets/img/view-04.avif";
import viewImage5 from "../../../assets/img/view-05.avif";

const viewImages = [viewImage1, viewImage2, viewImage3, viewImage4, viewImage5];

const RestaurantView = () => {
    return (
        <section className="restaurantView">
            <div className="container">
                <h2 className="restaurantView__heading">Visit Our Restaurant</h2>
                <p className="restaurantView__desc">
                    Quality country-style menu selection, friendly and efficient service, combined with genuine value has kept Our Best serving families like
                    yours for over 28.
                </p>
                <ul className="restaurantView__gallery">
                    {viewImages.map((image, index) => {
                        return (
                            <li key={index} className="restaurantView__gallery-img">
                                <img src={image} alt=""></img>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default RestaurantView;

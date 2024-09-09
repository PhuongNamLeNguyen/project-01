import "./Newsletter.scss";

import arrowRight from "../../../assets/img/i-arrow-right.svg";

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="content">
                    <h2 className="newsletter__heading">Subscribe Newsletter & get letest news</h2>
                    <p className="newsletter__desc">Subscribe to our newsletter and receive 15% discount from your order.</p>
                </div>
                <form className="form">
                    <input type="email" name="email" placeholder="Enter your email address"></input>
                    <img className="" src={arrowRight} alt=""></img>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;

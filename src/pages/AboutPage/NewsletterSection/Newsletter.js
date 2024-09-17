import MailForm from "../../../components/MailForm/MailForm";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter__img">
                    <img src="./img/newsletter-01.avif" alt=""></img>
                </div>
                <div className="newsletter__content">
                    <h2 className="newsletter__heading">
                        Subscribe Newsletter & get letest news
                    </h2>
                    <p className="newsletter__desc">
                        Get insider access to news around the innovations,
                        unique cooking techniques, culinary concepts, insights,
                        and more
                    </p>
                    <MailForm />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;

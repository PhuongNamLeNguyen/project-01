import MailForm from "../../../components/MailForm/MailForm";
import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="content">
                    <h2 className="newsletter__heading">
                        Subscribe Newsletter & get letest news
                    </h2>
                    <p className="newsletter__desc">
                        Subscribe to our newsletter and receive 15% discount
                        from your order.
                    </p>
                </div>
                <MailForm />
            </div>
        </section>
    );
};

export default Newsletter;

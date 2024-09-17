import arrowRight from "../../assets/img/i-arrow-right.svg";

import "./MailForm.scss";

const MailForm = () => {
    return (
        <form className="form">
            <input
                type="email"
                name="email"
                placeholder="Enter your email address"
            ></input>
            <img className="" src={arrowRight} alt=""></img>
        </form>
    );
};

export default MailForm;

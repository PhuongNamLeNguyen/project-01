import "./Booking.scss";

import Buttons from "../../../components/Buttons/Buttons";

import useCountBooking from "../../../hooks/useCountBooking";

import arrowUp from "../../../assets/img/i-arrow-up.svg";
import arrowDown from "../../../assets/img/i-arrow-down.svg";

const Booking = () => {
    const [guestIncrease, guestDecrease, guestCount, dateIncrease, dateDecrease, date, monthIncrease, monthDecrease, month, months] = useCountBooking();
    return (
        <section className="booking">
            <div className="container">
                <div className="booking__left">
                    <h2 className="booking__heading">Reserve ! Book Now</h2>
                    <div className="booking__container">
                        <div className="booking__box">
                            <span className="label">Date</span>
                            <span className="count">{date}</span>
                            <div className="buttons">
                                <img onClick={dateIncrease} className="buttons__up" src={arrowUp} alt=""></img>
                                <img onClick={dateDecrease} className="buttons__down" src={arrowDown} alt=""></img>
                            </div>
                        </div>
                        <div className="booking__box">
                            <span className="label">Month</span>
                            <span className="count">{months[month]}</span>
                            <div className="buttons">
                                <img onClick={monthIncrease} className="buttons__up" src={arrowUp} alt=""></img>
                                <img onClick={monthDecrease} className="buttons__down" src={arrowDown} alt=""></img>
                            </div>
                        </div>
                        <div className="booking__box">
                            <span className="label">Guests</span>
                            <span className="count">{guestCount}</span>
                            <div className="buttons">
                                <img onClick={guestIncrease} className="buttons__up" src={arrowUp} alt=""></img>
                                <img onClick={guestDecrease} className="buttons__down" src={arrowDown} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <Buttons.SecondaryButton path="booking" linkName="Book now"></Buttons.SecondaryButton>
                </div>
                <div className="booking__right">Left</div>
            </div>
        </section>
    );
};

export default Booking;

import "./Booking.scss";

import Buttons from "../../../components/Buttons/Buttons";

import useCountBooking from "../../../hooks/useCountBooking";

import arrowUp from "../../../assets/img/i-arrow-up.svg";
import arrowDown from "../../../assets/img/i-arrow-down.svg";
import bookingImage from "../../../assets/img/booking-demo-01.avif";
import decorIcon from "../../../assets/img/i-decor-02.svg";

const BookingBox = ({ label, count, increase, decrease }) => {
    return (
        <div className="booking__box">
            <span className="label">{label}</span>
            <span className="count">{count}</span>
            <div className="buttons">
                <img onClick={increase} className="buttons__up" src={arrowUp} alt=""></img>
                <img onClick={decrease} className="buttons__down" src={arrowDown} alt=""></img>
            </div>
        </div>
    );
};

const Booking = () => {
    const [guestIncrease, guestDecrease, guestCount, dateIncrease, dateDecrease, date, monthIncrease, monthDecrease, month, months] = useCountBooking();

    return (
        <section className="booking">
            <div className="container">
                <div className="booking__left">
                    <h2 className="booking__heading">Reserve ! Book Now</h2>
                    <div className="booking__container">
                        <BookingBox label="Date" count={date} increase={dateIncrease} decrease={dateDecrease}></BookingBox>
                        <BookingBox label="Month" count={months[month]} increase={monthIncrease} decrease={monthDecrease}></BookingBox>
                        <BookingBox label="Guests" count={guestCount} increase={guestIncrease} decrease={guestDecrease}></BookingBox>
                    </div>
                    <Buttons.SecondaryButton path="booking" linkName="Book now"></Buttons.SecondaryButton>
                </div>
                <div className="booking__right">
                    <img className="bgImage" src={bookingImage} alt=""></img>
                    <img className="decor" src={decorIcon} alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default Booking;

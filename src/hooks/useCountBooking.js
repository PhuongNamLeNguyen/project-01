import { useState } from "react";

// const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const useCountBooking = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [guestCount, setGuestCount] = useState(1);

    const guestIncrease = () => {
        if (guestCount < 10) {
            setGuestCount(guestCount + 1);
        }
    };

    const guestDecrease = () => {
        if (guestCount > 1) {
            setGuestCount(guestCount - 1);
        }
    };

    const [date, setDate] = useState(1);

    const dateIncrease = () => {
        if (currentMonth % 2 === 0 && date < 31) {
            setDate(date + 1);
        } else if (currentMonth % 2 !== 0 && date < 30) {
            setDate(date + 1);
        }
    };

    const dateDecrease = () => {
        if (date > 1) {
            setDate(date - 1);
        }
    };

    const [month, setMonth] = useState(0);

    const monthIncrease = () => {
        if (month < 11) {
            setMonth(month + 1);
        }
    };

    const monthDecrease = () => {
        if (month > 0) {
            setMonth(month - 1);
        }
    };

    return [guestIncrease, guestDecrease, guestCount, dateIncrease, dateDecrease, date, monthIncrease, monthDecrease, month, months];
};

export default useCountBooking;

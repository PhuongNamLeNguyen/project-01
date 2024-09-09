import { useState } from "react";

const useCountBooking = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const [date, setDate] = useState(1);
    const [month, setMonth] = useState(0);
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

    const dateIncrease = () => {
        const maxDateIndex = month;
        const maxDate = daysInMonth[maxDateIndex];
        if (date < maxDate) {
            setDate(date + 1);
        }
    };

    const dateDecrease = () => {
        if (date > 1) {
            setDate(date - 1);
        }
    };

    const monthIncrease = () => {
        if (month < 11) {
            setMonth(month + 1);
            setDate(1);
        }
    };

    const monthDecrease = () => {
        if (month > 0) {
            setMonth(month - 1);
            setDate(1);
        }
    };

    return [guestIncrease, guestDecrease, guestCount, dateIncrease, dateDecrease, date, monthIncrease, monthDecrease, month, months];
};

export default useCountBooking;

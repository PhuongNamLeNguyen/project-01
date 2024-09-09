import "./OpeningTimes.scss";

// import openingTimesImg from "../../../assets/img/openingtimes-01.png";

const openingTimes = [
    { day: "Mon", times: "17:00 to 23:00" },
    { day: "Tue", times: "19:00 to 24:00" },
    { day: "Wed", times: "19:00 to 24:00" },
    { day: "Thu", times: "19:00 to 24:00" },
    { day: "Fr", times: "16:00 to 23:00" },
    { day: "Sat/Sun", times: "20:00 to 04:00" },
];

const OpeningTimes = () => {
    return (
        <section className="openingTimes">
            <div className="container">
                <div className="openingTimes__left">
                    <span className="label">Find us here</span>
                    <span>Avenue Marina 34568 NY (U.S)</span>
                    <span>+0123 456 7890</span>
                    <span>hellouihut@gmail.com</span>
                </div>
                <div className="openingTimes__right">
                    <span className="label">Opening Times</span>
                    <ul className="list">
                        {openingTimes.map((opening, index) => {
                            return (
                                <li key={index} className="item">
                                    <span className="day">{opening.day}</span>
                                    <span className="times">{opening.times}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default OpeningTimes;

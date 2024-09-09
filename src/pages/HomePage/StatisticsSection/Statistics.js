import "./Statistics.scss";
// import StatisticsBg from "../../../assets/img/statistics-01.png";

const stats = [
    { label: "Number Restaurant", number: "06" },
    { label: "New Food Menu Dishes", number: 68 },
    { label: "Years of experience", number: 36 },
];

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="container">
                <ul className="statistics__list">
                    {stats.map((item, index) => {
                        return (
                            <li key={index} className="statistics__item">
                                <span>{item.number}</span>
                                <span>{item.label}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Statistics;

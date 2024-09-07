import { Link } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";

const CTA = () => {
    const [activeLink, setActiveLink] = useActiveLink();

    return (
        <div className="topBar__cta">
            <span>11:24 we’re open</span>
            <Link className={activeLink === "/booking" ? "active" : ""} to="/booking" onClick={() => setActiveLink("/booking")}>
                Table Reservation
            </Link>
        </div>
    );
};

export default CTA;

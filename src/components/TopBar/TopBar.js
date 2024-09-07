import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink";
import Navigation from "./Navigation/Navigation";
import "./TopBar.scss";
import logo from "../../../src/assets/img/logo.svg";
import menuIcon from "../../../src/assets/img/i-menu.svg";

function TopBar() {
    const [activeLink, setActiveLink] = useActiveLink();
    const getLinkClass = (path) => {
        return activeLink === path ? "nav__item-link active" : "nav__item-link";
    };
    // Menu button, List, Logo, Cta
    return (
        <div className="topBar">
            <div className="container">
                <div className="topBar__btn">
                    <img src={menuIcon} alt=""></img>
                </div>
                <Navigation></Navigation>
                <div className="topBar__logo">
                    <Link to="/">
                        <img src={logo} alt=""></img>
                    </Link>
                </div>
                <div className="topBar__cta">
                    <span>11:24 we’re open</span>
                    <Link className={getLinkClass("/booking")} to="/booking" onClick={() => setActiveLink("/booking")}>
                        Table Reservation
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TopBar;

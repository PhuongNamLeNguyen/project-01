import { Link } from "react-router-dom";

import logoIcon from "../../../src/assets/img/logo-icon.svg";
import logoName from "../../../src/assets/img/logo-name.svg";
import "./Logo.scss";

const Logo = () => {
    return (
        <div className="topBar__logo logo">
            <Link to="/" className="logo__link">
                <div className="logo__icon">
                    <img src={logoIcon} alt=""></img>
                </div>
                <div className="logo__name">
                    <img src={logoName} alt=""></img>
                </div>
            </Link>
        </div>
    );
};

export default Logo;

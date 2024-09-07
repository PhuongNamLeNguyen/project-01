import { Link } from "react-router-dom";

import "./Buttons.scss";

const LinkButton = ({ path, linkName }) => {
    return (
        <>
            <Link className="btn btn--link" to={path}>
                {linkName}
            </Link>
        </>
    );
};

const PrimaryButton = ({ path, linkName }) => {
    return (
        <>
            <Link className="btn btn--primary" to={path}>
                {linkName}
            </Link>
        </>
    );
};

const Buttons = { LinkButton, PrimaryButton };

export default Buttons;

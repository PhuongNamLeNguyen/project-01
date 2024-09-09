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

const SecondaryButton = ({ path, linkName }) => {
    return (
        <>
            <Link className="btn btn--secondary" to={path}>
                {linkName}
            </Link>
        </>
    );
};

const Buttons = { LinkButton, PrimaryButton, SecondaryButton };

export default Buttons;

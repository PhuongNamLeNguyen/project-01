import { Link } from "react-router-dom";
import useActiveLink from "../../hooks/useActiveLink";
import "./Navigation.scss";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", path: "/pages" },
    { name: "Contact", path: "/contact" },
];

const Navigation = ({ isMenuOpen, toggleMenu, closeMenu }) => {
    const [activeLink, setActiveLink] = useActiveLink();
    const getLinkClass = (path) => {
        return activeLink === path ? "nav__item-link active" : "nav__item-link";
    };
    return (
        <nav className={isMenuOpen ? "topBar__nav nav active" : "topBar__nav nav"} onClick={toggleMenu}>
            <ul className="nav__list">
                {links.map((item) => {
                    return (
                        <li className="nav__item">
                            <Link className={getLinkClass(item.path)} to={item.path} onClick={(() => setActiveLink(item.path), closeMenu)}>
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;

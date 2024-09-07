import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
// import Navigation from "../Navigation/Navigation";
import AppStore from "../../assets/img/download-appstore.svg";
import GgPlay from "../../assets/img/download-ggplay.svg";
import "./Footer.scss";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", path: "/pages" },
    { name: "Contact", path: "/contact" },
];

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <Logo></Logo>
                <nav className="footer__nav">
                    <span className="footer__nav-label">Useful Link</span>
                    <ul>
                        {links.map((item) => {
                            return (
                                <li>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="footer__contact">
                    <span className="footer__contact-label">Contact Info</span>
                    <ul>
                        <li>Silk St, Barbican, London EC2Y 8DS, UK</li>
                        <li>info@example.com</li>
                        <li>800-123-45-678</li>
                    </ul>
                </div>
                <div className="footer__social">
                    <span className="footer__social-label">Contact Info</span>
                    <ul>
                        <li>
                            <Link>Facebook</Link>
                        </li>
                        <li>
                            <Link>Instagram</Link>
                        </li>
                        <li>
                            <Link>Linkedin</Link>
                        </li>
                        <li>
                            <Link>Twitter</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__legal">
                    <span className="footer__legal-label">Legal</span>
                    <ul>
                        <li>Website by uihut.com</li>
                        <li>©2022. All Rights Reserved</li>
                    </ul>
                </div>
                <div className="footer__download">
                    <p>Download the WowWraps app today.</p>
                    <ul>
                        <li>
                            <Link>
                                <img src={AppStore} alt=""></img>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={GgPlay} alt=""></img>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
